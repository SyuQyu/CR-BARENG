import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselPreviousCustom, CarouselNextCustom } from "@/components/ui/defaultCarousel";
import { BasicCard, ImageWithFallback } from "..";
import clsx from "clsx";

// Wrapper to place the buttons side by side
const CarouselControlsWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="absolute flex items-center justify-center -bottom-12 left-1/2 -translate-x-1/2 gap-4">
            {children}
        </div>
    );
};

export default function CarouselGlossaryPage({ data, multiImages = false }: any) {
    return (
        <Carousel className={clsx(multiImages ? "w-full xl:w-[400px] xl:max-w-[400px]" : "w-full flex justify-center items-center")}>
            <CarouselContent>
                {multiImages ? (
                    data?.map((item: any, index: number) => (
                        <CarouselItem key={index}>
                            <ImageWithFallback
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full max-h-[151px] sm:max-h-[250px] lg:max-h-[400px] xl:w-[400px] xl:max-w-[400px] object-cover bg-center rounded-lg"
                                priority={false}
                                src={item?.img}
                                alt={item?.alt}
                            />
                        </CarouselItem>
                    ))
                ) : (
                    data?.map((item: any, index: number) => (
                        <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
                            <BasicCard title={item.title} description={item.description} />
                        </CarouselItem>
                    ))
                )}
            </CarouselContent>

            {/* Wrap the Previous and Next buttons in a flex container when multiImages is false */}
            {!multiImages ? (
                <CarouselControlsWrapper>
                    <CarouselPreviousCustom />
                    <CarouselNextCustom />
                </CarouselControlsWrapper>
            ) : (
                // If multiImages is true, display the default Carousel Previous/Next buttons
                <>
                    <CarouselPrevious />
                    <CarouselNext />
                </>
            )}
        </Carousel>
    );
}
