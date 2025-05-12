import { StoreCustomerWithOrders } from "@/components/account/AccountElement";
import LoginElement from "@/components/auth/login/LoginElement";
import { retrieveCustomer } from "@/lib/data/customer";
import { redirect } from "next/navigation";

export default async function LoginPage() {

  const customer = await retrieveCustomer() as StoreCustomerWithOrders;
  if (customer) {
    return redirect("/account");
  }
  return <LoginElement />;
}
