import { ImageWithFallback } from "..";

export default function CardLandingPage({ data }: any) {
    return (
        <div className="w-full px-3">
            <div className="flex flex-col justify-between sm:min-h-[250px] min-h-[200px] items-center w-full rounded-2xl border-b-8 border-[#6F6AA0] px-10 py-6 bg-white relative">
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-[42px] max-h-[42px] rounded-full object-cover absolute top-0 -left-5"
                    priority={false}
                    src={"/image/landing-page/quote-icon.png"}
                    alt={"hero"}
                />
                <ImageWithFallback
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full max-w-[42px] max-h-[42px] rounded-full object-cover absolute bottom-0 -right-5 grayscale rotate-180"
                    priority={false}
                    src={"/image/landing-page/quote-icon.png"}
                    alt={"hero"}
                />
                <p className="text-[#484848] sm:text-desktop-body-2 text-mobile-body-2 mb-6">{data.text}</p>
                <div className="flex flex-row justify-start items-start gap-2">
                    <ImageWithFallback
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full max-w-[53px] max-h-[53px] rounded-full object-cover"
                        priority={false}
                        src={data.avatar}
                        alt={data.name}
                    />
                    <div className="flex flex-col justify-between items-start">
                        <p className="text-[#6F6AA0] sm:text-desktop-body-2 text-mobile-body-2">{data.name}</p>
                        <p className="text-[#8E8E8E] sm:text-desktop-caption-l text-mobile-caption-l">{data.position} at <span className="font-bold">{data.company}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}