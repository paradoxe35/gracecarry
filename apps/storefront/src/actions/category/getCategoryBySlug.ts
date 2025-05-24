import { getCategoryByHandle } from "@/lib/data/categories";

export default async function getCategoryBySlugx(slug: string) {
    return await getCategoryByHandle([slug]);
}