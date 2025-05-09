"use server";

import { sdk } from "@/lib/config";
import { getCacheTag, setAuthToken } from "@/lib/data/cookies";
import { revalidateTag } from "next/cache";
import { z } from "zod";

export default async function login(__currentState: unknown, formData: FormData) {
    
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("rememberMe") as string;

    // Validate input
    if (z.string().email().safeParse(email).success === false) {
        return {error: "Invalid email format"};
    }
    if (z.string().min(6).safeParse(password).success === false) {
        return {error: "Password must be at least 6 characters long"};
    }

    try {
        // Perform login logic here
        await sdk.auth.login("customer", "emailpass", {
            email, password, remember_me: rememberMe})
                .then(async (token) => {
                    await setAuthToken(token as string);
                    revalidateTag(await getCacheTag("customer"));
                });
        return {success: "Login successful!"};
    }
    catch (error) {
        console.error("Login failed:", error);
        return {error: "Login failed. Please try again."};
    }
}