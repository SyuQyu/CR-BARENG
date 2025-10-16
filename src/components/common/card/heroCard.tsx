import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { ImageWithFallback } from "..";

interface HeroCardProps {
  imageUrl: string;
  imageAlt: string;
  date?: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right" | "top" | "bottom";
  dateTextColor?: string;
  titleTextColor?: string;
  descriptionTextColor?: string;
  rounded?: boolean;
  border?: boolean;
  link?: string;
  linkText?: string;
}

const HeroCard: React.FC<HeroCardProps> = ({
  link,
  rounded = true,
  imageUrl,
  imageAlt,
  date,
  border,
  title,
  description,
  imagePosition = "left",
  dateTextColor = "text-custom-gray-cr",
  titleTextColor = "text-primary-cr-600",
  descriptionTextColor,
  linkText,
}) => {
  const isVertical = imagePosition === "top" || imagePosition === "bottom";
  const isImageFirst = imagePosition === "left" || imagePosition === "top";

  return (
    <div
      className={clsx(
        "flex items-center gap-5 h-full w-full max-w-full box-border overflow-hidden",
        isVertical
          ? "flex-col justify-start"
          : "sm:flex-row flex-col justify-between",
        border ? "border p-4 rounded-xl" : ""
      )}
    >
      {isImageFirst && (
        <div
          className={clsx(
            "flex-shrink-0 overflow-hidden",
            imagePosition === "left"
              ? "sm:w-[230px] w-full h-[160px]"
              : "w-full h-[200px]"
          )}
        >
          <ImageWithFallback
            width={0}
            height={0}
            sizes="100vw"
            className={clsx(
              "w-full h-full object-cover",
              rounded ? "rounded-xl shadow-md" : ""
            )}
            priority={false}
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
      )}

      <div className="flex flex-col gap-2 justify-start items-start w-full">
        {date && (
          <p
            className={clsx(
              "sm:text-desktop-caption-l text-mobile-caption-l font-bold truncate w-full",
              dateTextColor
            )}
          >
            {date}
          </p>
        )}

        <p
          className={clsx(
            "sm:text-desktop-body-1 text-mobile-body-1 font-bold w-full truncate",
            titleTextColor
          )}
          title={title}
        >
          {title}
        </p>

        <p
          className={clsx(
            "sm:text-desktop-body-2 text-mobile-body-2 w-full line-clamp-2 text-ellipsis overflow-hidden",
            descriptionTextColor
          )}
          title={description}
        >
          {description}
        </p>

        {link && (
          <Link
            href={link}
            className="flex flex-row justify-start items-center gap-2 text-desktop-body-2 text-primary-cr-700"
          >
            {linkText}
            <svg
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5002 7.33317H0.833496V5.6665H17.5002V7.33317Z"
                fill="#453CFF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5656 5.91064L12.7441 2.08916L13.9227 0.910645L17.7441 4.73213C17.7548 4.74283 17.7655 4.75352 17.7762 4.7642C18.0261 5.01403 18.269 5.25683 18.4424 5.48405C18.6378 5.74021 18.8216 6.07185 18.8216 6.4999C18.8216 6.92795 18.6378 7.25959 18.4424 7.51575C18.269 7.74297 18.0261 7.98577 17.7762 8.23561C17.7655 8.24628 17.7548 8.25697 17.7441 8.26767L13.9227 12.0892L12.7441 10.9106L16.5656 7.08916C16.8601 6.79472 17.0204 6.63192 17.1174 6.50478C17.1186 6.50312 17.1199 6.5015 17.1211 6.4999C17.1199 6.4983 17.1186 6.49668 17.1174 6.49502C17.0204 6.36788 16.8601 6.20508 16.5656 5.91064Z"
                fill="#453CFF"
              />
            </svg>
          </Link>
        )}
      </div>

      {!isImageFirst && (
        <div className="flex-shrink-0 overflow-hidden sm:w-[230px] w-full h-[160px]">
          <ImageWithFallback
            width={0}
            height={0}
            sizes="100vw"
            className={clsx(
              "w-full h-full object-cover",
              rounded ? "rounded-xl shadow-md" : ""
            )}
            priority={false}
            src={imageUrl}
            alt={imageAlt}
          />
        </div>
      )}
    </div>
  );
};

export default HeroCard;
