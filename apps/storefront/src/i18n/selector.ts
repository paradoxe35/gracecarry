import { cookies } from "next/headers";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { LOCALE_COOKIE_NAME } from "./constants";

/**
 * Gets the locale value from the request cookies.
 * Requires the Next.js `cookies()` function to be available (Server Components, Route Handlers, Server Actions).
 * @returns The locale string if found and valid, otherwise undefined.
 */
export async function getLocaleFromCookie(
  cookieStore?: RequestCookies | ResponseCookies
): Promise<string | undefined> {
  const store = cookieStore || (await cookies());
  return store.get(LOCALE_COOKIE_NAME)?.value;
}

/**
 * Sets the locale value in the response cookies.
 * Requires the Next.js `cookies()` function to be available (Server Components, Route Handlers, Server Actions).
 * @param locale The locale string to set.
 * @param cookieStore Optional cookie store instance (useful in Route Handlers/Server Actions).
 */
export async function setLocaleCookie(
  locale: string,
  cookieStore?: RequestCookies | ResponseCookies
): Promise<void> {
  const store = cookieStore || (await cookies());
  store.set(LOCALE_COOKIE_NAME, locale, {
    path: "/", // Make the cookie available across the entire site
    maxAge: 365 * 24 * 60 * 60, // 1 year expiration
    sameSite: "lax", // Recommended for security and usability
    // secure: process.env.NODE_ENV === 'production', // Set Secure flag in production (HTTPS)
    // httpOnly: true, // Recommended for security if cookie is only read server-side
  });
}

/**
 * Deletes the locale cookie.
 * Requires the Next.js `cookies()` function to be available (Server Components, Route Handlers, Server Actions).
 * @param cookieStore Optional cookie store instance (useful in Route Handlers/Server Actions).
 */
export async function deleteLocaleCookie(
  cookieStore?: RequestCookies | ResponseCookies
): Promise<void> {
  const store = cookieStore || (await cookies());
  store.delete(LOCALE_COOKIE_NAME);
}
