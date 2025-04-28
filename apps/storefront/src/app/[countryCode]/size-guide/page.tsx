import Image from "next/image";
import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from "@/components/ui/Button";
import { BRAND_NAME } from "@/lib/constants";

export default function SizeGuidePage() {
  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">Size Guide</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="mb-8">
          <p className="text-neutral-700 mb-6">
            Finding the perfect fit is essential for both comfort and style. Use
            our comprehensive size guides to determine your ideal size for all{" "}
            {BRAND_NAME} products. If you're between sizes, we generally
            recommend sizing up for a more comfortable fit.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-md mb-6">
            <h3 className="font-medium mb-2">Need assistance?</h3>
            <p className="text-neutral-700">
              Our customer service team is available to help with any sizing
              questions.
              <LocalizedLink
                href="/contact"
                className="text-primary hover:underline ml-1"
              >
                Contact us
              </LocalizedLink>{" "}
              for personalized assistance.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" href="#womens-clothing">
              Women's Clothing
            </Button>
            <Button variant="outline" href="#footwear">
              Footwear
            </Button>
            <Button variant="outline" href="#accessories">
              Accessories
            </Button>
            <Button variant="outline" href="#measurement-guide">
              How to Measure
            </Button>
          </div>
        </div>

        <div id="womens-clothing" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">
            Women's Clothing Size Guide
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">
              Standard Sizes (Inches)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      Size
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      US Size
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      Bust
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      Waist
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      Hips
                    </th>
                  </tr>
                </thead>
                <tbody>
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
          <h2 className="text-2xl font-medium mb-6">Footwear Size Guide</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Women's Shoe Sizes</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-100">
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      US
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      EU
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      UK
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      Foot Length (inches)
                    </th>
                    <th className="border border-neutral-200 px-4 py-3 text-left">
                      Foot Length (cm)
                    </th>
                  </tr>
                </thead>
                <tbody>
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
              * For the best fit, we recommend measuring your foot and referring
              to the foot length in inches or centimeters.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Footwear Fit Tips</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>
                Measure your feet in the evening when they tend to be at their
                largest.
              </li>
              <li>
                Stand when measuring and wear the type of socks you plan to wear
                with the shoes.
              </li>
              <li>
                If one foot is larger than the other, fit to the larger foot.
              </li>
              <li>
                For heels and dress shoes, a snug fit is recommended as leather
                will stretch slightly with wear.
              </li>
              <li>
                For boots and closed-toe shoes, ensure there is about a thumb's
                width of space between your longest toe and the end of the shoe.
              </li>
            </ul>
          </div>
        </div>

        <div id="measurement-guide" className="mb-8">
          <h2 className="text-2xl font-medium mb-6">How to Measure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">For Clothing</h3>
              <ul className="space-y-4 text-neutral-700">
                <li>
                  <span className="font-medium block mb-1">Bust:</span>
                  Measure around the fullest part of your bust, keeping the tape
                  parallel to the floor.
                </li>
                <li>
                  <span className="font-medium block mb-1">Waist:</span>
                  Measure around your natural waistline, which is the narrowest
                  part of your torso.
                </li>
                <li>
                  <span className="font-medium block mb-1">Hips:</span>
                  Measure around the fullest part of your hips, usually about 8
                  inches below your waistline.
                </li>
                <li>
                  <span className="font-medium block mb-1">Inseam:</span>
                  Measure from the crotch to the bottom of the ankle.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">For Footwear</h3>
              <ul className="space-y-4 text-neutral-700">
                <li>
                  <span className="font-medium block mb-1">Foot Length:</span>
                  Stand on a piece of paper and trace around your foot. Measure
                  the length from the heel to the longest toe.
                </li>
                <li>
                  <span className="font-medium block mb-1">Foot Width:</span>
                  Measure the widest part of your foot, usually across the ball
                  of your foot.
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Pro Tip:</h4>
                <p className="text-neutral-700">
                  If you're between sizes or unsure, our customer service team
                  is happy to provide specific sizing recommendations for any
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 mb-4">
            Still have questions about finding your perfect size?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/contact">
              Contact Us
            </Button>
            <Button variant="secondary" href="/faq">
              View FAQs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
