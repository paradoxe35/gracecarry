"use client";

import login from "@/actions/auth/login";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import LocalizedLink from "@/components/ui/LocalizedLink";
import { BRAND_NAME } from "@/lib/constants";
import { useTranslations } from "next-intl";
import { useActionState } from "react";

export default function LoginElement() {
  const t = useTranslations("LoginPage");
  const tAccount = useTranslations("AccountPage"); // For shared keys
  const tHeader = useTranslations("Header"); // For shared keys
  const [message, formAction, isLoading] = useActionState(login, null);

  return (
    <div className="g-container py-12">
      <div className="max-w-md mx-auto bg-white rounded-md shadow-soft p-8">
        <div className="text-center mb-8">
          <LocalizedLink href="/" className="inline-block">
            <h1 className="text-2xl font-serif font-medium text-primary">
              {BRAND_NAME}
            </h1>
          </LocalizedLink>
          <h2 className="text-2xl font-medium mt-6 mb-2">{t("heading")}</h2>
          <p className="text-neutral-600">{t("subheading")}</p>
        </div>

        {message?.error && (
          <div className="bg-error/10 text-error p-4 rounded-md mb-6">
            {message.error}
          </div>
        )}
        <form action={formAction}>
          <div className="space-y-4 mb-6">
            <Input
              label={tAccount("profileFormEmailLabel")}
              type="email"
              defaultValue={message?.data?.email}
              name="email"
              placeholder={t("emailPlaceholder")}
              required
              fullWidth
            />

            <Input
              label={t("passwordLabel")}
              type="password"
              name="password"
              defaultValue={message?.data?.password}
              placeholder={t("passwordPlaceholder")}
              required
              fullWidth
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  defaultChecked={message?.data?.rememberMe}
                  className="rounded text-primary focus:ring-primary mr-2"
                />
                <span className="text-sm text-neutral-700">
                  {t("rememberMeLabel")}
                </span>
              </label>

              <LocalizedLink
                href="/auth/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                {t("forgotPasswordLink")}
              </LocalizedLink>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? t("signInButtonLoading") : tHeader("accountSignIn")}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
          <p className="text-neutral-600 mb-4">{t("socialLoginSeparator")}</p>

          <div className="flex justify-center space-x-4">
            <button
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300 hover:bg-neutral-50 transition-colors"
              aria-label={t("googleSignInAriaLabel")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#4285F4]"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </button>

            <button
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300 hover:bg-neutral-50 transition-colors"
              aria-label={t("facebookSignInAriaLabel")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1877F2]"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button
              className="flex items-center justify-center w-12 h-12 rounded-full border border-neutral-300 hover:bg-neutral-50 transition-colors"
              aria-label={t("twitterSignInAriaLabel")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-neutral-600">
            {t("signUpPrompt")}{" "}
            <LocalizedLink
              href="/auth/signup"
              className="text-primary hover:underline"
            >
              {t("signUpLink")}
            </LocalizedLink>
          </p>
        </div>
      </div>
    </div>
  );
}
