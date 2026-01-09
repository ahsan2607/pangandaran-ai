// src/utils/data/dummyReviews.ts
import { ReviewAttraction, ReviewPhoto } from "@/types";

export const dummyReviews: ReviewAttraction[] = [
  {
    review_text: "Pantainya bersih, ombak tenang cocok buat anak kecil. Banyak warung makan juga!",
    review_rating: 5,
    review_attraction_uuid: "rev-001",
    session_uuid: "sess-1234-abcd-5678-efgh",
    attraction_uuid: "attr-001",
    created_at: "2025-12-25T15:30:00Z",
    updated_at: "2025-12-25T15:30:00Z",
  },
  {
    review_text: "Spot surfing yang asik buat pemula. Instrukturnya ramah dan sabar.",
    review_rating: 4,
    review_attraction_uuid: "rev-002",
    session_uuid: "sess-1234-abcd-5678-efgh",
    attraction_uuid: "attr-004",
    created_at: "2025-11-10T11:20:00Z",
    updated_at: "2025-11-10T11:20:00Z",
  },
];

export const dummyReviewPhotos: ReviewPhoto[] = [
  {
    review_photo_uuid: "photo-001",
    storage_uuid: "stor-111",
    review_attraction_uuid: "rev-001",
    created_at: "2025-12-25T15:32:00Z",
    storage: {
      path: "/uploads/reviews/pantai-pangandaran-1.jpg",
      file_name: "pantai-pangandaran-1.jpg",
      storage_uuid: "stor-111",
      created_at: "2025-12-25T15:32:00Z",
    },
  },
];