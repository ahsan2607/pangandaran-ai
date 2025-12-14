// common types and enums
export type UUID = string;
export type ISODateString = string;

// Enums
export type AttractionType = "Lodging" | "Destination" | "Entertainment" | "Restaurant";
export type MessageDetailRequest = "Question" | "Answer";
export type MessageDetailType = "Text" | "Recommendation";
export type WishListStatus = "Visited" | "Draft";

// Generic paginated response
export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number;
  items: T[];
}

// Validation errors
export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}
