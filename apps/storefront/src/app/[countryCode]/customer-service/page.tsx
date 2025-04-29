import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from "@/components/ui/Button";
import { BRAND_NAME, SUPPORT_CONTACT } from "@/lib/constants";
import { getTranslations } from "next-intl/server"; // Import getTranslations

export default async function CustomerServicePage() { // Make component async
  const t = await getTranslations("customerService"); // Get translations

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{t("title")}</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <h2 className="text-xl font-medium mb-4">{t("helpTitle")}</h2>
        <p className="text-neutral-700 mb-6">
          {t("helpDescription", { brandName: BRAND_NAME })}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-neutral-200 rounded-md p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-2">{t("emailUsTitle")}</h3>
            <p className="text-neutral-600 mb-4">
              {t("emailUsDescription")}
            </p>
            <a
              href={`mailto:${SUPPORT_CONTACT}`}
              className="text-primary hover:underline"
            >
              {SUPPORT_CONTACT}
            </a>
          </div>

          <div className="border border-neutral-200 rounded-md p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-2">{t("callUsTitle")}</h3>
            <p className="text-neutral-600 mb-4">
              {t("callUsDescription")}
            </p>
            <a href={`tel:${t("phoneNumber")}`} className="text-primary hover:underline">
              {t("phoneNumber")}
            </a>
          </div>

          <div className="border border-neutral-200 rounded-md p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="font-medium mb-2">{t("liveChatTitle")}</h3>
            <p className="text-neutral-600 mb-4">
              {t("liveChatDescription")}
            </p>
            <Button variant="outline" size="sm">
              {t("startChatButton")}
            </Button>
          </div>
        </div>

        <h2 className="text-xl font-medium mb-4">{t("faqTitle")}</h2>
        <p className="text-neutral-700 mb-6">
          {t.rich("faqDescription", {
            faqLink: (chunks) => (
              <LocalizedLink href="/faq" className="text-primary hover:underline">
                {chunks}
              </LocalizedLink>
            ),
          })}
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-neutral-200 rounded-md p-4">
            <h3 className="font-medium mb-2">
              {t("shippingQuestion")}
            </h3>
            <p className="text-neutral-600">
              {t.rich("shippingAnswer", {
                shippingLink: (chunks) => (
                  <LocalizedLink href="/shipping" className="text-primary hover:underline">
                    {chunks}
                  </LocalizedLink>
                ),
              })}
            </p>
          </div>

          <div className="border border-neutral-200 rounded-md p-4">
            <h3 className="font-medium mb-2">{t("returnPolicyQuestion")}</h3>
            <p className="text-neutral-600">
              {t.rich("returnPolicyAnswer", {
                shippingLink: (chunks) => (
                  <LocalizedLink href="/shipping" className="text-primary hover:underline">
                    {chunks}
                  </LocalizedLink>
                ),
              })}
            </p>
          </div>

          <div className="border border-neutral-200 rounded-md p-4">
            <h3 className="font-medium mb-2">{t("sizeGuideQuestion")}</h3>
            <p className="text-neutral-600">
              {t.rich("sizeGuideAnswer", {
                sizeGuideLink: (chunks) => (
                  <LocalizedLink href="/size-guide" className="text-primary hover:underline">
                    {chunks}
                  </LocalizedLink>
                ),
              })}
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-neutral-700 mb-4">
            {t.rich("notFoundDescription", {
              faqLink: (chunks) => (
                <LocalizedLink href="/faq" className="text-primary hover:underline">
                  {chunks}
                </LocalizedLink>
              ),
            })}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/contact">
              {t("contactUsButton")}
            </Button>
            <Button variant="secondary" href="/faq">
              {t("viewAllFaqsButton")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
