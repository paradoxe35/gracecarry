"use client";
import newsLetter from "@/actions/home/newsLetter";
import { useTranslations } from "next-intl";
import { useActionState } from "react";
import Button from "@/components/ui/Button";

export default function NewsLetterSection() {
  const t = useTranslations("HomePage");
  const tFooter = useTranslations("Footer");
  const [message, formAction, isLoading] = useActionState(newsLetter, null);
  return (
    <section className="py-16 bg-primary text-white">
      <div className="g-container text-center">
        <h2 className="g-heading text-3xl mb-4">{t("newsletterHeading")}</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          {tFooter("newsletterDescription")} {/* Reusing from Footer */}
        </p>
        {message?.error && (
          <div className="bg-error/10 text-error p-4 rounded-md mb-6">
            {message.error}
          </div>
        )}
        {message?.success && (
          <div className="bg-success/10 text-success p-4 rounded-md mb-6">
            {message.success}
          </div>
        )}
        <form className="max-w-md mx-auto" action={formAction}>
          <div className="flex">
            <input
              type="email"
              placeholder={tFooter("newsletterPlaceholder")}
              className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-neutral-800"
              required
            />
            {/* to remove */}
            {/* <button
              type="submit"
              className="bg-neutral-900 text-white px-6 py-3 rounded-r-md hover:bg-neutral-800 transition-colors"
            >
              {tFooter("newsletterButton")}
            </button> */}
            {/* to keep */}
            <Button type="submit" variant="neutral" disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : tFooter("newsletterButton")}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
