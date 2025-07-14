'use server';

import {
    createShoppingAction as createShopping,
    updateShoppingAction as updateShopping,
    getShoppingAction as getShopping,
} from "@/app/data-access/shoppingUserRegistration";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
    success: boolean;
    error: string | null;
    data: any | null;
};

// Helper to extract all step data from FormData
const extractShoppingData = (formData: FormData) => {
    // Helper for parsing array fields (checkbox group)
    const parseArray = (name: string): string[] => {
        const values = formData.getAll(name);
        return values.length > 0 ? values.map(value => String(value)) : [];
    };

    // Helper for parsing file fields
    const parseFiles = (name: string): string[] => {
        const files = formData.getAll(name);
        return files.filter(f => f instanceof File).map(f => (f as File).name);
    };

    return {
        // Step 1
        shoppingName: formData.get('shoppingName') as string,
        address: formData.get('address') as string,
        zipCode: formData.get('zipCode') as string,
        countryCity: formData.get('countryCity') as string,
        latitude: formData.get('latitude') as string,
        longitude: formData.get('longitude') as string,
        website: formData.get('website') as string,
        contactPerson: formData.get('contactPerson') as string,
        contactNumber: formData.get('contactNumber') as string,
        email: formData.get('email') as string,
        accommodationType: formData.get('accommodationType') as string,
        starRating: formData.get('starRating') as string,
        numberOfRooms: formData.get('numberOfRooms') as string,
        description: formData.get('description') as string,

        // Step 2
        halalFoodServices: parseArray('halalFoodServices'),
        recreationalFacilities: parseArray('recreationalFacilities'),
        otherServices: parseArray('otherServices'),
        ramadhanFacilities: parseArray('ramadhanFacilities'),
        nonHalalActivities: parseArray('nonHalalActivities'),
        staff: parseArray('staff'),
        prayerFacilities: parseArray('prayerFacilities'),
        halalFriendlyServicesDescription: formData.get('halalFriendlyServicesDescription') as string,
        shoppingHalalDiningServicesDescription: formData.get('shoppingHalalDiningServicesDescription') as string,
        nearbyHalalRestaurants: formData.get('nearbyHalalRestaurants') as string,
        listOfNearbyMosques: formData.get('listOfNearbyMosques') as string,

        guestRoomWashroomImages: parseFiles('guestRoomWashroomImages'),
        shoppingRestaurantHalalCertificateImages: parseFiles('shoppingRestaurantHalalCertificateImages'),
        guestRoomPrayerMarkingsImages: parseFiles('guestRoomPrayerMarkingsImages'),
    };
};

// Create a new shopping (all steps)
export async function createShoppingAction(formData: FormData): Promise<ActionResponse> {
    try {
        const data = extractShoppingData(formData);

        // Validasi minimal step 1
        if (!data.shoppingName || !data.address) {
            return {
                success: false,
                error: 'Shopping name and address are required',
                data: null
            };
        }

        const shopping = await createShopping(data);
        revalidatePath('/shoppings');
        return { success: true, error: null, data: shopping };
    } catch (error: any) {
        console.error('Failed to create shopping:', error);
        return { success: false, error: error.message || 'Failed to create shopping', data: null };
    }
}

// Update an existing shopping (all steps)
export async function updateShoppingAction(formData: FormData, state: any): Promise<ActionResponse> {
    try {
        const id = formData.get('id') as string;
        const data = extractShoppingData(formData);

        if (!data.shoppingName || !data.address) {
            return { success: false, error: 'Shopping name and address are required', data: null };
        }
        if (!id) {
            return { success: false, error: 'Shopping ID is required', data: null };
        }

        const shopping = await updateShopping(id, data);
        revalidatePath('/profile/registration/shopping');
        revalidatePath(`/profile/registration/shopping/${id}`);
        return { success: true, error: null, data: shopping };
    } catch (error: any) {
        console.error('Failed to update shopping:', error);
        return { success: false, error: error.message || 'Failed to update shopping', data: null };
    }
}

// Get shopping details
export async function getShoppingAction(id: string): Promise<ActionResponse> {
    try {
        if (!id) {
            return { success: false, error: 'Shopping ID is required', data: null };
        }
        const shopping = await getShopping(id);
        return { success: true, error: null, data: shopping };
    } catch (error: any) {
        console.error('Failed to fetch shopping:', error);
        return { success: false, error: error.message || 'Failed to fetch shopping', data: null };
    }
}

// // Delete shopping
// export async function deleteShoppingAction(id: string): Promise<ActionResponse> {
//     try {
//         if (!id) {
//             return {
//                 success: false,
//                 error: 'Shopping ID is required',
//                 data: null
//             };
//         }

//         await deleteShopping(id);

//         // Revalidate cached paths
//         revalidatePath('/shoppings');

//         return {
//             success: true,
//             error: null,
//             data: null
//         };
//     } catch (error: any) {
//         console.error('Failed to delete shopping:', error);
//         return {
//             success: false,
//             error: error.message || 'Failed to delete shopping',
//             data: null
//         };
//     }
// }