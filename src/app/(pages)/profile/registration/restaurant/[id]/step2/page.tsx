"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { FileUpload, Input, RichTextEditor } from "@/components/common";
import { useFormState } from 'react-dom';
import { createRestaurantAction, updateRestaurantAction, getRestaurantAction } from "@/app/(pages)/profile/registration/restaurant/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Updated checkbox options based on the images
const otherServicesOptions = [
    "Private family dining area available",
    "Indoor air-conditioned seating",
    "Indoor seating",
    "Outdoor seating",
    "Wheelchair access",
    "Free Wifi",
    "Restrooms",
    "Parking in Premises",
    "Parking in vicinity",
    "Catering Services",
    "Delivery Services",
];

const paymentMethodsOptions = [
    "Cash",
    "American Express",
    "Dinar",
    "Master Card",
    "Nets",
    "Visa",
];

const facilitiesOptions = [
    "Only serve Seafood",
    "Only serves vegetarian",
    "Only Halal food served",
    "Non Halal food served as well",
    "Alcohol not allowed in premises",
    "No alcohol served",
    "Alcohol served",
    "Alcohol used in food preparation",
    "Permitted to bring alcohol",
    "Prayer facility available/nearby",
    "Wudu facilities available/nearby",
];

const halalAssuranceOptions = [
    "Restaurant is certified Halal by the local certification body",
    "Restaurants kitchen is certified Halal by the local certification body",
    "Kitchen managed by Muslim staff and all food assured halal by the management",
];

const restaurantTypeOptions = [
    "It is a strictly vegetarian restaurant",
    "It is a Strictly vegan restaurant",
    "It is a Strictly seafood restaurant",
    "Only halal certified meat is served in the restaurant",
];

// Initial state for step 2
const defaultStep2 = {
    // Basic info
    contactPerson: "",
    contactPersonDesignation: "",
    startingPrice: "",
    openingHour: "",
    closingHour: "",

    // Services
    otherServices: [],
    paymentMethods: [],
    facilities: [],

    // Halal related
    halalFoodServedSameRestaurant: "", // Yes/No radio
    halalFoodPreparedHalalKitchen: "", // Yes/No radio
    meatSourcedHalalSuppliers: "", // Yes/No radio
    separateKitchensHalalNonHalal: "", // Yes/No radio
    differentCutleriesHalalNonHalal: "", // Yes/No radio
    restaurantKitchenStaffedByMuslims: "", // Yes/No radio

    // Descriptions
    description: "",
    halalDiningServicesDescription: "",

    // Certification
    halalAssurance: [],
    halalCertificationBody: "",
    halalCertificateNumber: "",
    meatSuppliersCertificationBody: "",
    meatSuppliersCertificateNumber: "",
    restaurantType: [],

    // Images
    halalCertificateImages: [],
    meatSuppliersCertificateImages: [],
};

export default function RestaurantStep2Page({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(defaultStep2);
    const [halalCertificateImages, setHalalCertificateImages] = useState<File[]>([]);
    const [meatSuppliersCertificateImages, setMeatSuppliersCertificateImages] = useState<File[]>([]);

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
                        ...defaultStep2,
                        ...response.data,
                    });
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
            router.push(`/profile/registration/restaurant/${params?.id || state.data.id}/step3`);
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

    // Radio handler
    const handleRadio = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Input handler
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
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
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formDataObj = new FormData(formRef.current!);

        // Add files to FormData
        halalCertificateImages.forEach(file => formDataObj.append("halalCertificateImages", file));
        meatSuppliersCertificateImages.forEach(file => formDataObj.append("meatSuppliersCertificateImages", file));

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
            {/* Header */}
            <div className="w-full flex flex-row justify-start items-center gap-2 mb-6">
                <div className="w-[60px] h-[60px] text-desktop-heading-5 bg-[#1502cd] rounded-full flex items-center justify-center text-white">
                    2
                </div>
                <h1 className="text-desktop-heading-5">Halal Friendly Services and Facilities</h1>
            </div>

            <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
                {/* Description */}
                <SectionRichText
                    label="Description"
                    name="description"
                    value={formData.description}
                    onChange={handleRichText}
                />

                {/* How is the restaurant assured halal */}
                <SectionCheckbox
                    title="How is the restaurant assured halal"
                    options={halalAssuranceOptions}
                    name="halalAssurance"
                    values={formData.halalAssurance}
                    onChange={handleCheckbox}
                />

                {/* Upload Halal Certificate */}
                <FileUpload
                    label="Upload Halal Certificate"
                    name="halalCertificateImages"
                    files={halalCertificateImages}
                    setFiles={setHalalCertificateImages}
                />

                {/* Other Services */}
                <SectionCheckbox
                    title="Other Services"
                    options={otherServicesOptions}
                    name="otherServices"
                    values={formData.otherServices}
                    onChange={handleCheckbox}
                />

                {/* Contact Person and Starting Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Contact Person"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Contact person name"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <Input
                        label="Contact Person Designation"
                        name="contactPersonDesignation"
                        value={formData.contactPersonDesignation}
                        onChange={handleInputChange}
                        placeholder="e.g. Restaurant Manager"
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Starting Price"
                        name="startingPrice"
                        value={formData.startingPrice}
                        onChange={handleInputChange}
                        placeholder="e.g. $15"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <Input
                        label="Opening Hour"
                        name="openingHour"
                        type="time"
                        value={formData.openingHour}
                        onChange={handleInputChange}
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Closing Hour"
                        name="closingHour"
                        type="time"
                        value={formData.closingHour}
                        onChange={handleInputChange}
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </div>

                {/* Payment Methods */}
                <SectionCheckbox
                    title="Payment methods"
                    options={paymentMethodsOptions}
                    name="paymentMethods"
                    values={formData.paymentMethods}
                    onChange={handleCheckbox}
                />

                {/* Facilities */}
                <SectionCheckbox
                    title="Facilities"
                    options={facilitiesOptions}
                    name="facilities"
                    values={formData.facilities}
                    onChange={handleCheckbox}
                />

                {/* Radio Button Questions */}
                <SectionRadio
                    title="If non-Halal food is also served, is the Halal food served in the same restaurants as non-halal food is served?"
                    name="halalFoodServedSameRestaurant"
                    value={formData.halalFoodServedSameRestaurant}
                    onChange={handleRadio}
                />

                <SectionRadio
                    title="If non-Halal food is also served, is the Halal food prepared in Halal food only kitchen?"
                    name="halalFoodPreparedHalalKitchen"
                    value={formData.halalFoodPreparedHalalKitchen}
                    onChange={handleRadio}
                />

                <SectionRadio
                    title="All Meat sourced by Halal Certified suppliers"
                    name="meatSourcedHalalSuppliers"
                    value={formData.meatSourcedHalalSuppliers}
                    onChange={handleRadio}
                />

                {/* Halal Dining Services Description */}
                <SectionRichText
                    label="Halal Dining Services Description"
                    name="halalDiningServicesDescription"
                    value={formData.halalDiningServicesDescription}
                    onChange={handleRichText}
                />

                {/* Certification Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Meat Suppliers Certification Body"
                        name="meatSuppliersCertificationBody"
                        value={formData.meatSuppliersCertificationBody}
                        onChange={handleInputChange}
                        placeholder="Certification body name"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <Input
                        label="Meat Suppliers Certificate Number"
                        name="meatSuppliersCertificateNumber"
                        value={formData.meatSuppliersCertificateNumber}
                        onChange={handleInputChange}
                        placeholder="Certificate number"
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </div>

                {/* More Radio Questions */}
                <SectionRadio
                    title="If the Restaurant also serves Non- Halal food - Is pork served in the same restaurant"
                    name="separateKitchensHalalNonHalal"
                    value={formData.separateKitchensHalalNonHalal}
                    onChange={handleRadio}
                />

                <SectionRadio
                    title="Are there separate kitchens for halal and non halal food"
                    name="differentCutleriesHalalNonHalal"
                    value={formData.differentCutleriesHalalNonHalal}
                    onChange={handleRadio}
                />

                <SectionRadio
                    title="Are different sets of cutleries used to serve halal and non- halal food"
                    name="restaurantKitchenStaffedByMuslims"
                    value={formData.restaurantKitchenStaffedByMuslims}
                    onChange={handleRadio}
                />

                <SectionRadio
                    title="Is the Restaurant Kitchen always staffed by Muslims"
                    name="restaurantKitchenStaffedByMuslims"
                    value={formData.restaurantKitchenStaffedByMuslims}
                    onChange={handleRadio}
                />

                {/* Halal Certification Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Halal Certification Body"
                        name="halalCertificationBody"
                        value={formData.halalCertificationBody}
                        onChange={handleInputChange}
                        placeholder="Certification body name"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <Input
                        label="Halal Certificate Number"
                        name="halalCertificateNumber"
                        value={formData.halalCertificateNumber}
                        onChange={handleInputChange}
                        placeholder="Certificate number"
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </div>

                {/* Restaurant Type Checkboxes */}
                <SectionCheckbox
                    title="If the restaurant/kitchen is not certified or not Muslim managed how do you assure halal"
                    options={restaurantTypeOptions}
                    name="restaurantType"
                    values={formData.restaurantType}
                    onChange={handleCheckbox}
                />

                {/* Meat Suppliers Certificate Upload */}
                <FileUpload
                    label="Meat Suppliers Certificate"
                    name="meatSuppliersCertificateImages"
                    files={meatSuppliersCertificateImages}
                    setFiles={setMeatSuppliersCertificateImages}
                />

                <Input
                    label="Meat Suppliers Certification Body"
                    name="meatSuppliersCertificationBody"
                    value={formData.meatSuppliersCertificationBody}
                    onChange={handleInputChange}
                    placeholder="Certification body name"
                    className="w-full"
                    labelStyle="font-bold"
                />

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-4">
                    <Button type="button" asChild>
                        <Link href={`/profile/registration/restaurant/${params?.id}/step1`}>
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
                        return value.map((v: any, i) => (
                            <input key={key + i} type="hidden" name={key} value={v} />
                        ));
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

// SectionRadio component
function SectionRadio({
    title,
    name,
    value,
    onChange,
}: {
    title: string;
    name: string;
    value: string;
    onChange: (name: string, value: string) => void;
}) {
    return (
        <div className="border p-4 mb-4">
            <div className="font-bold mb-2">{title}</div>
            <RadioGroup value={value} onValueChange={(val) => onChange(name, val)}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id={`${name}-yes`} />
                    <label htmlFor={`${name}-yes`}>Yes</label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id={`${name}-no`} />
                    <label htmlFor={`${name}-no`}>No</label>
                </div>
            </RadioGroup>
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