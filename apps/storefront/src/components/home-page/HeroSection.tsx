import LocalizedLink from "@/components/ui/LocalizedLink";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("HomePage");
  const tHeader = useTranslations("Header");
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt={t("heroImageAlt")}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <div className="g-container relative z-10 text-white">
        <div className="max-w-xl">
          <h1 className="g-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            {t("heroHeading")}
          </h1>
          <p className="text-lg md:text-xl mb-8">{t("heroParagraph")}</p>
          <div className="flex flex-wrap gap-4">
            <LocalizedLink
              href="/category/new-arrivals"
              className="g-button-primary"
            >
              {tHeader("categoryNewArrivals")}
            </LocalizedLink>
            <LocalizedLink
              href="/collections"
              className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-neutral-900 transition-colors duration-300 font-medium"
            >
              {t("heroExploreCollectionsButton")}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
