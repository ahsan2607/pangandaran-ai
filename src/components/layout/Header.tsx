"use client";
import { Flex, Text, IconButton, Input } from "@chakra-ui/react";
import { BiGridVertical } from "react-icons/bi";
import { FaCommentDots, FaChevronLeft } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import React from "react";

export const Header: React.FC = () => {
  const pathname = usePathname();

  switch (pathname) {
    case "/home":
      return null;

    case "/wishlist":
      return (
        <Flex
          as="header"
          align="center"
          justify="space-between"
          py={4}
          px={6}
          gap={2}
          borderBottom="1px solid"
          borderColor="gray.200"
          position="sticky"
          top="0"
          zIndex="10"
          bg="white"
        >
          <FaChevronLeft size={20}></FaChevronLeft>
          <Input
            pl="24px"
            placeholder="Cari destinasi di wishlist..."
            borderRadius="2xl"
            bg="gray.100"
            _placeholder={{ color: "gray.500" }}
          />
          <BiGridVertical size={28}></BiGridVertical>
        </Flex>
      );

    case "/chatbot":
      return (
        <Flex
          as="header"
          align="center"
          justify="space-between"
          p={4}
          borderBottom="1px solid"
          borderColor="gray.200"
          position="sticky"
          top="0"
          zIndex="10"
          bg="white"
          color="secondary"
        >
          <div></div>
          <Text fontSize="lg" fontWeight="bold">
            Pangandaran.AI
          </Text>
          <IconButton aria-label="Settings" size="sm" variant="ghost" color="secondary">
            <FaCommentDots />
          </IconButton>
        </Flex>
      );

    case "/profile":
      return (
        <Flex
          as="header"
          align="center"
          justify="center"
          p={4}
          borderBottom="1px solid"
          borderColor="gray.200"
          position="sticky"
          top="0"
          zIndex="10"
          bg="white"
          color="secondary"
        >
          <Text fontWeight="bold" fontSize="lg" color="secondary">
            Profile
          </Text>
        </Flex>
      );

    default:
      return null;
  }
};
