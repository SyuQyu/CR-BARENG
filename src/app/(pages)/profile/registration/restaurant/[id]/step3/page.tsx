"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileUpload, Input } from "@/components/common";
import { useFormState } from "react-dom";
import { createRestaurantAction, updateRestaurantAction, getRestaurantAction } from "@/app/(pages)/profile/registration/restaurant/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

// Step 3 options
const basicFacilitiesOptions = [
    "Wifi (free)",
    "Wifi (Paid)",
    "Wired Internet (free)",
    "Wired Internet (paid)",
    "Fitness Centre (Common)",
    "Spa and Wellness Center",
    "Outdoor Pool (Common)",
    "Children's Playground",
    "Tennis Court",
    "Sauna",
    "Diving",
    "Windsurfing",
    "Squash",
    "Skiing",
    "Car parking (charges apply)",
    "Free Car Parking",
];

const defaultStep3 = {
    basicFacilities: [],
    bookNowUrl: "",
    imageGallery: [],
};

export default function RestaurantStep3Page({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(defaultStep3);
    const [imageGallery, setImageGallery] = useState<File[]>([]);

    // Form state
    const [state, formAction] = useFormState(
        (prevState: any, formData: FormData) =>
            params?.id
                ? updateRestaurantAction(formData, prevState)
                : createRestaurantAction(formData),
        { success: false, error: null, data: null }
    );

    // Fetch restaurant data if editing
    useEffect(() => {
        if (!params?.id) return;
        const fetchRestaurant = async () => {
            setIsLoading(true);
            try {
                const response = await getRestaurantAction(params.id);
                if (response.success && response.data) {
                    setFormData({
                        ...defaultStep3,
                        ...response.data,
                    });
                    setImageGallery(response.data.imageGallery || []);
                } else {
                    toast.error("Error", { description: "Failed to load restaurant data" });
                }
            } catch (error) {
                console.error("Error fetching restaurant:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRestaurant();
    }, [params?.id]);

    // Handle form submission response
    useEffect(() => {
        if (!state.success) return;
        if (state.data) {
            toast.success("Success", {
                description: params?.id
                    ? "Restaurant updated successfully"
                    : "Restaurant created successfully",
            });
            router.push(`/profile/registration/restaurant/${params?.id || state.data.id}/step4`);
        } else if (state.error) {
            toast.error("Error", { description: state.error });
        }
    }, [state, router, params?.id]);

    // Checkbox handler
    const handleCheckbox = (name: string, value: string) => {
        setFormData((prev) => {
            const arr = prev[name as keyof typeof prev] as string[];
            return {
                ...prev,
                [name]: arr.includes(value)
                    ? arr.filter((v) => v !== value)
                    : [...arr, value],
            };
        });
    };

    // Input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formDataObj = new FormData(formRef.current!);

        // Tambahkan file ke FormData
        imageGallery.forEach((file) => formDataObj.append("imageGallery", file));

        formAction(formDataObj);
    };

    if (isLoading) {
        return (
            <div className="w-full h-96 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full flex flex-row justify-start items-center gap-2 mb-6">
                <div className="w-[60px] h-[60px] text-desktop-heading-5 bg-[#1502cd] rounded-full flex items-center justify-center text-white">
                    3
                </div>
                <h1 className="text-desktop-heading-5">Basic facilities and Image gallery</h1>
            </div>

            <form onSubmit={handleSubmit} ref={formRef} className="w-full mx-auto space-y-6">
                {/* Basic Facilities - removed for restaurant step 3 as we only need image gallery */}

                {/* Image Gallery */}
                <FileUpload
                    label="Image Gallery"
                    name="imageGallery"
                    files={imageGallery}
                    setFiles={setImageGallery}
                />

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-4">
                    <Button type="button" asChild>
                        <Link href={`/profile/registration/restaurant/${params?.id}/step2`}>
                            Back
                        </Link>
                    </Button>
                    <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-10">
                        {params?.id ? "Update & Next" : "Save & Next"}
                    </Button>
                </div>
                {state.error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
                        {state.error}
                    </div>
                )}
            </form>
        </div>
    );
}

// SectionCheckbox component with shadcn/ui Checkbox
function SectionCheckbox({
    title,
    options,
    name,
    values,
    onChange,
}: {
    title: string;
    options: string[];
    name: string;
    values: string[];
    onChange: (name: string, value: string) => void;
}) {
    return (
        <div className="border p-4 mb-4">
            <div className="font-bold mb-2">{title}</div>
            {options.map((opt) => (
                <label key={opt} className="flex items-center gap-2 mb-1 cursor-pointer">
                    <Checkbox
                        checked={values.includes(opt)}
                        onCheckedChange={() => onChange(name, opt)}
                        id={`${name}-${opt}`}
                    />
                    <span>{opt}</span>
                </label>
            ))}
        </div>
    );
}