import { sdk } from "@/lib/config";
import getFormFields from "@/lib/util/getFormFields";
import { getZErrors } from "@/lib/util/zUtils";
import { z } from "zod";

export default async function newsLetter (__currentState: unknown, formData: FormData){
    const data = getFormFields<{email: string}>(formData);
    const newsLetterSchema = z.object({
        email: z.string().email(),
    });
    const validData = newsLetterSchema.safeParse(data);
    if (validData.success !== true) return { error: getZErrors(validData), data };
    try{
        await sdk.client.fetch(
            "/mailchimp/subscribe",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({email: data.email}),
            }
        );
        return {success: "email subscribed successfully"};
    }
    catch(error: any) {
        return {error: error?.message, data}
    }
}