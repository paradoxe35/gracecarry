"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

// Define the type for order items
interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the type for address
interface Address {
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

// Define the type for order data
interface Order {
  id: string;
  date: string;
  status: string;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: string;
  shippingMethod: string;
  total: number;
  items: OrderItem[];
}

// Mock order data (same as in account page)
const orderData: Order[] = [
  {
    id: "ORD-12345",
    date: "2025-04-15",
    status: "Delivered",
    shippingAddress: {
      name: "Jane Doe",
      street: "123 Fashion Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
    },
    billingAddress: {
      name: "Jane Doe",
      street: "456 Style Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "United States",
    },
    paymentMethod: "Credit Card ending in 4242",
    shippingMethod: "Standard Shipping",
    total: 339.98,
    items: [
      {
        id: 1,
        name: "Silk Wrap Dress",
        price: 189.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Leather Tote Bag",
        price: 149.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "ORD-12346",
    date: "2025-03-28",
    status: "Delivered",
    shippingAddress: {
      name: "Jane Doe",
      street: "789 Style Lane",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "United States",
    },
    billingAddress: {
      name: "Jane Doe",
      street: "910 Fashion Blvd",
      city: "San Francisco",
      state: "CA",
      zipCode: "94101",
      country: "United States",
    },
    paymentMethod: "PayPal",
    shippingMethod: "Express Shipping",
    total: 219.99,
    items: [
      {
        id: 4,
        name: "Leather Ankle Boots",
        price: 219.99,
        quantity: 1,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop",
      },
    ],
  },
];

const getOrderById = (id: string): Order | undefined => {
  return orderData.find((order) => order.id === id);
};

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const defaultOrder: Order = {
  id: "",
  date: "",
  status: "",
  shippingAddress: {
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  billingAddress: {
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  },
  paymentMethod: "",
  shippingMethod: "",
  total: 0,
  items: [],
};

export default function OrderDetailsPage({ params: paramsPromise }: Props) {
  const params = React.use(paramsPromise);

  const [order, setOrder] = useState<Order>(defaultOrder);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const orderId = params.id;
    const foundOrder = getOrderById(orderId);

    if (foundOrder) {
      setOrder(foundOrder);
    }

    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="g-container py-12 text-center">
        <p>Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">Order Details</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="md:flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-medium mb-1">Order #{order.id}</h2>
            <p className="text-neutral-600">
              Placed on{" "}
              {new Date(order.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span
              className={`px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium`}
            >
              {order.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-medium mb-3">Shipping Information</h3>
            <div className="text-neutral-700">
              <p className="font-medium">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.street}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                {order.shippingAddress.zipCode}
              </p>
              <p>{order.shippingAddress.country}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Billing Information</h3>
            <div className="text-neutral-700">
              <p className="font-medium">{order.billingAddress.name}</p>
              <p>{order.billingAddress.street}</p>
              <p>
                {order.billingAddress.city}, {order.billingAddress.state}{" "}
                {order.billingAddress.zipCode}
              </p>
              <p>{order.billingAddress.country}</p>
            </div>
          </div>
        </div>

        <h3 className="font-medium mb-4">Order Items</h3>
        <div className="border border-neutral-200 rounded-md overflow-hidden mb-6">
          {order.items.map((item) => (
            <div
              key={item.id}
              className={`p-4 flex items-center border-b border-neutral-200 last:border-b-0`}
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
              <div className="ml-4 flex-grow">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-neutral-600">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 p-4 rounded-md">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-neutral-600">Subtotal</span>
              <span className="font-medium">${order.total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-600">Shipping</span>
              <span className="font-medium">Free</span>
            </div>

            <div className="flex justify-between">
              <span className="text-neutral-600">Tax</span>
              <span className="font-medium">$0.00</span>
            </div>

            <div className="border-t border-neutral-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button variant="primary" href="/account/orders">
          Back to Order History
        </Button>
        <Button
          variant="secondary"
          href="https://www.example.com/track-package"
        >
          Track Package
        </Button>
      </div>
    </div>
  );
}
