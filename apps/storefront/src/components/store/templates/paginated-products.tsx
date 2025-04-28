import ProductCard from "@/components/product/ProductCard"; // Import ProductCard
import { Pagination } from "../pagination"; // Import Pagination as a named export
import { SortOptions } from "../sort-products"; // Import SortOptions
import { listProductsWithSort } from "../../../lib/data/products"; // Corrected import path
import { getRegion } from "../../../lib/data/regions"; // Corrected import path

const PRODUCT_LIMIT = 12;

type PaginatedProductsParams = {
  limit: number;
  collection_id?: string[];
  category_id?: string[];
  id?: string[];
  order?: string;
};

export default async function PaginatedProducts({
  sortBy,
  page,
  collectionId,
  categoryId,
  productsIds,
  countryCode,
}: {
  sortBy?: SortOptions;
  page: number;
  collectionId?: string;
  categoryId?: string;
  productsIds?: string[];
  countryCode: string;
}) {
  const queryParams: PaginatedProductsParams = {
    limit: 12,
  };

  if (collectionId) {
    queryParams["collection_id"] = [collectionId];
  }

  if (categoryId) {
    queryParams["category_id"] = [categoryId];
  }

  if (productsIds) {
    queryParams["id"] = productsIds;
  }

  if (sortBy === "created_at") {
    queryParams["order"] = "created_at";
  }

  const region = await getRegion(countryCode);

  if (!region) {
    return null;
  }

  let {
    response: { products, count },
  } = await listProductsWithSort({
    page,
    queryParams,
    sortBy,
    countryCode,
  });

  const totalPages = Math.ceil(count / PRODUCT_LIMIT);

  return (
    <>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="products-list"
      >
        {products.map((p) => {
          // Map product data to ProductCard props
          const productData = {
            id: p.id,
            name: p.title!, // Assuming title is the product name
            price: p.variants?.[0]?.calculated_price?.calculated_amount || 0, // Assuming price from first variant
            image: p.thumbnail!, // Assuming thumbnail is the product image
            category: p.collection?.title || "Unknown", // Assuming category from collection title
            // Add discount and isNew if available in your product data
          };

          return (
            <li key={p.id}>{/* <ProductCard product={productData} /> */}</li>
          );
        })}
      </ul>
      {totalPages > 1 && (
        <Pagination
          data-testid="product-pagination"
          page={page}
          totalPages={totalPages}
        />
      )}
    </>
  );
}
