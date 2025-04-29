import Image from "next/image";
import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from "@/components/ui/Button";
import { BRAND_NAME } from "@/lib/constants";
import { getTranslations } from 'next-intl/server'; // Import getTranslations

export default async function SizeGuidePage() {
  const t = await getTranslations('SizeGuidePage'); // Initialize getTranslations

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{t('pageHeading')}</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="mb-8">
          <p className="text-neutral-700 mb-6">
            {t('introParagraph', { brandName: BRAND_NAME })}
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">{t('assistanceHeading')}</h3>
            <p className="text-neutral-700">
              {t.rich('assistanceText', {
                contactLink: (chunks) => <LocalizedLink href="/contact" className="text-primary hover:underline ml-1">{chunks}</LocalizedLink>
              })}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" href="#womens-clothing">
              {t('buttonWomensClothing')}
            </Button>
            <Button variant="outline" href="#footwear">
              {t('buttonFootwear')}
            </Button>
            <Button variant="outline" href="#accessories">
              {t('buttonAccessories')}
            </Button>
            <Button variant="outline" href="#measurement-guide">
              {t('buttonHowToMeasure')}
            </Button>
          </div>
        </div>

        <div id="womens-clothing" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">
            {t('womensClothingHeading')}
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">
              {t('standardSizesHeading')}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderSize')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderUsSize')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderBust')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderWaist')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderHips')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Table rows remain the same as they contain numerical data */}
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">
                      XS
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">0-2</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      32-33
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      24-25
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      34-35
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">
                      S
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">4-6</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      34-35
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      26-27
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      36-37
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">
                      M
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      8-10
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      36-37
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      28-29
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      38-39
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">
                      L
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      12-14
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      38-40
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      30-32
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      40-42
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3 font-medium">
                      XL
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      16-18
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      41-43
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      33-35
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      43-45
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="footwear" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">{t('footwearHeading')}</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">{t('womensShoeSizesHeading')}</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderUs')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderEu')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderUk')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderFootLengthIn')}
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      {t('tableHeaderFootLengthCm')}
                    </th>
                  </tr>
                </thead>
                 <tbody>
                  {/* Table rows remain the same as they contain numerical data */}
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3">5</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      35-36
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">3</td>
                    <td className="border border-neutral-200 px-4 py-3">8.5</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      21.6
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3">6</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      36-37
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">4</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      8.75
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      22.2
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3">7</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      37-38
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">5</td>
                    <td className="border border-neutral-200 px-4 py-3">9</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      22.9
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3">8</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      38-39
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">6</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      9.25
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      23.5
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3">9</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      39-40
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">7</td>
                    <td className="border border-neutral-200 px-4 py-3">9.5</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      24.1
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-neutral-200 px-4 py-3">10</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      40-41
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">8</td>
                    <td className="border border-neutral-200 px-4 py-3">
                      9.75
                    </td>
                    <td className="border border-neutral-200 px-4 py-3">
                      24.8
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-600 mt-2">
              {t('footwearNote')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">{t('footwearFitTipsHeading')}</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>
                {t('tipMeasureEvening')}
              </li>
              <li>
                {t('tipWearSocks')}
              </li>
              <li>
                {t('tipLargerFoot')}
              </li>
              <li>
                {t('tipHeelsStretch')}
              </li>
              <li>
                {t('tipBootsSpace')}
              </li>
            </ul>
          </div>
        </div>

        <div id="measurement-guide" className="mb-8">
          <h2 className="text-2xl font-medium mb-6">{t('howToMeasureHeading')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">{t('forClothingHeading')}</h3>
              <ul className="space-y-4 text-neutral-700">
                <li>
                  <span className="font-medium block mb-1">{t('measureBustTitle')}</span>
                  {t('measureBustDesc')}
                </li>
                <li>
                  <span className="font-medium block mb-1">{t('measureWaistTitle')}</span>
                  {t('measureWaistDesc')}
                </li>
                <li>
                  <span className="font-medium block mb-1">{t('measureHipsTitle')}</span>
                  {t('measureHipsDesc')}
                </li>
                <li>
                  <span className="font-medium block mb-1">{t('measureInseamTitle')}</span>
                  {t('measureInseamDesc')}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">{t('forFootwearHeading')}</h3>
              <ul className="space-y-4 text-neutral-700">
                <li>
                  <span className="font-medium block mb-1">{t('measureFootLengthTitle')}</span>
                  {t('measureFootLengthDesc')}
                </li>
                <li>
                  <span className="font-medium block mb-1">{t('measureFootWidthTitle')}</span>
                  {t('measureFootWidthDesc')}
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="font-medium mb-3">{t('proTipHeading')}</h4>
                <p className="text-neutral-700">
                  {t('proTipDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 mb-4">
            {t('finalPrompt')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/contact">
              {t('contactButton')}
            </Button>
            <Button variant="secondary" href="/faq">
              {t('faqButton')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
