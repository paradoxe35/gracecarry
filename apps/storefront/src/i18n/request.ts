import deepmerge from "deepmerge";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { DEFAULT_LOCALE, LOCALES } from "./constants";
import { getLocaleFromCookie } from "./selector";

// Function to get locale from headers
async function getLocale(requestHeaders: Headers): Promise<string> {
  // 1. Check custom header first
  const customLocale = await getLocaleFromCookie();
  if (customLocale && LOCALES.includes(customLocale as any)) {
    return customLocale;
  }

  // 2. Check Accept-Language header
  const acceptLanguage = requestHeaders.get("accept-language");
  if (acceptLanguage) {
    const negotiatorHeaders: Record<string, string> = {
      "accept-language": acceptLanguage,
    };
    // Use Negotiator to parse the header quality values
    const languages = new Negotiator({
      headers: negotiatorHeaders,
    }).languages();

    try {
      // Use intl-localematcher to find the best match
      const matchedLocale = match(languages, [...LOCALES], DEFAULT_LOCALE);
      return matchedLocale;
    } catch (e) {
      // Log error but fallback to default
      console.warn("Locale matching failed, falling back to default:", e);
    }
  }

  return DEFAULT_LOCALE;
}

export default getRequestConfig(async () => {
  const requestHeaders = await headers();
  const locale = await getLocale(requestHeaders);

  // Load messages for the determined locale
  // Ensure messages for the default locale are always loaded as a base
  const defaultMessages = (
    await import(`../../messages/${DEFAULT_LOCALE}.json`)
  ).default;

  let userMessages = {};
  if (locale !== DEFAULT_LOCALE) {
    try {
      userMessages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
      console.warn(
        `Could not load messages for locale "${locale}", falling back to default messages.`,
        error
      );
    }
  }

  const messages = deepmerge(defaultMessages, userMessages) as any;

  return {
    locale,
    messages,
  };
});
