import { sdk } from "@/lib/config";
import { StoreProduct, StoreProductResponse } from "@medusajs/types";
import { getRegion } from "../regions";

export default async function getProductById({id, countryCode}: {id: string, countryCode?: string}): Promise<StoreProduct | undefined> {
    
    try {
        const region = await getRegion(countryCode ?? "rw");
        if (region) {
            const {product} = await sdk.store.product.retrieve(id, {
                region_id: region?.id,
            });
            return product;
        }
    } catch (error) {

    }

}