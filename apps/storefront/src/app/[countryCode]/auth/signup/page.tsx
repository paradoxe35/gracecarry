import { StoreCustomerWithOrders } from "@/components/account/AccountElement";
import RegisterElement from "@/components/auth/RegisterElement";
import { retrieveCustomer } from "@/lib/data/customer";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const customer = (await retrieveCustomer()) as StoreCustomerWithOrders;
  if (customer) {
    return redirect("/account");
  }
  return <RegisterElement />;
}
