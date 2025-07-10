'use server';

import {
    createRestaurantAction as createRestaurant,
    updateRestaurantAction as updateRestaurant,
    getRestaurantAction as getRestaurant,
} from "@/app/data-access/RestaurantUserRegistration";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
    success: boolean;
    error: string | null;
    data: any | null;
};

// Helper to extract all step data from FormData
const extractRestaurantData = (formData: FormData) => {
    // Helper for parsing array fields (checkbox group)
    const parseArray = (name: string): string[] => {
        const values = formData.getAll(name);
        return values.length > 0 ? values.map(value => String(value)) : [];
    };

    // Helper for parsing file fields (only save file name)
    const parseFiles = (name: string): string[] => {
        const files = formData.getAll(name);
        return files.filter(f => f instanceof File).map(f => (f as File).name);
    };

    return {
        // Step 1 - Updated with new fields
        restaurantName: formData.get('restaurantName') as string,
        address: formData.get('address') as string,
        zipCode: formData.get('zipCode') as string,
        countryCity: formData.get('countryCity') as string,
        latitude: formData.get('latitude') as string,
        longitude: formData.get('longitude') as string,
        website: formData.get('website') as string,
        contactPerson: formData.get('contactPerson') as string,
        contactNumber: formData.get('contactNumber') as string,
        email: formData.get('email') as string,
        cuisineType: formData.get('cuisineType') as string,
        description: formData.get('description') as string,
        outletType: formData.get('outletType') as string,
        locationType: formData.get('locationType') as string,
        staffLanguage: formData.get('staffLanguage') as string,
        signaturePopularDishes: formData.get('signaturePopularDishes') as string,
        menuLanguage: formData.get('menuLanguage') as string,

        // Step 2
        otherServices: parseArray('otherServices'),
        halalFoodServices: parseArray('halalFoodServices'),
        staff: parseArray('staff'),
        prayerFacilities: parseArray('prayerFacilities'),
        sanitaryFacilities: parseArray('sanitaryFacilities'),
        halalFriendlyServicesDescription: formData.get('halalFriendlyServicesDescription') as string,
        restaurantHalalDiningServicesDescription: formData.get('restaurantHalalDiningServicesDescription') as string,
        nearbyHalalRestaurants: formData.get('nearbyHalalRestaurants') as string,
        listOfNearbyMosques: formData.get('listOfNearbyMosques') as string,

        restaurantWashroomImages: parseFiles('restaurantWashroomImages'),
        restaurantHalalCertificateImages: parseFiles('restaurantHalalCertificateImages'),
        restaurantPrayerMarkingsImages: parseFiles('restaurantPrayerMarkingsImages'),

        contactPersonDesignation: formData.get('contactPersonDesignation') as string,
        startingPrice: formData.get('startingPrice') as string,
        openingHour: formData.get('openingHour') as string,
        closingHour: formData.get('closingHour') as string,

        // Step 3
        imageGallery: parseFiles('imageGallery'),

        // Step 4
        acceptTerms: formData.get('acceptTerms') === 'true' || formData.get('acceptTerms') === 'on',
    };
};

// Create new restaurant (all steps)
export async function createRestaurantAction(formData: FormData): Promise<ActionResponse> {
    try {
        const data = extractRestaurantData(formData);

        // Validasi minimal step 1 - updated validation
        if (!data.restaurantName || !data.address) {
            return {
                success: false,
                error: 'Restaurant name and address are required',
                data: null
            };
        }

        // Optional: Additional validation for step 1 specific fields
        if (!data.cuisineType) {
            return {
                success: false,
                error: 'Cuisine type is required',
                data: null
            };
        }

        const restaurant = await createRestaurant(data);
        revalidatePath('/restaurants');
        return { success: true, error: null, data: restaurant };
    } catch (error: any) {
        console.error('Failed to create restaurant:', error);
        return { success: false, error: error.message || 'Failed to create restaurant', data: null };
    }
}

// Update an existing restaurant (all steps)
export async function updateRestaurantAction(formData: FormData, state: any): Promise<ActionResponse> {
    try {
        const id = formData.get('id') as string;
        const data = extractRestaurantData(formData);

        // Validasi minimal step 1 - updated validation
        if (!data.restaurantName || !data.address) {
            return { success: false, error: 'Restaurant name and address are required', data: null };
        }

        if (!id) {
            return { success: false, error: 'Restaurant ID is required', data: null };
        }

        // Optional: Additional validation for step 1 specific fields
        if (!data.cuisineType) {
            return {
                success: false,
                error: 'Cuisine type is required',
                data: null
            };
        }

        const restaurant = await updateRestaurant(id, data);
        revalidatePath('/profile/registration/restaurant');
        revalidatePath(`/profile/registration/restaurant/${id}`);
        return { success: true, error: null, data: restaurant };
    } catch (error: any) {
        console.error('Failed to update restaurant:', error);
        return { success: false, error: error.message || 'Failed to update restaurant', data: null };
    }
}

// Get restaurant details
export async function getRestaurantAction(id: string): Promise<ActionResponse> {
    try {
        if (!id) {
            return { success: false, error: 'Restaurant ID is required', data: null };
        }
        const restaurant = await getRestaurant(id);
        return { success: true, error: null, data: restaurant };
    } catch (error: any) {
        console.error('Failed to fetch restaurant:', error);
        return { success: false, error: error.message || 'Failed to fetch restaurant', data: null };
    }
}