interface PricingCardProps {
    title: string;
    price: string | number;
}

export default function PricingCard({ title, price }: PricingCardProps) {
    return (
        <div className="w-full flex flex-col gap-5 bg-white shadow-md rounded-lg">
            <div className="bg-[#DFE9FF] w-full py-3 text-center sm:text-desktop-body-2 text-mobile-body-2 font-bold rounded-t-lg">
                {title}
            </div>
            <div className="w-full pb-6 flex flex-col gap-1 justify-center items-center">
                {
                    typeof price === "string" ? (
                        <p className="sm:text-desktop-body-2 text-mobile-body-2 text-center px-2">{price}</p>
                    ) : (
                        <div className="w-full pb-6 flex flex-col gap-1 justify-center items-center">
                            <p className="sm:text-desktop-body-2 text-mobile-body-2 text-neutral-500">
                                start from
                            </p>
                            <p className="sm:text-desktop-heading-5 text-mobile-heading-4 font-bold text-primary-cr-700">
                                USD ${price}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}