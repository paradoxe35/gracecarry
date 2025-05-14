"use server";
import { sdk } from "@/lib/config"
import { getCacheTag, removeAuthToken, removeCartId } from "@/lib/data/cookies"
import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

// This function is called when the user clicks the logout button
// It will remove the auth token and cart id from the cookies
export default async function logout() {
    await sdk.auth.logout();
  
    await removeAuthToken();
  
    const customerCacheTag = await getCacheTag("customers");
    revalidateTag(customerCacheTag);
  
    await removeCartId();
  
    const cartCacheTag = await getCacheTag("carts");
    revalidateTag(cartCacheTag);
  
    redirect(`/auth/login`);
}