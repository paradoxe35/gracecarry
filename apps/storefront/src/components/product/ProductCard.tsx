'use client';

import { useState } from 'react';
import Image from 'next/image';
import LocalizedLink from "@/components/ui/LocalizedLink";
import { useTranslations } from 'next-intl';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    discount?: number;
    isNew?: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const t = useTranslations('ProductCard');
  const tAccount = useTranslations('AccountPage'); // For shared keys
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount && product.discount
    ? product.price - (product.price * (product.discount / 100))
    : product.price;

  return (
    <div 
      className="g-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <LocalizedLink href={`/product/${product.id}`}>
        <div className="relative h-80 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Product badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                {t('newBadge')}
              </span>
            )}
            {hasDiscount && (
              <span className="bg-error text-white text-xs font-medium px-2 py-1 rounded">
                -{product.discount}%
              </span>
            )}
          </div>
          
          {/* Quick actions */}
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={toggleWishlist}
              className="bg-white rounded-full p-2 shadow-soft hover:shadow-medium transition-shadow"
              aria-label={isWishlisted ? tAccount('wishlistRemoveAriaLabel') : t('wishlistAddAriaLabel')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ${isWishlisted ? 'text-primary fill-primary' : 'text-neutral-700'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={isWishlisted ? 0 : 2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                />
              </svg>
            </button>
          </div>
          
          {/* Quick add to cart button */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 p-3 transform transition-transform duration-300 ${
              isHovered ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
              {tAccount('wishlistAddToCartButton')}
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="text-sm text-neutral-600 mb-1">{product.category}</div>
          <h3 className="font-medium text-lg mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
          <div className="flex items-center">
            {hasDiscount ? (
              <>
                <span className="font-medium text-primary">${discountedPrice.toFixed(2)}</span>
                <span className="text-neutral-500 line-through ml-2 text-sm">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-medium text-neutral-900">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </LocalizedLink>
    </div>
  );
};

export default ProductCard;