import React, { useState } from "react";
import { truncate } from "@/utils";
import { Button, ImageWithFallback } from "..";
import { Download } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

interface cardTestimonialsProps {
  id: number;
  testimonials: string;
  person: string;
  company?: string;
  event?: string;
  imageUrl?: string;
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

export default function cardTestimonials({
  id,
  testimonials,
  person,
  company,
  event,
  imageUrl,
  downloadWithDialog = false, // Default: download langsung
  buttonType = "outline",
  buttonContent = (
    <>
      <Download /> Download PDF
    </>
  ),
  imageBorder = true,
  imgType = "1",
}: cardTestimonialsProps) {
  let truncatedtestimonials;
  if (testimonials) {
    truncatedtestimonials = truncate(testimonials, 100);
  }

  return (
    <div
      className="lg:w-full w-fit group flex flex-col self-stretch"
      rel="noopener noreferrer"
    >
      {/* Image container */}
      <div
        className={clsx(
          "h-full flex overflow-hidden relative border-2 border-gray-500/20 content-stretch flex-wrap p-1.5 lg:max-w-[839px] md:max-w-[593px] max-w-fit",
          imageBorder && "border-b-2 border-gray-500/20"
        )}
        style={{
          background: "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          //create black overlay
          filter: "grayscale(40%)",
        }}
      >
        <div className="p-1.5 flex flex-col flex-wrap w-full text-black justify-center self-stretch items-center gap-1 min-h-[350px] md:gap-4">
          {/* Image Section */}
          <div className="flex justify-center items-center w-max h-20">
            <ImageWithFallback
              width={0}
              height={0}
              sizes="100vw"
              className={clsx("w-full h-full object-cover")}
              priority={false}
              src={imageUrl ?? "/images/placeholder.png"}
              alt={person ?? "Podcast Image"}
            />
          </div>
          <div className="w-full inline-flex flex-col justify-start items-start gap-2">
            <div className="w-7 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="22"
                viewBox="0 0 27 22"
                fill="none"
              >
                <path
                  d="M12.5143 16.223C12.5143 17.964 11.9714 19.3621 10.8857 20.4173C9.8 21.4724 8.28571 22 6.34286 22C4 22 2.34286 21.3141 1.37143 19.9424C0.457143 18.518 0 16.8297 0 14.8777C0 13.3477 0.342857 11.6331 1.02857 9.73381C1.77143 7.83453 2.68571 6.01438 3.77143 4.27338C4.85714 2.47961 5.97143 1.05515 7.11429 0L9.08571 0.553954C8.05714 2.08393 7.14286 3.95683 6.34286 6.17266C5.6 8.33573 5.2 10.3141 5.14286 12.1079C5.48571 11.8441 5.85714 11.6595 6.25714 11.554C6.71429 11.4484 7.14286 11.3957 7.54286 11.3957C8.85714 11.3957 10 11.8969 10.9714 12.8993C12 13.9017 12.5143 15.0096 12.5143 16.223ZM27 16.223C27 17.964 26.4571 19.3621 25.3714 20.4173C24.2857 21.4724 22.7714 22 20.8286 22C18.4857 22 16.8286 21.3141 15.8571 19.9424C14.9429 18.518 14.4857 16.8297 14.4857 14.8777C14.4857 13.3477 14.8286 11.6331 15.5143 9.73381C16.2571 7.83453 17.1714 6.01438 18.2571 4.27338C19.3429 2.47961 20.4571 1.05515 21.6 0L23.5714 0.553954C22.5429 2.08393 21.6286 3.95683 20.8286 6.17266C20.0857 8.33573 19.6857 10.3141 19.6286 12.1079C19.9714 11.8441 20.3429 11.6595 20.7429 11.554C21.2 11.4484 21.6286 11.3957 22.0286 11.3957C23.3429 11.3957 24.4857 11.8969 25.4571 12.8993C26.4857 13.9017 27 15.0096 27 16.223Z"
                  fill="#3E2FD6"
                />
              </svg>
            </div>
            <div className="self-stretch text-center justify-start text-zinc-900 lg:text-desktop-body-1 text-mobile-body-1 font-normal leading-loose">
              {truncate(testimonials, 200)}
            </div>
          </div>
          <div className="self-stretch py-3 inline-flex flex-col justify-center items-center gap-1">
            <div className="self-stretch text-center justify-start text-zinc-900 lg:text-desktop-body-2 text-mobile-body-2 font-bold leading-normal">
              {person && <p className="line-clamp-2">{truncate(person, 35)}</p>}
            </div>
            <div className="self-stretch text-center justify-start text-blue-950 lg:text-desktop-caption-l text-mobile-caption-l font-normal leading-snug">
              {event && (
                <p className="line-clamp-2">on {truncate(event, 35)}</p>
              )}
            </div>
            <div className="self-stretch text-center justify-start text-neutral-500 lg:text-desktop-caption-1 text-mobile-caption-1 font-normal leading-snug">
              {company && <p className="line-clamp-2">{company}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
