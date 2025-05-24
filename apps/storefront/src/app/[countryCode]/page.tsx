import LocalizedLink from "@/components/ui/LocalizedLink";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import MainPage from "@/components/home-page/MainPage";
import { listProducts } from "@/lib/data/products";
import { listCollections } from "@/lib/data/collections";
import { listCategories } from "@/lib/data/categories";

// Sample featured products data (will use keys now)
const featuredProductsData = [
  {
    id: 1,
    nameKey: "productSilkWrapDress",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    categoryKey: "categoryDresses",
  },
  {
    id: 2,
    nameKey: "productLeatherToteBag",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    categoryKey: "categoryAccessories",
  },
  {
    id: 3,
    nameKey: "productCashmereSweater",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    categoryKey: "categoryClothing",
  },
  {
    id: 4,
    nameKey: "productLeatherAnkleBoots",
    price: 219.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    categoryKey: "categoryFootwear",
  },
];

// Sample categories data (will use keys now)
const categoriesData = [
  {
    nameKey: "categoryClothing",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
    href: "/category/clothing",
  },
  {
    nameKey: "categoryFootwear",
    image:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop",
    href: "/category/footwear",
  },
  {
    nameKey: "categoryAccessories",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
    href: "/category/accessories",
  },
  {
    nameKey: "categoryBeauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
    href: "/category/beauty",
  },
];

export default async function Home(props: {params: Promise<{countryCode: string}>}) {
  const t = await getTranslations("HomePage");
  const tHeader = await getTranslations("Header"); // For category names
  const tFooter = await getTranslations("Footer"); // For newsletter

  const catList = await listCategories({
    limit: 4
  });

  const featuredProdList = await listProducts({
    pageParam: 0,
    queryParams: {
      limit: 4,
    },
    countryCode: (await props.params).countryCode,
  });

  const collectionList = await listCollections({
    limit: "1"
  });
  console.log(
    "featured products", featuredProdList, 
    "category list", catList, 
    "propos", await props.params,
    "collection", collectionList
  );
  // Map data with translations
  const categories = categoriesData.map(cat => ({
    ...cat,
    name: tHeader(cat.nameKey as any),
  }));

  const featuredProducts = featuredProductsData.map(prod => ({
    ...prod,
    name: t(prod.nameKey as any),
    category: t(prod.categoryKey as any) || tHeader(prod.categoryKey as any), // Check both namespaces
  }));


  return (
    <div>
      {/* Hero section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt={t("heroImageAlt")}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="g-container relative z-10 text-white">
          <div className="max-w-xl">
            <h1 className="g-heading text-4xl md:text-5xl lg:text-6xl mb-4">
              {t("heroHeading")}
            </h1>
            <p className="text-lg md:text-xl mb-8">
              {t("heroParagraph")}
            </p>
            <div className="flex flex-wrap gap-4">
              <LocalizedLink
                href="/category/new-arrivals"
                className="g-button-primary"
              >
                {tHeader("categoryNewArrivals")}
              </LocalizedLink>
              <LocalizedLink
                href="/collections"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-neutral-900 transition-colors duration-300 font-medium"
              >
                {t("heroExploreCollectionsButton")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-16 bg-neutral-100">
        <div className="g-container">
          <h2 className="g-heading text-3xl text-center mb-4">
            {t("categoriesHeading")}
          </h2>
          <p className="text-neutral-700 text-center mb-8">
            {t("categoriesParagraph")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <LocalizedLink
                key={category.name}
                href={category.href}
                className="group"
              >
                <div className="relative h-80 overflow-hidden rounded-md g-card">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-medium">
                      {category.name}
                    </h3>
                    <p className="text-white/80 group-hover:text-white mt-2 flex items-center">
                      {t("categoryShopNowLink")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
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
                    </p>
                  </div>
                </div>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products section */}
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
            {featuredProducts.map((product) => (
              <LocalizedLink
                key={product.id}
                href={`/product/${product.id}`}
                className="g-card group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <button className="bg-white rounded-full p-2 shadow-soft hover:shadow-medium transition-shadow" aria-label={t("featuredProductWishlistAriaLabel")}>
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
                    {product.category}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="text-primary hover:text-primary-dark" aria-label={t("featuredProductAddToCartAriaLabel")}>
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

      {/* Collection banner */}
      <section className="py-16 bg-neutral-100">
        <div className="g-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="g-heading text-3xl mb-4">
                {t("collectionBannerHeading")}
              </h2>
              <p className="text-neutral-700 mb-6">
                {t("collectionBannerParagraph")}
              </p>
              <LocalizedLink
                href="/collections/summer"
                className="g-button-primary inline-block"
              >
                {t("collectionBannerButton")}
              </LocalizedLink>
            </div>
            <div className="relative h-96 rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt={t("collectionBannerImageAlt")}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-primary text-white">
        <div className="g-container text-center">
          <h2 className="g-heading text-3xl mb-4">{t("newsletterHeading")}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            {tFooter("newsletterDescription")} {/* Reusing from Footer */}
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder={tFooter("newsletterPlaceholder")}
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-neutral-800"
                required
              />
              <button
                type="submit"
                className="bg-neutral-900 text-white px-6 py-3 rounded-r-md hover:bg-neutral-800 transition-colors"
              >
                {tFooter("newsletterButton")}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Instagram feed section */}
      <section className="py-16">
        <div className="g-container text-center">
          <h2 className="g-heading text-3xl mb-4">{t("instagramHeading")}</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
            {t("instagramHandle")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a
                key={item}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={`https://source.unsplash.com/random/300x300?fashion&sig=${item}`}
                  alt={t("instagramImageAlt")}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      

      <div style={{display: ""}}>
        <MainPage featuredProducts={featuredProdList.response} categories={catList} />
      </div>
    </div>
  );
}
