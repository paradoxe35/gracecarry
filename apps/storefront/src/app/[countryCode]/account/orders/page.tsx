'use client';

import { useEffect, useState } from 'react';
import LocalizedLink from "@/components/ui/LocalizedLink";
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useTranslations } from 'next-intl'; // Import useTranslations

// Mock order data (same as in account page)
const orderData = [
  {
    id: 'ORD-12345',
    date: '2025-04-15',
    status: 'Delivered', // Keep status key for logic
    total: 339.98,
    items: [
      {
        id: 1,
        name: 'Silk Wrap Dress', // Product names might need separate translation if dynamic
        price: 189.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop',
      },
      {
        id: 2,
        name: 'Leather Tote Bag', // Product names might need separate translation if dynamic
        price: 149.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop',
      },
    ],
  },
  {
    id: 'ORD-12346',
    date: '2025-03-28',
    status: 'Delivered', // Keep status key for logic
    total: 219.99,
    items: [
      {
        id: 4,
        name: 'Leather Ankle Boots', // Product names might need separate translation if dynamic
        price: 219.99,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop',
      },
    ],
  },
];

export default function OrdersPage() {
  const t = useTranslations('AccountPage'); // Initialize translation hook
  const [orders, setOrders] = useState(orderData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading order data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getStatusTranslationKey = (status: string) => {
    switch (status) {
      case 'Delivered': return 'orderStatusDelivered';
      case 'Processing': return 'orderStatusProcessing';
      case 'Shipped': return 'orderStatusShipped';
      default: return ''; // Handle unknown status if necessary
    }
  };

  if (isLoading) {
    return (
      <div className="g-container py-12 text-center">
        <p>{t('ordersLoadingMessage')}</p>
      </div>
    );
  }

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-8">{t('ordersPageHeading')}</h1>

      {orders.length > 0 ? (
        <div className="space-y-6">
          {orders.map((order) => {
            const statusKey = getStatusTranslationKey(order.status);
            return (
              <div key={order.id} className="border border-neutral-200 rounded-md overflow-hidden">
                <div className="bg-neutral-100 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-medium">{order.id}</h3>
                      {statusKey && (
                        <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
                          order.status === 'Delivered' ? 'bg-success/20 text-success' :
                          order.status === 'Processing' ? 'bg-info/20 text-info' :
                          order.status === 'Shipped' ? 'bg-primary/20 text-primary' :
                          'bg-neutral-200 text-neutral-700'
                        }`}>
                          {t(statusKey)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-600 mt-1">
                      {t('orderDatePrefix')} {new Date(order.date).toLocaleDateString('en-US', { // Consider locale for date formatting later
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <p className="font-medium">${order.total.toFixed(2)}</p> {/* Currency formatting might need i18n */}
                  </div>
                </div>

                <div className="p-4">
                  <div className="space-y-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name} // Alt text might need translation if product names are translated
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-md"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <LocalizedLink href={`/product/${item.id}`} className="font-medium hover:text-primary transition-colors">
                            {item.name} {/* Product names might need separate translation */}
                          </LocalizedLink>
                          <p className="text-sm text-neutral-600">{t('orderQuantityPrefix')} {item.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${item.price.toFixed(2)}</p> {/* Currency formatting might need i18n */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-neutral-50 p-4 flex justify-between border-t border-neutral-200">
                  <Button variant="outline" href={`/account/orders/${order.id}`}>
                    {t('orderViewDetailsButton')}
                  </Button>
                  <Button variant="secondary">
                    {t('orderTrackPackageButton')}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-neutral-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h3 className="text-lg font-medium mb-2">{t('ordersEmptyHeading')}</h3>
          <p className="text-neutral-600 mb-6">{t('ordersEmptyText')}</p>
          <Button variant="primary" href="/category/new-arrivals">
            {t('ordersEmptyButton')}
          </Button>
        </div>
      )}
    </div>
  );
}