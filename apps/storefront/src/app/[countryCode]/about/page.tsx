import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// Generate dynamic metadata using translations
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

// Updated image URLs
const AUTHOR_IMAGE_URL =
  "https://placehold.co/300x400/FFF0F5/D87093.png?text=Nelly+C."; // Using placehold.co
const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1920&auto=format&fit=crop"; // New Unsplash image

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={BANNER_IMAGE_URL}
            alt={t("bannerImageAlt")}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 g-container">
          <h1 className="g-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            {t("heroHeading")}
          </h1>
          <p className="text-lg md:text-xl">{t("heroSubheading")}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="g-container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column / Main Story */}
          <div className="lg:col-span-2">
            <h2 className="g-heading text-3xl mb-6 text-primary">
              {t("journeyHeading")}
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>{t("journeyParagraph1")}</p>
              <p>{t("journeyParagraph2")}</p>
              <p>{t("journeyParagraph3")}</p>
            </div>

            {/* Location Section */}
            <div className="mt-12">
              <h3 className="g-heading text-2xl mb-4 text-primary">
                {t("visitHeading")}
              </h3>
              <p className="text-neutral-700 mb-6">{t("visitParagraph")}</p>
              <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow-soft">
                {/* Replace with a more specific Google Maps embed URL if available */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127602.9999038439!2d30.03180864907593!3d-1.944072704634537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t("mapTitle")}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column / Founder Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-neutral-50 p-6 rounded-lg shadow-soft">
              <h3 className="g-heading text-2xl mb-4 text-primary">
                {t("founderHeading")}
              </h3>
              <div className="mb-6 relative aspect-[3/4] rounded-md overflow-hidden">
                <Image
                  src={AUTHOR_IMAGE_URL}
                  alt={t("founderImageAlt")}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{t("founderName")}</h4>
              <p className="text-neutral-600">{t("founderBio")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
