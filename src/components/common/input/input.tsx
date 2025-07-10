"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface InputCustomProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: string | undefined | null;
  name?: string;
  disabled?: boolean;
  multilineHeight?: string;
  multiline?: boolean;
  containerInputClasses?: string;
  button?: React.ReactNode;  // Added button prop
  onButtonClick?: () => void; // Added button click handler
  labelStyle?: string; // Added labelStyle prop
  required?: boolean; // Added required prop
}

export default function InputCustom({
  id,
  label,
  placeholder,
  type = "text",
  value,
  defaultValue,
  name,
  onChange,
  onBlur,
  className,
  style,
  iconLeft,
  iconRight,
  multilineHeight,
  containerInputClasses,
  error,
  disabled,
  multiline = false,
  button, // Added button prop
  onButtonClick, // Added button click handler
  labelStyle,
  required = false, // Added required prop
}: InputCustomProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Determine if this is a controlled or uncontrolled input
  const isControlled = value !== undefined;

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={clsx("w-full flex flex-col gap-2", className)} style={style}>
      {label && (
        <label className={clsx("md:text-desktop-label-l text-left text-desktop-label-s", labelStyle)}>{label}</label>
      )}
      <div
        className={clsx(
          "flex items-center border",
          isFocused ? "border-primary-cr-600 border-2" : "border border-input",
          error ? "border-red-500" : "",
          multiline ? "flex-col" : "flex-row",
          containerInputClasses
        )}
      >
        {iconLeft && <span className="px-2">{iconLeft}</span>}
        {multiline ? (
          <textarea
            id={id}
            placeholder={placeholder}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            name={name}
            onChange={onChange}
            onBlur={(e) => {
              if (onBlur) {
                onBlur(e);
              }
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            className={clsx("w-full py-2 px-3 border-none outline-none bg-none resize-none", multilineHeight)}
            disabled={disabled}
            required // Spread additional props for textarea
          />
        ) : (
          <input
            id={id}
            type={type === "password" && !showPassword ? "password" : "text"}
            placeholder={placeholder}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            name={name}
            onChange={onChange}
            onBlur={(e) => {
              if (onBlur) {
                onBlur(e);
              }
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            className="w-full py-2 px-3 border-none outline-none bg-none"
            disabled={disabled}
            required // Spread additional props for textarea
          />
        )}
        {type === "password" && !disabled && !multiline ? (
          <span className="px-2 cursor-pointer" onClick={handleTogglePasswordVisibility}>
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </span>
        ) : (
          iconRight && <span className="px-2">{iconRight}</span>
        )}
        {button && (
          <div onClick={onButtonClick} className="h-full">
            {button}
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
}
