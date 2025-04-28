'use client';

import { useEffect, useState } from 'react';
import LocalizedLink from "@/components/ui/LocalizedLink";
import Image from 'next/image';
import Button from '@/components/ui/Button';

// Mock wishlist data (same as in account page)
const wishlistData = [
  {
    id: 3,
    name: 'Cashmere Sweater',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop',
    category: 'Tops',
  },
  {
    id: 6,
    name: 'Gold Hoop Earrings',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1630020085330-9a05a55441ca?q=80&w=1000&auto=format&fit=crop',
    category: 'Jewelry',
    discount: 10,
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(wishlistData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading wishlist data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="g-container py-12 text-center">
        <p>Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">My Wishlist</h1>

      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="border border-neutral-200 rounded-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-soft hover:text-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <LocalizedLink href={`/product/${product.id}`} className="font-medium hover:text-primary transition-colors">
                  {product.name}
                </LocalizedLink>
                <p className="text-sm text-neutral-600 mt-1">{product.category}</p>

                <div className="flex justify-between items-center mt-3">
                  <div>
                    {product.discount ? (
                      <div className="flex items-center">
                        <span className="font-medium text-primary">
                          ${(product.price - (product.price * (product.discount / 100))).toFixed(2)}
                        </span>
                        <span className="text-neutral-500 line-through ml-2 text-sm">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                    )}
                  </div>

                  <Button variant="primary" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-neutral-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-neutral-600 mb-6">Save items you love to your wishlist.</p>
          <Button variant="primary" href="/category/new-arrivals">
            Explore Products
          </Button>
        </div>
      )}
    </div>
  );
}