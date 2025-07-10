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
import { createRestaurantAction, updateRestaurantAction, getRestaurantAction } from "@/app/(pages)/profile/registration/restaurant/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Initial states
const initialFormState = {
    success: false,
    error: null,
    data: null
};

const defaultFormData = {
    restaurantName: "",
    address: "",
    zipCode: "",
    countryCity: "",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "",
    contactPerson: "",
    contactNumber: "",
    email: "",
    cuisineType: "",
    description: "",
    outletType: "",
    locationType: "",
    staffLanguage: "",
    signaturePopularDishes: "",
    menuLanguage: "",
};

export default function RestaurantRegistrationPage({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(defaultFormData);

    // Memoize action to prevent unnecessary re-renders
    const action = useMemo(() =>
        params?.id
            ? (prevState: any, formData: FormData) => updateRestaurantAction(formData, prevState)
            : (prevState: any, formData: FormData) => createRestaurantAction(formData),
        [params?.id]
    );

    // Form state
    const [state, formAction] = useFormState(action, initialFormState);

    // Fetch restaurant data
    useEffect(() => {
        if (!params?.id) return;

        const fetchRestaurant = async () => {
            setIsLoading(true);
            try {
                const response = await getRestaurantAction(params.id);
                if (response.success && response.data) {
                    setFormData({
                        ...defaultFormData,
                        ...response.data
                    });
                } else {
                    toast.error('Error', {
                        description: 'Failed to load restaurant data',
                    });
                }
            } catch (error) {
                console.error('Error fetching restaurant:', error);
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
            toast.success('Success', {
                description: params?.id ? 'Restaurant updated successfully' : 'Restaurant created successfully',
            });
            router.push(`/profile/registration/restaurant/${params?.id || state.data.id}/step2`);
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
        if (!formData.restaurantName || !formData.address) {
            toast.error('Validation Error', {
                description: 'Restaurant name and address are required',
            });
            return;
        }

        // Submit hidden form
        formRef.current?.requestSubmit();
    }, [formData.restaurantName, formData.address]);

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
                <h1 className="text-desktop-heading-5">Restaurant Information</h1>
            </div>

            {/* Main UI Form */}
            <form onSubmit={handleSubmit} className="w-full mx-auto space-y-6">
                {/* Basic Information Section */}
                <section className="space-y-6">
                    <Input
                        label="Restaurant Name"
                        name="restaurantName"
                        value={formData.restaurantName}
                        onChange={handleInputChange}
                        placeholder="Est"
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
                                <SelectValue placeholder="Choose a country" />
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
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="Enter website URL"
                        className="w-full"
                        labelStyle="font-bold"
                    />

                    <Input
                        label="Phone Number"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                        className="w-full"
                        labelStyle="font-bold"
                    />
                </section>

                {/* Restaurant Type Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-2 font-bold">Outlet Type</label>
                        <Select
                            value={formData.outletType}
                            onValueChange={(value) => handleSelectChange("outletType", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Restaurant">Restaurant</SelectItem>
                                <SelectItem value="Fast Food">Fast Food</SelectItem>
                                <SelectItem value="Cafe">Cafe</SelectItem>
                                <SelectItem value="Food Truck">Food Truck</SelectItem>
                                <SelectItem value="Catering">Catering</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <label className="block mb-2 font-bold">Location Type</label>
                        <Select
                            value={formData.locationType}
                            onValueChange={(value) => handleSelectChange("locationType", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Shopping Mall">Shopping Mall</SelectItem>
                                <SelectItem value="Street Level">Street Level</SelectItem>
                                <SelectItem value="Hotel">Hotel</SelectItem>
                                <SelectItem value="Airport">Airport</SelectItem>
                                <SelectItem value="Food Court">Food Court</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Cuisine Section */}
                <section>
                    <div>
                        <label className="block mb-2 font-bold">Cuisine</label>
                        <Select
                            value={formData.cuisineType}
                            onValueChange={(value) => handleSelectChange("cuisineType", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select Cuisine" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Middle Eastern">Middle Eastern</SelectItem>
                                <SelectItem value="Asian">Asian</SelectItem>
                                <SelectItem value="Mediterranean">Mediterranean</SelectItem>
                                <SelectItem value="Indian">Indian</SelectItem>
                                <SelectItem value="Turkish">Turkish</SelectItem>
                                <SelectItem value="Pakistani">Pakistani</SelectItem>
                                <SelectItem value="Malaysian">Malaysian</SelectItem>
                                <SelectItem value="Indonesian">Indonesian</SelectItem>
                                <SelectItem value="International">International</SelectItem>
                                <SelectItem value="Fusion">Fusion</SelectItem>
                                <SelectItem value="Fast Food">Fast Food</SelectItem>
                                <SelectItem value="Buffet">Buffet</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Staff Language Section */}
                <section>
                    <div>
                        <label className="block mb-2 font-bold">Staff Language</label>
                        <Select
                            value={formData.staffLanguage}
                            onValueChange={(value) => handleSelectChange("staffLanguage", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Arabic">Arabic</SelectItem>
                                <SelectItem value="Malay">Malay</SelectItem>
                                <SelectItem value="Indonesian">Indonesian</SelectItem>
                                <SelectItem value="Urdu">Urdu</SelectItem>
                                <SelectItem value="Turkish">Turkish</SelectItem>
                                <SelectItem value="Multilingual">Multilingual</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Signature Dishes Section */}
                <section>
                    <div>
                        <label className="block mb-2 font-bold">Signature / Popular dishes</label>
                        <Select
                            value={formData.signaturePopularDishes}
                            onValueChange={(value) => handleSelectChange("signaturePopularDishes", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Biryani">Biryani</SelectItem>
                                <SelectItem value="Kebab">Kebab</SelectItem>
                                <SelectItem value="Nasi Lemak">Nasi Lemak</SelectItem>
                                <SelectItem value="Rendang">Rendang</SelectItem>
                                <SelectItem value="Shawarma">Shawarma</SelectItem>
                                <SelectItem value="Falafel">Falafel</SelectItem>
                                <SelectItem value="Hummus">Hummus</SelectItem>
                                <SelectItem value="Tandoori">Tandoori</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Menu Language Section */}
                <section>
                    <div>
                        <label className="block mb-2 font-bold">Menu Language</label>
                        <Select
                            value={formData.menuLanguage}
                            onValueChange={(value) => handleSelectChange("menuLanguage", value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="English">English</SelectItem>
                                <SelectItem value="Arabic">Arabic</SelectItem>
                                <SelectItem value="Malay">Malay</SelectItem>
                                <SelectItem value="Indonesian">Indonesian</SelectItem>
                                <SelectItem value="Multilingual">Multilingual</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </section>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                    <Button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-10"
                    >
                        Save & Next
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