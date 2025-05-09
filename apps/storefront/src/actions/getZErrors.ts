import { SafeParseError } from "zod";

export default function getZErrors <T=any>(validation: SafeParseError<T>){
    let errorMSGs: string[] = [];
    validation.error.errors.forEach(error => {
        errorMSGs.push(error.message);
    });
        return errorMSGs.join(", ");
}