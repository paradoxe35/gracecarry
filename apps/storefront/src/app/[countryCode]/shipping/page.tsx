import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from '@/components/ui/Button';
import { getTranslations } from 'next-intl/server'; // Import getTranslations

export default async function ShippingPage() {
  const t = await getTranslations('ShippingPage'); // Initialize getTranslations

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{t('pageHeading')}</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t('shippingInfoHeading')}</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">{t('shippingOptionsHeading')}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-neutral-100">
                      <th className="border border-neutral-200 px-4 py-3 text-left">{t('tableHeaderMethod')}</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left">{t('tableHeaderTime')}</th>
                      <th className="border border-neutral-200 px-4 py-3 text-left">{t('tableHeaderCost')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-neutral-200 px-4 py-3">{t('standardShippingMethod')}</td>
                      <td className="border border-neutral-200 px-4 py-3">{t('standardShippingTime')}</td>
                      <td className="border border-neutral-200 px-4 py-3">
                        {t('standardShippingCost')}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-200 px-4 py-3">{t('expressShippingMethod')}</td>
                      <td className="border border-neutral-200 px-4 py-3">{t('expressShippingTime')}</td>
                      <td className="border border-neutral-200 px-4 py-3">{t('expressShippingCost')}</td>
                    </tr>
                    <tr>
                      <td className="border border-neutral-200 px-4 py-3">{t('overnightShippingMethod')}</td>
                      <td className="border border-neutral-200 px-4 py-3">{t('overnightShippingTime')}</td>
                      <td className="border border-neutral-200 px-4 py-3">{t('overnightShippingCost')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-neutral-600 mt-2">
                {t('businessDaysNote')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{t('shippingPoliciesHeading')}</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  {t('policyProcessed')}
                </li>
                <li>
                  {t('policyConfirmation')}
                </li>
                <li>
                  {t.rich('policyLocations', {
                    contactLink: (chunks) => <LocalizedLink href="/contact" className="text-primary hover:underline">{chunks}</LocalizedLink>
                  })}
                </li>
                <li>
                  {t('policyDelays')}
                </li>
                <li>
                  {t('policyMultipleItems')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{t('orderTrackingHeading')}</h3>
              <p className="text-neutral-700 mb-4">
                {t('orderTrackingIntro')}
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  {t('trackingEmail')}
                </li>
                <li>
                  {t.rich('trackingAccount', {
                    accountLink: (chunks) => <LocalizedLink href="/account/orders" className="text-primary hover:underline">{chunks}</LocalizedLink>
                  })}
                </li>
                <li>
                  {t.rich('trackingCustomerService', {
                    customerServiceLink: (chunks) => <LocalizedLink href="/customer-service" className="text-primary hover:underline">{chunks}</LocalizedLink>
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t('returnsExchangesHeading')}</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">{t('returnPolicyHeading')}</h3>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                <li>
                  {t('returnPolicy30Days')}
                </li>
                <li>
                  {t('returnPolicyFinalSale')}
                </li>
                <li>
                  {t('returnPolicyDefective')}
                </li>
                <li>
                  {t('returnPolicyShippingCost')}
                </li>
                <li>
                  {t('returnPolicyRefundTime')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{t('howToReturnHeading')}</h3>
              <ol className="list-decimal list-inside space-y-4 text-neutral-700">
                <li>
                  <span className="font-medium">{t('returnStep1Title')}</span> {t('returnStep1Desc')}
                </li>
                <li>
                  <span className="font-medium">{t('returnStep2Title')}</span> {t('returnStep2Desc')}
                </li>
                <li>
                  <span className="font-medium">{t('returnStep3Title')}</span> {t('returnStep3Desc')}
                </li>
                <li>
                  <span className="font-medium">{t('returnStep4Title')}</span> {t('returnStep4Desc')}
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{t('exchangesHeading')}</h3>
              <p className="text-neutral-700 mb-4">
                {t('exchangesDescription')}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-6">{t('faqHeading')}</h2>

          <div className="space-y-4">
            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">{t('faq1Question')}</h3>
              <p className="text-neutral-600">
                {t('faq1Answer')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">{t('faq2Question')}</h3>
              <p className="text-neutral-600">
                {t('faq2Answer')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">{t('faq3Question')}</h3>
              <p className="text-neutral-600">
                {t('faq3Answer')}
              </p>
            </div>

            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">{t('faq4Question')}</h3>
              <p className="text-neutral-600">
                {t('faq4Answer')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 mb-4">
            {t('contactPrompt')}
          </p>
          <Button variant="primary" href="/contact">
            {t('contactButton')}
          </Button>
        </div>
      </div>
    </div>
  );
}