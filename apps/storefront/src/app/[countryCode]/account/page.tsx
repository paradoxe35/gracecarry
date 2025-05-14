import AccountElement, {
  StoreCustomerWithOrders,
} from "@/components/account/AccountElement";
import { retrieveCustomer } from "@/lib/data/customer";
import { StoreCustomer, StoreOrder } from "@medusajs/types";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile",
  description: "View and edit your Medusa Store profile.",
};

export default async function AccountPage() {
  const customer = (await retrieveCustomer()) as StoreCustomerWithOrders;
  if (!customer) {
    return redirect("/auth/login");
  }
  return <AccountElement customer={customer} />;
}
