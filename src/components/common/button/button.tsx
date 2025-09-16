import clsx from "clsx"
import Link from "next/link"
import { Button as UIButton } from "@/components/ui/button"

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "soft" | "destructive"
  children: React.ReactNode
  size?: "xs" | "sm" | "default" | "lg" | "xl" | "icon"
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  link?: string
  onClick?: () => void
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const variantClasses: Record<string, string> = {
  primary: "bg-primary-cr-700 text-white hover:bg-primary-cr-800 disabled:bg-primary-cr-300",
  secondary: "bg-white text-primary-cr-700 border border-primary-cr-700 hover:bg-primary-cr-50 disabled:opacity-50",
  outline: "bg-transparent border border-primary-cr-700 text-primary-cr-700 hover:bg-primary-cr-50 disabled:border-gray-200 disabled:text-gray-300",
  ghost: "text-primary-cr-700 hover:bg-primary-cr-50 disabled:text-gray-300",
  soft: "bg-primary-cr-100 text-primary-cr-700 hover:bg-primary-cr-200 disabled:bg-primary-cr-50",
  destructive: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-200"
}

const sizeClasses: Record<string, string> = {
  xs: "h-7 px-2 text-xs",
  sm: "h-9 px-3 text-sm",
  default: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
  xl: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0 flex items-center justify-center"
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
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const buttonClasses = clsx(
    "inline-flex items-center justify-center gap-2 font-medium transition-colors rounded-none",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    disabled && "opacity-50 pointer-events-none",
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
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </>
  )

  return link && !disabled && !loading ? (
    <Link href={link} className={clsx(fullWidth && "w-full")}>
      <UIButton type={type} className={buttonClasses} disabled={disabled}>
        {buttonContent}
      </UIButton>
    </Link>
  ) : (
    <UIButton
      onClick={onClick}
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
    >
      {buttonContent}
    </UIButton>
  )
}
