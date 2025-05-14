"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Button from "../ui/Button";
import LocalizedLink from "../ui/LocalizedLink";
import Image from "next/image";
import { StoreCustomer, StoreOrder } from "@medusajs/types";
import logout from "@/actions/auth/logout";
import EditProfile from "./EditProfile";

// Mock user data
const userDatax = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane.doe@example.com",
  phone: "+1 (555) 123-4567",
  addresses: [
    {
      id: 1,
      type: "Shipping",
      name: "Jane Doe",
      street: "123 Fashion Avenue",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States",
      isDefault: true,
    },
    {
      id: 2,
      type: "Billing",
      name: "Jane Doe",
      street: "456 Style Street",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001",
      country: "United States",
      isDefault: true,
    },
  ],
  orders: [
    {
      id: "ORD-12345",
      date: "2025-04-15",
      status: "Delivered",
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
  ],
  wishlist: [
    {
      id: 3,
      name: "Cashmere Sweater",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      category: "Tops",
    },
    {
      id: 6,
      name: "Gold Hoop Earrings",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1630020085330-9a05a55441ca?q=80&w=1000&auto=format&fit=crop",
      category: "Jewelry",
      discount: 10,
    },
  ],
};

export interface StoreCustomerWithOrders extends StoreCustomer {
  orders: StoreOrder[];
}

export default function AccountElement({
  customer,
}: {
  customer: StoreCustomerWithOrders;
}) {
  const t = useTranslations("AccountPage");
  const userData = {
    ...customer,
  };
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: customer.first_name ?? "",
    lastName: customer.last_name ?? "",
    email: customer.email ?? "",
    phone: customer.phone ?? "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would update the user's profile
    setIsEditing(false);
  };

  const handleLogout = logout;

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-8">{t("pageHeading")}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-md shadow-soft overflow-hidden">
            <div className="p-6 border-b border-neutral-200">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-medium text-lg">
                  {userData.first_name?.charAt(0)}
                  {userData.last_name?.charAt(0)}
                </div>
                <div className="ml-4">
                  <h2 className="font-medium">
                    {userData.first_name} {userData.last_name}
                  </h2>
                  <p className="text-sm text-neutral-600">{userData.email}</p>
                </div>
              </div>
            </div>

            <nav className="p-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                  activeTab === "profile"
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  {t("sidebarProfile")}
                </div>
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                  activeTab === "orders"
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  {t("sidebarOrders")}
                </div>
              </button>

              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                  activeTab === "addresses"
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {t("sidebarAddresses")}
                </div>
              </button>

              <button
                onClick={() => setActiveTab("wishlist")}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                  activeTab === "wishlist"
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-neutral-100"
                }`}
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
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
                  {t("sidebarWishlist")}
                </div>
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 rounded-md hover:bg-neutral-100 transition-colors text-neutral-700"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  {t("sidebarLogout")}
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-md shadow-soft p-6">
            {/* Profile tab */}
            {activeTab === "profile" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">{t("profileHeading")}</h2>
                  {!isEditing && (
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(true)}
                    >
                      {t("profileEditButton")}
                    </Button>
                  )}
                </div>

                {isEditing ? (
                  <EditProfile
                    setIsEditing={setIsEditing}
                    userData={userData}
                  />
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm text-neutral-600 mb-1">
                          {t("profileDisplayFirstNameLabel")}
                        </h3>
                        <p>{userData.first_name}</p>
                      </div>

                      <div>
                        <h3 className="text-sm text-neutral-600 mb-1">
                          {t("profileDisplayLastNameLabel")}
                        </h3>
                        <p>{userData.last_name}</p>
                      </div>

                      <div>
                        <h3 className="text-sm text-neutral-600 mb-1">
                          {t("profileDisplayEmailLabel")}
                        </h3>
                        <p>{userData.email}</p>
                      </div>

                      <div>
                        <h3 className="text-sm text-neutral-600 mb-1">
                          {t("profileDisplayPhoneLabel")}
                        </h3>
                        <p>{userData.phone}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Orders tab */}
            {activeTab === "orders" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {t("ordersHeading")}
                </h2>

                {userData.orders.length > 0 ? (
                  <div className="space-y-6">
                    {userData.orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-neutral-200 rounded-md overflow-hidden"
                      >
                        <div className="bg-neutral-100 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                          <div>
                            <div className="flex items-center">
                              <h3 className="font-medium">{order.id}</h3>
                              <span
                                className={`ml-3 px-2 py-1 text-xs rounded-full ${
                                  order.status === "Delivered"
                                    ? "bg-success/20 text-success"
                                    : order.status === "Processing"
                                      ? "bg-info/20 text-info"
                                      : order.status === "Shipped"
                                        ? "bg-primary/20 text-primary"
                                        : "bg-neutral-200 text-neutral-700"
                                }`}
                              >
                                {t(`orderStatus${order.status}` as any)}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-600 mt-1">
                              {t("orderDatePrefix")}{" "}
                              {new Date(order.date).toLocaleDateString(
                                "en-US",
                                {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <p className="font-medium">
                              ${order.total.toFixed(2)}
                            </p>
                          </div>
                        </div>

                        <div className="p-4">
                          <div className="space-y-4">
                            {order.items?.map((item) => (
                              <div key={item.id} className="flex items-center">
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
                                  <LocalizedLink
                                    href={`/product/${item.id}`}
                                    className="font-medium hover:text-primary transition-colors"
                                  >
                                    {item.name}
                                  </LocalizedLink>
                                  <p className="text-sm text-neutral-600">
                                    {t("orderQuantityPrefix")} {item.quantity}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">
                                    ${item.price.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-neutral-50 p-4 flex justify-between border-t border-neutral-200">
                          <Button
                            variant="outline"
                            href={`/account/orders/${order.id}`}
                          >
                            {t("orderViewDetailsButton")}
                          </Button>
                          <Button variant="secondary">
                            {t("orderTrackPackageButton")}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-neutral-400 mb-4"
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
                    <h3 className="text-lg font-medium mb-2">
                      {t("ordersEmptyHeading")}
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      {t("ordersEmptyText")}
                    </p>
                    <Button variant="primary" href="/category/new-arrivals">
                      {t("ordersEmptyButton")}
                    </Button>
                  </div>
                )}
              </div>
            )}

            {/* Addresses tab */}
            {activeTab === "addresses" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-medium">
                    {t("addressesHeading")}
                  </h2>
                  <Button variant="primary">{t("addressesAddButton")}</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {userData.addresses.map((address) => (
                    <div
                      key={address.id}
                      className="border border-neutral-200 rounded-md p-4"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-medium">
                            {t(`addressType${address.type}` as any)}
                          </h3>
                          {address.isDefault && (
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                              {t("addressDefaultBadge")}
                            </span>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            className="text-neutral-600 hover:text-primary"
                            aria-label={t("addressEditAriaLabel")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </button>
                          <button
                            className="text-neutral-600 hover:text-error"
                            aria-label={t("addressDeleteAriaLabel")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="text-neutral-700">
                        <p className="font-medium">{address.name}</p>
                        <p>{address.street}</p>
                        <p>
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                        <p>{address.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Wishlist tab */}
            {activeTab === "wishlist" && (
              <div>
                <h2 className="text-xl font-medium mb-6">
                  {t("wishlistHeading")}
                </h2>

                {userData.wishlist.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userData.wishlist.map((product) => (
                      <div
                        key={product.id}
                        className="border border-neutral-200 rounded-md overflow-hidden"
                      >
                        <div className="relative h-48">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <button
                            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-soft hover:text-error"
                            aria-label={t("wishlistRemoveAriaLabel")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="p-4">
                          <LocalizedLink
                            href={`/product/${product.id}`}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {product.name}
                          </LocalizedLink>
                          <p className="text-sm text-neutral-600 mt-1">
                            {product.category}
                          </p>

                          <div className="flex justify-between items-center mt-3">
                            <div>
                              {product.discount ? (
                                <div className="flex items-center">
                                  <span className="font-medium text-primary">
                                    $
                                    {(
                                      product.price -
                                      product.price * (product.discount / 100)
                                    ).toFixed(2)}
                                  </span>
                                  <span className="text-neutral-500 line-through ml-2 text-sm">
                                    ${product.price.toFixed(2)}
                                  </span>
                                </div>
                              ) : (
                                <span className="font-medium">
                                  ${product.price.toFixed(2)}
                                </span>
                              )}
                            </div>

                            <Button variant="primary" size="sm">
                              {t("wishlistAddToCartButton")}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto text-neutral-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <h3 className="text-lg font-medium mb-2">
                      {t("wishlistEmptyHeading")}
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      {t("wishlistEmptyText")}
                    </p>
                    <Button variant="primary" href="/category/new-arrivals">
                      {t("wishlistEmptyButton")}
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
