// src/components/interfaces/wishlist/WishlistInterface.tsx
"use client";
import { useRouter } from "next/navigation";
import { Box, Text, List, Separator, Flex } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa6";
import { sortedWishlists } from "@/utils/data";
import React from "react";
import { formatDate } from "@/utils/helper";

export const WishlistInterface: React.FC = () => {
  // Urutkan dari yang paling baru ditambahkan
  const router = useRouter();
  return (
    <Box px={3} py={6}>
      <Text fontWeight="bold" fontSize="xl">
        Daftar rute yang disimpan
      </Text>

      <List.Root>
        {sortedWishlists.map((wishlist, index) => {
          const attraction = wishlist.attraction;
          const isVisited = wishlist.status === "Visited";

          return (
            <React.Fragment key={wishlist.wish_list_uuid}>
              <List.Item
                my={4}
                onClick={() => router.push(`/attraction/${attraction.attraction_uuid}`)}
                cursor="pointer"
              >
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
                    <Text fontSize="xs">{attraction.address}</Text>
                    <Text fontWeight="bold" fontSize="md">
                      {isVisited ? "Sudah dikunjungi" : "Belum dikunjungi"}
                    </Text>
                    <Box mt={4}>
                      <Flex mt="0.25rem" justify="center" p={1} borderWidth={1} borderColor="gray" borderRadius="md">
                        <Text fontSize="xs">Ditambahkan pada {formatDate(wishlist.created_at)}</Text>
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
