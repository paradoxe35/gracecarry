import { StoreProduct } from "@medusajs/types";
import { getProductPrice } from "./get-product-price";

export function getSimplePrice({product}: {product: StoreProduct}){
    const productPrices = getProductPrice({product}),
    cheapPrices = productPrices.cheapestPrice;
    return cheapPrices?{
        priceDisplay: cheapPrices.calculated_price,
        priceNumber: cheapPrices.calculated_price_number,
        currency: cheapPrices.currency_code
    }:null
}