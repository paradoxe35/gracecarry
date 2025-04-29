import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Grace & Carry, our story, and our mission.",
};

// Updated image URLs
const AUTHOR_IMAGE_URL =
  "https://placehold.co/300x400/FFF0F5/D87093.png?text=Nelly+C."; // Using placehold.co
const BANNER_IMAGE_URL =
  "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1920&auto=format&fit=crop"; // New Unsplash image

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src={BANNER_IMAGE_URL}
            alt="Elegant background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 g-container">
          <h1 className="g-heading text-4xl md:text-5xl lg:text-6xl mb-4">
            About Grace & Carry
          </h1>
          <p className="text-lg md:text-xl">Discover Our Story</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="g-container py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left Column / Main Story */}
          <div className="lg:col-span-2">
            <h2 className="g-heading text-3xl mb-6 text-primary">
              Our Journey
            </h2>
            <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
              <p>
                Welcome to Grace & Carry, your destination for curated elegance
                and timeless style. Born from a passion for fashion and a desire
                to empower, our boutique offers a handpicked selection of
                clothing, footwear, accessories, and lifestyle products.
              </p>
              <p>
                We believe that fashion is more than just clothing; it's a form
                of self-expression, confidence, and grace. Our collections are
                thoughtfully chosen to reflect sophisticated femininity with a
                modern touch, ensuring every piece resonates with quality and
                style.
              </p>
              <p>
                While our heart lies in celebrating women's fashion, we embrace
                inclusivity. We are gradually expanding to include curated
                selections for men, ensuring everyone can find pieces that speak
                to their unique style. At Grace & Carry, we strive to create an
                exclusive yet accessible shopping experience, filled with
                inspiration and personalized touches.
              </p>
            </div>

            {/* Location Section */}
            <div className="mt-12">
              <h3 className="g-heading text-2xl mb-4 text-primary">
                Visit Us in Kigali
              </h3>
              <p className="text-neutral-700 mb-6">
                Our boutique is proudly based in the vibrant heart of Kigali,
                Rwanda. We invite you to explore our collections online or
                connect with us.
              </p>
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
                  title="Kigali Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column / Founder Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-neutral-50 p-6 rounded-lg shadow-soft">
              <h3 className="g-heading text-2xl mb-4 text-primary">
                Meet the Founder
              </h3>
              <div className="mb-6 relative aspect-[3/4] rounded-md overflow-hidden">
                <Image
                  src={AUTHOR_IMAGE_URL}
                  alt="Nelly Claudette, Founder of Grace & Carry"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">Nelly Claudette</h4>
              <p className="text-neutral-600">
                Nelly founded Grace & Carry with a vision to blend elegance with
                accessibility, creating a space where style meets substance. Her
                passion for design and dedication to quality are the
                cornerstones of our boutique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
