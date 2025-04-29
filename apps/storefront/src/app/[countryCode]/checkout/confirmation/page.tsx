"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

// Mock order data
const orderData = {
  id: "ORD-12347",
  date: new Date().toISOString(),
  status: "Processing",
  total: 339.98,
  subtotal: 339.98,
  shipping: 0,
  tax: 27.2,
  paymentMethod: "Credit Card ending in 4242",
  shippingMethod: "Standard",
  estimatedDelivery: new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000
  ).toISOString(), // 5 days from now
  items: [
    {
      id: 1,
      name: "Silk Wrap Dress",
      price: 189.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
      color: "Burgundy",
      size: "M",
    },
    {
      id: 2,
      name: "Leather Tote Bag",
      price: 149.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
      color: "Black",
      size: "One Size",
    },
  ],
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
    street: "123 Fashion Avenue",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  },
};

export default function OrderConfirmationPage() {
  const t = useTranslations("ConfirmationPage");
  const tAccount = useTranslations("AccountPage"); // For shared keys
  const tCart = useTranslations("CartPage"); // For shared keys
  const tCheckout = useTranslations("CheckoutPage"); // For shared keys
  const [order, setOrder] = useState(orderData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading order data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="g-container py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-neutral-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="h-4 bg-neutral-200 rounded w-1/2 mx-auto mb-4"></div>
          <div className="h-4 bg-neutral-200 rounded w-1/4 mx-auto mb-8"></div>
          <div className="h-64 bg-neutral-200 rounded max-w-2xl mx-auto mb-8"></div>
          <div className="h-12 bg-neutral-200 rounded w-1/4 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="g-container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="g-heading text-3xl mb-4">{t("heading")}</h1>
          <p className="text-neutral-600 text-lg mb-2">
            {t("thankYouMessage")}
          </p>
          <p className="text-neutral-600">{t("emailConfirmationMessage")}</p>
        </div>

        <div className="bg-white rounded-md shadow-soft overflow-hidden mb-8">
          <div className="bg-neutral-100 p-6 border-b border-neutral-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h2 className="font-medium text-xl mb-1">
                  {t("orderNumberPrefix")}
                  {order.id}
                </h2>
                <p className="text-neutral-600">
                  {tAccount("orderDatePrefix")}{" "}
                  {new Date(order.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div className="mt-4 sm:mt-0">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                  {tAccount(`orderStatus${order.status}` as any)}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-medium mb-3">
                  {tCheckout("shippingInfoHeading")}
                </h3>
                <div className="text-neutral-700">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                    {order.shippingAddress.zipCode}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-1">
                    {tCheckout("shippingMethodHeading")}
                  </h4>
                  <p className="text-neutral-700">
                    {tCheckout(
                      `shippingMethod${order.shippingMethod.replace(/\s+/g, "")}Name` as any
                    )}
                  </p>
                  <p className="text-neutral-600 text-sm mt-1">
                    {t("estimatedDeliveryPrefix")}{" "}
                    {new Date(order.estimatedDelivery).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">
                  {tCheckout("paymentInfoHeading")}
                </h3>
                <div className="text-neutral-700">
                  <p className="font-medium">{order.billingAddress.name}</p>
                  <p>{order.billingAddress.street}</p>
                  <p>
                    {order.billingAddress.city}, {order.billingAddress.state}{" "}
                    {order.billingAddress.zipCode}
                  </p>
                  <p>{order.billingAddress.country}</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-1">
                    {tCheckout("paymentMethodHeading")}
                  </h4>
                  <p className="text-neutral-700">{order.paymentMethod}</p>{" "}
                  {/* Assuming paymentMethod string is already formatted */}
                </div>
              </div>
            </div>

            <h3 className="font-medium mb-4">
              {tCheckout("reviewItemsHeading")}
            </h3>
            <div className="border border-neutral-200 rounded-md overflow-hidden mb-6">
              {order.items.map((item, index) => (
                <div
                  key={item.id}
                  className={`p-4 flex items-center ${
                    index < order.items.length - 1
                      ? "border-b border-neutral-200"
                      : ""
                  }`}
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
                    <div className="text-sm text-neutral-600">
                      <p>
                        {tCheckout("reviewItemDetails", {
                          color: item.color,
                          size: item.size,
                        })}
                      </p>
                      <p>
                        {tAccount("orderQuantityPrefix")} {item.quantity}
                      </p>
                    </div>
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
                  <span className="text-neutral-600">
                    {tCart("summarySubtotalLabel")}
                  </span>
                  <span className="font-medium">
                    ${order.subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-600">
                    {tCart("summaryShippingLabel")}
                  </span>
                  <span className="font-medium">
                    {order.shipping === 0
                      ? tCart("summaryShippingFree")
                      : `$${order.shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-600">
                    {tCheckout("summaryTaxLabel")}
                  </span>
                  <span className="font-medium">${order.tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-neutral-200 pt-2 mt-2">
                  <div className="flex justify-between">
                    <span className="font-medium">
                      {tCart("summaryTotalLabel")}
                    </span>
                    <span className="font-medium">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" href="/account/orders">
            {tAccount("orderViewDetailsButton")}
          </Button>
          <Button variant="secondary" href="/">
            {tCart("continueShoppingLink")}
          </Button>
        </div>
      </div>
    </div>
  );
}
