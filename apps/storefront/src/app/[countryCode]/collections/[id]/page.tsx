"use client";

import { use } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useTranslations } from "next-intl"; // Import useTranslations

// Mock collections data (same as in collections page)
const collectionsData = [
  {
    id: "summer-2025",
    name: "Summer Collection 2025", // Needs translation
    description:
      "Discover our latest summer collection featuring lightweight fabrics, breathable designs, and vibrant colors perfect for the season.", // Needs translation
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "spring-essentials",
    name: "Spring Essentials", // Needs translation
    description:
      "Embrace the season with our curated selection of spring essentials, featuring floral prints, pastel hues, and versatile layers.", // Needs translation
    image:
      "https://images.unsplash.com/photo-1523381294911-8cd694c2b6ca?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "workwear-edit",
    name: "Workwear Edit", // Needs translation
    description:
      "Elevate your office style with our workwear edit, featuring tailored blazers, sophisticated dresses, and comfortable separates.", // Needs translation
    image:
      "https://images.unsplash.com/photo-1495384999718-16f652256402?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "athleisure-collection",
    name: "Athleisure Collection", // Needs translation
    description:
      "Stay comfortable and stylish with our athleisure collection, featuring performance fabrics, relaxed silhouettes, and versatile designs.", // Needs translation
    image:
      "https://images.unsplash.com/photo-1541643690-c7a9449e5b65?q=80&w=1000&auto=format&fit=crop",
  },
];

// Mock products data
const allProducts = [
  {
    id: 1,
    name: "Silk Wrap Dress", // Needs translation
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses",
    isNew: true,
  },
  {
    id: 2,
    name: "Leather Tote Bag", // Needs translation
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    discount: 15,
  },
  {
    id: 3,
    name: "Cashmere Sweater", // Needs translation
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: 4,
    name: "Leather Ankle Boots", // Needs translation
    price: 219.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    category: "Boots",
    isNew: true,
  },
  {
    id: 5,
    name: "Pleated Midi Skirt", // Needs translation
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: 6,
    name: "Gold Hoop Earrings", // Needs translation
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1630020085330-9a05a55441ca?q=80&w=1000&auto=format&fit=crop",
    category: "Jewelry",
    discount: 10,
  },
  {
    id: 7,
    name: "Satin Blouse", // Needs translation
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: 8,
    name: "Structured Blazer", // Needs translation
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
    isNew: true,
  },
];

const getCollectionById = (id: string) => {
  return collectionsData.find((collection) => collection.id === id);
};

const getProductsByCollection = (collectionId: string) => {
  // In a real application, this would fetch products associated with the collection ID from a database or API
  // For now, let's just return all products
  return allProducts;
};

export default function CollectionPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = useTranslations("CollectionsPage"); // Initialize translation hook
  const params = use(paramsPromise);
  const collection = getCollectionById(params.id);
  const products = getProductsByCollection(params.id);

  if (!collection) {
    return (
      <div className="g-container py-12 text-center">
        <h2 className="text-2xl font-medium mb-4">{t("notFoundHeading")}</h2>
        <p>{t("notFoundDescription")}</p>
      </div>
    );
  }

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{collection.name}</h1>{" "}
      {/* Collection name needs translation */}
      <p className="text-neutral-700 mb-8">{collection.description}</p>{" "}
      {/* Collection description needs translation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // ProductCard itself might need internal translations
        ))}
      </div>
    </div>
  );
}
