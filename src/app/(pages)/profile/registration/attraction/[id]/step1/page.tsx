"use client";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input, OpenStreetMap, RichTextEditor } from "@/components/common";
import { useFormState } from 'react-dom';
import { createAttractionAction, updateAttractionAction, getAttractionAction } from "@/app/(pages)/profile/registration/attraction/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Initial states
const initialFormState = {
    success: false,
    error: null,
    data: null
};

const defaultFormData = {
    attractionName: "",
    address: "",
    zipCode: "",
    countryCity: "",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "",
    contactPerson: "",
    contactNumber: "",
    accommodationType: "Attraction",
    starRating: "3 Star",
    numberOfRooms: "",
    description: "",
    email: "",
};

export default function AttractionRegistrationPage({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(defaultFormData);

    // Memoize action to prevent unnecessary re-renders
    const action = useMemo(() =>
        params?.id
            ? (prevState: any, formData: FormData) => updateAttractionAction(formData, prevState)
            : (prevState: any, formData: FormData) => createAttractionAction(formData),
        [params?.id]
    );

    // Form state
    const [state, formAction] = useFormState(action, initialFormState);

    // Fetch hotel data
    useEffect(() => {
        if (!params?.id) return;

        const fetchAttraction = async () => {
            setIsLoading(true);
            try {
                const response = await getAttractionAction(params.id);
                if (response.success && response.data) {
                    setFormData({
                        ...defaultFormData,
                        ...response.data
                    });
                } else {
                    toast.error('Error', {
                        description: 'Failed to load hotel data',
                    });
                }
            } catch (error) {
                console.error('Error fetching hotel:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAttraction();
    }, [params?.id]);

    // Handle form submission response
    useEffect(() => {
        if (!state.success) return;

        if (state.data) {
            toast.success('Success', {
                description: params?.id ? 'Attraction updated successfully' : 'Attraction created successfully',
            });
            router.push(`/profile/registration/hotel/${params?.id}/step2`);
        } else if (state.error) {
            toast.error('Error', {
                description: state.error,
            });
        }
    }, [state, router, params?.id]);

    // Memoized handlers
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleLocationChange = useCallback((lat: number, lng: number) => {
        setFormData(prev => ({
            ...prev,
            latitude: lat.toString(),
            longitude: lng.toString()
        }));
    }, []);

    const handleSelectChange = useCallback((name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    // Form submission handler
    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.attractionName || !formData.address) {
            toast.error('Validation Error', {
                description: 'Attraction name and address are required',
            });
            return;
        }

        // Submit hidden form
        formRef.current?.requestSubmit();
    }, [formData.attractionName, formData.address]);

    // Loading state
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
                    1
                </div>
                <h1 className="text-desktop-heading-5">Attraction Information</h1>
            </div>

            {/* Main UI Form */}
            <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
                {/* Basic Information Section */}
                <section className="space-y-6">
                    <Input
                        label="Attraction Name"
                        name="attractionName"
                        value={formData.attractionName}
                        onChange={handleInputChange}
                        placeholder="Enter Attraction name"
                        className="w-full"
                        labelStyle="font-bold"
                        required
                    />

                    <Input
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Enter full address"
                        className="w-full"
                        labelStyle="font-bold"
                        required
                    />

                    {/* Map Section */}
                    <div className="border p-0 overflow-hidden">
                        <OpenStreetMap
                            lat={Number(formData.latitude) || -6.175394}
                            lng={Number(formData.longitude) || 106.827183}
                            onLocationChange={handleLocationChange}
                        />
                    </div>
                </section>

                {/* Location Details Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Zip Code"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="Enter zip code"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <div>
                        <label className="block mb-2 font-bold">Country/City</label>
                        <Select
                            value={formData.countryCity}
                            onValueChange={(value) => handleSelectChange("countryCity", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Indonesia">Indonesia</SelectItem>
                                <SelectItem value="Malaysia">Malaysia</SelectItem>
                                <SelectItem value="Singapore">Singapore</SelectItem>
                                <SelectItem value="Thailand">Thailand</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Coordinates Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Latitude"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleInputChange}
                        placeholder="e.g. -6.175394"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <Input
                        label="Longitude"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleInputChange}
                        placeholder="e.g. 106.827183"
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </section>

                {/* Contact Section */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Input
                            label="Contact Person"
                            name="contactPerson"
                            value={formData.contactPerson}
                            onChange={handleInputChange}
                            placeholder="Enter contact person name"
                            className="w-full"
                            labelStyle="font-bold"
                        />

                        <Input
                            label="Contact Number"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleInputChange}
                            placeholder="e.g. +62 812 3456 7890"
                            className="w-full"
                            labelStyle="font-bold"
                        />
                    </div>
                </section>

                {/* Attraction Details Section */}
                <section className="space-y-6">
                    {/* Accommodation Type */}
                    <div className="border p-4">
                        <label className="font-bold block mb-2">Accommodation Type</label>
                        <RadioGroup
                            value={formData.accommodationType}
                            onValueChange={(value) => handleSelectChange("accommodationType", value)}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
                        >
                            {[
                                { value: "Private Accommodation", id: "private", label: "Private Accommodation" },
                                { value: "Attraction", id: "hotel", label: "Attraction" },
                                { value: "Serviced Apartment", id: "apartment", label: "Serviced Apartment" },
                                { value: "Resort", id: "resort", label: "Resort" },
                                { value: "Boutique Attraction", id: "boutique", label: "Boutique Attraction" },
                                { value: "Beach Resort", id: "beach", label: "Beach Resort" },
                                { value: "Seaside Resort", id: "seaside", label: "Seaside Resort" },
                                { value: "Spa Resort", id: "spa", label: "Spa Resort" },
                                { value: "Golf Resort", id: "golf", label: "Golf Resort" },
                                { value: "Ski Resort", id: "ski", label: "Ski Resort" },
                                { value: "Mountain Resort", id: "mountain", label: "Mountain Resort" },
                                { value: "Budget Attraction", id: "budget", label: "Budget Attraction" },
                                { value: "Bed & Breakfast", id: "bnb", label: "Bed & Breakfast" }
                            ].map(option => (
                                <div key={option.id} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.value} id={option.id} />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Star Rating */}
                    <div className="border p-4">
                        <label className="font-bold block mb-2">Star Rating</label>
                        <RadioGroup
                            value={formData.starRating}
                            onValueChange={(value) => handleSelectChange("starRating", value)}
                            className="grid grid-cols-2 md:grid-cols-4 gap-2"
                        >
                            {[
                                { value: "1 Star", id: "1star", label: "1 Star" },
                                { value: "2 Star", id: "2star", label: "2 Star" },
                                { value: "3 Star", id: "3star", label: "3 Star" },
                                { value: "4 Star", id: "4star", label: "4 Star" },
                                { value: "5 Star", id: "5star", label: "5 Star" },
                                { value: "6 Star", id: "6star", label: "6 Star" },
                                { value: "7 Star", id: "7star", label: "7 Star" },
                                { value: "Non", id: "non", label: "Non" }
                            ].map(option => (
                                <div key={option.id} className="flex items-center space-x-2">
                                    <RadioGroupItem value={option.value} id={option.id} />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>

                    {/* Number of Rooms */}
                    <Input
                        label="No. of Rooms"
                        name="numberOfRooms"
                        type="number"
                        value={formData.numberOfRooms}
                        onChange={handleInputChange}
                        placeholder="Enter number of rooms"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    {/* Attraction Description */}
                    <div className="border">
                        <label className="font-bold block p-4 border-b">
                            Attraction or Accommodation Description
                        </label>
                        <RichTextEditor
                            content={formData.description}
                            onChange={(content) => handleSelectChange("description", content)}
                        />
                    </div>
                </section>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <Button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-10"
                    >
                        {params?.id ? "Update & Next" : "Save & Next"}
                    </Button>
                </div>

                {/* Error display */}
                {state.error && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
                        {state.error}
                    </div>
                )}
            </form>

            {/* Hidden form for server action */}
            <form ref={formRef} action={formAction} className="hidden">
                {Object.entries(formData).map(([key, value]) => (
                    <input key={key} type="hidden" name={key} value={value || ''} />
                ))}
                {params?.id && <input type="hidden" name="id" value={params.id} />}
            </form>
        </div>
    );
}