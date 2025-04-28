"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

/**
 * Use this component to create a Next.js `<LocalizedLink />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
const LocalizedLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
  passHref?: true;
  [x: string]: any;
}) => {
  const { countryCode } = useParams();

  return (
    <Link href={`/${countryCode}${href}`} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
