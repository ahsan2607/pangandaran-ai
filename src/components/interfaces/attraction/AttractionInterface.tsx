// src/components/interfaces/wishlist/AttractionInterface.tsx
import { Box, Flex, Text, IconButton, Image, Button, Separator, List } from "@chakra-ui/react";
import { FaArrowLeft, FaBookmark } from "react-icons/fa6";
import { Attraction, ReviewAttraction, AttractionPopular } from "@/types";
import React from "react";
import { FOOTER_HEIGHT } from "@/utils";

// const dummyFAQ = [ /* sama seperti sebelumnya */ ];

interface AttractionInterfaceProps {
  attraction: Attraction;
  reviews: ReviewAttraction[] | [];
  popularAttraction: AttractionPopular;
}

export const AttractionInterface: React.FC<AttractionInterfaceProps> = ({ attraction, reviews, popularAttraction }) => {
  return (
    <Box minH="100vh">
      {/* Hero Image */}
      <Box position="relative" h="300px">
        <Image
          src={`https://via.placeholder.com/400x300?text=${attraction.name}`}
          alt={attraction.name}
          w="full"
          h="full"
          objectFit="cover"
        />
        <Flex position="absolute" top={4} left={4} right={4} justify="space-between">
          <IconButton aria-label="Back" bg="white" rounded="full">
            <FaArrowLeft />
          </IconButton>
          <IconButton aria-label="Bookmark" bg="white" rounded="full">
            <FaBookmark />
          </IconButton>
        </Flex>
        <Text position="absolute" bottom={4} left={4} color="white" fontSize="2xl" fontWeight="bold">
          {attraction.name}
        </Text>
      </Box>

      <Box px={6} spaceY={2}>
        <Box py={2}>
          <Text fontWeight="bold" fontSize="lg" mb={1}>
            Tentang
          </Text>
          <Text fontSize="sm" color="gray.600" mb={2}>
            {attraction.description}
          </Text>
        </Box>

        <Separator />

        <Box py={2} spaceY={2}>
          <Flex justify="space-between">
            <Box>
              <Text fontWeight="bold" fontSize="md">
                Lokasi bepergian anda
              </Text>
              <Text fontSize="sm" color="gray.600">
                Lihat lokasi di map
              </Text>
            </Box>
            <Button bgColor="secondary" color="white" p={1} px={4} borderRadius="lg">
              Buka Map
            </Button>
          </Flex>

          <Box w="full" borderRadius="lg">
            <iframe
              width="100%"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://maps.google.com/maps?q=${attraction.lat},${attraction.lon}&z=ZOOM&output=embed`}
            ></iframe>
          </Box>

          <Box>
            <Text fontSize="sm" color="gray.600">
              {attraction.name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              {attraction.address}
            </Text>
          </Box>
        </Box>

        <Separator />

        <Box py={2} spaceY={2}>
          {/* kolase foto */}Yada yada kolase foto
        </Box>

        <Box py={2} spaceY={2}>
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              Ulasan
            </Text>
            <Text fontSize="sm" color="gray.600">
              {`${popularAttraction.average_rating} (${popularAttraction.review_count} ulasan)`}
            </Text>
          </Box>
          <List.Root>
            {reviews.map((review) => (
              <Box key={review.review_attraction_uuid} borderRadius="lg" borderWidth={1} borderColor="gray.600">
                
              </Box>
            ))}
          </List.Root>
        </Box>
      </Box>

      {/* Bottom Button */}
      {/* <Box position="fixed" bottom={20} left={4} right={4}>
        <Button colorScheme="teal" size="lg" w="full" rounded="full">
          Rp {attraction.price?.toLocaleString("id-ID")} · Simpan Rute
        </Button>
      </Box> */}

      <Flex
        align="center"
        justify="space-between"
        borderTop="1px solid"
        borderColor="gray.200"
        px={6}
        py={2}
        bg="white"
        position="sticky"
        bottom="0"
        left="0"
        right="0"
        zIndex="20"
        minH={FOOTER_HEIGHT}
      >
        <Text fontSize="md" color="secondary" fontWeight="bold">
          {attraction.price ? `Rp ${attraction.price.toLocaleString("id-ID")}` : "Gratis"}
        </Text>
        <Button bgColor="primary" color="white" p={6} borderRadius="xl">
          Simpan ke rute
        </Button>
      </Flex>
    </Box>
  );
};
