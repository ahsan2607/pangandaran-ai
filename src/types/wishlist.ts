import { UUID, ISODateString, PaginatedResponse, WishListStatus } from "./common";
import { Attraction } from "./attraction";

export interface WishList {
  status: WishListStatus | null;
  wish_list_uuid: UUID;
  session_uuid: UUID;
  attraction_uuid: UUID;
  created_at: ISODateString;
  updated_at: ISODateString;
  attraction: Attraction;
}

export interface WishListCreate {
  status?: WishListStatus | null;
  session_uuid: UUID;
  attraction_uuid: UUID;
}

export interface WishListUpdate {
  status: WishListStatus;
}

export type PaginatedWishLists = PaginatedResponse<WishList>;
