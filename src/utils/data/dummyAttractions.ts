// src/utils/data/dummyAttractions.ts
import { Attraction, AttractionPopular } from "@/types";

export const dummyAttractions: Attraction[] = [
  {
    name: "Pantai Pangandaran",
    description: "Pantai utama Pangandaran dengan pasir putih, ombak tenang di sisi timur, dan penangkaran penyu.",
    lat: -7.696,
    lon: 108.658,
    address: "Desa Pangandaran, Kec. Pangandaran",
    price: 20000,
    type: "Destination",
    attraction_uuid: "attr-001",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
    is_delete: false,
  },
  {
    name: "Pantai Batu Karas",
    description: "Pantai dengan ombak kecil, cocok untuk surfing pemula dan berenang anak-anak.",
    lat: -7.743,
    lon: 108.477,
    address: "Desa Batukaras, Kec. Cijulang",
    price: 10000,
    type: "Destination",
    attraction_uuid: "attr-004",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
    is_delete: false,
  },
  {
    name: "Pantai Batu Hiu",
    description: "Pantai dengan batu karang menyerupai sirip hiu, pemandangan dramatis dan sunset indah.",
    lat: -7.763,
    lon: 108.483,
    address: "Desa Ciliang, Kec. Parigi",
    price: 15000,
    type: "Destination",
    attraction_uuid: "attr-003",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
    is_delete: false,
  },
  {
    name: "Green Canyon",
    description: "Wisata susur sungai dengan tebing hijau dan air jernih, aktivitas body rafting.",
    lat: -7.726,
    lon: 108.465,
    address: "Desa Kertayasa, Kec. Cijulang",
    price: 150000,
    type: "Destination",
    attraction_uuid: "attr-005",
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z",
    is_delete: false,
  },
];

// For popular sections (with rating)
export const dummyPopularAttractions: AttractionPopular[] = [
  {
    ...dummyAttractions[0],
    average_rating: 4.8,
    review_count: 1247,
  },
  {
    ...dummyAttractions[1],
    average_rating: 4.6,
    review_count: 892,
  },
  {
    ...dummyAttractions[2],
    average_rating: 4.5,
    review_count: 653,
  },
];