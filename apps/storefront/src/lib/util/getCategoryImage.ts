import { StoreProductCategory } from "@medusajs/types";

export default function getCategoryImage({ products }: StoreProductCategory){
    let image = "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1000&auto=format&fit=crop";
    if (products && products[0] ) 
        image = products[0].thumbnail??image;
    
    return image;
}