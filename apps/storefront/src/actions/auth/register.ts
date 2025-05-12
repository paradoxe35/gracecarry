"use server";

import { z } from "zod";
import getZErrors from "../getZErrors";
import { sdk } from "@/lib/config";
import { getAuthHeaders, getCacheTag, setAuthToken } from "@/lib/data/cookies";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import getFormFields from "../getFormFields";

export default async function register(__currentState: unknown, formData: FormData) {
    
    const data = getFormFields(formData);

    const registerSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        phone: z.string().optional(),
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        confirmPassword: z.string(),
        acceptTerms: z.literal("on", { errorMap: () => ({ message: "You must accept the terms and conditions" }) }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match", 
        path: ["confirmPassword"],});

    const validData = registerSchema.safeParse(data);
    if (validData.success !== true) {
        return {error: getZErrors(validData), data};
    }
    
    try {
        // Perform registration logic here
        const {email, password, firstName, lastName, phone} = data;
        const registerResult = await sdk.auth.register("customer", "emailpass", {
            email, password, 
        });

        await setAuthToken(registerResult as string);
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
    } catch (error: any) {
        // console.error("Registration failed:", error);
        return {error: error?.message ?? "Registration failed. Please try again.", data};
    }
    redirect("/account");
}