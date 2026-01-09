import { Box, Flex, Text, Image, IconButton, Input } from "@chakra-ui/react";
import { dummyPopularAttractions } from "@/utils/data/dummyAttractions";
import React from "react";
import { FaHome } from "react-icons/fa";
import { FaStar, FaComment, FaBookmark, FaUser } from "react-icons/fa6";

export const HomeInterface: React.FC = () => {
  return (
    <Box minH="100vh" pb="70px">
      {/* ===== Banner ===== */}
      <Box
        px={4}
        py={6}
        // bgImage="url('https://via.placeholder.com/800x400')"
        bgColor="gray"
        bgSize="cover"
        position="center"
        borderBottomRadius="2xl"
      >
        <Text fontWeight="bold" fontSize="2xl" color="white" mb={3}>
          Hai, selamat datang di Pangandaran.ai
        </Text>

        {/* Search */}
        <Input placeholder="Cari destinasi, penginapan, kuliner..." bg="white" mb={4} />

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
            <Box key={item.attraction_uuid} minW="200px" bg="white" borderRadius="xl" overflow="hidden" flexShrink={0}>
              <Image src="https://via.placeholder.com/200x120" alt={item.name} w="full" h="120px" objectFit="cover" />
              <Box p={2}>
                <Text fontWeight="bold" fontSize="md">
                  {item.name}
                </Text>
                <Flex align="center" gap={1}>
                  <FaStar size={12} />
                  <Text fontSize="sm">
                    {item.average_rating} ({item.review_count})
                  </Text>
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
          Rute yang Telah Dikunjungi
        </Text>

        <Flex direction="column" gap={3}>
          {/* Placeholder wishlist */}
          <Box bg="white" p={3} borderRadius="lg">
            <Text fontWeight="medium">Pantai Pangandaran → Green Canyon</Text>
            <Text fontSize="sm" color="gray.500">
              Dikunjungi • Wishlist
            </Text>
          </Box>
        </Flex>
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
