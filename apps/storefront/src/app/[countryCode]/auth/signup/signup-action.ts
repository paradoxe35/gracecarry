"use server";

import { sdk } from "@/lib/config";


export default async function signupAction({email, password, firstName, lastName, confirmPassword, acceptTerms}: {email: string, password: string, firstName: string, lastName: string, confirmPassword: string, acceptTerms: boolean}) {
    // Validate input
  if (!email || !password || !firstName || !lastName || !confirmPassword) {
    throw new Error("Email and password are required");
  }
  else if (password !== confirmPassword) {
    throw new Error("Passwords do not match"); 
  }
  else if (!acceptTerms) {
    throw new Error("You must accept the terms and conditions"); 
  }

  // Simulate API call
    const signupResult = await sdk.auth.register("customer", "emailpass", {
      email, password, 
    });

    sdk.store.customer.create({
      first_name: firstName,
      last_name: lastName,
      email
    });
    return signupResult;
}