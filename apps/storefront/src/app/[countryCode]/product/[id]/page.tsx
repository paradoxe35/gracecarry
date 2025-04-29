"use client";

import { use, useState } from "react";
import Image from "next/image";
import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl"; // Import useTranslations

// This would normally come from an API or database
const getProductById = (id: string) => {
  // Mock product data
  return {
    id: parseInt(id),
    name: "Silk Wrap Dress",
    price: 189.99,
    discount: 0,
    description:
      "Elegant silk wrap dress with a flattering silhouette. Perfect for both formal occasions and casual outings. Made from 100% premium silk with a smooth finish and comfortable fit.",
    details: [
      "Material: 100% Silk",
      "Wrap design with tie closure",
      "Flowy A-line silhouette",
      "Midi length",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy", "Emerald"],
    category: "Dresses",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop",
    ],
    reviews: {
      average: 4.8,
      count: 124,
    },
    inStock: true,
    isNew: true,
    relatedProducts: [2, 3, 4, 5],
  };
};

export default function ProductPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const t = useTranslations("ProductPage"); // Initialize useTranslations

  const product = getProductById(params.id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice =
    hasDiscount && product.discount
      ? product.price - product.price * (product.discount / 100)
      : product.price;

  return (
    <div className="g-container py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex text-sm">
          <li className="flex items-center">
            <LocalizedLink href="/" className="text-neutral-600 hover:text-primary">
              {t('breadcrumbs.home')}
            </LocalizedLink>
            <span className="mx-2 text-neutral-400">/</span>
          </li>
          <li className="flex items-center">
            <LocalizedLink
              href={`/category/${product.category.toLowerCase()}`}
              className="text-neutral-600 hover:text-primary"
            >
              {product.category} {/* Assuming category name is not translatable or comes translated */}
            </LocalizedLink>
            <span className="mx-2 text-neutral-400">/</span>
          </li>
          <li className="text-neutral-800 font-medium">{product.name}</li> {/* Assuming product name is not translatable or comes translated */}
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative aspect-square overflow-hidden rounded-md mb-4">
            <Image
              src={product.images[activeImage]}
              alt={product.name} // Alt text might need translation if product name isn't already translated
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
                  {t('badges.new')}
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
            {product.images.map((image, index) => (
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
                  src={image}
                  alt={t('imageAlt', { productName: product.name, index: index + 1 })}
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
          <h1 className="g-heading text-3xl mb-2">{product.name}</h1> {/* Assuming product name is not translatable or comes translated */}

          {/* Price */}
          <div className="flex items-center mb-4">
            {hasDiscount ? (
              <>
                <span className="text-2xl font-medium text-primary">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-neutral-500 line-through ml-3 text-lg">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-medium text-neutral-900">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Reviews */}
          <div className="flex items-center mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={
                    star <= Math.round(product.reviews.average)
                      ? "currentColor"
                      : "none"
                  }
                  stroke="currentColor"
                  className={`w-5 h-5 ${
                    star <= Math.round(product.reviews.average)
                      ? "text-yellow-400"
                      : "text-neutral-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={
                      star <= Math.round(product.reviews.average) ? 0 : 1.5
                    }
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-neutral-600">
              {product.reviews.average} {t('reviews.count', { count: product.reviews.count })}
            </span>
          </div>

          {/* Description */}
          <p className="text-neutral-700 mb-6">{product.description}</p> {/* Assuming description is not translatable or comes translated */}

          {/* Color selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-3">{t('options.colorLabel', { selectedColor: selectedColor || '' })}</h3>
            <div className="flex space-x-3">
              {product.colors.map((color) => {
                // Map color names to actual color values
                const colorMap: Record<string, string> = {
                  Black: "bg-black",
                  Navy: "bg-blue-900",
                  Burgundy: "bg-red-900",
                  Emerald: "bg-emerald-600",
                };

                return (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full ${colorMap[color]} ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-primary"
                        : ""
                    }`}
                    aria-label={t('options.selectColorAria', { color: color })}
                  />
                );
              })}
            </div>
          </div>

          {/* Size selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">{t('options.sizeLabel', { selectedSize: selectedSize || '' })}</h3>
              <LocalizedLink
                href="/size-guide"
                className="text-sm text-primary hover:underline"
              >
                {t('options.sizeGuideLink')}
              </LocalizedLink>
            </div>

            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[3rem] h-10 px-3 border rounded-md ${
                    selectedSize === size
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-neutral-300 text-neutral-800 hover:border-neutral-400"
                  }`}
                >
                  {size} {/* Assuming size is not translatable */}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-3">{t('options.quantityLabel')}</h3>
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
              {t('actions.addToCart')}
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
              {t('actions.addToWishlist')}
            </Button>
          </div>

          {/* Product details */}
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="font-medium mb-4">{t('details.title')}</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li> // Assuming details are not translatable or come translated
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
