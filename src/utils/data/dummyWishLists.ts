// src/utils/data/dummyWishLists.ts
import { WishList } from "@/types";
import { dummyAttractions } from "./dummyAttractions";

export const dummyWishLists: WishList[] = [
  {
    status: "Draft",
    wish_list_uuid: "wl-001",
    session_uuid: "sess-1234-abcd-5678-efgh",
    attraction_uuid: "attr-001",
    created_at: "2026-01-08T10:08:00Z",
    updated_at: "2026-01-08T10:08:00Z",
    attraction: dummyAttractions[0],
  },
  {
    status: "Draft",
    wish_list_uuid: "wl-002",
    session_uuid: "sess-1234-abcd-5678-efgh",
    attraction_uuid: "attr-004",
    created_at: "2026-01-08T10:13:00Z",
    updated_at: "2026-01-08T10:13:00Z",
    attraction: dummyAttractions[1],
  },
  {
    status: "Visited",
    wish_list_uuid: "wl-003",
    session_uuid: "sess-1234-abcd-5678-efgh",
    attraction_uuid: "attr-005",
    created_at: "2025-12-20T14:00:00Z",
    updated_at: "2026-01-01T09:00:00Z",
    attraction: dummyAttractions[3],
  },
];

export const sortedWishlists = [...dummyWishLists].sort(
  (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
);