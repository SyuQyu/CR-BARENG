'use server';

import {
    createMiceAction as createMice,
    updateMiceAction as updateMice,
    getMiceAction as getMice,
} from "@/app/data-access/miceUserRegistration";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
    success: boolean;
    error: string | null;
    data: any | null;
};

// Helper to extract all step data from FormData
const extractMiceData = (formData: FormData) => {
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
        miceName: formData.get('miceName') as string,
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
        miceHalalDiningServicesDescription: formData.get('miceHalalDiningServicesDescription') as string,
        nearbyHalalRestaurants: formData.get('nearbyHalalRestaurants') as string,
        listOfNearbyMosques: formData.get('listOfNearbyMosques') as string,

        guestRoomWashroomImages: parseFiles('guestRoomWashroomImages'),
        miceRestaurantHalalCertificateImages: parseFiles('miceRestaurantHalalCertificateImages'),
        guestRoomPrayerMarkingsImages: parseFiles('guestRoomPrayerMarkingsImages'),
    };
};

// Create a new mice (all steps)
export async function createMiceAction(formData: FormData): Promise<ActionResponse> {
    try {
        const data = extractMiceData(formData);

        // Validasi minimal step 1
        if (!data.miceName || !data.address) {
            return {
                success: false,
                error: 'Mice name and address are required',
                data: null
            };
        }

        const mice = await createMice(data);
        revalidatePath('/mices');
        return { success: true, error: null, data: mice };
    } catch (error: any) {
        console.error('Failed to create mice:', error);
        return { success: false, error: error.message || 'Failed to create mice', data: null };
    }
}

// Update an existing mice (all steps)
export async function updateMiceAction(formData: FormData, state: any): Promise<ActionResponse> {
    try {
        const id = formData.get('id') as string;
        const data = extractMiceData(formData);

        if (!data.miceName || !data.address) {
            return { success: false, error: 'Mice name and address are required', data: null };
        }
        if (!id) {
            return { success: false, error: 'Mice ID is required', data: null };
        }

        const mice = await updateMice(id, data);
        revalidatePath('/profile/registration/mice');
        revalidatePath(`/profile/registration/mice/${id}`);
        return { success: true, error: null, data: mice };
    } catch (error: any) {
        console.error('Failed to update mice:', error);
        return { success: false, error: error.message || 'Failed to update mice', data: null };
    }
}

// Get mice details
export async function getMiceAction(id: string): Promise<ActionResponse> {
    try {
        if (!id) {
            return { success: false, error: 'Mice ID is required', data: null };
        }
        const mice = await getMice(id);
        return { success: true, error: null, data: mice };
    } catch (error: any) {
        console.error('Failed to fetch mice:', error);
        return { success: false, error: error.message || 'Failed to fetch mice', data: null };
    }
}

// // Delete mice
// export async function deleteMiceAction(id: string): Promise<ActionResponse> {
//     try {
//         if (!id) {
//             return {
//                 success: false,
//                 error: 'Mice ID is required',
//                 data: null
//             };
//         }

//         await deleteMice(id);

//         // Revalidate cached paths
//         revalidatePath('/mices');

//         return {
//             success: true,
//             error: null,
//             data: null
//         };
//     } catch (error: any) {
//         console.error('Failed to delete mice:', error);
//         return {
//             success: false,
//             error: error.message || 'Failed to delete mice',
//             data: null
//         };
//     }
// }