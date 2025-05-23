"use client";

import { useState } from "react";
import LocalizedLink from "@/components/ui/LocalizedLink";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { BRAND_NAME, SUPPORT_CONTACT } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const tFooter = useTranslations("Footer");
  const tAccount = useTranslations("AccountPage");
  const tForgotPassword = useTranslations("ForgotPasswordPage");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setError(t("formErrorRequired"));
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      // In a real app, this would submit the form data to a backend API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        orderNumber: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(tForgotPassword("errorMessage")); // Reusing generic error
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="g-container py-12">
      <h1 className="g-heading text-3xl mb-6">{tFooter("helpContactUs")}</h1>

      <div className="bg-white rounded-md shadow-soft p-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-medium mb-6">{t("getIntouchHeading")}</h2>
            <p className="text-neutral-700 mb-8">
              {t("getIntouchParagraph")}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">{t("emailHeading")}</h3>
                  <p className="text-neutral-600 mt-2 mb-1">
                    {t("emailDescription")}
                  </p>
                  <a
                    href={`mailto:${SUPPORT_CONTACT}`}
                    className="text-primary hover:underline"
                  >
                    {SUPPORT_CONTACT}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">{t("callHeading")}</h3>
                  <p className="text-neutral-600 mb-1">{t("callDescription")}</p>
                  <a
                    href="tel:+18001234567"
                    className="text-primary hover:underline"
                  >
                    1-800-123-4567 {/* Keep phone number hardcoded */}
                  </a>
                  <p className="text-neutral-600 mt-2 mb-1">
                    {t("callHoursHeading")}
                  </p>
                  <p className="text-neutral-700">
                    {t("callHoursWeekdays")}
                    <br />
                    {t("callHoursWeekends")}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">{t("addressHeading")}</h3>
                  <p className="text-neutral-700">
                    {t("addressLine1", { brandName: BRAND_NAME })}
                    <br />
                    {t("addressLine2")}
                    <br />
                    {t("addressLine3")}
                    <br />
                    {t("addressLine4")}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium mb-1">{t("chatHeading")}</h3>
                  <p className="text-neutral-600 mb-3">
                    {t("chatDescription")}
                  </p>
                  <Button variant="outline" size="sm">
                    {t("chatButton")}
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-3">{t("connectHeading")}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary"
                  aria-label={tFooter("instagramAriaLabel")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary"
                  aria-label={tFooter("facebookAriaLabel")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary"
                  aria-label={tFooter("pinterestAriaLabel")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 hover:text-primary"
                  aria-label={tFooter("twitterAriaLabel")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-medium mb-6">{t("formHeading")}</h2>

            {isSubmitted ? (
              <div className="bg-success/10 text-success p-6 rounded-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center mr-4">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium">
                    {t("formSuccessHeading")}
                  </h3>
                </div>
                <p className="mb-4">
                  {t("formSuccessMessage")}
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  {t("formSuccessButton")}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="bg-error/10 text-error p-4 rounded-md mb-6">
                    {error}
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t("formLabelName")}
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />

                    <Input
                      label={tAccount("profileFormEmailLabel")}
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label={t("formLabelOrderNumber")}
                      name="orderNumber"
                      type="text"
                      value={formData.orderNumber}
                      onChange={handleInputChange}
                    />

                    <div>
                      <label className="block text-neutral-800 font-medium mb-1 text-sm">
                        {t("formLabelSubject")}
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      >
                        <option value="">{t("formSubjectPlaceholder")}</option>
                        <option value="Order Inquiry">{t("formSubjectOrder")}</option>
                        <option value="Product Question">{t("formSubjectProduct")}</option>
                        <option value="Shipping & Delivery">{t("formSubjectShipping")}</option>
                        <option value="Returns & Exchanges">{t("formSubjectReturns")}</option>
                        <option value="Account Issues">{t("formSubjectAccount")}</option>
                        <option value="Feedback">{t("formSubjectFeedback")}</option>
                        <option value="Other">{t("formSubjectOther")}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-800 font-medium mb-1 text-sm">
                      {t("formLabelMessage")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                </div>

                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? t("formSubmitButtonLoading") : t("formSubmitButton")}
                </Button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-medium mb-6">
            {t("faqHeading")}
          </h2>
          <p className="text-neutral-700 mb-6">
            {t("faqParagraph")}{" "}
            <LocalizedLink href="/faq" className="text-primary hover:underline">
              {t("faqLinkText")}
            </LocalizedLink>
            .
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">
                {t("faq1Question")}
              </h3>
              <p className="text-neutral-600">
                {t("faq1Answer")}
              </p>
              <LocalizedLink
                href="/shipping"
                className="text-primary hover:underline text-sm mt-2 inline-block"
              >
                {t("faqLearnMoreLink")}
              </LocalizedLink>
            </div>

            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">{t("faq2Question")}</h3>
              <p className="text-neutral-600">
                {t("faq2Answer")}
              </p>
              <LocalizedLink
                href="/shipping"
                className="text-primary hover:underline text-sm mt-2 inline-block"
              >
                {t("faqLearnMoreLink")}
              </LocalizedLink>
            </div>

            <div className="border border-neutral-200 rounded-md p-4">
              <h3 className="font-medium mb-2">{t("faq3Question")}</h3>
              <p className="text-neutral-600">
                {t("faq3Answer")}
              </p>
              <LocalizedLink
                href="/size-guide"
                className="text-primary hover:underline text-sm mt-2 inline-block"
              >
                {t("faqSizeGuideLink")}
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
