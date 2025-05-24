"use server";

import MCategoryPage from "@/components/category/CategoryPage";
import { getCategoryByHandle } from "@/lib/data/categories";
import getProductsByCategory from "@/lib/data/products/getProductsByCategory";
import { StoreProductCategory } from "@medusajs/types";


// Mock category data
// const getCategoryBySlug = (slug: string, t: any) => {
//   // Pass t for fallback translation
//   const categories = {
//     clothing: {
//       name: "Clothing", // Needs translation
//       description:
//         "Discover our curated collection of premium women's clothing, from elegant dresses to comfortable everyday essentials.", // Needs translation
//       image:
//         "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
//       subcategories: ["Dresses", "Tops", "Bottoms", "Outerwear", "Activewear"], // Needs translation
//     },
//     footwear: {
//       name: "Footwear", // Needs translation
//       description:
//         "Step into style with our selection of premium footwear, from elegant heels to comfortable flats and casual sneakers.", // Needs translation
//       image:
//         "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop",
//       subcategories: ["Heels", "Flats", "Boots", "Sneakers", "Sandals"], // Needs translation
//     },
//     accessories: {
//       name: "Accessories", // Needs translation
//       description:
//         "Complete your look with our elegant accessories, from statement jewelry to functional bags and scarves.", // Needs translation
//       image:
//         "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
//       subcategories: ["Bags", "Jewelry", "Scarves", "Belts", "Hats"], // Needs translation
//     },
//     beauty: {
//       name: "Beauty", // Needs translation
//       description:
//         "Enhance your natural beauty with our premium skincare, makeup, and fragrance products.", // Needs translation
//       image:
//         "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
//       subcategories: [
//         "Skincare",
//         "Makeup",
//         "Fragrance",
//         "Hair Care",
//         "Bath & Body",
//       ], // Needs translation
//     },
//     lifestyle: {
//       name: "Lifestyle", // Needs translation
//       description:
//         "Elevate your everyday with our curated selection of home decor, stationery, and wellness products.", // Needs translation
//       image:
//         "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1000&auto=format&fit=crop",
//       subcategories: ["Home Decor", "Stationery", "Wellness", "Books", "Gifts"], // Needs translation
//     },
//     "new-arrivals": {
//       name: "New Arrivals", // Needs translation
//       description:
//         "Be the first to discover our latest additions, featuring the newest trends and seasonal must-haves.", // Needs translation
//       image:
//         "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop",
//       subcategories: ["This Week", "This Month", "Trending", "Coming Soon"], // Needs translation
//     },
//   };

//   return (
//     categories[slug as keyof typeof categories] || {
//       name: t("notFoundHeading"), // Use translated fallback
//       description: t("notFoundDescription"), // Use translated fallback
//       image:
//         "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
//       subcategories: [],
//     }
//   );
// };

// Mock products data
// const getProductsByCategory = (category: string) => {
//   // This would normally come from an API or database
//   // Product names and categories here would also need translation
//   const products = [
//     {
//       id: 1,
//       name: "Silk Wrap Dress",
//       price: 189.99,
//       image:
//         "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
//       category: "Dresses",
//       isNew: true,
//     },
//     {
//       id: 2,
//       name: "Leather Tote Bag",
//       price: 149.99,
//       image:
//         "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
//       category: "Bags",
//       discount: 15,
//     },
//     {
//       id: 3,
//       name: "Cashmere Sweater",
//       price: 129.99,
//       image:
//         "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
//       category: "Tops",
//     },
//     {
//       id: 4,
//       name: "Leather Ankle Boots",
//       price: 219.99,
//       image:
//         "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
//       category: "Boots",
//       isNew: true,
//     },
//     {
//       id: 5,
//       name: "Pleated Midi Skirt",
//       price: 89.99,
//       image:
//         "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop",
//       category: "Bottoms",
//     },
//     {
//       id: 6,
//       name: "Gold Hoop Earrings",
//       price: 59.99,
//       image:
//         "https://images.unsplash.com/photo-1630020085330-9a05a55441ca?q=80&w=1000&auto=format&fit=crop",
//       category: "Jewelry",
//       discount: 10,
//     },
//     {
//       id: 7,
//       name: "Satin Blouse",
//       price: 79.99,
//       image:
//         "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1000&auto=format&fit=crop",
//       category: "Tops",
//     },
//     {
//       id: 8,
//       name: "Structured Blazer",
//       price: 159.99,
//       image:
//         "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=1000&auto=format&fit=crop",
//       category: "Outerwear",
//       isNew: true,
//     },
//   ];

//   return products;
// };

export default async function Page({
  params
}: {
  params: Promise<{ slug: string, countryCode: string }>;
}) {
  // const t = useTranslations("CategoryPage");
  // const tSort = useTranslations("SortProducts");
  // const tCard = useTranslations("CategoryCard");
  const {slug, countryCode} = await params;

  // Sort options using translations
  // const sortOptions = useMemo(
  //   () => [
  //     { value: "newest", label: tSort("newest") },
  //     { value: "price-low-high", label: tSort("priceAsc") },
  //     { value: "price-high-low", label: tSort("priceDesc") },
  //     { value: "best-selling", label: tSort("bestSelling") },
  //   ],
  //   [tSort]
  // );
  const category = await getCategoryByHandle([slug]);
  const products = await getProductsByCategory(category, countryCode);
  const categoryWithProducts: StoreProductCategory = {...category, products: products?.products};
  // const category = useMemo(
  //   () => getCategoryBySlug(params.slug),
  //   [params.slug, t]
  // );
  // const allProducts = useMemo(
  //   () => getProductsByCategory(params.slug), // Product data itself isn't translated here
  //   [params.slug]
  // );

  // const [products, setProducts] = useState(allProducts);
  // const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
  //   []
  // );
  // const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]); // Price range might need currency/locale adjustments
  // const [sortBy, setSortBy] = useState("newest");
  // const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort products
  // useEffect(() => {
  //   let filteredProducts = [...allProducts];

  //   // Filter by subcategory
  //   if (selectedSubcategories.length > 0) {
  //     filteredProducts = filteredProducts.filter(
  //       (product) => selectedSubcategories.includes(product.category) // Assumes product.category matches subcategory string exactly
  //     );
  //   }

  //   // Filter by price range
  //   filteredProducts = filteredProducts.filter(
  //     (product) =>
  //       product.price >= priceRange[0] && product.price <= priceRange[1]
  //   );

  //   // Sort products
  //   switch (sortBy) {
  //     case "price-low-high":
  //       filteredProducts.sort((a, b) => a.price - b.price);
  //       break;
  //     case "price-high-low":
  //       filteredProducts.sort((a, b) => b.price - a.price);
  //       break;
  //     case "newest":
  //       // In a real app, you would sort by date
  //       filteredProducts.sort(
  //         (a, b) => (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1)
  //       );
  //       break;
  //     default: // Includes "best-selling" for now as mock data doesn't support it
  //       break;
  //   }

  //   setProducts(filteredProducts);
  // }, [selectedSubcategories, priceRange, sortBy, allProducts]);

  // const toggleSubcategory = (subcategory: string) => {
  //   if (selectedSubcategories.includes(subcategory)) {
  //     setSelectedSubcategories(
  //       selectedSubcategories.filter((s) => s !== subcategory)
  //     );
  //   } else {
  //     setSelectedSubcategories([...selectedSubcategories, subcategory]);
  //   }
  // };

  // const handlePriceChange = (min: number, max: number) => {
  //   setPriceRange([min, max]);
  // };

  // const clearFilters = () => {
  //   setSelectedSubcategories([]);
  //   setPriceRange([0, 300]); // Reset to default range
  // };

  return (
    // <div>
    //   {/* Category hero */}
    //   <div className="relative h-[40vh] flex items-center">
    //     <div className="absolute inset-0 z-0">
    //       <Image
    //         src={category.image}
    //         alt={category.name} // Alt text should ideally be translated if category name is
    //         fill
    //         style={{ objectFit: "cover" }}
    //         priority
    //       />
    //       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    //     </div>

    //     <div className="g-container relative z-10 text-white">
    //       <h1 className="g-heading text-4xl md:text-5xl mb-4">
    //         {category.name} {/* Category name needs translation */}
    //       </h1>
    //       <p className="text-lg max-w-2xl">{category.description}</p>{" "}
    //       {/* Category description needs translation */}
    //     </div>
    //   </div>

    //   {/* Category content */}
    //   <div className="g-container py-12">
    //     {/* Breadcrumbs */}
    //     <nav className="mb-8">
    //       <ol className="flex text-sm">
    //         <li className="flex items-center">
    //           <LocalizedLink
    //             href="/"
    //             className="text-neutral-600 hover:text-primary"
    //           >
    //             {t("breadcrumbHome")}
    //           </LocalizedLink>
    //           <span className="mx-2 text-neutral-400">/</span>
    //         </li>
    //         <li className="text-neutral-800 font-medium">{category.name}</li>{" "}
    //         {/* Category name needs translation */}
    //       </ol>
    //     </nav>

    //     {/* Mobile filter button */}
    //     <div className="lg:hidden mb-6">
    //       <Button
    //         variant="secondary"
    //         onClick={() => setIsFilterOpen(!isFilterOpen)}
    //         className="w-full"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5 mr-2"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    //           />
    //         </svg>
    //         {t("mobileFilterButton")}
    //       </Button>
    //     </div>

    //     <div className="flex flex-col lg:flex-row gap-8">
    //       {/* Filters sidebar */}
    //       <div
    //         className={`lg:w-1/4 ${isFilterOpen ? "block" : "hidden lg:block"}`}
    //       >
    //         <div className="bg-white p-6 rounded-md shadow-soft">
    //           <div className="flex justify-between items-center mb-6">
    //             <h2 className="font-medium text-lg">{t("filtersHeading")}</h2>
    //             <button
    //               onClick={clearFilters}
    //               className="text-primary text-sm hover:underline"
    //             >
    //               {t("clearAllButton")}
    //             </button>
    //           </div>

    //           {/* Subcategories */}
    //           <div className="mb-8">
    //             <h3 className="font-medium mb-3">
    //               {t("subcategoriesHeading")}
    //             </h3>
    //             <div className="space-y-2">
    //               {category.subcategories.map(
    //                 (
    //                   subcategory // Subcategory names need translation
    //                 ) => (
    //                   <label key={subcategory} className="flex items-center">
    //                     <input
    //                       type="checkbox"
    //                       checked={selectedSubcategories.includes(subcategory)}
    //                       onChange={() => toggleSubcategory(subcategory)}
    //                       className="rounded text-primary focus:ring-primary"
    //                     />
    //                     <span className="ml-2 text-neutral-800">
    //                       {subcategory}
    //                     </span>
    //                   </label>
    //                 )
    //               )}
    //             </div>
    //           </div>

    //           {/* Price range */}
    //           <div className="mb-8">
    //             <h3 className="font-medium mb-3">{t("priceRangeHeading")}</h3>
    //             <div className="flex items-center gap-4 mb-4">
    //               <Input
    //                 type="number"
    //                 value={priceRange[0]}
    //                 onChange={(e) =>
    //                   handlePriceChange(Number(e.target.value), priceRange[1])
    //                 }
    //                 min={0}
    //                 max={priceRange[1]}
    //                 placeholder={t("priceMinPlaceholder")}
    //                 className="w-full"
    //                 aria-label={t("priceMinPlaceholder")} // Add aria-label
    //               />
    //               <span className="text-neutral-500">
    //                 {t("priceToSeparator")}
    //               </span>
    //               <Input
    //                 type="number"
    //                 value={priceRange[1]}
    //                 onChange={(e) =>
    //                   handlePriceChange(priceRange[0], Number(e.target.value))
    //                 }
    //                 min={priceRange[0]}
    //                 placeholder={t("priceMaxPlaceholder")}
    //                 className="w-full"
    //                 aria-label={t("priceMaxPlaceholder")} // Add aria-label
    //               />
    //             </div>
    //           </div>

    //           {/* Apply filters button (mobile only) */}
    //           <div className="lg:hidden">
    //             <Button
    //               variant="primary"
    //               fullWidth
    //               onClick={() => setIsFilterOpen(false)}
    //             >
    //               {t("applyFiltersButton")}
    //             </Button>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Products grid */}
    //       <div className="lg:w-3/4">
    //         {/* Sort and results count */}
    //         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
    //           <p className="text-neutral-600">
    //             {tCard("productCount", { count: products.length })}
    //           </p>

    //           <div className="flex items-center">
    //             <label htmlFor="sort" className="mr-2 text-neutral-600">
    //               {tSort("label")}
    //             </label>
    //             <select
    //               id="sort"
    //               value={sortBy}
    //               onChange={(e) => setSortBy(e.target.value)}
    //               className="border border-neutral-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
    //             >
    //               {sortOptions.map((option) => (
    //                 <option key={option.value} value={option.value}>
    //                   {option.label}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>
    //         </div>

    //         {/* Products grid */}
    //         {products.length > 0 ? (
    //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {products.map((product) => (
    //               <ProductCard key={product.id} product={product} /> // ProductCard itself might need internal translations
    //             ))}
    //           </div>
    //         ) : (
    //           <div className="text-center py-12">
    //             <h3 className="text-xl font-medium mb-2">
    //               {t("noProductsHeading")}
    //             </h3>
    //             <p className="text-neutral-600 mb-6">
    //               {t("noProductsDescription")}
    //             </p>
    //             <Button variant="primary" onClick={clearFilters}>
    //               {t("clearFiltersButton")}
    //             </Button>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <MCategoryPage category={categoryWithProducts} />
  );
}
