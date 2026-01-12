"use client";
import { useRouter } from "next/navigation";
import { Box, Flex, Text, Image, IconButton, Input, List, Separator } from "@chakra-ui/react";
import { dummyPopularAttractions } from "@/utils/data/dummyAttractions";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaStar, FaComment, FaBookmark, FaUser } from "react-icons/fa6";
import { formatDate } from "@/utils/helper";
import { sortedWishlists } from "@/utils/data";

export const HomeInterface: React.FC = () => {
  const router = useRouter();
  return (
    <Box minH="100vh" pb="70px">
      {/* ===== Banner ===== */}
      <Box
        px={4}
        py={6}
        bgImage="url('https://via.placeholder.com/800x400')"
        bgColor="gray"
        bgSize="cover"
        position="center"
        borderBottomRadius="2xl"
      >
        <Text fontWeight="bold" fontSize="4xl" color="white" mb={3}>
          Hai, selamat datang di Pangandaran.ai
        </Text>

        {/* Search */}
        <Input placeholder="Cari destinasi, penginapan, kuliner..." bg="white" mb={4} py={2} borderRadius="xl" />

        {/* Horizontal kategori (bukan tabs) */}
        <Flex gap={2} overflowX="auto">
          {["Penginapan", "Destinasi", "Rute Tur", "Kuliner"].map((item) => (
            <Box
              key={item}
              px={4}
              py={2}
              bg="whiteAlpha.900"
              borderRadius="full"
              fontSize="sm"
              // width="max-content"
              whiteSpace="nowrap"
              flexShrink={0}
            >
              {item}
            </Box>
          ))}
        </Flex>
      </Box>

      {/* ===== Destinasi Wisata ===== */}
      <Box px={4} mt={6}>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Destinasi Wisata Populer
        </Text>

        <Flex overflowX="auto" gap={3} pb={2}>
          {dummyPopularAttractions.map((item) => (
            <Box
              key={item.attraction_uuid}
              minW="200px"
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              flexShrink={0}
              onClick={() => router.push(`/attraction/${item.attraction_uuid}`)}
              cursor="pointer"
            >
              <Image src="https://via.placeholder.com/200x120" alt={item.name} w="full" h="120px" objectFit="cover" />
              <Box p={2}>
                <Text fontWeight="bold" fontSize="md">
                  {item.name}
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
                <Text fontSize="sm">{item.address}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* ===== Rute yang Telah Dikunjungi ===== */}
      <Box px={4} mt={6}>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          Rute Terakhir Dikunjungi
        </Text>

        <List.Root>
          {sortedWishlists
            .filter((wishlist) => wishlist.status === "Visited")
            .map((wishlist, index) => {
              const attraction = wishlist.attraction;
              const isVisited = true;

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
                          <Flex
                            mt="0.25rem"
                            justify="center"
                            p={1}
                            borderWidth={1}
                            borderColor="gray"
                            borderRadius="md"
                          >
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

      {/* ===== Bottom Nav ===== */}
      <Flex position="fixed" bottom={0} left={0} right={0} bg="white" p={2} justify="space-around" boxShadow="md">
        <IconButton aria-label="Home" variant="ghost">
          <FaHome />
        </IconButton>
        <IconButton aria-label="Chat" variant="ghost">
          <FaComment />
        </IconButton>
        <IconButton aria-label="Wishlist" variant="ghost">
          <FaBookmark />
        </IconButton>
        <IconButton aria-label="Profile" variant="ghost">
          <FaUser />
        </IconButton>
      </Flex>
    </Box>
  );
};
