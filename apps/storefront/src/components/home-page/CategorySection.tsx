import LocalizedLink from "@/components/ui/LocalizedLink";
import getCategoryImage from "@/lib/util/getCategoryImage";
import { StoreProductCategory } from "@medusajs/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

const backupImg = "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop";

export default function CategorySection({categories}: {categories: StoreProductCategory[]}) {
  const t = useTranslations("HomePage");

  return (
    <section className="py-16 bg-neutral-100">
      <div className="g-container">
        <h2 className="g-heading text-3xl text-center mb-4">
          {t("categoriesHeading")}
        </h2>
        <p className="text-neutral-700 text-center mb-8">
          {t("categoriesParagraph")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (

            <LocalizedLink
              key={category.name}
              href={"/categoryx/"+category.handle}
              className="group"
            >
              <div className="relative h-80 overflow-hidden rounded-md g-card">
                <Image
                  src={getCategoryImage(category)}
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-medium">
                    {category.name}
                  </h3>
                  <p className="text-white/80 group-hover:text-white mt-2 flex items-center">
                    {t("categoryShopNowLink")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>
      </div>
    </section>
  );
}
