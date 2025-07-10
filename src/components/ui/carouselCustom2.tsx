"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import useIsMobile from "@/hooks/mobileView"

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    setApi?: (api: CarouselApi) => void
    years?: number[]
    slideCount?: number
    showDots?: boolean
    visibleSlides?: number // <--- ADD THIS!
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
    selectedIndex: number
    visibleSlides: number // <--- ADD THIS!
    slidesInView: number[]
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }
    return context
}

const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ opts, setApi, plugins, className, children, years, slideCount, showDots, visibleSlides = 1, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            loop: true,
            align: "center",
            skipSnaps: false,
        },
        plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [slidesInView, setSlidesInView] = React.useState<number[]>([])

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api) return
        setSelectedIndex(api.selectedScrollSnap())
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
        setSlidesInView(api.slidesInView())
    }, [])

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    const onSelectYear = React.useCallback(
        (index: number) => {
            api?.scrollTo(index)
        },
        [api]
    )

    React.useEffect(() => {
        if (!api || !setApi) return
        setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
        if (!api) return
        onSelect(api)
        api.on("reInit", onSelect)
        api.on("select", onSelect)
        return () => {
            api?.off("select", onSelect)
        }
    }, [api, onSelect])

    // AUTO CALCULATE SLIDE COUNT IF NOT PROVIDED
    let autoSlideCount = 0;
    React.Children.forEach(children, (child) => {
        if (
            React.isValidElement(child) &&
            (child.type as any).displayName === "CarouselContent"
        ) {
            autoSlideCount = React.Children.count(child.props.children);
        }
    });
    const dotsCount = typeof slideCount === "number" ? slideCount : autoSlideCount;
    const shouldShowDots = showDots ?? false

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api,
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
                selectedIndex,
                visibleSlides, // <- ADD TO CONTEXT
                slidesInView
            }}
        >
            <div
                ref={ref}
                className={cn("relative", className)}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {children}
                {years && (
                    <CarouselYearSelector years={years} onSelectYear={onSelectYear} />
                )}
                {shouldShowDots && dotsCount > 1 && (
                    <CarouselDots count={dotsCount} />
                )}
            </div>
        </CarouselContext.Provider>
    )
})
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { carouselRef } = useCarousel()
        return (
            <div ref={carouselRef} className="overflow-hidden">
                <div
                    ref={ref}
                    className={cn("flex md:-ml-4 transition-transform duration-100", className)}
                    {...props}
                />
            </div>
        )
    }
)
CarouselContent.displayName = "CarouselContent"

// --- INI BAGIAN PENTINGNYA ---
const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { index: number, image?: React.ReactNode, setIsMobile?: boolean, customType?: string, visibleSlides?: number }
>(({ className, index, children, image, setIsMobile, customType, visibleSlides, ...props }, ref) => {
    // ambil visibleSlides dari context/props, fallback ke 3
    const { selectedIndex, visibleSlides: contextVisibleSlides } = useCarousel()
    const isActive = index === selectedIndex
    console.log("isActive", isActive, index, selectedIndex)
    const isMobile = useIsMobile(900);
    const count = visibleSlides ?? contextVisibleSlides ?? 3

    return (
        isMobile ? (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "min-w-0 shrink-0 grow-0 basis-full",
                    className
                )}
                {...props}
            >
                <div className="flex w-full px-2 flex-col items-center">
                    <div className="w-full flex">
                        {image}
                    </div>
                    <div className="mt-2 w-full">
                        {children}
                    </div>
                </div>
            </div>
        ) : (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "shrink-0 grow-0 flex justify-center items-stretch transition-transform duration-100 min-w-0",
                    {
                        1: "basis-full",
                        2: "basis-full md:basis-1/2",
                        3: "basis-full md:basis-1/3",
                        4: "basis-full md:basis-1/4",
                    }[count],
                    isActive ? "w-full z-10 md:basis-[650px]" : "w-[50%] opacity-50 z-0",
                    className
                )}
                {...props}
            >
                <div className="w-full flex flex-col items-center mx-2 md:mx-4">
                    {
                        image && (
                            <div className="w-full flex items-center justify-center">
                                {image}
                            </div>
                        )
                    }
                    <div className="mt-2 w-full">
                        {children}
                    </div>
                </div>
            </div>
        )
    )
})
CarouselItem.displayName = "CarouselItem"

const CarouselItemCustom = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { index: number, image?: React.ReactNode, setIsMobile?: boolean, customType?: string }
>(({ className, index, children, image, setIsMobile, customType, ...props }, ref) => {
    const { selectedIndex } = useCarousel()
    const isActive = index === selectedIndex
    const isMobile = useIsMobile(900);
    return (
        isMobile || setIsMobile ? (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "min-w-0 shrink-0 grow-0 basis-full",
                    className
                )}
                {...props}
            >
                {
                    customType === "2" ? (
                        <div className="flex w-full md:flex-row-reverse flex-col sm:max-h-[300px] md:max-h-[300px] lg:max-h-[1000px] h-full items-center gap-14 justify-between">
                            <div className="w-full md:max-w-[668px] max-w-[400px] md:max-h-[518px] max-h-[260px] flex">
                                {image}
                            </div>
                            {isActive && (
                                <div className="mt-2 w-full">
                                    {children}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex w-full flex-col items-center ml-4">
                            <div className="w-full flex">
                                {image}
                            </div>
                            {isActive && (
                                <div className="mt-2 w-full">
                                    {children}
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        ) : (
            <>
                <div
                    ref={ref}
                    role="group"
                    aria-roledescription="slide"
                    className={cn(
                        "shrink-0 grow-0 items-center flex justify-center basis-[100%] px-3 md:px-5 transition-transform duration-500",
                        isActive ? "basis-1/2" : "basis-1/3",
                        className
                    )}
                    {...props}
                >
                    <div className="flex w-full flex-col items-center ml-4">
                        <div className="w-full flex items-center justify-center">
                            {image}
                        </div>
                        {isActive && (
                            <div className="mt-2 w-full">
                                {children}
                            </div>
                        )}
                    </div>
                </div>
            </>
        )
    )
})
CarouselItemCustom.displayName = "CarouselItemCustom"

const CarouselItemBlogs = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { index: number, image?: React.ReactNode, setIsMobile?: boolean, customType?: string, visibleSlides?: number }
>(({ className, index, children, image, setIsMobile, customType, visibleSlides, ...props }, ref) => {
    // ambil visibleSlides dari context/props, fallback ke 3
    const { selectedIndex, visibleSlides: contextVisibleSlides } = useCarousel()
    const isActive = index === selectedIndex
    console.log("isActive", isActive, index, selectedIndex)
    const isMobile = useIsMobile(900);
    const count = visibleSlides ?? contextVisibleSlides ?? 3

    return (
        isMobile ? (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "min-w-0 shrink-0 grow-0 basis-full",
                    className
                )}
                {...props}
            >
                <div className="flex w-full flex-col items-center">
                    <div className="w-full flex">
                        {image}
                    </div>
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        ) : (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "shrink-0 grow-0 flex justify-center items-stretch transition-transform duration-100 min-w-0",
                    {
                        1: "basis-full",
                        2: "basis-full md:basis-1/2",
                        3: "basis-full md:basis-1/3",
                        4: "basis-full md:basis-1/4",
                        5: "basis-full md:basis-96",
                    }[count],
                    isActive ? "w-full z-10 bg-black basis-96" : "opacity-50 z-0",
                    className
                )}
                {...props}
            >
                <div className="w-full flex flex-col items-center">
                    {
                        image && (
                            <div className={cn("w-full flex items-center justify-center", 
                                isActive ? "min-h-[595px]" : "h-[511px]"
                            )}>
                                  {image}
                            </div>
                        )
                    }
                    <div className={cn("md:max-w-96 max-w-[400px] w-full mx-1", 
                                isActive ? "min-h-[595px]" : "h-[511px]"
                            )}>
                        {children}
                    </div>
                </div>
            </div>
        )
    )
})
CarouselItemBlogs.displayName = "CarouselItemBlogs"

const CarouselItemPodcasts = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { index: number, image?: React.ReactNode, setIsMobile?: boolean, customType?: string, visibleSlides?: number }
>(({ className, index, children, image, setIsMobile, customType, visibleSlides, ...props }, ref) => {
    // ambil visibleSlides dari context/props, fallback ke 3
    const { selectedIndex, visibleSlides: contextVisibleSlides } = useCarousel()
    const isActive = index === selectedIndex
    console.log("isActive", isActive, index, selectedIndex)
    const isMobile = useIsMobile(900);
    const count = visibleSlides ?? contextVisibleSlides ?? 3

    return (
        isMobile ? (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "min-w-0 shrink-0 grow-0 basis-1/2",
                    className
                )}
                {...props}
            >
                <div className="flex w-full flex-col items-center">
                    <div className="w-full flex">
                        {image}
                    </div>
                    <div className="w-full">
                        {children}
                    </div>
                </div>
            </div>
        ) : (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "shrink-0 grow-0 flex justify-center items-stretch transition-transform duration-100 min-w-0",
                    {
                        1: "basis-full",
                        2: "basis-full md:basis-1/2",
                        3: "basis-full md:basis-1/3",
                    }[count],
                    className
                )}
                {...props}
            >
                <div className="w-full flex flex-col items-center">
                    {
                        image && (
                            <div className={cn("w-full flex items-center justify-center", 
                            )}>
                                  {image}
                            </div>
                        )
                    }
                    <div className={cn("md:max-w-[96] max-w-[400px] w-full mx-1", 
                            )}>
                        {children}
                    </div>
                </div>
            </div>
        )
    )
})
CarouselItemPodcasts.displayName = "CarouselItemPodcasts"

const CarouselItemTestimonials = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { index: number, image?: React.ReactNode, setIsMobile?: boolean, customType?: string, visibleSlides?: number }
>(({ className, index, children, image, setIsMobile, customType, visibleSlides, ...props }, ref) => {
    // ambil visibleSlides dari context/props, fallback ke 3
    const { selectedIndex, visibleSlides: contextVisibleSlides } = useCarousel()
    const isActive = index === selectedIndex
    console.log("isActive", isActive, index, selectedIndex)
    const isMobile = useIsMobile(900);
    const count = visibleSlides ?? contextVisibleSlides ?? 3

    return (
        isMobile ? (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "min-w-0 shrink-0 grow-0 basis-full",
                    className
                )}
                {...props}
            >
                <div className="flex w-full flex-col items-center">
                    {/* <div className="w-full flex">
                        {image}
                    </div> */}
                    <div className="lg:w-full w-fit">
                        {children}
                    </div>
                </div>
            </div>
        ) : (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    "shrink-0 grow-0 flex justify-center items-stretch transition-transform duration-100 min-w-0",
                    {
                        1: "basis-full",
                        2: "basis-full md:basis-1/2",
                        3: "basis-full md:basis-[60%]",
                    }[count],
                    className
                )}
                {...props}
            >
                <div className="w-full flex flex-col items-center">
                    {
                        image && (
                            <div className={cn("w-full flex items-center justify-center", 
                            )}>
                                  {image}
                            </div>
                        )
                    }
                    <div className={cn("md:max-w-[1000px] md:max-h-96 w-full mx-1", 
                            )}>
                        {children}
                    </div>
                </div>
            </div>
        )
    )
})
CarouselItemTestimonials.displayName = "CarouselItemTestimonials"

const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button> & { customType?: string }
>(({ className, variant = "outline", size = "icon", customType, ...props }, ref) => {
    const { scrollPrev, canScrollPrev, selectedIndex } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                className,
                !canScrollPrev && "opacity-50 pointer-events-none",
                customType === "2" ? `` : `absolute rounded-none top-[30%] size-11 bg-white -translate-y-1/2 z-20 transition-transform", -left-5 lg:left-[calc(40%-160px)] xl:left-[calc(40%-200px)]` // Adjust based on highlighted item // Adjust based on highlighted item
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className="h-4 w-4 text-primary-cr-600" />
        </Button>
    )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button> & { customType?: string }
>(({ className, variant = "outline", size = "icon", customType, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                className,
                !canScrollNext && "opacity-50 pointer-events-none",
                customType === "2" ? `` : `absolute rounded-none top-[30%] size-11 bg-white -translate-y-1/2 z-20 transition-transform", -right-5 lg:right-[calc(40%-160px)] xl:right-[calc(40%-200px)]` // Adjust based on highlighted item
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className="h-4 w-4 text-primary-cr-600" />
        </Button>
    )
})
CarouselNext.displayName = "CarouselNext"

const CarouselPreviousCustom = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                // absolute di bawah, sedikit kiri
                "absolute bottom-[-65px] left-1/2 z-20  -translate-x-[120%] size-11 bg-white",
                className,
                !canScrollPrev && "opacity-50 pointer-events-none"
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className="h-4 w-4 text-primary-cr-600" />
            <span className="sr-only">Previous slide</span>
        </Button>
    )
})
CarouselPreviousCustom.displayName = "CarouselPreviousCustom"

const CarouselNextCustom = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                // absolute di bawah, sedikit kanan dari tengah
                "absolute bottom-[-65px] left-1/2 z-20  translate-x-[20%] size-11 bg-white",
                className,
                !canScrollNext && "opacity-50 pointer-events-none"
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className="h-4 w-4 text-primary-cr-600" />
            <span className="sr-only">Next slide</span>
        </Button>
    )
})
CarouselNextCustom.displayName = "CarouselNextCustom"

const CarouselYearSelector = React.forwardRef<
    HTMLDivElement,
    { years: number[]; onSelectYear: (index: number) => void }
>(({ years, onSelectYear }, ref) => {
    const { selectedIndex } = useCarousel()

    return (
        <div
            ref={ref}
            className="flex justify-center gap-1 mt-8 md:mt-12 w-full"
            role="navigation"
            aria-label="Year Selector"
        >
            {years.map((year, index) => (
                <button
                    key={year}
                    onClick={() => onSelectYear(index)}
                    className={cn(
                        "md:px-2 py-2 text-sm font-medium w-full transition-colors group",
                        selectedIndex === index
                            ? "text-blue-600"
                            : "text-neutral-500 hover:text-neutral-600"
                    )}
                    aria-current={selectedIndex === index ? "true" : undefined}
                >
                    {year}
                    <div className={cn(
                        "md:px-2 mt-2 h-2 text-sm font-medium w-full transition-colors",
                        selectedIndex === index
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-800 group-hover:bg-gray-300"
                    )} />
                </button>
            ))}
        </div>
    )
})
CarouselYearSelector.displayName = "CarouselYearSelector"

const CarouselDots = React.forwardRef<
    HTMLDivElement,
    { count: number }
>(({ count }, ref) => {
    const { selectedIndex, api } = useCarousel();

    const scrollTo = (idx: number) => {
        api?.scrollTo(idx);
    };

    return (
        <div
            ref={ref}
            className="flex justify-center items-center gap-2 mt-4"
            role="tablist"
            aria-label="Carousel Dots"
        >
            {Array.from({ length: count }).map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => scrollTo(idx)}
                    className={cn(
                        "size-2 rounded-full transition-all bg-gray-300",
                        selectedIndex === idx
                            ? "bg-blue-600 scale-125 shadow"
                            : "opacity-50 hover:opacity-80"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                    aria-current={selectedIndex === idx ? "true" : undefined}
                    tabIndex={0}
                    type="button"
                />
            ))}
        </div>
    );
});
CarouselDots.displayName = "CarouselDots";

export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselNextCustom,
    CarouselPreviousCustom,
    CarouselYearSelector,
    CarouselItemCustom,
    CarouselItemBlogs,
    CarouselItemPodcasts,
    CarouselItemTestimonials,
    CarouselDots
}
