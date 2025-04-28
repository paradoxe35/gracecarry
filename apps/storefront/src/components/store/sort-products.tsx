"use client";

export type SortOptions = "price_asc" | "price_desc" | "created_at";

type SortProductsProps = {
  sortBy: SortOptions;
  setQueryParams: (name: string, value: SortOptions) => void;
  "data-testid"?: string;
};

const sortOptions = [
  {
    value: "created_at",
    label: "Latest Arrivals",
  },
  {
    value: "price_asc",
    label: "Price: Low -> High",
  },
  {
    value: "price_desc",
    label: "Price: High -> Low",
  },
];

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryParams("sortBy", e.target.value as SortOptions);
  };

  return (
    <div className="flex items-center" data-testid={dataTestId}>
      <label htmlFor="sort" className="mr-2 text-neutral-600">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortBy}
        onChange={handleChange}
        className="border border-neutral-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortProducts;
