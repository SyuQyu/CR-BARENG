// Define hotel type (step 1)
type HotelStep1 = {
    hotelName: string;
    address: string;
    zipCode: string;
    countryCity: string;
    latitude: string;
    longitude: string;
    website: string;
    contactPerson: string;
    contactNumber: string;
    email: string;
    accommodationType: string;
    starRating: string;
    numberOfRooms: string;
    description: string;
};

// Define hotel type (step 2)
type HotelStep2 = {
    recreationalFacilities: string[];
    otherServices: string[];
    ramadhanFacilities: string[];
    nonHalalActivities: string[];
    halalFoodServices: string[];
    staff: string[];
    prayerFacilities: string[];
    sanitaryFacilities: string[];
    halalFriendlyServicesDescription: string;
    hotelHalalDiningServicesDescription: string;
    nearbyHalalRestaurants: string;
    listOfNearbyMosques: string;
    guestRoomWashroomImages: string[]; // or File[] if you want to store files
    hotelRestaurantHalalCertificateImages: string[];
    guestRoomPrayerMarkingsImages: string[];
};

// Step 3
type HotelStep3 = {
    basicFacilities: string[];
    bookNowUrl: string;
    imageGallery: string[]; // or File[] if you want to store files
};

// Gabungkan semua step
type Hotel = {
    id: string;
} & HotelStep1 & Partial<HotelStep2> & Partial<HotelStep3>;

// Global hotel data store
(global as any).hotel = {
    id: "123",
    hotelName: "Grand Plaza Hotel",
    address: "123 Main Street",
    zipCode: "10001",
    countryCity: "Indonesia",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "www.grandplaza.com",
    contactPerson: "John Doe",
    contactNumber: "+62 812 3456 7890",
    email: "contact@grandplaza.com",
    accommodationType: "Hotel",
    starRating: "5 Star",
    numberOfRooms: "150",
    description: "Luxury hotel in downtown area",

    // Step 2 (contoh data, bisa kosong)
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

    // Step 3 (contoh data, bisa kosong)
    basicFacilities: [],
    bookNowUrl: "",
    imageGallery: [],

    // Step 4 (contoh data, bisa kosong)
    acceptTerms: false,
} as Hotel;

// Function to get hotel data
export async function getHotelAction(hotelId: string): Promise<Hotel> {
    return (global as any).hotel as Hotel;
}

// Function to update hotel data (bisa update step 1, step 2, atau gabungan)
export async function updateHotelAction(
    hotelId: string,
    data: Partial<HotelStep1 & HotelStep2 & HotelStep3>
): Promise<Hotel> {
    (global as any).hotel = {
        ...(global as any).hotel,
        ...data
    };
    return (global as any).hotel as Hotel;
}

// Function to create new hotel (step 1 wajib, step 2/3 opsional)
export async function createHotelAction(data: Omit<Hotel, "id">): Promise<Hotel> {
    const newHotel = {
        id: Math.random().toString(36).substring(2, 9),
        ...data
    };
    (global as any).hotel = newHotel;
    return newHotel;
}