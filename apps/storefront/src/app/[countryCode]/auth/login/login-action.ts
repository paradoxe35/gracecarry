"use server";

import { medusa } from "../../../../../medusa-client";

export default async function loginAction({email, password, rememberMe}: {email: string, password: string, rememberMe: boolean}) {
    // Validate input
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  // Simulate API call
    const loginResult = await medusa.auth.login("customer", "emailpass", {
      email, password, remember_me: rememberMe,
    });
    return loginResult;
}