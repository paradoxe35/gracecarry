"use server";

import { sdk } from "@/lib/config";

export default async function loginAction({email, password, rememberMe}: {email: string, password: string, rememberMe: boolean}) {
    // Validate input
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Simulate API call
    const loginResult = await sdk.auth.login("customer", "emailpass", {
      email, password, remember_me: rememberMe,
    });
    return loginResult;
}