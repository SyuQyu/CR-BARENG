"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import clsx from "clsx";

interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  isMobile?: boolean;
  mobileMode?: "select" | "tabs"; // Mobile view type
  responsiveTabPosition?: "top" | "left" | "right"; // Mobile tab position (default: "top")
  desktopTabPosition?: "top" | "left" | "right"; // Desktop tab position
  align?: "start" | "center" | "end";
}

const Tabs = ({
  defaultValue,
  onValueChange,
  isMobile: isMobileProp,
  mobileMode = "select",
  responsiveTabPosition = "top",
  desktopTabPosition = "top",
  children,
  align = "center",
  ...props
}: TabsProps) => {
  const [value, setValue] = React.useState(defaultValue);
  const [isMobile, setIsMobile] = React.useState(isMobileProp ?? false);

  React.useEffect(() => {
    if (isMobileProp !== undefined) {
      setIsMobile(isMobileProp);
      return;
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileProp]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const tabPosition = isMobile ? responsiveTabPosition : desktopTabPosition;

  return (
    <TabsPrimitive.Root value={value} onValueChange={handleChange} {...props}>
      <div
        className={cn(
          "flex w-full",
          tabPosition === "left" && "flex-row",
          tabPosition === "right" && "flex-row-reverse",
          tabPosition === "top" && "flex-col",
          align === "start" && "justify-start items-start",
          align === "center" && "justify-center items-center",
          align === "end" && "justify-end items-end",
        )}
      >
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, { value, onValueChange: handleChange, isMobile, tabPosition, mobileMode })
        )}
      </div>
    </TabsPrimitive.Root>
  );
};


interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  onValueChange?: (value: string) => void;
  value?: string;
  isMobile?: boolean;
  tabPosition?: "top" | "left" | "right";
  mobileMode?: "select" | "tabs";
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, children, value, onValueChange, isMobile, tabPosition, mobileMode, ...props }, ref) => {
  if (isMobile && mobileMode === "select") {
    console.group("TabsList");
    console.log("isMobile", isMobile);
    console.log("mobileMode", mobileMode);
    return (
      <div className="relative w-full">
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a tab" />
          </SelectTrigger>
          <SelectContent>
            {React.Children.map(children, (child: any) => (
              <SelectItem key={child.props.value} value={child.props.value}>
                {child.props.children}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        "flex p-2 text-muted-foreground",
        tabPosition === "top" && "flex-row border-b",
        tabPosition === "left" && "flex-col border-r",
        tabPosition === "right" && "flex-col border-l",
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  customColorActive?: string;
};

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, customColorActive = "data-[state=active]:border-custom-purple-cr data-[state=active]:text-custom-purple-cr", ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        clsx(
          "inline-flex items-center justify-center whitespace-nowrap border-b-2 px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
          customColorActive,
          className
        )
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = ({
  value,
  children,
  activeValue,
  className,
  ...props
}: {
  value: string;
  children: React.ReactNode;
  activeValue: string;
  className?: string;
}) => {
  if (value !== activeValue) return null;
  return (
    <div
      className={cn(
        "p-4 flex-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };