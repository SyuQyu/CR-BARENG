import clsx from "clsx";
import React from "react";
import { truncate } from "@/utils";
import { ImageWithFallback } from "..";

interface cardTestimonialsProps {
  id: number;
  testimonials: string;
  person: string;
  company?: string;
  event?: string;
  imageUrl?: string;
  imageBorder?: boolean;
  className?: string;
}

export default function CardTestimonials({
  id,
  testimonials,
  person,
  company,
  event,
  imageUrl,
  imageBorder = true,
  className,
}: cardTestimonialsProps) {
  return (
    <div
      key={id}
      className={clsx(
        // ✅ Main container now has a fixed max height but flexible min height
        "flex flex-col items-center justify-between w-full rounded-xl transition-all duration-300",
        "bg-white border-2 border-gray-200 shadow-sm hover:shadow-md",
        "p-4 sm:p-6 md:p-8 h-full min-h-[400px] md:min-h-[480px] lg:min-h-[520px]",
        className
      )}
    >
      {/* Image */}
      <div className="flex justify-center items-center mb-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0">
        <ImageWithFallback
          width={96}
          height={96}
          sizes="100vw"
          className="w-full h-full object-cover rounded-full"
          priority={false}
          src={imageUrl ?? "/images/placeholder.png"}
          alt={person ?? "Testimonial Image"}
        />
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col items-center text-center gap-2 sm:gap-3 flex-grow w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="22"
          viewBox="0 0 27 22"
          fill="none"
          className="w-6 h-5 sm:w-7 sm:h-6"
        >
          <path
            d="M12.5143 16.223C12.5143 17.964 11.9714 19.3621 10.8857 20.4173C9.8 21.4724 8.28571 22 6.34286 22C4 22 2.34286 21.3141 1.37143 19.9424C0.457143 18.518 0 16.8297 0 14.8777C0 13.3477 0.342857 11.6331 1.02857 9.73381C1.77143 7.83453 2.68571 6.01438 3.77143 4.27338C4.85714 2.47961 5.97143 1.05515 7.11429 0L9.08571 0.553954C8.05714 2.08393 7.14286 3.95683 6.34286 6.17266C5.6 8.33573 5.2 10.3141 5.14286 12.1079C5.48571 11.8441 5.85714 11.6595 6.25714 11.554C6.71429 11.4484 7.14286 11.3957 7.54286 11.3957C8.85714 11.3957 10 11.8969 10.9714 12.8993C12 13.9017 12.5143 15.0096 12.5143 16.223ZM27 16.223C27 17.964 26.4571 19.3621 25.3714 20.4173C24.2857 21.4724 22.7714 22 20.8286 22C18.4857 22 16.8286 21.3141 15.8571 19.9424C14.9429 18.518 14.4857 16.8297 14.4857 14.8777C14.4857 13.3477 14.8286 11.6331 15.5143 9.73381C16.2571 7.83453 17.1714 6.01438 18.2571 4.27338C19.3429 2.47961 20.4571 1.05515 21.6 0L23.5714 0.553954C22.5429 2.08393 21.6286 3.95683 20.8286 6.17266C20.0857 8.33573 19.6857 10.3141 19.6286 12.1079C19.9714 11.8441 20.3429 11.6595 20.7429 11.554C21.2 11.4484 21.6286 11.3957 22.0286 11.3957C23.3429 11.3957 24.4857 11.8969 25.4571 12.8993C26.4857 13.9017 27 15.0096 27 16.223Z"
            fill="#3E2FD6"
          />
        </svg>

        <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-[90%] flex-grow">
          {truncate(testimonials, 180)}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex flex-col items-center text-center flex-shrink-0">
        <p className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
          {truncate(person, 40)}
        </p>
        {event && (
          <p className="text-blue-900 text-xs sm:text-sm italic">
            on {truncate(event, 40)}
          </p>
        )}
        {company && (
          <p className="text-neutral-500 text-xs sm:text-sm mt-1">
            {truncate(company, 40)}
          </p>
        )}
      </div>
    </div>
  );
}
