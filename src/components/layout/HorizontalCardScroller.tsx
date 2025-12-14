import { Box, Flex, Text, Button } from "@chakra-ui/react";
import React from "react";

const HorizontalCardScroller = () => (
  <Box mt={4}>
    <Flex justify="space-between" align="center" mb={2}>
      <Text fontWeight="bold" fontSize="sm">
        Pantai di Kabupaten Pangandaran
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
      {[
        { name: "Pantai Pangandaran", price: "Rp 20k", rating: 4.8, img: "/img1.jpg" },
        { name: "Pantai Karapyak", price: "Rp 10k", rating: 4.3, img: "/img2.jpg" },
        { name: "Pantai Batu Hiu", price: "Rp 15k", rating: 4.5, img: "/img3.jpg" },
      ].map((item, i) => (
        <Box key={i} minW="160px" bg="white" borderRadius="xl" boxShadow="md" overflow="hidden" flexShrink={0}>
          <Box h="100px" bg="gray.300" bgImage={`url(${item.img})`} bgSize="cover" bgPos="center" />
          <Box p={2}>
            <Text fontWeight="semibold" fontSize="sm" color="secondary">
              {item.name}
            </Text>
            <Text fontSize="xs" color="gray.500">
              ⭐ {item.rating} — Start from {item.price}
            </Text>
            <Button size="xs" mt={1} colorScheme="blue" variant="outline" w="full">
              Detail
            </Button>
          </Box>
        </Box>
      ))}
    </Flex>
  </Box>
);

export default HorizontalCardScroller;
