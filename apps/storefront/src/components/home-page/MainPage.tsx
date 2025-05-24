import { StoreProduct, StoreProductCategory } from "@medusajs/types";
import CategorySection from "./CategorySection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import HeroSection from "./HeroSection";
import NewsLetterSection from "./NewsLetterSection";
import CollectionBannerSection from "./CollectionBannerSection";
import InstaFeeds from "./InstaFeeds";

export default function MainPage({
  categories,
  featuredProducts,
}: {
  categories: StoreProductCategory[];
  featuredProducts: { products: StoreProduct[]; count: number };
}) {
  return (
    <>
      {/* Hero section */}
      <HeroSection />
      {/* Category section */}
      <CategorySection categories={categories} />
      {/* Featured products section */}
      <FeaturedProductsSection featuredProducts={featuredProducts} />
      {/* Collection Banner Section */}
      <CollectionBannerSection />
      {/* Newsletter Section */}
      <NewsLetterSection />
      {/* Instagram feeds */}
      <InstaFeeds />
    </>
  );
}
