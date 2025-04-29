import Button from "@/components/ui/Button";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFoundPage");

  return (
    <div className="g-container py-12 flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]">
      {/* Adjust min-height based on header/footer */}
      <h1 className="g-heading text-4xl md:text-6xl mb-4 text-primary">404</h1>
      <h2 className="text-2xl font-medium mb-4">{t("heading")}</h2>
      <p className="text-neutral-700 max-w-md mx-auto mb-8">{t("message")}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="primary" href="/">
          {t("homepageButton")}
        </Button>

        <Button variant="secondary" href="/contact">
          {t("contactButton")}
        </Button>
      </div>
    </div>
  );
}
