"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import signupAction from "./signup-action";
import RegisterElement from "@/components/auth/RegisterElement";

export default function SignupPage() {
  return <RegisterElement />;
}
