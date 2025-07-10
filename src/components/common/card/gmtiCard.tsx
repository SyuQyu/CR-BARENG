import clsx from "clsx"
import { ImageWithFallback } from ".."
import { truncateTo100Chars } from "@/utils"
interface CardProps {
    className?: string
    title?: string
    date?: string
    desc?: string
    style?: React.CSSProperties
    image?: string
}

export default function GmtiCard(
    {
        image,
        date = 'Oct 08, 2024',
        className,
        title = 'Muslim Women Shaping Global Travel Trends | GMTI 2024 Report',
        desc = "Muslim Women's Growing Influence in Global Travel The global travel industry is undergoing a growing shift with the emergence of Muslim women, like Gen Zs, as vacation travel decision-makers in family travel. The 2024 Global Muslim...",
        style,
    }: CardProps
) {
    return (
        <div className={clsx("w-full rounded-lg p-6 flex flex-col", className)}>
            <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full object-contain rounded-lg"
                priority={false}
                src="/image/card.webp"
                alt="gmti"
            />
            <div className="flex flex-col gap-2 justify-start items-start mt-2">
                <p className="text-gray-500 md:text-sm text-mobile-caption-l">{date}</p>
                <p className="md:text-xl text-lg font-bold">{title}</p>
                <p className="text-gray-500 leading-relaxed md:text-base text-mobile-body-2">{truncateTo100Chars(desc)}</p>
            </div>
        </div>
    )
}