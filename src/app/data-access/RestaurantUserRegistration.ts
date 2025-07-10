// Define restaurant type (step 1)
export type RestaurantStep1 = {
    restaurantName: string;
    address: string;
    zipCode: string;
    countryCity: string;
    latitude: string;
    longitude: string;
    website: string;
    contactPerson: string;
    contactNumber: string;
    email: string;
    cuisineType: string;
    description: string;
    outletType: string;
    locationType: string;
    staffLanguage: string;
    signaturePopularDishes: string;
    menuLanguage: string;
};

// Define restaurant type (step 2)
export type RestaurantStep2 = {
    otherServices: string[];
    halalFoodServices: string[];
    staff: string[];
    prayerFacilities: string[];
    sanitaryFacilities: string[];
    halalFriendlyServicesDescription: string;
    restaurantHalalDiningServicesDescription: string;
    nearbyHalalRestaurants: string;
    listOfNearbyMosques: string;
    restaurantWashroomImages: string[];
    restaurantHalalCertificateImages: string[];
    restaurantPrayerMarkingsImages: string[];
    contactPersonDesignation: string;
    startingPrice: string;
    openingHour: string;
    closingHour: string;
};

// Step 3
export type RestaurantStep3 = {
    imageGallery: string[];
};

// Step 4 (Terms and conditions)
export type RestaurantStep4 = {
    acceptTerms: boolean;
};

// Gabungkan semua step
export type Restaurant = {
    id: string;
} & RestaurantStep1 & Partial<RestaurantStep2> & Partial<RestaurantStep3> & Partial<RestaurantStep4>;

// Global restaurant data store
(global as any).restaurant = {
    id: "123",
    restaurantName: "Halal Food Corner",
    address: "123 Main Street",
    zipCode: "10001",
    countryCity: "Indonesia",
    latitude: "-6.175394",
    longitude: "106.827183",
    website: "www.halalfoodcorner.com",
    contactPerson: "Ahmad Rahman",
    contactNumber: "+62 812 3456 7890",
    email: "contact@halalfoodcorner.com",
    cuisineType: "Middle Eastern",
    description: "Authentic halal restaurant serving Middle Eastern cuisine",
    outletType: "Restaurant",
    locationType: "Street Level",
    staffLanguage: "English",
    signaturePopularDishes: "Kebab",
    menuLanguage: "English",

    // Step 2 (contoh data, bisa kosong)
    otherServices: [],
    halalFoodServices: [],
    staff: [],
    prayerFacilities: [],
    sanitaryFacilities: [],
    halalFriendlyServicesDescription: "",
    restaurantHalalDiningServicesDescription: "",
    nearbyHalalRestaurants: "",
    listOfNearbyMosques: "",
    restaurantWashroomImages: [],
    restaurantHalalCertificateImages: [],
    restaurantPrayerMarkingsImages: [],
    contactPersonDesignation: "",
    startingPrice: "",
    openingHour: "",
    closingHour: "",

    // Step 3 (contoh data, bisa kosong)
    imageGallery: [],

    // Step 4 (contoh data, bisa kosong)
    acceptTerms: false,
} as Restaurant;

// Function to get restaurant data
export async function getRestaurantAction(restaurantId: string): Promise<Restaurant> {
    return (global as any).restaurant as Restaurant;
}

// Function to update restaurant data (bisa update step 1, step 2, atau gabungan)
export async function updateRestaurantAction(
    restaurantId: string,
    data: Partial<RestaurantStep1 & RestaurantStep2 & RestaurantStep3 & RestaurantStep4>
): Promise<Restaurant> {
    (global as any).restaurant = {
        ...(global as any).restaurant,
        ...data
    };
    return (global as any).restaurant as Restaurant;
}

// Function to create new restaurant (step 1 wajib, step 2/3/4 opsional)
export async function createRestaurantAction(data: Omit<Restaurant, "id">): Promise<Restaurant> {
    const newRestaurant = {
        id: Math.random().toString(36).substring(2, 9),
        ...data
    };
    (global as any).restaurant = newRestaurant;
    return newRestaurant;
}