"use client"; // Add use client directive

import Image from 'next/image';
import LocalizedLink from "@/components/ui/LocalizedLink";
import { useTranslations } from 'next-intl'; // Import useTranslations

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
    href: string;
    productCount?: number;
  };
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const t = useTranslations('CategoryCard');
  const tHome = useTranslations('HomePage'); // For reusing "Shop Now"

  return (
    <LocalizedLink href={category.href} className="group">
      <div className="relative h-80 overflow-hidden rounded-md g-card">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-white text-xl font-medium">{category.name}</h3>
          {category.productCount !== undefined && (
            <p className="text-white/80 mt-1">{t('productCount', { count: category.productCount })}</p>
          )}
          <p className="text-white/80 group-hover:text-white mt-2 flex items-center">
            {tHome('categoryShopNowLink')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      </div>
    </LocalizedLink>
  );
};

export default CategoryCard;