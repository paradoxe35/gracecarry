"use server";

import { z } from "zod";
import getFormFields from "@/lib/util/getFormFields";
import { sdk } from "@/lib/config";
import { getAuthHeaders, getCacheTag } from "@/lib/data/cookies";
import { retrieveCustomer } from "@/lib/data/customer";
import { revalidatePath, revalidateTag } from "next/cache";
import getZErrors, { zStrongPasswordSchema } from "@/lib/util/zUtils";

export default async function updateProfile(__currentState: unknown, formData: FormData) {

    const data = getFormFields<{
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        currentPassword: string,
        newPassword: string,
        confirmPassword: string,
    }>(formData);

    const updateProfileSchema = z.object({
        firstName: z.string().min(1, "First name is required"),
        lastName: z.string().min(1, "Last name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().optional(),
    });

    const validData = updateProfileSchema.safeParse(data);
    if (validData.success !== true) {
        return {error: getZErrors(validData), data};
    }

    if (data.currentPassword && data.newPassword) {
        const updatePasswordSchema = z.object({
            currentPassword: zStrongPasswordSchema("Current password is required"),
            newPassword: zStrongPasswordSchema("New password must be at least 8 characters long"),
            confirmPassword: zStrongPasswordSchema("Confirm password is required"),
        }).refine((data) => (data.newPassword === data.confirmPassword), {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }).refine((data) => data.currentPassword && !data.newPassword, {
            message: "You must provide a new password if you want to change your current password",
            path: ["newPassword"]
        });
        const validPasswordData = updatePasswordSchema.safeParse(data);
        if (validPasswordData.success !== true) {
            return {error: getZErrors(validPasswordData), data};
        }
    }

    try {
        const customer = await retrieveCustomer();

        if (!customer) 
            return {error: "you need be logged in first", data};
        
        // Perform registration logic here
        const {firstName, lastName, phone} = data;
        const headers = {...(await getAuthHeaders()),};
        await sdk.store.customer.update({
            first_name: firstName,
            last_name: lastName,
            phone,
        }, {}, headers);
        
        const {email} = customer;
        if (data.currentPassword && data.newPassword) {
            await sdk.auth.login("customer", "emailpass", {
                email, password: data.currentPassword
            }).then(async (token) => {
                await sdk.auth.updateProvider("customer", "emailpass", {
                    password: data.newPassword,
                }, token as string);
            });
        }
        await revalidateTag( 
            await getCacheTag("customers")
        );
        // if (data.email !== email) {
        //     await sdk.auth.updateProvider("customer", "emailpass", {
        //         email: data.email,
        //     }, customer.token);
        // }
    } catch (error: any) {
        return {error: error?.message ?? "An error occurred", data};
    }
}