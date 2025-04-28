'use client';

import Image from 'next/image';
import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from '@/components/ui/Button';

// Mock collections data
const collectionsData = [
  {
    id: 'summer-2025',
    name: 'Summer Collection 2025',
    description: 'Discover our latest summer collection featuring lightweight fabrics, breathable designs, and vibrant colors perfect for the season.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'spring-essentials',
    name: 'Spring Essentials',
    description: 'Embrace the season with our curated selection of spring essentials, featuring floral prints, pastel hues, and versatile layers.',
    image: 'https://images.unsplash.com/photo-1523381294911-8cd694c2b6ca?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'workwear-edit',
    name: 'Workwear Edit',
    description: 'Elevate your office style with our workwear edit, featuring tailored blazers, sophisticated dresses, and comfortable separates.',
    image: 'https://images.unsplash.com/photo-1495384999718-16f652256402?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'athleisure-collection',
    name: 'Athleisure Collection',
    description: 'Stay comfortable and stylish with our athleisure collection, featuring performance fabrics, relaxed silhouettes, and versatile designs.',
    image: 'https://images.unsplash.com/photo-1541643690-c7a9449e5b65?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function CollectionsPage() {
  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-8">Our Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectionsData.map((collection) => (
          <LocalizedLink key={collection.id} href={`/collections/${collection.id}`} className="g-card group">
            <div className="relative h-80 overflow-hidden">
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-medium">{collection.name}</h3>
                <p className="text-white/80 group-hover:text-white mt-2 flex items-center">
                  Shop Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">{collection.name}</h3>
              <p className="text-neutral-600">{collection.description}</p>
            </div>
          </LocalizedLink>
        ))}
      </div>
    </div>
  );
}