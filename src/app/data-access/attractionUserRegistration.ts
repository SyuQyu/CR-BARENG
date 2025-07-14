// Define attraction type (step 1)
type AttractionStep1 = {
    attractionName: string;
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

// Define attraction type (step 2)
type AttractionStep2 = {
    recreationalFacilities: string[];
    otherServices: string[];
    ramadhanFacilities: string[];
    nonHalalActivities: string[];
    halalFoodServices: string[];
    staff: string[];
    prayerFacilities: string[];
    sanitaryFacilities: string[];
    halalFriendlyServicesDescription: string;
    attractionHalalDiningServicesDescription: string;
    nearbyHalalRestaurants: string;
    listOfNearbyMosques: string;
    guestRoomWashroomImages: string[]; // or File[] if you want to store files
    attractionRestaurantHalalCertificateImages: string[];
    guestRoomPrayerMarkingsImages: string[];
};

// Gabungkan semua step
type Attraction = {
    id: string;
} & AttractionStep1 & Partial<AttractionStep2>;

// Global attraction data store
(global as any).attraction = {
    id: "123",
    attractionName: "Grand Plaza Attraction",
    address: "123 Main Street",
    zipCode: "10001",
    countryCity: "Indonesia",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "www.grandplaza.com",
    contactPerson: "John Doe",
    contactNumber: "+62 812 3456 7890",
    email: "contact@grandplaza.com",
    accommodationType: "Attraction",
    starRating: "5 Star",
    numberOfRooms: "150",
    description: "Luxury attraction in downtown area",

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
    attractionHalalDiningServicesDescription: "",
    nearbyHalalRestaurants: "",
    listOfNearbyMosques: "",
    guestRoomWashroomImages: [],
    attractionRestaurantHalalCertificateImages: [],
    guestRoomPrayerMarkingsImages: [],

    // Step 3 (contoh data, bisa kosong)
    basicFacilities: [],
    bookNowUrl: "",
    imageGallery: [],

    // Step 4 (contoh data, bisa kosong)
    acceptTerms: false,
} as Attraction;

// Function to get attraction data
export async function getAttractionAction(attractionId: string): Promise<Attraction> {
    return (global as any).attraction as Attraction;
}

// Function to update attraction data (bisa update step 1, step 2, atau gabungan)
export async function updateAttractionAction(
    attractionId: string,
    data: Partial<AttractionStep1 & AttractionStep2>
): Promise<Attraction> {
    (global as any).attraction = {
        ...(global as any).attraction,
        ...data
    };
    return (global as any).attraction as Attraction;
}

// Function to create new attraction (step 1 wajib, step 2/3 opsional)
export async function createAttractionAction(data: Omit<Attraction, "id">): Promise<Attraction> {
    const newAttraction = {
        id: Math.random().toString(36).substring(2, 9),
        ...data
    };
    (global as any).attraction = newAttraction;
    return newAttraction;
}