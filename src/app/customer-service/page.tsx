import Link from "next/link";
import Button from "@/components/ui/Button";
import { BRAND_NAME, SUPPORT_CONTACT } from "@/lib/constants";

export default function CustomerServicePage() {
  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">Customer Service</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <h2 className="text-xl font-medium mb-4">How Can We Help You?</h2>
        <p className="text-neutral-700 mb-6">
          At {BRAND_NAME}, we're committed to providing exceptional customer
          service. Our dedicated team is here to assist you with any questions
          or concerns you may have.
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
            <h3 className="font-medium mb-2">Email Us</h3>
            <p className="text-neutral-600 mb-4">
              Send us an email and we'll respond within 24 hours.
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
            <h3 className="font-medium mb-2">Call Us</h3>
            <p className="text-neutral-600 mb-4">
              Our customer service team is available Monday-Friday, 9am-5pm EST.
            </p>
            <a href="tel:+18001234567" className="text-primary hover:underline">
              1-800-123-4567
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
            <h3 className="font-medium mb-2">Live Chat</h3>
            <p className="text-neutral-600 mb-4">
              Chat with our customer service team in real-time.
            </p>
            <Button variant="outline" size="sm">
              Start Chat
            </Button>
          </div>
        </div>

        <h2 className="text-xl font-medium mb-4">Frequently Asked Questions</h2>
        <p className="text-neutral-700 mb-6">
          Find quick answers to our most commonly asked questions. For more
          detailed information, please visit our{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ page
          </Link>
          .
        </p>

        <div className="space-y-4 mb-8">
          <div className="border border-neutral-200 rounded-md p-4">
            <h3 className="font-medium mb-2">
              What are your shipping options?
            </h3>
            <p className="text-neutral-600">
              We offer standard shipping (3-5 business days), express shipping
              (1-2 business days), and overnight shipping. Free standard
              shipping is available on all orders over $100. For more
              information, please visit our{" "}
              <Link href="/shipping" className="text-primary hover:underline">
                Shipping & Returns page
              </Link>
              .
            </p>
          </div>

          <div className="border border-neutral-200 rounded-md p-4">
            <h3 className="font-medium mb-2">What is your return policy?</h3>
            <p className="text-neutral-600">
              We offer a 30-day return policy for all unworn items in their
              original condition with tags attached. For more information,
              please visit our{" "}
              <Link href="/shipping" className="text-primary hover:underline">
                Shipping & Returns page
              </Link>
              .
            </p>
          </div>

          <div className="border border-neutral-200 rounded-md p-4">
            <h3 className="font-medium mb-2">How do I find my size?</h3>
            <p className="text-neutral-600">
              We provide detailed size guides for all our products. For general
              sizing information, please visit our{" "}
              <Link href="/size-guide" className="text-primary hover:underline">
                Size Guide page
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-neutral-700 mb-4">
            Can't find what you're looking for? Contact us directly or visit our
            comprehensive FAQ page.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" href="/contact">
              Contact Us
            </Button>
            <Button variant="secondary" href="/faq">
              View All FAQs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
