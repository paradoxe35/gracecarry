"use server";

import { medusa } from "../../../../medusa-client";


export default async function accountLoad() {
    const userData =  await medusa.store.customer.retrieve();
    return userData;
}