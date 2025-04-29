import deepmerge from "deepmerge";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import { DEFAULT_LOCALE, LOCALE_COOKIE_NAME, LOCALES } from "./constants";

// Function to get locale from headers
function getLocale(requestHeaders: Headers): string {
  // 1. Check custom header first
  const customLocale = requestHeaders.get(LOCALE_COOKIE_NAME);
  if (customLocale && LOCALES.includes(customLocale as any)) {
    console.log(`Using custom locale from X-User-Locale: ${customLocale}`);
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
      console.log(`Using locale from Accept-Language: ${matchedLocale}`);
      return matchedLocale;
    } catch (e) {
      // Log error but fallback to default
      console.warn("Locale matching failed, falling back to default:", e);
    }
  }

  // 3. Fallback to default locale
  console.log(`Falling back to default locale: ${DEFAULT_LOCALE}`);
  return DEFAULT_LOCALE;
}

export default getRequestConfig(async () => {
  const requestHeaders = await headers();
  const locale = getLocale(requestHeaders);

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
