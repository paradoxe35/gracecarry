"use server";

import { z } from "zod";
import getZErrors from "../getZErrors";
import { sdk } from "@/lib/config";
import { getAuthHeaders, getCacheTag, setAuthToken } from "@/lib/data/cookies";
import { revalidateTag } from "next/cache";

export default async function register(__currentState: unknown, formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const phone = formData.get("phone") as string;
    const acceptTerms = formData.get("acceptTerms") as string;

    const registerSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        phone: z.string().optional(),
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        confirmPassword: z.string().min(6),
        acceptTerms: z.string().min(1, "You must accept the terms and conditions"),}).
        refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match", 
        path: ["confirmPassword"],});

    const validData = registerSchema.safeParse({email, password, firstName, lastName, confirmPassword, acceptTerms});
    if (validData.success !== true) {
        return {error: getZErrors(validData)+acceptTerms};
    }
    
    try {
        // Perform registration logic here
        const registerResult = await sdk.auth.register("customer", "emailpass", {
            email, password, 
        });

        await setAuthToken(registerResult as string);
        const cache = await getCacheTag("customers");
        const headers = {...(await getAuthHeaders()),};

        await sdk.store.customer.create({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
        }, {}, headers);
        await sdk.auth.login("customer", "emailpass", {
            email, password})
            .then(async (token) => {
                await setAuthToken(token as string);
                const cache = await getCacheTag("customers");
                revalidateTag(cache);
            });
        return {success: "Registration successful!"};
    } catch (error) {
        // console.error("Registration failed:", error);
        return {error: "Registration failed. Please try again."};
    }
}