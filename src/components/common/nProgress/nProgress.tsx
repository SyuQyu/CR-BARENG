"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const ProgressBar = () => {
    const pathname = usePathname();

    useEffect(() => {
        NProgress.start();
        const timer = setTimeout(() => NProgress.done(), 500);

        return () => {
            clearTimeout(timer);
            NProgress.done();
        };
    }, [pathname]);

    return null;
};

export default ProgressBar;
