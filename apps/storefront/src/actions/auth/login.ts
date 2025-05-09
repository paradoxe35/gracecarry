"use server";

import { sdk } from "@/lib/config";
import { getCacheTag, setAuthToken } from "@/lib/data/cookies";
import { each } from "lodash";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import getZErrors from "../getZErrors";

export default async function login(__currentState: unknown, formData: FormData) {
    
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const rememberMe = formData.get("rememberMe") as string;

    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });
    // Validate input
    const validData = loginSchema.safeParse({email, password, rememberMe});
    if (validData.success !== true)
        return {error: getZErrors(validData)};
    try {
        // Perform login logic here
        await sdk.auth.login("customer", "emailpass", {
            email, password, remember_me: rememberMe})
                .then(async (token) => {
                    await setAuthToken(token as string);
                    const cache = await getCacheTag("customers");
                    revalidateTag(cache);
                });
        return {success: "Login successful!"};
    }
    catch (error) {
        // console.error("Login failed:", error);
        return {error: "Login failed. Please try again."};
    }
}