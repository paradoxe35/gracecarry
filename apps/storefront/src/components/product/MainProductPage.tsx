"use client";

import { StoreProduct } from "@medusajs/types";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Button from "../ui/Button";
import LocalizedLink from "../ui/LocalizedLink";
import Image from "next/image";
import { getSimplePrice } from "@/lib/util/simplifiedPrice";
import ProductReviews from "./ProductReviews";
import ProductOptions from "./ProductOptions";

export default function MainProductPage({
  product,
}: {
  product: StoreProduct;
}) {
  const t = useTranslations("ProductPage"); // Initialize useTranslations
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const { images = [] } = product;
  const productPrice = getSimplePrice({product});

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const hasDiscount = product.discountable && product.discount > 0;
  const discountedPrice =
    hasDiscount && product.discount
      ? productPrice?.priceNumber - productPrice?.priceNumber * (product.discount / 100)
      : productPrice?.priceNumber;

  console.log("Product", product);
  return (
    <div className="g-container py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        {product.categories &&
          product.categories.map((category) => (
            <ol key={category.id} className="flex text-sm">
              <li className="flex items-center">
                <LocalizedLink
                  href="/"
                  className="text-neutral-600 hover:text-primary"
                >
                  {t("breadcrumbs.home")}
                </LocalizedLink>
                <span className="mx-2 text-neutral-400">/</span>
              </li>
              <li className="flex items-center">
                <LocalizedLink
                  href={`/category/${category.handle}`}
                  className="text-neutral-600 hover:text-primary"
                >
                  {category.name}{" "}
                  {/* Assuming category name is not translatable or comes translated */}
                </LocalizedLink>
                <span className="mx-2 text-neutral-400">/</span>
              </li>
                <li className="text-neutral-800 font-medium">
                    {product.title}{" "}</li>
                {/* Assuming product name is not translatable or comes translated */}
            </ol>
          ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-md mb-4">
            <Image
              src={product.images?.[activeImage].url??""}
              alt={product.title} // Alt text might need translation if product name isn't already translated
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
              className="rounded-md"
            />

            {/* Product badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {product.isNew && (
                <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                  {t("badges.new")}
                </span>
              )}
              {hasDiscount && (
                <span className="bg-error text-white text-xs font-medium px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>

          {/* Thumbnail gallery */}
          <div className="grid grid-cols-4 gap-4">
            {images?.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                  activeImage === index
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image.url??""}
                  alt={t("imageAlt", {
                    productName: product.title,
                    index: index + 1,
                  })}
                  fill
                  sizes="25vw"
                  style={{ objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="g-heading text-3xl mb-2">{product.title}</h1>{" "}
          {/* Assuming product name is not translatable or comes translated */}
          {/* Price */}
          <div className="flex items-center mb-4">
            {hasDiscount ? (
              <>
                <span className="text-2xl font-medium text-primary">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-neutral-500 line-through ml-3 text-lg">
                  {productPrice?.priceDisplay}
                </span>
              </>
            ) : (
              <span className="text-2xl font-medium text-neutral-900">
                {productPrice?.priceDisplay}
              </span>
            )}
          </div>
          {/* Reviews --will need add more options for reviews */}
          <ProductReviews />
          {/* Description */}
          <p className="text-neutral-700 mb-6">{product.description}</p>{" "}
          {/* Assuming description is not translatable or comes translated */}
          
          {/* Options selection */}
          <ProductOptions product={product} />
          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3">
              {t("options.quantityLabel")}
            </h3>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="w-10 h-10 border border-neutral-300 rounded-l-md flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                disabled={quantity <= 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="w-12 h-10 border-t border-b border-neutral-300 text-center focus:outline-none"
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="w-10 h-10 border border-neutral-300 rounded-r-md flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                disabled={quantity >= 10}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v12M6 12h12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Add to cart and wishlist */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary" fullWidth>
              {t("actions.addToCart")}
            </Button>
            <Button variant="outline" fullWidth>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {t("actions.addToWishlist")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
