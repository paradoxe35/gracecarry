"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useTranslations } from "next-intl"; // Import useTranslations

// Mock products data - simulating sale items
const saleProducts = [
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    discount: 15,
  },
  {
    id: 6,
    name: "Gold Hoop Earrings",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1630020085330-9a05a55441ca?q=80&w=1000&auto=format&fit=crop",
    category: "Jewelry",
    discount: 10,
  },
  {
    id: 9,
    name: "Silk Scarf",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1575427561544-445091199269?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    discount: 20,
  },
  {
    id: 10,
    name: "Wool Gloves",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1547584370-ce47ca9b1458?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
    discount: 25,
  },
];

export default function SalePage() {
  const t = useTranslations("SalePage"); // Initialize useTranslations
  const [products, setProducts] = useState(saleProducts);

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{t("pageHeading")}</h1> {/* Use translation key */}
      <p className="text-neutral-700 mb-8">
        {t("pageDescription")} {/* Use translation key */}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
