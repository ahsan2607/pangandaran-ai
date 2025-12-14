import { Flex, Text, IconButton } from "@chakra-ui/react";
import { FaCommentDots } from "react-icons/fa6";
import React from "react";

const Header = () => (
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
    <Text fontSize="lg" fontWeight="bold">Chat App</Text>
    <IconButton aria-label="Settings" size="sm" variant="ghost" color="secondary">
      <FaCommentDots />
    </IconButton>
  </Flex>
);

export default Header;
