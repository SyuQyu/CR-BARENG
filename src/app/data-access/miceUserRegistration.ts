// Define mice type (step 1)
type MiceStep1 = {
    miceName: string;
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

// Define mice type (step 2)
type MiceStep2 = {
    recreationalFacilities: string[];
    otherServices: string[];
    ramadhanFacilities: string[];
    nonHalalActivities: string[];
    halalFoodServices: string[];
    staff: string[];
    prayerFacilities: string[];
    sanitaryFacilities: string[];
    halalFriendlyServicesDescription: string;
    miceHalalDiningServicesDescription: string;
    nearbyHalalRestaurants: string;
    listOfNearbyMosques: string;
    guestRoomWashroomImages: string[]; // or File[] if you want to store files
    miceRestaurantHalalCertificateImages: string[];
    guestRoomPrayerMarkingsImages: string[];
};

// Gabungkan semua step
type Mice = {
    id: string;
} & MiceStep1 & Partial<MiceStep2>;

// Global mice data store
(global as any).mice = {
    id: "123",
    miceName: "Grand Plaza Mice",
    address: "123 Main Street",
    zipCode: "10001",
    countryCity: "Indonesia",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "www.grandplaza.com",
    contactPerson: "John Doe",
    contactNumber: "+62 812 3456 7890",
    email: "contact@grandplaza.com",
    accommodationType: "Mice",
    starRating: "5 Star",
    numberOfRooms: "150",
    description: "Luxury mice in downtown area",

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
    miceHalalDiningServicesDescription: "",
    nearbyHalalRestaurants: "",
    listOfNearbyMosques: "",
    guestRoomWashroomImages: [],
    miceRestaurantHalalCertificateImages: [],
    guestRoomPrayerMarkingsImages: [],

    // Step 3 (contoh data, bisa kosong)
    basicFacilities: [],
    bookNowUrl: "",
    imageGallery: [],

    // Step 4 (contoh data, bisa kosong)
    acceptTerms: false,
} as Mice;

// Function to get mice data
export async function getMiceAction(miceId: string): Promise<Mice> {
    return (global as any).mice as Mice;
}

// Function to update mice data (bisa update step 1, step 2, atau gabungan)
export async function updateMiceAction(
    miceId: string,
    data: Partial<MiceStep1 & MiceStep2>
): Promise<Mice> {
    (global as any).mice = {
        ...(global as any).mice,
        ...data
    };
    return (global as any).mice as Mice;
}

// Function to create new mice (step 1 wajib, step 2/3 opsional)
export async function createMiceAction(data: Omit<Mice, "id">): Promise<Mice> {
    const newMice = {
        id: Math.random().toString(36).substring(2, 9),
        ...data
    };
    (global as any).mice = newMice;
    return newMice;
}