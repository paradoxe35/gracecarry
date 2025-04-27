"use client";

import { useState, useEffect } from "react";

import ProductCard from "@/components/product/ProductCard";

// Mock products data
const allProducts = [
  {
    id: 1,
    name: "Silk Wrap Dress",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses",
    isNew: true,
  },
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
    id: 3,
    name: "Cashmere Sweater",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: 4,
    name: "Leather Ankle Boots",
    price: 219.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    category: "Boots",
    isNew: true,
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop",
    category: "Bottoms",
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
    id: 7,
    name: "Satin Blouse",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1000&auto=format&fit=crop",
    category: "Tops",
  },
  {
    id: 8,
    name: "Structured Blazer",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1000&auto=format&fit=crop",
    category: "Outerwear",
    isNew: true,
  },
];

// Sort options
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-low-high", label: "Price: Low to High" },
  { value: "price-high-low", label: "Price: High to Low" },
  { value: "best-selling", label: "Best Selling" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(allProducts);
  const [sortBy, setSortBy] = useState("newest");

  // Sort products
  useEffect(() => {
    let filteredProducts = [...allProducts];

    // Sort products
    switch (sortBy) {
      case "price-low-high":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        // In a real app, you would sort by date
        filteredProducts.sort(
          (a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1)
        );
        break;
      default:
        break;
    }

    setProducts(filteredProducts);
  }, [sortBy, allProducts]);

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-8">All Products</h1>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <p className="text-neutral-600">{products.length} products</p>

        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-neutral-600">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-neutral-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
