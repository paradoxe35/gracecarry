import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from "@/components/ui/Button";
import { BRAND_NAME } from "@/lib/constants";
import { getTranslations } from "next-intl/server"; // Import getTranslations
import React from "react"; // Import React for type hints

export default async function FAQPage() {
  // Make component async
  const t = await getTranslations("faqPage"); // Get translations

  // Helper components for rich text links
  const contactLink = (chunks: React.ReactNode) => (
    <LocalizedLink href="/contact" className="text-primary hover:underline">
      {chunks}
    </LocalizedLink>
  );

  const shippingLink = (chunks: React.ReactNode) => (
    <LocalizedLink href="/shipping" className="text-primary hover:underline">
      {chunks}
    </LocalizedLink>
  );

  const returnPolicyLink = (chunks: React.ReactNode) => (
    <LocalizedLink href="/shipping" className="text-primary hover:underline">
      {chunks}
    </LocalizedLink>
  );

  const sizeGuideLink = (chunks: React.ReactNode) => (
    <LocalizedLink href="/size-guide" className="text-primary hover:underline">
      {chunks}
    </LocalizedLink>
  );

  // Assuming a privacy policy page exists at /privacy-policy
  const privacyLink = (chunks: React.ReactNode) => (
    <LocalizedLink
      href="/privacy-policy"
      className="text-primary hover:underline"
    >
      {chunks}
    </LocalizedLink>
  );

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{t("title")}</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="mb-8">
          <p className="text-neutral-700 mb-6">
            {t.rich("intro", { contactLink })}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" href="/faq#ordering">
              {t("orderingButton")}
            </Button>
            <Button variant="outline" href="/faq#shipping">
              {t("shippingButton")}
            </Button>
            <Button variant="outline" href="/faq#returns">
              {t("returnsButton")}
            </Button>
            <Button variant="outline" href="/faq#products">
              {t("productsButton")}
            </Button>
            <Button variant="outline" href="/faq#account">
              {t("accountButton")}
            </Button>
          </div>
        </div>

        {/* Ordering & Payment Section */}
        <div id="ordering" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t("orderingTitle")}</h2>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("ordering.q1")}</h3>
              <div className="text-neutral-700">
                <p>{t("ordering.a1.p1", { brandName: BRAND_NAME })}</p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li>{t("ordering.a1.li1")}</li>
                  <li>{t("ordering.a1.li2")}</li>
                  <li>{t("ordering.a1.li3")}</li>
                  <li>{t("ordering.a1.li4")}</li>
                  <li>{t("ordering.a1.li5")}</li>
                </ol>
                <p className="mt-3">{t("ordering.a1.p2")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("ordering.q2")}</h3>
              <div className="text-neutral-700">
                <p>{t("ordering.a2.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("ordering.a2.li1")}</li>
                  <li>{t("ordering.a2.li2")}</li>
                  <li>{t("ordering.a2.li3")}</li>
                  <li>{t("ordering.a2.li4")}</li>
                  <li>{t("ordering.a2.li5")}</li>
                </ul>
                <p className="mt-3">{t("ordering.a2.p2")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("ordering.q3")}</h3>
              <div className="text-neutral-700">
                <p>{t.rich("ordering.a3", { returnPolicyLink })}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("ordering.q4")}</h3>
              <div className="text-neutral-700">
                <p>{t("ordering.a4")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("ordering.q5")}</h3>
              <div className="text-neutral-700">
                <p>{t("ordering.a5.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("ordering.a5.li1")}</li>
                  <li>{t("ordering.a5.li2")}</li>
                  <li>{t("ordering.a5.li3")}</li>
                </ul>
                <p className="mt-3">{t("ordering.a5.p2")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping & Delivery Section */}
        <div id="shipping" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t("shippingTitle")}</h2>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("shipping.q1")}</h3>
              <div className="text-neutral-700">
                <p>{t("shipping.a1.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("shipping.a1.li1")}</li>
                  <li>{t("shipping.a1.li2")}</li>
                  <li>{t("shipping.a1.li3")}</li>
                </ul>
                <p className="mt-3">
                  {t.rich("shipping.a1.p2", { shippingLink })}
                </p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("shipping.q2")}</h3>
              <div className="text-neutral-700">
                <p>{t("shipping.a2")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("shipping.q3")}</h3>
              <div className="text-neutral-700">
                <p>{t.rich("shipping.a3", { contactLink })}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("shipping.q4")}</h3>
              <div className="text-neutral-700">
                <p>{t("shipping.a4.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("shipping.a4.li1")}</li>
                  <li>{t("shipping.a4.li2")}</li>
                  <li>{t("shipping.a4.li3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Returns & Exchanges Section */}
        <div id="returns" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t("returnsTitle")}</h2>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("returns.q1")}</h3>
              <div className="text-neutral-700">
                <p>{t.rich("returns.a1", { shippingLink })}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("returns.q2")}</h3>
              <div className="text-neutral-700">
                <ol className="list-decimal list-inside space-y-2">
                  <li>{t("returns.a2.li1")}</li>
                  <li>{t("returns.a2.li2")}</li>
                  <li>{t("returns.a2.li3")}</li>
                  <li>{t("returns.a2.li4")}</li>
                  <li>{t("returns.a2.li5")}</li>
                </ol>
                <p className="mt-3">{t("returns.a2.p1")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("returns.q3")}</h3>
              <div className="text-neutral-700">
                <p>{t("returns.a3")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("returns.q4")}</h3>
              <div className="text-neutral-700">
                <p>{t("returns.a4")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products & Sizing Section */}
        <div id="products" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t("productsTitle")}</h2>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("products.q1")}</h3>
              <div className="text-neutral-700">
                <p>{t.rich("products.a1.p1", { sizeGuideLink })}</p>
                <p className="mt-2">{t("products.a1.p2")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("products.q2")}</h3>
              <div className="text-neutral-700">
                <p>{t("products.a2")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                {t("products.q3", { brandName: BRAND_NAME })}
              </h3>
              <div className="text-neutral-700">
                <p>{t("products.a3.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("products.a3.li1")}</li>
                  <li>{t("products.a3.li2")}</li>
                  <li>{t("products.a3.li3")}</li>
                  <li>{t("products.a3.li4")}</li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("products.q4")}</h3>
              <div className="text-neutral-700">
                <p>{t("products.a4.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("products.a4.li1")}</li>
                  <li>{t("products.a4.li2")}</li>
                  <li>{t("products.a4.li3")}</li>
                  <li>{t("products.a4.li4")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Account & Privacy Section */}
        <div id="account" className="mb-8">
          <h2 className="text-2xl font-medium mb-6">{t("accountTitle")}</h2>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("account.q1")}</h3>
              <div className="text-neutral-700">
                <p>{t("account.a1.p1")}</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>{t("account.a1.li1")}</li>
                  <li>{t("account.a1.li2")}</li>
                  <li>{t("account.a1.li3")}</li>
                  <li>{t("account.a1.li4")}</li>
                  <li>{t("account.a1.li5")}</li>
                </ol>
                <p className="mt-3">{t("account.a1.p2")}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("account.q2")}</h3>
              <div className="text-neutral-700">
                <p>{t.rich("account.a2", { privacyLink })}</p>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">{t("account.q3")}</h3>
              <div className="text-neutral-700">
                <p>{t("account.a3.p1")}</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>{t("account.a3.li1")}</li>
                  <li>{t("account.a3.li2")}</li>
                  <li>{t("account.a3.li3")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 mb-4">{t("notFoundText")}</p>
          <Button variant="primary" href="/contact">
            {t("contactButton")}
          </Button>
        </div>
      </div>
    </div>
  );
}
