"use server";

import { sdk } from "@/lib/config";
import { getCacheTag, setAuthToken } from "@/lib/data/cookies";
import { revalidatePath, revalidateTag } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";
import getFormFields from "@/lib/util/getFormFields";
import getZErrors, { zStrongPasswordSchema } from "@/lib/util/zUtils";

export default async function login(__currentState: unknown, formData: FormData) {
    // Convert FormData to a plain object
    const data = getFormFields<{
        email:string, 
        password: string, 
        rememberMe?: true
    }>(formData);

    const loginSchema = z.object({
        email: z.string().email(),
        password: zStrongPasswordSchema(),
    });
    // Validate input
    const validData = loginSchema.safeParse(data);
    if (validData.success !== true)
        return {error: getZErrors(validData), data};
    try {
        
        const {email, password, rememberMe} = data;
        // Perform login logic here
        await sdk.auth.login("customer", "emailpass", {
            email, password, remember_me: rememberMe})
                .then(async (token) => {
                    await setAuthToken(token as string);
                    const cache = await getCacheTag("customers");
                    revalidateTag(cache);
                    revalidatePath("/login");
                });
        
    }
    catch (error: any) {
        // console.error("Login failed:", error);
        return {error: error?.message ?? "Login failed. Please try again.", data};
    }

    redirect("/account");
}