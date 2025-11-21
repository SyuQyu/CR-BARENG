"use client";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Button, ImageWithFallback } from "@/components/common";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { menuItems } from "@/constants/dummyData";

export default function Header({ className }: Props) {
  return (
    <header className={clsx("top-0 sticky py-4 shadow-md bg-white", className)}>
      <div className="container flex flex-row px-6 lg:px-8 justify-between gap-8 items-center max-w-[1440px]">
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
        <div className="w-full lg:block hidden">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuTrigger className="text-desktop-body-2 hover:font-bold font-normal">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
                      {item.links.map((link, linkIndex) => (
                        <ListItem
                          key={linkIndex}
                          title={link.title}
                          href={link.href || "/"}
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
        <div className="flex flex-row justify-end items-end gap-3">
          <Button
            variant="outline"
            link="/login"
            className="hidden border-primary-cr-500 text-primary-cr-500 rounded-none xl:min-w-[103px] lg:block"
          >
            Login
          </Button>
          <Button
            variant="outline"
            size="sm"
            link="/login"
            className="border-primary-cr-500 text-primary-cr-500 rounded-none lg:hidden"
          >
            Login
          </Button>
          <Drawer>
            <DrawerTrigger asChild>
              <button
                className="flex items-center justify-center rounded-md border border-transparent p-2 transition-colors hover:border-muted-foreground/40 lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-6" />
              </button>
            </DrawerTrigger>
            <DrawerContent className="flex h-full max-w-[320px] flex-col bg-white p-6 shadow-lg sm:max-w-sm">
              <div className="flex items-center justify-end">
                <DrawerClose
                  className="rounded-md p-2 text-muted-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  aria-label="Close navigation menu"
                >
                  <X className="size-5" />
                </DrawerClose>
              </div>
              <Separator className="my-6" />
              <Accordion
                type="single"
                collapsible
                className="space-y-2 text-left"
            >
                {menuItems.map((item, index) => (
                  <AccordionItem
                    key={item.title}
                    value={`mobile-nav-${index}`}
                    className="border-0"
                  >
                    <AccordionTrigger className="px-0 text-base font-medium text-foreground">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 px-0">
                      <ul className="space-y-3 pl-2">
                        {item.links.map((link) => (
                          <li key={`${item.title}-${link.title}`}>
                            <DrawerClose asChild>
                              <Link
                                href={link.href || "/"}
                                className="block text-sm font-normal text-muted-foreground transition hover:text-foreground"
                              >
                                {link.title}
                              </Link>
                            </DrawerClose>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
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
            className,
          )}
          {...props}
        >
          <div className="text-sm group-hover:font-medium font-normal leading-none capitalize">
            {title}
          </div>
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
