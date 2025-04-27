import Image from "next/image";
import Link from "next/link";

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Silk Wrap Dress",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    category: "Dresses",
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Leather Ankle Boots",
    price: 219.99,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
    category: "Footwear",
  },
];

// Sample categories data
const categories = [
  {
    name: "Clothing",
    image:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop",
    href: "/category/clothing",
  },
  {
    name: "Footwear",
    image:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?q=80&w=1000&auto=format&fit=crop",
    href: "/category/footwear",
  },
  {
    name: "Accessories",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop",
    href: "/category/accessories",
  },
  {
    name: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000&auto=format&fit=crop",
    href: "/category/beauty",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Hero image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        <div className="g-container relative z-10 text-white">
          <div className="max-w-xl">
            <h1 className="g-heading text-4xl md:text-5xl lg:text-6xl mb-4">
              Elegance in Every Detail
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover our new collection of sophisticated styles for the modern
              woman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/category/new-arrivals" className="g-button-primary">
                Shop New Arrivals
              </Link>
              <Link
                href="/collections"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white hover:text-neutral-900 transition-colors duration-300 font-medium"
              >
                Explore Collections
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-16 bg-neutral-100">
        <div className="g-container">
          <h2 className="g-heading text-3xl text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href} className="group">
                <div className="relative h-80 overflow-hidden rounded-md g-card">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-white text-xl font-medium">
                      {category.name}
                    </h3>
                    <p className="text-white/80 group-hover:text-white mt-2 flex items-center">
                      Shop Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 group-hover:ml-2 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products section */}
      <section className="py-16">
        <div className="g-container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="g-heading text-3xl">Featured Products</h2>
            <Link
              href="/products"
              className="text-primary hover:text-primary-dark flex items-center"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="g-card group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <button className="bg-white rounded-full p-2 shadow-soft hover:shadow-medium transition-shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-neutral-700 hover:text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-neutral-600 mb-1">
                    {product.category}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-neutral-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <button className="text-primary hover:text-primary-dark">
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Collection banner */}
      <section className="py-16 bg-neutral-100">
        <div className="g-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="g-heading text-3xl mb-4">
                Summer Collection 2025
              </h2>
              <p className="text-neutral-700 mb-6">
                Discover our latest summer collection featuring lightweight
                fabrics, breathable designs, and vibrant colors perfect for the
                season.
              </p>
              <Link
                href="/collections/summer"
                className="g-button-primary inline-block"
              >
                Explore Collection
              </Link>
            </div>
            <div className="relative h-96 rounded-md overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop"
                alt="Summer Collection"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-primary text-white">
        <div className="g-container text-center">
          <h2 className="g-heading text-3xl mb-4">Join Our Community</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for exclusive offers, style tips, and
            first access to new collections.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-neutral-800"
                required
              />
              <button
                type="submit"
                className="bg-neutral-900 text-white px-6 py-3 rounded-r-md hover:bg-neutral-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Instagram feed section */}
      <section className="py-16">
        <div className="g-container text-center">
          <h2 className="g-heading text-3xl mb-4">Follow Us on Instagram</h2>
          <p className="text-neutral-700 max-w-2xl mx-auto mb-8">
            @graceandcarry
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <a
                key={item}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={`https://source.unsplash.com/random/300x300?fashion&sig=${item}`}
                  alt="Instagram post"
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
