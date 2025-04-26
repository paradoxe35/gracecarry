import Link from "next/link";
import Button from "@/components/ui/Button";
import { BRAND_NAME } from "@/lib/constants";

export default function FAQPage() {
  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">Frequently Asked Questions</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="mb-8">
          <p className="text-neutral-700 mb-6">
            Find answers to our most commonly asked questions below. If you
            can't find what you're looking for, please don't hesitate to{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact us
            </Link>
            .
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline" href="#ordering">
              Ordering & Payment
            </Button>
            <Button variant="outline" href="#shipping">
              Shipping & Delivery
            </Button>
            <Button variant="outline" href="#returns">
              Returns & Exchanges
            </Button>
            <Button variant="outline" href="#products">
              Products & Sizing
            </Button>
            <Button variant="outline" href="#account">
              Account & Privacy
            </Button>
          </div>
        </div>

        <div id="ordering" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Ordering & Payment</h2>

          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How do I place an order?
              </h3>
              <div className="text-neutral-700">
                <p>Placing an order on {BRAND_NAME} is simple:</p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li>Browse our collections and add items to your cart</li>
                  <li>Click on the cart icon to review your items</li>
                  <li>Proceed to checkout</li>
                  <li>Enter your shipping and payment information</li>
                  <li>Review your order and submit</li>
                </ol>
                <p className="mt-3">
                  You'll receive an order confirmation email once your purchase
                  is complete.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                What payment methods do you accept?
              </h3>
              <div className="text-neutral-700">
                <p>We accept the following payment methods:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Credit/Debit Cards (Visa, Mastercard, American Express,
                    Discover)
                  </li>
                  <li>PayPal</li>
                  <li>Apple Pay</li>
                  <li>Google Pay</li>
                  <li>Shop Pay</li>
                </ul>
                <p className="mt-3">
                  All transactions are secure and encrypted for your protection.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Can I modify or cancel my order?
              </h3>
              <div className="text-neutral-700">
                <p>
                  You can request to modify or cancel your order within 1 hour
                  of placing it by contacting our customer service team. Once an
                  order has been processed, we cannot make changes or cancel it.
                  If your order has already been processed, you can return the
                  items once received following our
                  <Link
                    href="/shipping"
                    className="text-primary hover:underline"
                  >
                    {" "}
                    return policy
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Do you offer gift cards?
              </h3>
              <div className="text-neutral-700">
                <p>
                  Yes, we offer digital gift cards in various denominations.
                  Gift cards are delivered via email and can be redeemed during
                  checkout. They make perfect gifts for friends and family who
                  appreciate elegant fashion.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Are there any discounts or promotions available?
              </h3>
              <div className="text-neutral-700">
                <p>
                  We regularly offer seasonal promotions and special discounts.
                  To stay updated on our latest offers:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Subscribe to our newsletter</li>
                  <li>Follow us on social media</li>
                  <li>Create an account to receive personalized offers</li>
                </ul>
                <p className="mt-3">
                  We also offer a 10% discount on your first order when you
                  subscribe to our newsletter.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="shipping" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Shipping & Delivery</h2>

          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                What are your shipping options and costs?
              </h3>
              <div className="text-neutral-700">
                <p>We offer several shipping options:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Standard Shipping (3-5 business days): $9.99 (Free on orders
                    over $100)
                  </li>
                  <li>Express Shipping (1-2 business days): $12.99</li>
                  <li>Overnight Shipping (Next business day): $24.99</li>
                </ul>
                <p className="mt-3">
                  For more detailed information, please visit our
                  <Link
                    href="/shipping"
                    className="text-primary hover:underline"
                  >
                    {" "}
                    Shipping & Returns page
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How long will it take to receive my order?
              </h3>
              <div className="text-neutral-700">
                <p>
                  Orders are typically processed within 1-2 business days.
                  Delivery times depend on your chosen shipping method and
                  location. After your order ships, you'll receive a
                  confirmation email with tracking information so you can
                  monitor your package's progress.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Do you ship internationally?
              </h3>
              <div className="text-neutral-700">
                <p>
                  Currently, we ship to the United States and Canada. For
                  international shipping inquiries, please{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    contact us
                  </Link>{" "}
                  directly, and we'll do our best to accommodate your request.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How can I track my order?
              </h3>
              <div className="text-neutral-700">
                <p>You can track your order by:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Clicking the tracking link in your shipping confirmation
                    email
                  </li>
                  <li>Visiting the "Order History" section in your account</li>
                  <li>
                    Contacting our customer service team with your order number
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="returns" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Returns & Exchanges</h2>

          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                What is your return policy?
              </h3>
              <div className="text-neutral-700">
                <p>
                  We offer a 30-day return policy for all unworn items in their
                  original condition with tags attached. Sale items and
                  accessories (jewelry, scarves, etc.) are final sale and cannot
                  be returned unless defective. For more details, please visit
                  our
                  <Link
                    href="/shipping"
                    className="text-primary hover:underline"
                  >
                    {" "}
                    Shipping & Returns page
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How do I return an item?
              </h3>
              <div className="text-neutral-700">
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Log into your account and go to "Order History" or contact
                    our customer service team
                  </li>
                  <li>
                    Select the items you wish to return and follow the prompts
                  </li>
                  <li>
                    Package your items in their original condition with tags
                    attached
                  </li>
                  <li>Include your order number or the return form</li>
                  <li>
                    Ship your return to the address provided using a trackable
                    shipping method
                  </li>
                </ol>
                <p className="mt-3">
                  Once we receive and process your return, you'll receive a
                  confirmation email, and your refund will be issued.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Do you offer exchanges?
              </h3>
              <div className="text-neutral-700">
                <p>
                  We currently do not offer direct exchanges. If you would like
                  to exchange an item, please return the original item for a
                  refund and place a new order for the desired item. This
                  ensures you get the exact item you want as quickly as
                  possible.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How long will it take to receive my refund?
              </h3>
              <div className="text-neutral-700">
                <p>
                  Once we receive and process your return, refunds typically
                  take 5-7 business days to appear on your original payment
                  method. The timing may vary depending on your financial
                  institution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="products" className="mb-12">
          <h2 className="text-2xl font-medium mb-6">Products & Sizing</h2>

          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How do I find my size?
              </h3>
              <div className="text-neutral-700">
                <p>
                  We provide detailed size guides for all our products. For
                  general sizing information, please visit our{" "}
                  <Link
                    href="/size-guide"
                    className="text-primary hover:underline"
                  >
                    Size Guide page
                  </Link>
                  . Each product page also includes specific sizing information
                  for that item.
                </p>
                <p className="mt-2">
                  If you're between sizes, we generally recommend sizing up for
                  a more comfortable fit.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                What materials do you use in your products?
              </h3>
              <div className="text-neutral-700">
                <p>
                  We carefully select high-quality materials for all our
                  products. Each product page lists the specific materials used,
                  along with care instructions. We prioritize both quality and
                  sustainability in our material choices.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How should I care for my {BRAND_NAME} items?
              </h3>
              <div className="text-neutral-700">
                <p>
                  Care instructions are provided on each product page and on the
                  care label of each item. Generally, we recommend:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Following the specific care instructions for each item
                  </li>
                  <li>Hand washing delicate items or using a gentle cycle</li>
                  <li>
                    Air drying when possible to maintain shape and fabric
                    integrity
                  </li>
                  <li>Storing items properly to maintain their quality</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Are your products sustainable?
              </h3>
              <div className="text-neutral-700">
                <p>
                  Sustainability is important to us. We're continuously working
                  to improve our practices by:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Sourcing sustainable and ethical materials when possible
                  </li>
                  <li>
                    Reducing waste in our packaging and production processes
                  </li>
                  <li>
                    Working with manufacturers who maintain fair labor practices
                  </li>
                  <li>Developing more sustainable product lines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="account" className="mb-8">
          <h2 className="text-2xl font-medium mb-6">Account & Privacy</h2>

          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How do I create an account?
              </h3>
              <div className="text-neutral-700">
                <p>Creating an account is easy:</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>
                    Click on the account icon in the top right corner of our
                    website
                  </li>
                  <li>Select "Create Account"</li>
                  <li>Enter your email address and create a password</li>
                  <li>Fill in your personal information</li>
                  <li>Click "Create Account" to complete the process</li>
                </ol>
                <p className="mt-3">
                  Having an account allows you to track orders, save favorites,
                  and enjoy a faster checkout experience.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                How is my personal information protected?
              </h3>
              <div className="text-neutral-700">
                <p>
                  We take your privacy seriously. All personal information is
                  encrypted and securely stored. We never share your information
                  with third parties without your consent. For more details,
                  please review our Privacy Policy.
                </p>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-md p-6">
              <h3 className="font-medium text-lg mb-3">
                Can I unsubscribe from emails?
              </h3>
              <div className="text-neutral-700">
                <p>Yes, you can unsubscribe from our emails at any time by:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    Clicking the "Unsubscribe" link at the bottom of any email
                  </li>
                  <li>
                    Updating your communication preferences in your account
                    settings
                  </li>
                  <li>Contacting our customer service team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-700 mb-4">
            Couldn't find the answer you're looking for?
          </p>
          <Button variant="primary" href="/contact">
            Contact Our Customer Service Team
          </Button>
        </div>
      </div>
    </div>
  );
}
