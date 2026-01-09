import { Flex, Button, Text, Link } from "@chakra-ui/react";
import React from "react";
import { FOOTER_MENU_ITEMS } from "@/utils";
import { usePathname } from "next/navigation";

const FooterMenu = ({ footerHeight }: { footerHeight: string }) => {
  const pathname = usePathname();
  return (
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
      {FOOTER_MENU_ITEMS.map((item, i) => {
        const isActive = pathname === item.href;
        return (
          <Link key={i} href={item.href}>
            <Button
              variant="ghost"
              color={isActive ? "primary" : "neutral"}
              fontWeight={isActive ? "bold" : "normal"}
              display="flex"
              flexDirection="column"
              gap={0}
            >
              {item.icon}
              <Text fontSize="xs">{item.label}</Text>
            </Button>
          </Link>
        );
      })}
    </Flex>
  );
};

export default FooterMenu;
