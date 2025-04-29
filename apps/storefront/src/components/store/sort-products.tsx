"use client";

import { SortOptions } from "@/types/global";
import { useTranslations } from "next-intl";

type SortProductsProps = {
  sortBy: SortOptions;
  setQueryParams: (name: string, value: SortOptions) => void;
  "data-testid"?: string;
};

// Define options with keys for translation
const sortOptionsData = [
  {
    value: "created_at",
    labelKey: "latestArrivals",
  },
  {
    value: "price_asc",
    labelKey: "priceAsc",
  },
  {
    value: "price_desc",
    labelKey: "priceDesc",
  },
] as const;

const SortProducts = ({
  "data-testid": dataTestId,
  sortBy,
  setQueryParams,
}: SortProductsProps) => {
  const t = useTranslations("SortProducts");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQueryParams("sortBy", e.target.value as SortOptions);
  };

  // Map options with translated labels
  const sortOptions = sortOptionsData.map((option) => ({
    value: option.value,
    label: t(option.labelKey),
  }));

  return (
    <div className="flex items-center" data-testid={dataTestId}>
      <label htmlFor="sort" className="mr-2 text-neutral-600">
        {t("label")}
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
