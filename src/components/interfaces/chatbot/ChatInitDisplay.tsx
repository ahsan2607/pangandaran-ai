import { Flex, Text, Box, List } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import React from "react";

interface FooterHeightProps {
  footerHeight: string;
}

export const ChatInitDisplay: React.FC<FooterHeightProps> = ({ footerHeight }) => (
  <Flex align="center" py={4} pb={`calc(${footerHeight} + 8px)`} flexDirection="column" gap={4}>
    <FaRobot size={150} />
    <Flex bg="gray.200" width="100%" align="center" p={2} borderRadius="xl" gap={2}>
      <Box color="secondary">
        <IoSparkles />
      </Box>
      <Text fontSize="xs">
        Hai kamu bisa tanyakan apa saja tentang wisata, liburan, penginapan, restoran, dan sejarah di Pangandaran
      </Text>
    </Flex>
    <Flex bg="white" width="100%" p={2} borderRadius="xl" gap={2} flexDirection="column">
      <Flex align="center" gap={2}>
        <Box color="secondary">
          <IoSparkles />
        </Box>
        <Text fontSize="xs">Beberapa pertanyaan yang sering ditanyakan orang-orang</Text>
      </Flex>
      <List.Root listStyle="none" gap={2}>
        {[
          "Berikan daftar penginapan pinggir pantai pangandaran",
          "Makanan khas yang dapat dinikmati di pantai pangandaran",
          "Dimana lokasi money changer di pangandaran?",
          "Berikan daftar pantai-pantai yang ada di pangandaran",
        ].map((q, i) => (
          <List.Item key={i} border="1px solid" borderColor="secondary" py={1} px={2} rounded="2xl" fontSize="xs">
            {q}
          </List.Item>
        ))}
      </List.Root>
    </Flex>
  </Flex>
);
