import { AttractionInterface } from "@/components/interfaces/attraction";
import { dummyAttractions, dummyReviews, dummyPopularAttractions } from "@/utils/data";

interface AttractionPageProps {
  params: { uuid: string };
}

export default function AttractionPage({ params }: AttractionPageProps) {
  const { uuid } = params;
  const attraction = dummyAttractions.find((attraction) => attraction.attraction_uuid === uuid);
  const reviews = dummyReviews.filter((review) => review.attraction_uuid === uuid);
  const popularAttraction = dummyPopularAttractions.find(
    (popularAttraction) => popularAttraction.attraction_uuid === uuid
  );
  if (attraction && popularAttraction)
    return <AttractionInterface attraction={attraction} reviews={reviews} popularAttraction={popularAttraction} />;
  return <div>Attraction not found</div>;
}
