import React, { Children } from "react";
import { Button, Card, Pagination } from "..";
import Link from "next/link";
import clsx from "clsx";

interface GlossaryItem {
    title?: React.ReactNode;
    description?: string;
    useButton?: boolean;
    urlButton?: string;
    children?: React.ReactNode;
    className?: string;
}
const BasicCard: React.FC<GlossaryItem> = ({ className = "bg-white", title, description, useButton = true, urlButton = "/insights/glossary/term-detail/", children }) => (
    <Card className={clsx("gap-2 min-h-[213px] w-full h-full", className)} title={title} titlePostion="text-left">
        <div className="flex flex-col justify-between items-center w-full h-full">
            {description ? (<p className="text-desktop-body-3">{description}</p>) : children}
            {
                useButton && (
                    <Link className="w-full" href={`${urlButton}${title}`}>
                        <Button className="mt-4 w-full bg-primary-cr-600 text-white !font-normal rounded-lg">
                            <p className="text-desktop-body-3">Read More</p>
                        </Button>
                    </Link>
                )
            }
        </div>
    </Card>
);


export default BasicCard