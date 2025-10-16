"use client";
import { usePathname } from "next/navigation";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbData {
  label: string;
  href: string;
}

const generateBreadcrumbsFromPath = (
  pathname: string,
  excludeSegment?: string
): BreadcrumbData[] => {
  const pathSegments = pathname
    .split("/")
    .filter(Boolean)
    .map(decodeURIComponent);

  return pathSegments
    .filter(
      (segment) => segment.toLowerCase() !== excludeSegment?.toLowerCase()
    )
    .map((segment, index) => {
      const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return { label, href };
    });
};

interface BreadCrumbProps {
  excludeSegment?: string; // Optional segment to exclude, e.g., "glossary"
  variant?: "light" | "dark";
}

export default function BreadCrumb({
  excludeSegment,
  variant = "dark",
}: BreadCrumbProps) {
  const currentPage = usePathname();
  const breadcrumbs = generateBreadcrumbsFromPath(currentPage, excludeSegment);

  const isLight = variant === "light";
  const textColor = isLight ? "text-neutral-800" : "text-white";
  const separatorColor = isLight ? "text-neutral-500" : "text-white";
  const activeColor = isLight ? "text-primary-cr-700" : "text-white";

  return (
    <Breadcrumb className="mb-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className={`${textColor}`} href="/">
            Dashboard
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <React.Fragment key={breadcrumb.href}>
              <BreadcrumbSeparator className={separatorColor} />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className={`${activeColor} font-bold`}>
                    {breadcrumb.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    className={`${textColor}`}
                    href={breadcrumb.href || ""}
                  >
                    {breadcrumb.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
