'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

// Define price option interface
interface PriceOption {
    roomCount: string;
    price: number | string;
}

interface PricingCardProps {
    title: string;
    price?: string | number; // Make optional since we'll use priceOptions
    priceOptions?: PriceOption[]; // Array of price options
    features?: string[];
    className?: string;
    type?: number;
}

export default function PricingCard2({
    title,
    price,
    priceOptions = [
        { roomCount: "Up to 20 rooms", price: 250 },
        { roomCount: "21-50 rooms", price: 500 },
        { roomCount: "51-100 rooms", price: 750 },
        { roomCount: "100+ rooms", price: 1000 }
    ],
    className = "",
    features = [
        "Crescent Rating of hotels",
        "Hotel audit",
        "Award Crescent Rating",
        "Rating decals and certificate",
        "Listed on Crescentrating as an audited hotel (throughout the rating validity)",
        "Listed on HalalTrip as an audited hotel (throughout the rating validity)",
        "Rights to promote the property as a Crescent Rated Hotel"
    ],
    type = 1
}: PricingCardProps) {
    // State to track selected option
    const [selectedOption, setSelectedOption] = useState(priceOptions[0]);

    // Handle select change
    const handleSelectChange = (value: string) => {
        const option = priceOptions.find(opt => opt.roomCount === value);
        if (option) {
            setSelectedOption(option);
        }
    };
    return (
        <div className={clsx(`w-full flex flex-col bg-white border border-t-8 rounded-md gap-3 p-6`,
            type === 1 && "border-[#E5E8FF]",
            type === 2 && "border-[#CED2FF]",
            type === 3 && "border-[#A6ABFF]",
            type === 4 && "border-[#7475FF]",
            className)}>
            <div className="w-full">
                {type === 1 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29" viewBox="0 0 20 29" fill="none">
                        <path d="M14.5 0C16.2308 0 17.8908 0.303117 19.4297 0.859375C13.8486 2.87701 9.86035 8.22286 9.86035 14.5C9.86035 20.777 13.8487 26.1219 19.4297 28.1396C17.8907 28.696 16.2309 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0Z" fill="#E5E8FF" />
                    </svg>
                )}

                {type === 2 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="29" viewBox="0 0 34 29" fill="none">
                        <path d="M14.5 0C16.2308 0 17.8908 0.303117 19.4297 0.859375C13.8486 2.87701 9.86035 8.22286 9.86035 14.5C9.86035 20.777 13.8487 26.1219 19.4297 28.1396C17.8907 28.696 16.2309 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0Z" fill="#CED2FF" />
                        <path d="M29 0C30.7308 0 32.3908 0.303117 33.9297 0.859375C28.3486 2.87701 24.3604 8.22286 24.3604 14.5C24.3604 20.777 28.3487 26.1219 33.9297 28.1396C32.3907 28.696 30.7309 29 29 29C20.9919 29 14.5 22.5081 14.5 14.5C14.5 6.49187 20.9919 0 29 0Z" fill="#CED2FF" />
                    </svg>
                )}

                {type === 3 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="29" viewBox="0 0 49 29" fill="none">
                        <path d="M14.5 0C16.2308 0 17.8908 0.303117 19.4297 0.859375C13.8486 2.87701 9.86035 8.22286 9.86035 14.5C9.86035 20.777 13.8487 26.1219 19.4297 28.1396C17.8907 28.696 16.2309 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0Z" fill="#A6ABFF" />
                        <path d="M29 0C30.7308 0 32.3908 0.303117 33.9297 0.859375C28.3486 2.87701 24.3604 8.22286 24.3604 14.5C24.3604 20.777 28.3487 26.1219 33.9297 28.1396C32.3907 28.696 30.7309 29 29 29C20.9919 29 14.5 22.5081 14.5 14.5C14.5 6.49187 20.9919 0 29 0Z" fill="#A6ABFF" />
                        <path d="M43.5 0C45.2308 0 46.8908 0.303117 48.4297 0.859375C42.8486 2.87701 38.8604 8.22286 38.8604 14.5C38.8604 20.777 42.8487 26.1219 48.4297 28.1396C46.8907 28.696 45.2309 29 43.5 29C35.4919 29 29 22.5081 29 14.5C29 6.49187 35.4919 0 43.5 0Z" fill="#A6ABFF" />
                    </svg>
                )}

                {type === 4 && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="29" viewBox="0 0 63 29" fill="none">
                        <path d="M14.5 0C16.2308 0 17.8908 0.303117 19.4297 0.859375C13.8486 2.87701 9.86035 8.22286 9.86035 14.5C9.86035 20.777 13.8487 26.1219 19.4297 28.1396C17.8907 28.696 16.2309 29 14.5 29C6.49187 29 0 22.5081 0 14.5C0 6.49187 6.49187 0 14.5 0Z" fill="#7475FF" />
                        <path d="M29 0C30.7308 0 32.3908 0.303117 33.9297 0.859375C28.3486 2.87701 24.3604 8.22286 24.3604 14.5C24.3604 20.777 28.3487 26.1219 33.9297 28.1396C32.3907 28.696 30.7309 29 29 29C20.9919 29 14.5 22.5081 14.5 14.5C14.5 6.49187 20.9919 0 29 0Z" fill="#7475FF" />
                        <path d="M43.5 0C45.2308 0 46.8908 0.303117 48.4297 0.859375C42.8486 2.87701 38.8604 8.22286 38.8604 14.5C38.8604 20.777 42.8487 26.1219 48.4297 28.1396C46.8907 28.696 45.2309 29 43.5 29C35.4919 29 29 22.5081 29 14.5C29 6.49187 35.4919 0 43.5 0Z" fill="#7475FF" />
                        <path d="M58 0C59.7308 0 61.3908 0.303117 62.9297 0.859375C57.3486 2.87701 53.3604 8.22286 53.3604 14.5C53.3604 20.777 57.3487 26.1219 62.9297 28.1396C61.3907 28.696 59.7309 29 58 29C49.9919 29 43.5 22.5081 43.5 14.5C43.5 6.49187 49.9919 0 58 0Z" fill="#7475FF" />
                    </svg>
                )}
            </div>
            {/* Title */}
            <h3 className="font-semibold text-mobile-body-1 md:text-desktop-body-1">{title}</h3>

            {/* Price */}
            <p className="text-[#5747FF] text-mobile-heading-3 md:text-desktop-heading-5 font-semibold">
                USD ${selectedOption.price}
            </p>

            {/* Dropdown for room selection/pricing */}
            <Select onValueChange={handleSelectChange} defaultValue={selectedOption.roomCount}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={selectedOption.roomCount} />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                    {priceOptions.map((option, index) => (
                        <SelectItem key={index} value={option.roomCount}>
                            {option.roomCount}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Features List */}
            <div className="mb-2">
                <p className="font-semibold text-mobile-body-3 md:text-desktop-body-3 mb-2">What&apos;s included:</p>
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className="h-4 w-4 text-[#5747FF] mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-mobile-body-3 md:text-desktop-body-3">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}