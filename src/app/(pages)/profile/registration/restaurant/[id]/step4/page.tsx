"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { createRestaurantAction, updateRestaurantAction, getRestaurantAction } from "@/app/(pages)/profile/registration/restaurant/action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const defaultStep4 = {
    acceptTerms: false,
};

export default function RestaurantStep4Page({ params }: { params?: { id: string } }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(defaultStep4);

    // Form state
    const [state, formAction] = useFormState(
        (prevState: any, formData: FormData) =>
            params?.id
                ? updateRestaurantAction(formData, prevState)
                : createRestaurantAction(formData),
        { success: false, error: null, data: null }
    );

    // Fetch restaurant data if editing (optional, if you want to prefill)
    useEffect(() => {
        if (!params?.id) return;
        const fetchRestaurant = async () => {
            setIsLoading(true);
            try {
                const response = await getRestaurantAction(params.id);
                if (response.success && response.data) {
                    setFormData({
                        acceptTerms: !!response.data.acceptTerms,
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
            // Next step or finish
            router.push(`/profile/registration/restaurant/${params?.id || state.data.id}/finish`);
        } else if (state.error) {
            toast.error("Error", { description: state.error });
        }
    }, [state, router, params?.id]);

    // Checkbox handler
    const handleCheckbox = (e: boolean) => {
        setFormData((prev) => ({
            ...prev,
            acceptTerms: e,
        }));
    };

    // Submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.acceptTerms) {
            toast.error("You must accept the Terms & Condition.");
            return;
        }
        const formDataObj = new FormData(formRef.current!);
        formDataObj.set("acceptTerms", formData.acceptTerms ? "true" : "");
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
                    4
                </div>
                <h1 className="text-desktop-heading-5">Terms & Condition</h1>
            </div>

            <form onSubmit={handleSubmit} ref={formRef} className="w-full mx-auto space-y-6">
                <div className="border p-4 mb-4 flex items-center gap-2">
                    <Checkbox
                        checked={formData.acceptTerms}
                        onCheckedChange={handleCheckbox}
                        id="acceptTerms"
                        name="acceptTerms"
                    />
                    <label htmlFor="acceptTerms" className="cursor-pointer select-none">
                        I accept the <span className="underline">Terms & Condition</span>
                    </label>
                </div>

                <div className="flex justify-between items-center pt-4">
                    <Button type="button" asChild>
                        <Link href={`/profile/registration/restaurant/${params?.id}/step3`}>
                            Back
                        </Link>
                    </Button>
                    <Button
                        type="submit"
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-10"
                        disabled={!formData.acceptTerms}
                    >
                        {params?.id ? "Update & Finish" : "Save & Finish"}
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