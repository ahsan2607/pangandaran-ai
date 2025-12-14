import { UUID, ISODateString, PaginatedResponse, AttractionType } from "./common";

export interface Attraction {
  name: string;
  description: string | null;
  lat: number | null;
  lon: number | null;
  address: string | null;
  price: number | null;
  type: AttractionType;
  attraction_uuid: UUID;
  created_at: ISODateString;
  updated_at: ISODateString;
  is_delete: boolean;
}

export interface AttractionCreate {
  name: string;
  description?: string | null;
  lat?: number | null;
  lon?: number | null;
  address?: string | null;
  price?: number | null;
  type: AttractionType;
}

export interface AttractionUpdate {
  name?: string | null;
  description?: string | null;
  lat?: number | null;
  lon?: number | null;
  address?: string | null;
  price?: number | null;
  type?: AttractionType | null;
}

export interface AttractionPopular extends Attraction {
  average_rating: number;
  review_count: number;
}

export type PaginatedAttractions = PaginatedResponse<Attraction>;
