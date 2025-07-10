"use client"
import { BreadCrumb, ImageWithFallback, YouTubeCard, Card, CarouselGlossaryPage } from "@/components/common";
import { Badge } from "@/components/ui/badge"
import { DUMMY_DATA_GLOSSARY, DUMMY_TAG, DUMMY_IMG } from "@/constants/dummyData"
import React, { useState } from "react";
import { useParams, useRouter } from 'next/navigation';
import { ChevronDown, ChevronUp } from "lucide-react";

const ReadMore = ({ text, maxLength }: { text: string, maxLength: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Kondisi untuk memotong teks jika belum di-expand
    const shouldTruncate = text.length > maxLength && !isExpanded;

    return (
        <div>
            <p className="text-mobile-body-2">
                {shouldTruncate ? `${text.slice(0, maxLength)}...` : text}
            </p>
            {text.length > maxLength && (
                <button
                    className="text-blue-500 font-semibold mt-2 text-center flex flex-row justify-center items-center w-full"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? <p className="flex flex-row text-mobile-body-2">Read Less <ChevronUp /></p> : <p className="flex flex-row text-mobile-body-2">Read More <ChevronDown /></p>}
                </button>
            )}
        </div>
    );
};

export default function GlossaryDetail() {
    const params = useParams<{ termDetailId: string }>();
    const definitionText = `
        The public call to Salah which is delivered from a Mosque. It is recited aloud five times a day to announce the prayer timings of the five obligatory prayers. It praises Allah – God Almighty – and requests Muslims to gather for Salah. In some mosques, specially when they are located in predominantly Muslim communities, the Athan is transmitted via a public address system. The words of the Adzan are deeply symbolic and meaningful, beginning with the proclamation "Allahu Akbar" (God is Greatest), repeated four times. This is followed by the Shahada, the Islamic declaration of faith, affirming the oneness of God and the prophethood of Muhammad. The Adzan continues with invitations to prayer and success, emphasizing that true success lies in worship and remembrance of God. The final part of the Adzan reiterates the greatness of God and the essential nature of prayer in a Muslim’s life. In many communities, the Adzan is broadcasted through loudspeakers, allowing the call to permeate the surrounding areas, thus ensuring that all Muslims within earshot are reminded of the prayer times. In predominantly Muslim regions, the Adzan contributes to the cultural and spiritual atmosphere, blending with the daily life rhythms. Its melodious cadence not only serves as a call to worship but also provides a moment of reflection and spiritual pause for the community, underscoring the collective and individual importance of prayer in Islam.
    `;
    const layout = true;
    const [carousel, setCarousel] = useState(false);
    const router = useRouter();
    const videoUrl = 'https://youtu.be/7u6-hMqBoWo?si=i0DO1hegI1Tv2RXm'
    return (
        <div className="w-full gap-10 sm:gap-32 flex flex-col justify-center items-center">
            <div className="w-full max-w-[1440px] px-6 lg:px-8 flex flex-col gap-7 md:gap-14">
                <BreadCrumb excludeSegment="glossary" />

                <div className="bg-gray-50 flex flex-col justify-start items-start gap-8 w-full">
                    <div className="flex flex-row justify-start items-center gap-2">
                        {
                            DUMMY_TAG?.map((data: any) => (
                                <Badge key={data.id} variant="outline" className="text-primary-cr-600 border-primary-cr-600 border-2">{data?.name}</Badge>
                            ))
                        }
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse w-full justify-between gap-8 sm:gap-10 md:gap-16 items-center">
                        <div className="flex flex-col gap-[10px]">
                            <p className="sm:block hidden text-gray-500 font-semibold sm:text-desktop-body-2 text-desktop-body-3">Definition</p>
                            <p className="sm:block hidden font-bold sm:text-desktop-heading-5 text-mobile-heading-5">Athan/Adhan/Azaan</p>
                            <div className="md:hidden block">
                                <ReadMore text={definitionText} maxLength={500} />
                            </div>
                            <div className="md:block hidden">
                                <p className="text-mobile-body-2">
                                    {definitionText}
                                </p>
                            </div>
                        </div>
                        {
                            layout && (
                                carousel ? (
                                    <div className="flex flex-col gap-6 w-full px-1.5">
                                        <div className="flex flex-col justify-start items-start gap-[5px] w-full">
                                            <p className="sm:hidden block text-gray-500 font-semibold sm:text-desktop-body-2 text-desktop-body-3">Definition</p>
                                            <p className="sm:hidden block font-bold sm:text-desktop-heading-5 text-mobile-heading-5">Athan/Adhan/Azaan</p>
                                        </div>
                                        <CarouselGlossaryPage data={DUMMY_IMG} multiImages={true} />
                                    </div>
                                ) : (
                                    <div className="w-full">
                                        <ImageWithFallback
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="w-full max-h-[151px] sm:max-h-[250px] lg:max-h-[400px] xl:w-[400px] xl:max-w-[400px] object-cover bg-center rounded-lg"
                                            priority={false}
                                            src="/image/mosque.webp"
                                            alt="logo"
                                        />
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className="flex flex-col justify-start items-start gap-4 sm:gap-8 w-full">
                        <p className="text-gray-500 font-semibold sm:text-desktop-body-2 text-mobile-heading-6 text-left">Related Links</p>
                        <div className="flex md:flex-row flex-col justify-between gap-6 items-center w-full">
                            <YouTubeCard url={videoUrl} />
                            <YouTubeCard url={videoUrl} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-5 mb-6 sm:mb-16 bg-[#F1F3FF] lg:p-10 flex justify-center items-center pt-6 sm:pt-12">
                <div className="w-full max-w-[1440px] min-h-[460px] flex flex-col gap-10 justify-start items-center">
                    <p className="sm:text-desktop-heading-5 text-mobile-heading-4 font-bold sm:mb-4 bg-clip-text text-black text-center">Related Terms</p>
                    {/* <div className="w-full flex justify-center items-center"> */}
                    <CarouselGlossaryPage data={DUMMY_DATA_GLOSSARY} />
                    {/* </div> */}
                </div>
            </div>
        </div >
    );
}
