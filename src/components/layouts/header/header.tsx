'use client';
import Link from "next/link";
import { Button, ImageWithFallback } from '@/components/common';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { menuItems } from '@/constants/dummyData';
import { Menu } from "lucide-react"
import React from 'react';
export default function Header({ className }: Props) {
    return (
        <header className={clsx('top-0 sticky py-4 shadow-md bg-white', className)}>
            <div className='container flex flex-row px-6 lg:px-8 justify-between gap-8 items-center max-w-[1440px]'>
                <Link href="/" className="max-w-[151px] sm:max-w-[320px] w-full">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full object-contain rounded-lg"
                        priority={false}
                        src="/image/inner-logo.svg"
                        alt="logo"
                    />
                </Link>
                <div className='w-full lg:block hidden'>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menuItems.map((item, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuTrigger className='text-desktop-body-2 hover:font-bold font-normal'>{item.title}</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                                            {item.links.map((link, linkIndex) => (
                                                <ListItem
                                                    key={linkIndex}
                                                    title={link.title}
                                                    href={link.href || '/'}
                                                >
                                                    {link.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='flex flex-row justify-end items-end'>
                    <Button variant='outline' className='sm:block hidden border-primary-cr-500 w-full text-primary-cr-500 rounded-none xl:min-w-[103px]'>Login</Button>
                    <button className='block sm:hidden'><Menu /></button>
                </div>
            </div>
        </header >
    )
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href}
                    className={clsx(
                        "block group select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm group-hover:font-medium font-normal leading-none capitalize">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

type Props = {
    className?: string;
};
