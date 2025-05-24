"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LocalizedLink from "@/components/ui/LocalizedLink";
import React, { useMemo, useState } from "react";
import { StoreProductCategory } from "@medusajs/types";
import getCategoryImage from "@/lib/util/getCategoryImage";
import MedusaProductCard from "../product/MedusaProductCard";

export default function MCategoryPage ({category}: {
  category: StoreProductCategory;
}){
    const t = useTranslations("CategoryPage");
    const tSort = useTranslations("SortProducts");
    const tCard = useTranslations("CategoryCard");
    const products = category?.products??[];
    
    // Sort options using translations
    const sortOptions = useMemo(
    () => [
        { value: "newest", label: tSort("newest") },
        { value: "price-low-high", label: tSort("priceAsc") },
        { value: "price-high-low", label: tSort("priceDesc") },
        { value: "best-selling", label: tSort("bestSelling") },
    ],
    [tSort]
    );
    const subcategories: string[] = [];
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
        []
      );
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]); // Price range might need currency/locale adjustments
    const [sortBy, setSortBy] = useState("newest");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleSubcategory = (subcategory: string) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(
        selectedSubcategories.filter((s) => s !== subcategory)
      );
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory]);
    }
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const clearFilters = () => {
    setSelectedSubcategories([]);
    setPriceRange([0, 300]); // Reset to default range
  };


    return (
        <div>
      {/* Category hero */}
      <div className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={getCategoryImage(category)}
            alt={category.name} // Alt text should ideally be translated if category name is
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="g-container relative z-10 text-white">
          <h1 className="g-heading text-4xl md:text-5xl mb-4">
            {category.name} {/* Category name needs translation */}
          </h1>
          <p className="text-lg max-w-2xl">{category.description}</p>{" "}
          {/* Category description needs translation */}
        </div>
      </div>

      {/* Category content */}
      <div className="g-container py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex text-sm">
            <li className="flex items-center">
              <LocalizedLink
                href="/"
                className="text-neutral-600 hover:text-primary"
              >
                {t("breadcrumbHome")}
              </LocalizedLink>
              <span className="mx-2 text-neutral-400">/</span>
            </li>
            <li className="text-neutral-800 font-medium">{category.name}</li>{" "}
            {/* Category name needs translation */}
          </ol>
        </nav>

        {/* Mobile filter button */}
        <div className="lg:hidden mb-6">
          <Button
            variant="secondary"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full"
          >
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            {t("mobileFilterButton")}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <div
            className={`lg:w-1/4 ${isFilterOpen ? "block" : "hidden lg:block"}`}
          >
            <div className="bg-white p-6 rounded-md shadow-soft">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-medium text-lg">{t("filtersHeading")}</h2>
                <button
                  onClick={clearFilters}
                  className="text-primary text-sm hover:underline"
                >
                  {t("clearAllButton")}
                </button>
              </div>

              {/* Subcategories */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">
                  {t("subcategoriesHeading")}
                </h3>
                <div className="space-y-2">
                  {subcategories.map(
                    (
                      subcategory: string // Subcategory names need translation
                    ) => (
                      <label key={subcategory} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSubcategories.includes(subcategory)}
                          onChange={() => toggleSubcategory(subcategory)}
                          className="rounded text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-neutral-800">
                          {subcategory}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Price range */}
              <div className="mb-8">
                <h3 className="font-medium mb-3">{t("priceRangeHeading")}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <Input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) =>
                      handlePriceChange(Number(e.target.value), priceRange[1])
                    }
                    min={0}
                    max={priceRange[1]}
                    placeholder={t("priceMinPlaceholder")}
                    className="w-full"
                    aria-label={t("priceMinPlaceholder")} // Add aria-label
                  />
                  <span className="text-neutral-500">
                    {t("priceToSeparator")}
                  </span>
                  <Input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) =>
                      handlePriceChange(priceRange[0], Number(e.target.value))
                    }
                    min={priceRange[0]}
                    placeholder={t("priceMaxPlaceholder")}
                    className="w-full"
                    aria-label={t("priceMaxPlaceholder")} // Add aria-label
                  />
                </div>
              </div>

              {/* Apply filters button (mobile only) */}
              <div className="lg:hidden">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => setIsFilterOpen(false)}
                >
                  {t("applyFiltersButton")}
                </Button>
              </div>
            </div>
          </div>

          {/* Products grid */}
          <div className="lg:w-3/4">
            {/* Sort and results count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-neutral-600">
                {tCard("productCount", { count: products.length })}
              </p>

              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-neutral-600">
                  {tSort("label")}
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

            {/* Products grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <MedusaProductCard key={product.id} product={product} /> // ProductCard itself might need internal translations
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">
                  {t("noProductsHeading")}
                </h3>
                <p className="text-neutral-600 mb-6">
                  {t("noProductsDescription")}
                </p>
                <Button variant="primary" onClick={clearFilters}>
                  {t("clearFiltersButton")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    );
}