// src/components/interfaces/chatbot/HorizontalCardScroller.tsx
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaStar, FaBookmark } from "react-icons/fa6";
import { Attraction } from "@/types";
import React from "react";

interface HorizontalCardScrollerProps {
  attractions: Attraction[];
}

export const HorizontalCardScroller: React.FC<HorizontalCardScrollerProps> = ({ attractions }) => (
  <Box mt={4}>
    <Flex justify="space-between" align="center" mb={2}>
      <Text fontWeight="bold" fontSize="sm">
        Rekomendasi Pantai di Pangandaran
      </Text>
      <Button size="xs" variant="outline" color="secondary">
        Lihat Semua
      </Button>
    </Flex>

    <Flex
      overflowX="auto"
      gap={3}
      pb={2}
      css={{
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {attractions.map((item) => (
        <Box
          key={item.attraction_uuid}
          minW="160px"
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          overflow="hidden"
          flexShrink={0}
        >
          {/* Placeholder image - replace with real one later */}
          <Flex
            p={3}
            align="start"
            justify="end"
            h="100px"
            bg="gray.300"
            position="relative"
          >
            <Box
              position="absolute"
              inset={0}
              bg="gray.400"
              borderRadius="lg"
            />
            <FaBookmark color="white" size={16} />
          </Flex>

          <Box p={1.5}>
            <Box pb={2}>
              <Text lineHeight={1.2} fontWeight="bold" fontSize="xs" color="secondary">
                {item.name}
              </Text>
              <Text lineHeight={1.2} fontSize="x-small" color="gray.500">
                {item.address}
              </Text>
              <Flex align="center" gap={1}>
                <FaStar color="#FFD700" size={12} />
                <Text fontSize="xs" color="gray.500">
                  4.6 {/* You can add real rating later */}
                </Text>
              </Flex>
            </Box>

            <Flex justify="space-between" align="center">
              <Box>
                <Text fontSize="x-small" color="gray.500">
                  Tiket masuk
                </Text>
                <Text fontSize="xs" color="secondary" fontWeight="bold">
                  Rp {item.price?.toLocaleString("id-ID") || "Gratis"}
                </Text>
              </Box>
              <Button
                size="xs"
                bg="secondary"
                color="white"
                borderRadius="50px"
                _hover={{ bg: "secondary.600" }}
              >
                Detail
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </Flex>
  </Box>
);