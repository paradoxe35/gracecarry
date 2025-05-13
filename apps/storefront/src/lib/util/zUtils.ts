import { z } from "zod";
import { SafeParseError } from "zod";

export function zStrongPasswordSchema(passwordMessage?: string): z.ZodString {
    return z.string()
        .min(8, passwordMessage ?? "Password must be at least 8 characters long")
        .regex(/(?=.*[a-z])/, "Password must contain at least one lowercase letter")
        .regex(/(?=.*[A-Z])/, "Password must contain at least one uppercase letter")
        .regex(/(?=.*[0-9])/, "Password must contain at least one number")
        .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character");
}


export function getZErrors <T=any>(validation: SafeParseError<T>){
    let errorMSGs: string[] = [];
    validation.error.errors.forEach(error => {
        errorMSGs.push(error.message);
    });
    return errorMSGs.join(", ");
}