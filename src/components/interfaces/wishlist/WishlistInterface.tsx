// src/components/interfaces/wishlist/WishlistInterface.tsx 
import { Box, Text, List, Separator, Flex } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { dummyWishLists } from "@/utils/data";
import React from "react";

// Helper untuk format tanggal Indonesia
const formatDate = (isoString: string): string => {
  return new Date(isoString).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const WishlistInterface: React.FC = () => {
  // Urutkan dari yang paling baru ditambahkan
  const sortedWishlists = [...dummyWishLists].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );

  return (
    <Box px={3} py={6}>
      <Text fontWeight="bold" fontSize="xl">Daftar rute yang disimpan</Text>

      <List.Root>
        {sortedWishlists.map((wishlist, index) => {
          const attraction = wishlist.attraction;
          const isVisited = wishlist.status === "Visited";

          return (
            <React.Fragment key={wishlist.wish_list_uuid}>
              <List.Item my={4}>
                <Flex gap={2} align="center">
                  <Box
                    p={3}
                    h="120px"
                    w="120px"
                    bg="gray.700"
                    bgImage={`url('https://via.placeholder.com/120?text=${encodeURIComponent(attraction.name)}')`}
                    bgSize="cover"
                    bgPos="center"
                    borderRadius="lg"
                  />
                  <Box spaceY={0.125}>
                    <Text fontWeight="bold" fontSize="lg">
                      {attraction.name}
                    </Text>
                    <Flex gap={2} align="center">
                      <Flex align="center" gap={1}>
                        {/* Tetap 5 bintang kuning statis sesuai UI asli */}
                        <FaStar color="yellow" size={14} />
                        <FaStar color="yellow" size={14} />
                        <FaStar color="yellow" size={14} />
                        <FaStar color="yellow" size={14} />
                        <FaStar color="yellow" size={14} />
                      </Flex>
                      <Text fontSize="sm">100 Ulasan</Text>
                    </Flex>
                    <Text fontSize="xs">
                      {attraction.address}
                    </Text>
                    <Text fontWeight="bold" fontSize="md">
                      {isVisited ? "Sudah dikunjungi" : "Belum dikunjungi"}
                    </Text>
                    <Box mt={4}>
                      <Flex
                        mt="0.25rem"
                        justify="center"
                        p={1}
                        borderWidth={1}
                        borderColor="gray"
                        borderRadius="md"
                      >
                        <Text fontSize="xs">
                          Ditambahkan pada {formatDate(wishlist.created_at)}
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </List.Item>

              {/* Separator kecuali item terakhir */}
              {index < sortedWishlists.length - 1 && <Separator />}
            </React.Fragment>
          );
        })}
      </List.Root>
    </Box>
  );
};