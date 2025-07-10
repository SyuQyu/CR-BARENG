import { ChevronDown, ChevronRight } from "lucide-react";
import { Button, ImageWithFallback } from "..";
import Link from "next/link";

const HitCardAward: React.FC<{ number: string; title: string; description: string; imgSrc: string; reverse: boolean }> = ({ number, title, description, imgSrc, reverse }) => {
    return (
        <div className={`flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} justify-between items-start w-full gap-16`}>
            <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover w-full sm:w-[50%] shadow-[0px_4px_16px_12px_rgba(213,208,255,0.05)] max-h-[300px] rounded-2xl border-[1px] border-white"
                style={{
                    background: "lightgray 0px -0.147px / 100% 100.046% no-repeat",
                }}
                src={imgSrc}
                alt={title} />
            <div className="flex flex-col sm:pl-0 pl-10 justify-start items-start gap-1 w-full sm:w-[50%] relative">
                <p className="opacity-15 text-[179.2px] font-extrabold absolute -top-28 sm:-left-10 -left-0">{number}</p>
                <p className="sm:text-desktop-heading-4 text-mobile-heading-3 font-bold">{title}</p>
                <p className="sm:text-desktop-body-1 text-mobile-body-2 sm:leading-8 leading-5">{description}</p>
                <Link href="#" className="underline text-desktop-body-1 sm:leading-8 leading-5 mt-4 flex items-center gap-2">
                    2025 Award Titles <ChevronDown />
                </Link>
                {(number === "2" || number === "4") && (
                    <Button className="px-8 py-4 mt-8 !text-mobile-heading-6 font-bold !rounded-[100px] border-[.1px] border-white bg-[linear-gradient(180deg,_rgba(255,255,255,0.13)_0%,_rgba(255,255,255,0.06)_100%)] shadow-[0px_4px_16px_12px_rgba(213,208,255,0.05)]">
                        NOMINATE <ChevronRight />
                    </Button>
                )}
            </div>
        </div>
    );
}

export default HitCardAward;