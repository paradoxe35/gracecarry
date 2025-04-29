"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LocalizedLink from "@/components/ui/LocalizedLink";
import { useTranslations } from "next-intl";

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Silk Wrap Dress",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000&auto=format&fit=crop",
    color: "Burgundy",
    size: "M",
    quantity: 1,
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
    color: "Black",
    size: "One Size",
    quantity: 1,
  },
];

export default function CartPage() {
  const t = useTranslations("CartPage");
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoDiscount, setPromoDiscount] = useState(0);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Shipping cost (free over $100)
  const shippingCost = subtotal > 100 ? 0 : 9.99;

  // Calculate total
  const total = subtotal + shippingCost - promoDiscount;

  // Update item quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromoCode = () => {
    // Mock promo code logic
    if (promoCode.toUpperCase() === "WELCOME10") {
      const discount = subtotal * 0.1; // 10% discount
      setPromoDiscount(discount);
      setPromoApplied(true);
    } else {
      setPromoApplied(false);
      setPromoDiscount(0);
      alert(t("promoCodeInvalidAlert"));
    }
  };

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-8">{t("pageHeading")}</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md shadow-soft overflow-hidden">
              {/* Cart header */}
              <div className="bg-neutral-100 p-4 border-b border-neutral-200">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-6">
                    <h2 className="font-medium">{t("tableHeaderProduct")}</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="font-medium">{t("tableHeaderPrice")}</h2>
                  </div>
                  <div className="col-span-2 text-center">
                    <h2 className="font-medium">{t("tableHeaderQuantity")}</h2>
                  </div>
                  <div className="col-span-2 text-right">
                    <h2 className="font-medium">{t("tableHeaderTotal")}</h2>
                  </div>
                </div>
              </div>

              {/* Cart items */}
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-b border-neutral-200">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Product info */}
                    <div className="col-span-6">
                      <div className="flex items-center">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-md"
                          />
                        </div>
                        <div className="ml-4">
                          <LocalizedLink
                            href={`/product/${item.id}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.name}
                          </LocalizedLink>
                          <div className="text-sm text-neutral-600 mt-1">
                            <p>{t("itemColorPrefix")} {item.color}</p>
                            <p>{t("itemSizePrefix")} {item.size}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-primary hover:underline mt-2"
                          >
                            {t("itemRemoveButton")}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="col-span-2 text-center">
                      <p>${item.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-2 text-center">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 border border-neutral-300 rounded-l-md flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                          disabled={item.quantity <= 1}
                          aria-label={t("quantityDecreaseAriaLabel")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, parseInt(e.target.value))
                          }
                          className="w-10 h-8 border-t border-b border-neutral-300 text-center focus:outline-none"
                          aria-label={t("quantityInputAriaLabel")}
                        />
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 border border-neutral-300 rounded-r-md flex items-center justify-center text-neutral-600 hover:bg-neutral-100"
                          aria-label={t("quantityIncreaseAriaLabel")}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6v12M6 12h12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 text-right">
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue shopping */}
              <div className="p-4">
                <LocalizedLink
                  href="/category/new-arrivals"
                  className="text-primary hover:underline flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {t("continueShoppingLink")}
                </LocalizedLink>
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md shadow-soft p-6">
              <h2 className="font-medium text-xl mb-4">{t("summaryHeading")}</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600">{t("summarySubtotalLabel")}</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-600">{t("summaryShippingLabel")}</span>
                  <span className="font-medium">
                    {shippingCost === 0
                      ? t("summaryShippingFree")
                      : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-primary">
                    <span>{t("summaryDiscountLabel", { percent: 10 })}</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-neutral-200 pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-medium">{t("summaryTotalLabel")}</span>
                    <span className="font-medium text-lg">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  {t("promoCodeLabel")}
                </label>
                <div className="flex">
                  <Input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder={t("promoCodePlaceholder")}
                    className="rounded-r-none"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="bg-primary text-white px-4 rounded-r-md hover:bg-primary-dark transition-colors"
                  >
                    {t("promoCodeApplyButton")}
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-primary text-sm mt-1">
                    {t("promoCodeSuccessMessage")}
                  </p>
                )}
              </div>

              {/* Checkout button */}
              <Button variant="primary" fullWidth href="/checkout">
                {t("checkoutButton")}
              </Button>

              {/* Payment methods */}
              <div className="mt-6">
                <p className="text-sm text-neutral-600 mb-2">{t("paymentMethodsLabel")}</p>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                  <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                  <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                  <div className="w-10 h-6 bg-neutral-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-md shadow-soft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-neutral-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <h2 className="text-2xl font-medium mb-2">{t("emptyCartHeading")}</h2>
          <p className="text-neutral-600 mb-6">
            {t("emptyCartText")}
          </p>
          <Button variant="primary" href="/category/new-arrivals">
            {t("emptyCartButton")}
          </Button>
        </div>
      )}
    </div>
  );
}
