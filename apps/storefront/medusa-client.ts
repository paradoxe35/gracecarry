import Medusa from "@medusajs/js-sdk";

export const medusa = new Medusa({
  baseUrl: process.env.MEDUSA_BACKEND_URL ?? "",
});