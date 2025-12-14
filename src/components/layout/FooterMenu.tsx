import { Flex, Button, Text } from "@chakra-ui/react";
import { FaHouse, FaBookmark, FaRobot, FaUser } from "react-icons/fa6";
import React from "react";

const FooterMenu = ({ footerHeight }: { footerHeight: string }) => (
  <Flex
    as="footer"
    align="center"
    justify="space-around"
    borderTop="1px solid"
    borderColor="gray.200"
    px={4}
    py={2}
    bg="white"
    position="fixed"
    bottom="0"
    left="0"
    right="0"
    zIndex="20"
    minH={footerHeight}
  >
    {[
      { icon: <FaHouse />, label: "Home" },
      { icon: <FaBookmark />, label: "Saved" },
      { icon: <FaRobot />, label: "Chatbot" },
      { icon: <FaUser />, label: "Profile" },
    ].map((item, i) => (
      <Button key={i} variant="ghost" color="neutral" display="flex" flexDirection="column" gap={0}>
        {item.icon}
        <Text fontSize="xs">{item.label}</Text>
      </Button>
    ))}
  </Flex>
);

export default FooterMenu;
