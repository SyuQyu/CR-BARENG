import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginateProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Paginate = ({ currentPage, totalPages, onPageChange }: PaginateProps) => {
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPaginationItems = () => {
        const pageItems = [];

        // Show first three pages, the last two pages, and the current page with two pages around it.
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === 2 ||
                i === totalPages ||
                i === totalPages - 1 ||
                (i >= currentPage - 1 && i <= currentPage + 1)
            ) {
                pageItems.push(
                    <PaginationItem key={i}>
                        <PaginationLink
                            isActive={currentPage === i}
                            onClick={() => handlePageChange(i)}
                            className='cursor-pointer'
                        >
                            {i}
                        </PaginationLink>
                    </PaginationItem>
                );
            } else if (
                i === currentPage - 2 ||
                i === currentPage + 2
            ) {
                // Add ellipsis before and after the current page range
                pageItems.push(
                    <PaginationItem key={`ellipsis-${i}`}>
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }
        }

        return pageItems;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {
                        currentPage === 1 ? null : (
                            <PaginationPrevious
                                href="#"
                                onClick={() => handlePageChange(currentPage - 1)}
                            />
                        )
                    }
                </PaginationItem>
                {renderPaginationItems()}
                <PaginationItem>
                    {
                        currentPage === totalPages ? null : (
                            <PaginationNext
                                className='text-primary-cr-600'
                                href="#"
                                onClick={() => handlePageChange(currentPage + 1)}
                            />
                        )
                    }
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default Paginate;
