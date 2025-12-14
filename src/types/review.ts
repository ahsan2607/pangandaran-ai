import { UUID, ISODateString } from "./common";

export interface ReviewAttraction {
  review_text: string | null;
  review_rating: number;
  review_attraction_uuid: UUID;
  session_uuid: UUID;
  attraction_uuid: UUID;
  created_at: ISODateString;
  updated_at: ISODateString;
}

export interface ReviewAttractionCreate {
  review_text?: string | null;
  review_rating: number;
  session_uuid: UUID;
  attraction_uuid: UUID;
}

export interface ReviewAttractionUpdate {
  review_text?: string | null;
  review_rating?: number | null;
}

export interface Storage {
  path: string;
  file_name: string;
  storage_uuid: UUID;
  created_at: ISODateString;
}

export interface ReviewPhoto {
  review_photo_uuid: UUID;
  storage_uuid: UUID;
  review_attraction_uuid: UUID;
  created_at: ISODateString;
  storage: Storage;
}

// Multipart upload body (frontend -> use FormData)
export type ReviewPhotoUploadBody = {
  file: File | Blob;
};
