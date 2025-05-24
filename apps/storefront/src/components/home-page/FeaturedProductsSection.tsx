import { useTranslations } from "next-intl";
import LocalizedLink from "@/components/ui/LocalizedLink";
import Image from "next/image";
import { StoreProduct } from "@medusajs/types";
import { getSimplePrice } from "@/lib/util/simplifiedPrice";

const backupImg = "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop";

export default function FeaturedProductsSection({featuredProducts}: {featuredProducts: {products: StoreProduct[], count: number}}) {
  const t = useTranslations("HomePage");

  return (
    <section className="py-16">
      <div className="g-container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="g-heading text-3xl">{t("featuredProductsHeading")}</h2>
          <LocalizedLink
            href="/products"
            className="text-primary hover:text-primary-dark flex items-center"
          >
            {t("featuredProductsViewAllLink")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </LocalizedLink>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.products.map((product) => (
            <LocalizedLink
              key={product.id}
              href={`/productx/${product.id}`}
              className="g-card group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={
                    (product.images && product.images[0])?
                    product.images[0].url
                    :backupImg
                  }
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-10">
                  <button
                    className="bg-white rounded-full p-2 shadow-soft hover:shadow-medium transition-shadow"
                    aria-label={t("featuredProductWishlistAriaLabel")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-700 hover:text-primary"
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
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="text-sm text-neutral-600 mb-1">
                  {product.categories?.toString()}
                </div>
                <h3 className="font-medium text-lg mb-2">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-neutral-900">
                    {/* ${product.price.toFixed(2)} */getSimplePrice({product})?.priceDisplay??"-"}
                  </span>
                  <button
                    className="text-primary hover:text-primary-dark"
                    aria-label={t("featuredProductAddToCartAriaLabel")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
