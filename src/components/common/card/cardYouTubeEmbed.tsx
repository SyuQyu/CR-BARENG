import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface CardYoutubeEmbedProps {
  id: number;
  title: string;
  date?: string;
  description?: string;
  videoUrl?: string;
  embedUrl?: string;
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

export default function CardYoutubeEmbed({
  videoUrl,
  embedUrl,
  imageBorder = true,
}: CardYoutubeEmbedProps) {
  // let truncatedDescription;
  // if (description) {
  //   truncatedDescription = truncateTo100Chars(description);
  // }

  return (
    <Link 
    className="group flex flex-col mx-4"
    href={videoUrl ?? "#"}
    target="_blank"
    rel="noopener noreferrer">
      {/* Image container */}
      <div
        className={clsx(
          "h-min w-min mx-auto flex overflow-hidden relative lg:min-h-[587px] md:min-h-72 min-h-32 justify-center items-center",
          imageBorder && "border-b-2 border-gray-500/20"
        )}
      >
        <iframe          
          src={embedUrl ?? "https://www.youtube.com/embed/RuXa_yxZMGI?si=RXdD07sNtK63Koby"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="lg:w-[1216px] md:w-[596px] w-72 min-h-32 lg:min-h-[683px] md:min-h-72 rounded-lg"
        ></iframe>
      </div>
    </Link>
  );
}
