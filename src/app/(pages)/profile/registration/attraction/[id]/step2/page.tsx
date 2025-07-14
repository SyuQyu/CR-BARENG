"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { FileUpload, Input, OpenStreetMap, RichTextEditor } from "@/components/common";
import { useFormState } from 'react-dom';
import { createHotelAction, updateHotelAction, getHotelAction } from "@/app/(pages)/profile/registration/hotel/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

// Checkbox options
const recreationalFacilitiesOptions = [
    "Hotel has a gym pool for females with privacy",
    "Hotel has a gym pool for males with privacy",
    "Hotel has a separate swimming pool for females with privacy",
    "Hotel has a separate swimming pool for males with privacy",
    "Hotel has separate timings for gym usage for females (with privacy)",
    "Hotel has separate timings for gym usage for males (with privacy)",
    "Hotel has separate timings for swimming pool usage for females (with privacy)",
    "Hotel has separate timings for swimming pool usage for males (with privacy)",
];

const otherServicesOptions = [
    "Female room attendants",
    "Hotel can serve Kosher food on request",
    "Hotel can serve vegetarian food on request",
    "Hotel has a female only floor",
    "Hotel has a female only Spa",
    "Quran available in the room",
    "Stewardess available to attend to female guest upon request",
];

const ramadhanFacilitiesOptions = [
    "Halal Iftar can be arranged",
    "Halal Sahooor can be arranged on request",
    "Hotel can arrange the guest to be taken to the nearby mosque for Taraweeh prayers",
    "Hotel will arrange the guest to be taken to the nearby mosque for Eid prayers",
];

const nonHalalActivitiesOptions = [
    "Hotel does not have a discotheque",
    "Hotel does not serve Alcohol",
    "Hotel does not have a bar",
    "Hotel is not part of a gambling resort",
    "No adult TV channels in the room",
];

const halalFoodServicesOptions = [
    "All F&B in the Hotel is Halal",
    "All Snacks and drinks in the room/Mini bar are Halal",
    "Halal banquets can be arranged on request",
    "Halal restaurants at walking distance from Hotel",
    "Halal restaurants available within 10 minutes walk",
    "Halal restaurants within 5 kilometers from the hotel",
    "Hotel serve Halal breakfast",
    "Hotel serve Halal room service",
    "Hotel has a Halal certified kitchen",
    "Hotel has a Halal certified restaurant",
    "Hotel has a Halal-friendly certified restaurant",
    "Hotel has a restaurant assured halal by the management",
    "List of nearby Halal restaurants can be provided on request",
];

const staffOptions = [
    "Staff trained on Muslim guest requirements",
];

const prayerFacilitiesOptions = [
    "At least one floor of rooms has the prayer direction marked",
    "Female prayer dress available on request",
    "List of nearby mosques can be provided on request",
    "Male and female prayer rooms available in the hotel",
    "Male and female prayer rooms can be made available on request",
    "All rooms have the prayer direction marked",
    "Prayer mats available in the room",
    "Prayer mats can be provided on request",
    "Prayer time table available at the front desk or room",
];

const sanitaryFacilitiesOptions = [
    "At least one floor of rooms has toilets fitted with bidet",
    "At least one floor of rooms has toilets fitted with hand shower",
    "At least one floor of rooms has toilets fitted with Japanese washlets",
    "All rooms have toilets fitted with bidet",
    "All rooms have toilets fitted with hand shower",
    "All rooms have toilets fitted with Japanese washlets",
];

// Initial state for step 2
const defaultStep2 = {
    recreationalFacilities: [],
    otherServices: [],
    ramadhanFacilities: [],
    nonHalalActivities: [],
    halalFoodServices: [],
    staff: [],
    prayerFacilities: [],
    sanitaryFacilities: [],
    halalFriendlyServicesDescription: "",
    hotelHalalDiningServicesDescription: "",
    nearbyHalalRestaurants: "",
    listOfNearbyMosques: "",
    guestRoomWashroomImages: [],
    hotelRestaurantHalalCertificateImages: [],
    guestRoomPrayerMarkingsImages: [],
};

export default function HotelStep2Page({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(defaultStep2);
    const [guestRoomWashroomImages, setGuestRoomWashroomImages] = useState<File[]>([]);
    const [guestRoomPrayerMarkingsImages, setGuestRoomPrayerMarkingsImages] = useState<File[]>([]);
    const [hotelRestaurantHalalCertificateImages, setHotelRestaurantHalalCertificateImages] = useState<File[]>([]);

    // Form state
    const [state, formAction] = useFormState(
        (prevState: any, formData: FormData) =>
            params?.id
                ? updateHotelAction(formData, prevState)
                : createHotelAction(formData),
        { success: false, error: null, data: null }
    );

    // Fetch hotel data if editing
    useEffect(() => {
        if (!params?.id) return;
        const fetchHotel = async () => {
            setIsLoading(true);
            try {
                const response = await getHotelAction(params.id);
                if (response.success && response.data) {
                    setFormData({
                        ...defaultStep2,
                        ...response.data,
                    });
                } else {
                    toast.error("Error", { description: "Failed to load hotel data" });
                }
            } catch (error) {
                console.error("Error fetching hotel:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHotel();
    }, [params?.id]);

    // Handle form submission response
    useEffect(() => {
        if (!state.success) return;
        if (state.data) {
            toast.success("Success", {
                description: params?.id
                    ? "Hotel updated successfully"
                    : "Hotel created successfully",
            });
            router.push(`/profile/registration/hotel/${params?.id || state.data.id}/step3`);
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

    // File handler
    const handleFileChange = (name: string, files: FileList | null) => {
        setFormData((prev) => ({
            ...prev,
            [name]: files ? Array.from(files) : [],
        }));
    };

    // RichText handler
    const handleRichText = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Submit handler
    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     formRef.current?.requestSubmit();
    // };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(formRef.current!);

        // Tambahkan file ke FormData
        guestRoomWashroomImages.forEach(file => formData.append("guestRoomWashroomImages", file));
        guestRoomPrayerMarkingsImages.forEach(file => formData.append("guestRoomPrayerMarkingsImages", file));
        hotelRestaurantHalalCertificateImages.forEach(file => formData.append("hotelRestaurantHalalCertificateImages", file));

        // Lanjut submit ke server action, misal:
        formAction(formData);
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
                    2
                </div>
                <h1 className="text-desktop-heading-5">Halal Friendly Services and Facilities</h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
                {/* Checkbox Groups */}
                <SectionCheckbox
                    title="Staff"
                    options={staffOptions}
                    name="staff"
                    values={formData.staff}
                    onChange={handleCheckbox}
                />
                <SectionCheckbox
                    title="Prayer Facilities"
                    options={prayerFacilitiesOptions}
                    name="prayerFacilities"
                    values={formData.prayerFacilities}
                    onChange={handleCheckbox}
                />
                <SectionFile
                    label="Guest Room Washroom Image"
                    name="guestRoomWashroomImages"
                    data={guestRoomWashroomImages}
                    setData={setGuestRoomWashroomImages}
                />
                <SectionRichText
                    label="List of nearby mosques"
                    name="listOfNearbyMosques"
                    value={formData.listOfNearbyMosques}
                    onChange={handleRichText}
                />
                <SectionCheckbox
                    title="Halal Food Services"
                    options={halalFoodServicesOptions}
                    name="halalFoodServices"
                    values={formData.halalFoodServices}
                    onChange={handleCheckbox}
                />
                <SectionRichText
                    label="Hotel Halal Dining Services Description"
                    name="hotelHalalDiningServicesDescription"
                    value={formData.hotelHalalDiningServicesDescription}
                    onChange={handleRichText}
                />
                <SectionFile
                    label="Hotel Restaurant or Kitchen Halal Certificate Image"
                    name="hotelRestaurantHalalCertificateImages"
                    data={hotelRestaurantHalalCertificateImages}
                    setData={setHotelRestaurantHalalCertificateImages}
                />
                <SectionRichText
                    label="Nearby Halal Restaurants"
                    name="nearbyHalalRestaurants"
                    value={formData.nearbyHalalRestaurants}
                    onChange={handleRichText}
                />
                <SectionCheckbox
                    title="Sanitary Facilities"
                    options={sanitaryFacilitiesOptions}
                    name="sanitaryFacilities"
                    values={formData.sanitaryFacilities}
                    onChange={handleCheckbox}
                />
                <SectionFile
                    label="Guest Room Prayer Markings Image"
                    name="guestRoomPrayerMarkingsImages"
                    data={guestRoomPrayerMarkingsImages}
                    setData={setGuestRoomPrayerMarkingsImages}
                />
                <SectionCheckbox
                    title="Ramadhan Facilities"
                    options={ramadhanFacilitiesOptions}
                    name="ramadhanFacilities"
                    values={formData.ramadhanFacilities}
                    onChange={handleCheckbox}
                />
                <SectionCheckbox
                    title="Non-Halal Activities"
                    options={nonHalalActivitiesOptions}
                    name="nonHalalActivities"
                    values={formData.nonHalalActivities}
                    onChange={handleCheckbox}
                />
                <SectionCheckbox
                    title="Recreational Facilities"
                    options={recreationalFacilitiesOptions}
                    name="recreationalFacilities"
                    values={formData.recreationalFacilities}
                    onChange={handleCheckbox}
                />
                <SectionCheckbox
                    title="Other Services"
                    options={otherServicesOptions}
                    name="otherServices"
                    values={formData.otherServices}
                    onChange={handleCheckbox}
                />
                <SectionRichText
                    label="Halal Friendly Services Description"
                    name="halalFriendlyServicesDescription"
                    value={formData.halalFriendlyServicesDescription}
                    onChange={handleRichText}
                />
                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-4">
                    <Button type="button" asChild>
                        <Link href={`/profile/registration/hotel/${params?.id}/step1`}>
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

            {/* Hidden form for server action */}
            <form ref={formRef} action={formAction} className="hidden" encType="multipart/form-data">
                {Object.entries(formData).map(([key, value]) => {
                    if (Array.isArray(value)) {
                        // For checkbox group and files
                        return value.map((v: any, i) =>
                            v instanceof File ? (
                                <input key={key + i} type="file" name={key} />
                            ) : (
                                <input key={key + i} type="hidden" name={key} value={v} />
                            )
                        );
                    }
                    return <input key={key} type="hidden" name={key} value={value || ""} />;
                })}
                {params?.id && <input type="hidden" name="id" value={params.id} />}
            </form>
        </div>
    );
}

// SectionCheckbox component
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

// SectionRichText component
function SectionRichText({ label, name, value, onChange }: {
    label: string;
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
}) {
    return (
        <div className="border p-4 mb-4">
            <label className="font-bold block mb-2">{label}</label>
            <RichTextEditor
                content={value}
                onChange={(content) => onChange(name, content)}
            />
        </div>
    );
}

// SectionFile component
function SectionFile({ label, name, data, setData }: {
    label: string;
    name: string;
    data: any;
    setData: (data: any) => void;
}) {
    return (
        <FileUpload
            label="Guest Room Washroom Image"
            name="guestRoomWashroomImages"
            files={data}
            setFiles={setData}
        />
    );
}