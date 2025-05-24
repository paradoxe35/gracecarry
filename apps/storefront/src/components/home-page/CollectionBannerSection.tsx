import { useTranslations } from "next-intl";
import LocalizedLink from "../ui/LocalizedLink";
import Image from "next/image";

export default function CollectionBannerSection() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-16 bg-neutral-100">
      <div className="g-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="g-heading text-3xl mb-4">
              {t("collectionBannerHeading")}
            </h2>
            <p className="text-neutral-700 mb-6">
              {t("collectionBannerParagraph")}
            </p>
            <LocalizedLink
              href="/collections/summer"
              className="g-button-primary inline-block"
            >
              {t("collectionBannerButton")}
            </LocalizedLink>
          </div>
          <div className="relative h-96 rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
              alt={t("collectionBannerImageAlt")}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
