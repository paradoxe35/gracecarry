"use server";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setLocaleCookie } from "@/i18n/selector";
import { cookies } from "next/headers";

/**
 * Server Action to set the locale cookie.
 * @param locale The locale string to set (e.g., 'en', 'fr').
 * @param path The current path to revalidate after setting the cookie.
 */
export async function switchLocaleAction(locale: string, path: string) {
  const cookieStore = await cookies();

  try {
    await setLocaleCookie(locale, cookieStore);
    console.log(`Locale cookie set to: ${locale}`);
  } catch (error) {
    console.error("Failed to set locale cookie:", error);
    // Optionally handle the error, e.g., return an error state
    return { error: "Failed to switch language." };
  }

  //   revalidatePath(path);
  redirect(path);
}
