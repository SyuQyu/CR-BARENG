import clsx from "clsx"
import Link from "next/link"

import { Button as UIButton } from "@/components/ui/button"

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "success" | "warning" | "info" | "dark" | "light" | "default" | null | undefined
  children: React.ReactNode
  size?: "xs" | "sm" | "default" | "lg" | "xl" | "icon" | null | undefined
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  link?: any
  onClick?: any
  fullWidth?: boolean
  loading?: boolean
  id?: string
}

const mapToShadcnVariant = (variant: string) => {
  switch (variant) {
    case "primary":
    case "success":
    case "warning":
    case "info":
    case "dark":
      return "default"
    case "destructive":
      return "destructive"
    case "secondary":
      return "secondary"
    case "outline":
      return "outline"
    case "ghost":
    case "light":
      return "ghost"
    default:
      return "default"
  }
}

const getCustomVariantClasses = (variant: string, disabled?: boolean) => {
  if (disabled) {
    return ""
  }

  switch (variant) {
    case "primary":
      return "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
    case "success":
      return "bg-green-600 text-white hover:bg-green-700 border-green-600"
    case "warning":
      return "bg-yellow-500 text-white hover:bg-yellow-600 border-yellow-500"
    case "info":
      return "bg-cyan-600 text-white hover:bg-cyan-700 border-cyan-600"
    case "dark":
      return "bg-gray-900 text-white hover:bg-gray-800 border-gray-900"
    case "light":
      return "bg-gray-100 text-gray-900 hover:bg-gray-200 border-gray-100"
    default:
      return ""
  }
}

const getCustomSizeClasses = (size: string) => {
  switch (size) {
    case "xs":
      return "h-7 px-2 text-xs"
    case "xl":
      return "h-12 px-6 text-lg"
    default:
      return ""
  }
}

export default function ButtonCustom({
  variant = "primary",
  children,
  size = "default",
  type = "button",
  className,
  disabled = false,
  link,
  onClick,
  fullWidth = false,
  loading = false,
}: ButtonProps) {
  const shadcnVariant = mapToShadcnVariant(variant || "primary")

  const customVariantClasses = getCustomVariantClasses(variant || "primary", disabled || loading)
  const customSizeClasses = getCustomSizeClasses(size || "default")
  const widthClass = fullWidth ? "w-full" : ""

  const buttonClasses = clsx(
    customVariantClasses,
    customSizeClasses,
    widthClass,
    "text-ellipsis overflow-hidden whitespace-nowrap",
    className
  )

  const buttonContent = (
    <>
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
  )

  return (
    link && !disabled && !loading
      ? (
        <Link className={fullWidth ? "w-full" : ""} href={link} onClick={onClick}>
          <UIButton
            type={type}
            className={buttonClasses}
            variant={shadcnVariant as any}
            size={size === "xs" || size === "xl" ? "default" : size as any}
            disabled={disabled || loading}
          >
            {buttonContent}
          </UIButton>
        </Link>
      )
      : (
        <UIButton
          onClick={onClick}
          type={type}
          className={buttonClasses}
          variant={shadcnVariant as any}
          size={size === "xs" || size === "xl" ? "default" : size as any}
          disabled={disabled || loading}
        >
          {buttonContent}
        </UIButton>
      )
  )
}
