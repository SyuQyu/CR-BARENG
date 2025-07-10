'use server';

import {
    createHotelAction as createHotel,
    updateHotelAction as updateHotel,
    getHotelAction as getHotel,
} from "@/app/data-access/hotelUserRegistration";
import { revalidatePath } from "next/cache";

export type ActionResponse = {
    success: boolean;
    error: string | null;
    data: any | null;
};

// Helper to extract all step data from FormData
const extractHotelData = (formData: FormData) => {
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
        hotelName: formData.get('hotelName') as string,
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
        hotelHalalDiningServicesDescription: formData.get('hotelHalalDiningServicesDescription') as string,
        nearbyHalalRestaurants: formData.get('nearbyHalalRestaurants') as string,
        listOfNearbyMosques: formData.get('listOfNearbyMosques') as string,

        guestRoomWashroomImages: parseFiles('guestRoomWashroomImages'),
        hotelRestaurantHalalCertificateImages: parseFiles('hotelRestaurantHalalCertificateImages'),
        guestRoomPrayerMarkingsImages: parseFiles('guestRoomPrayerMarkingsImages'),

        // Step 3
        sanitaryFacilities: parseArray('sanitaryFacilities'),
        bookNowUrl: formData.get('bookNowUrl') as string,
        imageGallery: parseFiles('imageGallery'),
        // Tambahkan field lain sesuai kebutuhan step 3

        // Step 4
        acceptTerms: formData.get('acceptTerms') === 'on', // Checkbox handling
        // Tambahkan field terms/agreements dsb sesuai kebutuhan
    };
};

// Create a new hotel (all steps)
export async function createHotelAction(formData: FormData): Promise<ActionResponse> {
    try {
        const data = extractHotelData(formData);

        // Validasi minimal step 1
        if (!data.hotelName || !data.address) {
            return {
                success: false,
                error: 'Hotel name and address are required',
                data: null
            };
        }

        const hotel = await createHotel(data);
        revalidatePath('/hotels');
        return { success: true, error: null, data: hotel };
    } catch (error: any) {
        console.error('Failed to create hotel:', error);
        return { success: false, error: error.message || 'Failed to create hotel', data: null };
    }
}

// Update an existing hotel (all steps)
export async function updateHotelAction(formData: FormData, state: any): Promise<ActionResponse> {
    try {
        const id = formData.get('id') as string;
        const data = extractHotelData(formData);

        if (!data.hotelName || !data.address) {
            return { success: false, error: 'Hotel name and address are required', data: null };
        }
        if (!id) {
            return { success: false, error: 'Hotel ID is required', data: null };
        }

        const hotel = await updateHotel(id, data);
        revalidatePath('/profile/registration/hotel');
        revalidatePath(`/profile/registration/hotel/${id}`);
        return { success: true, error: null, data: hotel };
    } catch (error: any) {
        console.error('Failed to update hotel:', error);
        return { success: false, error: error.message || 'Failed to update hotel', data: null };
    }
}

// Get hotel details
export async function getHotelAction(id: string): Promise<ActionResponse> {
    try {
        if (!id) {
            return { success: false, error: 'Hotel ID is required', data: null };
        }
        const hotel = await getHotel(id);
        return { success: true, error: null, data: hotel };
    } catch (error: any) {
        console.error('Failed to fetch hotel:', error);
        return { success: false, error: error.message || 'Failed to fetch hotel', data: null };
    }
}

// // Delete hotel
// export async function deleteHotelAction(id: string): Promise<ActionResponse> {
//     try {
//         if (!id) {
//             return {
//                 success: false,
//                 error: 'Hotel ID is required',
//                 data: null
//             };
//         }

//         await deleteHotel(id);

//         // Revalidate cached paths
//         revalidatePath('/hotels');

//         return {
//             success: true,
//             error: null,
//             data: null
//         };
//     } catch (error: any) {
//         console.error('Failed to delete hotel:', error);
//         return {
//             success: false,
//             error: error.message || 'Failed to delete hotel',
//             data: null
//         };
//     }
// }