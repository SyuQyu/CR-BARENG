'use client';
import { usePathname } from 'next/navigation';
import React from 'react';
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
    href?: string;
}

const generateBreadcrumbsFromPath = (pathname: string, excludeSegment?: string): BreadcrumbData[] => {
    const pathSegments = pathname
        .split('/')
        .filter(Boolean)
        .map(decodeURIComponent); // Decode URL components to handle %20 as spaces

    return pathSegments
        .filter(segment => segment.toLowerCase() !== excludeSegment?.toLowerCase()) // Exclude the specified segment
        .map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`; // Construct href for each segment

            // Capitalize the segment and replace hyphens with spaces (Term-Detail -> Term Detail)
            const label = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            return { label, href };
        });
};

interface BreadCrumbProps {
    excludeSegment?: string; // Optional segment to exclude, e.g., "glossary"
}

export default function BreadCrumb({ excludeSegment }: BreadCrumbProps) {
    const currentPage = usePathname(); // Get the current pathname from Next.js
    const breadcrumbs = generateBreadcrumbsFromPath(currentPage, excludeSegment); // Generate breadcrumb data from the path

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* First breadcrumb item: Home */}
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbs.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbs.length - 1; // Check if it's the last item

                    return (
                        <React.Fragment key={breadcrumb.href}>
                            <BreadcrumbSeparator className='text-primary-cr-600' />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage
                                        className="text-primary-cr-600 sm:text-desktop-body-2 text-desktop-caption-l font-bold"
                                    >
                                        {breadcrumb.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={breadcrumb.href || ''}>
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
