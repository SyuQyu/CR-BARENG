export interface Hotel {
  id: string;
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
  createdAt?: string;
  updatedAt?: string;
}

export type HotelFormData = Omit<Hotel, 'id' | 'createdAt' | 'updatedAt'>;

export interface HotelListResponse {
  hotels: Hotel[];
  total: number;
  page: number;
  limit: number;
}