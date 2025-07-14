// Define shopping type (step 1)
type ShoppingStep1 = {
    shoppingName: string;
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

// Define shopping type (step 2)
type ShoppingStep2 = {
    recreationalFacilities: string[];
    otherServices: string[];
    ramadhanFacilities: string[];
    nonHalalActivities: string[];
    halalFoodServices: string[];
    staff: string[];
    prayerFacilities: string[];
    sanitaryFacilities: string[];
    halalFriendlyServicesDescription: string;
    shoppingHalalDiningServicesDescription: string;
    nearbyHalalRestaurants: string;
    listOfNearbyMosques: string;
    guestRoomWashroomImages: string[]; // or File[] if you want to store files
    shoppingRestaurantHalalCertificateImages: string[];
    guestRoomPrayerMarkingsImages: string[];
};

// Gabungkan semua step
type Shopping = {
    id: string;
} & ShoppingStep1 & Partial<ShoppingStep2>;

// Global shopping data store
(global as any).shopping = {
    id: "123",
    shoppingName: "Grand Plaza Shopping",
    address: "123 Main Street",
    zipCode: "10001",
    countryCity: "Indonesia",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "www.grandplaza.com",
    contactPerson: "John Doe",
    contactNumber: "+62 812 3456 7890",
    email: "contact@grandplaza.com",
    accommodationType: "Shopping",
    starRating: "5 Star",
    numberOfRooms: "150",
    description: "Luxury shopping in downtown area",

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
    shoppingHalalDiningServicesDescription: "",
    nearbyHalalRestaurants: "",
    listOfNearbyMosques: "",
    guestRoomWashroomImages: [],
    shoppingRestaurantHalalCertificateImages: [],
    guestRoomPrayerMarkingsImages: [],

    // Step 3 (contoh data, bisa kosong)
    basicFacilities: [],
    bookNowUrl: "",
    imageGallery: [],

    // Step 4 (contoh data, bisa kosong)
    acceptTerms: false,
} as Shopping;

// Function to get shopping data
export async function getShoppingAction(shoppingId: string): Promise<Shopping> {
    return (global as any).shopping as Shopping;
}

// Function to update shopping data (bisa update step 1, step 2, atau gabungan)
export async function updateShoppingAction(
    shoppingId: string,
    data: Partial<ShoppingStep1 & ShoppingStep2>
): Promise<Shopping> {
    (global as any).shopping = {
        ...(global as any).shopping,
        ...data
    };
    return (global as any).shopping as Shopping;
}

// Function to create new shopping (step 1 wajib, step 2/3 opsional)
export async function createShoppingAction(data: Omit<Shopping, "id">): Promise<Shopping> {
    const newShopping = {
        id: Math.random().toString(36).substring(2, 9),
        ...data
    };
    (global as any).shopping = newShopping;
    return newShopping;
}