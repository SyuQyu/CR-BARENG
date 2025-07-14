'use server';

import {
    createAttractionAction as createAttraction,
    updateAttractionAction as updateAttraction,
    getAttractionAction as getAttraction,
} from "@/app/data-access/attractionUserRegistration";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
    success: boolean;
    error: string | null;
    data: any | null;
};

// Helper to extract all step data from FormData
const extractAttractionData = (formData: FormData) => {
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
        attractionName: formData.get('attractionName') as string,
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
        attractionHalalDiningServicesDescription: formData.get('attractionHalalDiningServicesDescription') as string,
        nearbyHalalRestaurants: formData.get('nearbyHalalRestaurants') as string,
        listOfNearbyMosques: formData.get('listOfNearbyMosques') as string,

        guestRoomWashroomImages: parseFiles('guestRoomWashroomImages'),
        attractionRestaurantHalalCertificateImages: parseFiles('attractionRestaurantHalalCertificateImages'),
        guestRoomPrayerMarkingsImages: parseFiles('guestRoomPrayerMarkingsImages'),
    };
};

// Create a new attraction (all steps)
export async function createAttractionAction(formData: FormData): Promise<ActionResponse> {
    try {
        const data = extractAttractionData(formData);

        // Validasi minimal step 1
        if (!data.attractionName || !data.address) {
            return {
                success: false,
                error: 'Attraction name and address are required',
                data: null
            };
        }

        const attraction = await createAttraction(data);
        revalidatePath('/attractions');
        return { success: true, error: null, data: attraction };
    } catch (error: any) {
        console.error('Failed to create attraction:', error);
        return { success: false, error: error.message || 'Failed to create attraction', data: null };
    }
}

// Update an existing attraction (all steps)
export async function updateAttractionAction(formData: FormData, state: any): Promise<ActionResponse> {
    try {
        const id = formData.get('id') as string;
        const data = extractAttractionData(formData);

        if (!data.attractionName || !data.address) {
            return { success: false, error: 'Attraction name and address are required', data: null };
        }
        if (!id) {
            return { success: false, error: 'Attraction ID is required', data: null };
        }

        const attraction = await updateAttraction(id, data);
        revalidatePath('/profile/registration/attraction');
        revalidatePath(`/profile/registration/attraction/${id}`);
        return { success: true, error: null, data: attraction };
    } catch (error: any) {
        console.error('Failed to update attraction:', error);
        return { success: false, error: error.message || 'Failed to update attraction', data: null };
    }
}

// Get attraction details
export async function getAttractionAction(id: string): Promise<ActionResponse> {
    try {
        if (!id) {
            return { success: false, error: 'Attraction ID is required', data: null };
        }
        const attraction = await getAttraction(id);
        return { success: true, error: null, data: attraction };
    } catch (error: any) {
        console.error('Failed to fetch attraction:', error);
        return { success: false, error: error.message || 'Failed to fetch attraction', data: null };
    }
}

// // Delete attraction
// export async function deleteAttractionAction(id: string): Promise<ActionResponse> {
//     try {
//         if (!id) {
//             return {
//                 success: false,
//                 error: 'Attraction ID is required',
//                 data: null
//             };
//         }

//         await deleteAttraction(id);

//         // Revalidate cached paths
//         revalidatePath('/attractions');

//         return {
//             success: true,
//             error: null,
//             data: null
//         };
//     } catch (error: any) {
//         console.error('Failed to delete attraction:', error);
//         return {
//             success: false,
//             error: error.message || 'Failed to delete attraction',
//             data: null
//         };
//     }
// }