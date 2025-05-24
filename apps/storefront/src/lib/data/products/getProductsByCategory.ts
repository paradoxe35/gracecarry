import { sdk } from "@/lib/config";
import { StoreProductCategory, StoreProductListResponse } from "@medusajs/types";
import { getRegion } from "../regions";

export default async function getProductsByCategory (category: StoreProductCategory, countryCode: string): Promise<StoreProductListResponse>{
    let region = await getRegion(countryCode);
    if (!region) {
        return {
            limit: 50,
            offset:0,
            count: 0,
            products: []
        };
    }
    const products = await sdk.store.product.list({
        category_id: category.id,
        region_id: region?.id
    });
    return products;
}