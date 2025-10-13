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
    href: string;
}

const generateBreadcrumbsFromPath = (pathname: string, excludeSegment?: string): BreadcrumbData[] => {
    const pathSegments = pathname
        .split('/')
        .filter(Boolean)
        .map(decodeURIComponent);

    return pathSegments
        .filter(segment => segment.toLowerCase() !== excludeSegment?.toLowerCase())
        .map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join('/')}`

            const label = segment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')

            return { label, href }
        });
};

interface BreadCrumbProps {
    excludeSegment?: string; // Optional segment to exclude, e.g., "glossary"
}

export default function BreadCrumb({ excludeSegment }: BreadCrumbProps) {
    const currentPage = usePathname(); // Get the current pathname from Next.js
    const breadcrumbs = generateBreadcrumbsFromPath(currentPage, excludeSegment); // Generate breadcrumb data from the path

    return (
        <Breadcrumb className='mb-16'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbs.map((breadcrumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                        <React.Fragment key={breadcrumb.href}>
                            <BreadcrumbSeparator className='text-white' />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage
                                        className="text-white font-bold"
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
