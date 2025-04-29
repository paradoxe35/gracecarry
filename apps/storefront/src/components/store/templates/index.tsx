import { Suspense } from "react";

import PaginatedProducts from "./paginated-products";
import { SortOptions } from "@/types/global";

// Placeholder component for SkeletonProductGrid
const SkeletonProductGrid = () => {
  return (
    <div className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
      {Array.from(Array(8).keys()).map((i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-64 w-full"></div>
      ))}
    </div>
  );
};

// Placeholder component for RefinementList
const RefinementList = ({ sortBy }: { sortBy: SortOptions }) => {
  // Basic placeholder implementation
  return (
    <div className="pr-6 small:max-w-[250px] small:sticky small:top-12">
      <div className="space-y-6">
        <div>
          <div className="font-semibold mb-3">Sort by</div>
          {/* Basic sort options display */}
          <div>Current sort: {sortBy}</div>
          {/* Add more refinement options here if needed */}
        </div>
        {/* Add other refinement sections like categories, price range etc. */}
      </div>
    </div>
  );
};

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions;
  page?: string;
  countryCode: string;
}) => {
  const pageNumber = page ? parseInt(page) : 1;
  const sort = sortBy || "created_at"; // Ensure sort is always a valid SortOptions type

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList sortBy={sort} />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default StoreTemplate;
