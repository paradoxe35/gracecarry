import MainProductPage from "@/components/product/MainProductPage";
import getProductById from "@/lib/data/products/getProductById";



export default async function Page({
  params
}: {
  params: Promise<{ id: string, countryCode: string }>;
}) {

  const { id, countryCode } = await params;
  const product = await getProductById({ id, countryCode });
  
  return (
    <>
      {product && <MainProductPage product={product} />}
    </>
  );
}
