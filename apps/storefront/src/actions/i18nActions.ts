"use server";

import { setLocaleCookie } from "@/i18n/selector";

/**
 * Server Action to set the locale cookie.
 * @param locale The locale string to set (e.g., 'en', 'fr').
 * @param path The current path to revalidate after setting the cookie.
 */
export async function switchLocaleAction(locale: string, path: string) {
  try {
    await setLocaleCookie(locale);
    console.log(`Locale cookie set to: ${locale}`);
  } catch (error) {
    console.error("Failed to set locale cookie:", error);
    // Optionally handle the error, e.g., return an error state
    return { error: "Failed to switch language." };
  }
}
