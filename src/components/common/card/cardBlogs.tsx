import React, { useState } from "react";
import { truncateTo100Chars } from "@/utils";
import { Button, ImageWithFallback } from "..";
import { Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface CardBlogsProps {
  id: number;
  title: string;
  date?: string;
  description?: string;
  imageUrl?: string;
  blogUrl?: string;
  buttonType?: "outline" | "solid";
  customImgHeight?: string;
  downloadWithDialog?: boolean;
  country?: string;
  countryCode?: string;
  buttonContent?: React.ReactNode;
  badgeLabel?: string; // e.g. "JPNN"
  badgeDate?: string; // e.g. "Jan 2025"
  imageBorder?: true | false; // e.g. "rounded-lg"
  imgType?: "1" | "2"; // e.g. "1" for image, "2" for video
}

export default function CardBlogs({
  id,
  title,
  description,
  imageUrl,
  blogUrl,
  downloadWithDialog = false, // Default: download langsung
  buttonType = "outline",
  buttonContent = (
    <>
      <Download /> Download PDF
    </>
  ),
  imageBorder = true,
  imgType = "1",
}: CardBlogsProps) {
  let truncatedDescription;
  if (description) {
    truncatedDescription = truncateTo100Chars(description);
  }

  return (
    <Link 
    className="w-full  group flex flex-col h-full"
    href={blogUrl ?? "#"}
    target="_blank"
    rel="noopener noreferrer">
      {/* Image container */}
      <div
        className={clsx(
          "h-full flex overflow-hidden relative min-h-[511px] w-full",
          imgType === "1" ? "p-8" : "px-4 pt-4",
          imageBorder && "border-b-2 border-gray-500/20"
        )}
        style={{
          backgroundImage: `url('${
            imageUrl ?? "/image/destination-marketing/hero.webp"
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //create black overlay
          filter: "grayscale(40%)",
        }}
      >
        <div className="p-4 flex flex-col flex-wrap w-full text-white justify-end">
          <div className="flex flex-col flex-wrap w-fit gap-2 ">
            {title && (
              <p className="font-bold lg:text-desktop-heading-6 text-mobile-heading-6 line-clamp-3">
                {title}
              </p>
            )}
          </div>
        </div>

        {/* Content Section */}

        {/* Download Button - dialog atau langsung */}
        {/* {blogUrl &&
          (downloadWithDialog ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  type="button"
                  className="flex flex-row w-full justify-center items-center gap-2 font-semibold text-blue-600 mt-4 border border-gray-500/20 p-3"
                >
                  View Information
                </Button>
              </DialogTrigger>
              <DialogContent className="md:max-w-[920px] sm:max-w-[600px] max-w-[300px] w-full">
                <DialogHeader></DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="w-full flex flex-col justify-center items-center gap-8">
                    <ImageWithFallback
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full"
                      priority={false}
                      src={imageUrl}
                      alt={title}
                    />
                    <Link
                      href={`${blogUrl}`}
                      className="flex flex-row w-full justify-center items-center gap-2 font-semibold text-blue-600 mt-4 border border-gray-500/20 p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.4168 10.0002C19.4168 15.0628 15.3128 19.1668 10.2502 19.1668C5.18755 19.1668 1.0835 15.0628 1.0835 10.0002C1.0835 4.93755 5.18755 0.833496 10.2502 0.833496C15.3128 0.833496 19.4168 4.93755 19.4168 10.0002ZM9.55814 2.89429C9.85876 2.57641 10.0929 2.50016 10.2502 2.50016C10.4074 2.50016 10.6416 2.57641 10.9422 2.89429C11.2445 3.21394 11.5551 3.72118 11.8335 4.4171C12.3179 5.62826 12.6552 7.2864 12.733 9.16683H7.7673C7.8451 7.2864 8.1824 5.62826 8.66687 4.4171C8.94524 3.72118 9.25585 3.21394 9.55814 2.89429ZM6.09933 9.16683C6.17783 7.11086 6.54467 5.23496 7.11941 3.79811C7.22599 3.53166 7.34149 3.27586 7.46607 3.0339C4.94891 4.0408 3.10484 6.37247 2.79594 9.16683H6.09933ZM2.79594 10.8335H6.09933C6.17783 12.8895 6.54467 14.7654 7.11941 16.2022C7.22599 16.4687 7.34149 16.7245 7.46607 16.9664C4.94891 15.9595 3.10484 13.6279 2.79594 10.8335ZM7.7673 10.8335H12.733C12.6552 12.7139 12.3179 14.3721 11.8335 15.5832C11.5551 16.2791 11.2445 16.7864 10.9422 17.106C10.6416 17.4239 10.4074 17.5002 10.2502 17.5002C10.0929 17.5002 9.85876 17.4239 9.55814 17.106C9.25585 16.7864 8.94524 16.2791 8.66687 15.5832C8.1824 14.3721 7.8451 12.7139 7.7673 10.8335ZM14.401 10.8335C14.3225 12.8895 13.9557 14.7654 13.3809 16.2022C13.2743 16.4687 13.1588 16.7245 13.0343 16.9664C15.5514 15.9595 17.3955 13.6279 17.7044 10.8335H14.401ZM17.7044 9.16683C17.3955 6.37247 15.5514 4.0408 13.0343 3.0339C13.1588 3.27586 13.2743 3.53166 13.3809 3.79811C13.9557 5.23496 14.3225 7.11086 14.401 9.16683H17.7044Z"
                          fill="#2D15FF"
                        />
                      </svg>{" "}
                      Visit Website
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    {title && (
                      <p className="font-bold lg:text-desktop-body-1 text-mobile-body-1">
                        {title}
                      </p>
                    )}
                    {description && (
                      <p className="lg:text-desktop-body-2 text-mobile-body-2 text-secondary-foreground/50">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            blogUrl &&
            (buttonType === "outline" ? (
              <Link
                href={`${blogUrl}`}
                className="flex flex-row w-full justify-center items-center gap-2 font-bold text-primary-cr-500 mt-4 border border-gray-500/20 p-3"
              >
                {buttonContent}
              </Link>
            ) : (
              <Link
                href={`${blogUrl}`}
                className="flex flex-row w-full justify-center items-center gap-2 font-bold text-white mt-4 border bg-primary-cr-500 p-3"
              >
                {buttonContent}
              </Link>
            ))
          ))} */}
      </div>
    </Link>
  );
}
