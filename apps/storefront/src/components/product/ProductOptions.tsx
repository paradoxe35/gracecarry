import { StoreProduct } from "@medusajs/types";
import LocalizedLink from "../ui/LocalizedLink";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ProductOptions({product: {options}}: { product: StoreProduct}){

    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const t = useTranslations("ProductPage");
    return (
        <>
        {options && options?.map(option => (
            <div className="mb-6" key={option.id}>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium">
                {option.title + " : " + (selectedSize || "")}
              </h3>
              <LocalizedLink
                href="/size-guide"
                className="text-sm text-primary hover:underline"
              >
                {t("options.sizeGuideLink")}
              </LocalizedLink>
            </div>

            <div className="flex flex-wrap gap-2">
              {option.values && option.values.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.value)}
                  className={`min-w-[3rem] h-10 px-3 border rounded-md ${
                    selectedSize === size.value
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-neutral-300 text-neutral-800 hover:border-neutral-400"
                  }`}
                >
                  {size.value} {/* Assuming size is not translatable */}
                </button>
              ))}
            </div>
          </div>
        ))}
        </>
    );
}