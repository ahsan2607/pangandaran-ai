"use client";
import { Flex } from "@chakra-ui/react";
import {Header} from "./Header";
import FooterMenu from "./FooterMenu";
import { FOOTER_HEIGHT } from "@/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" h="100vh" bg="white">
      <Header />
      {children}
      <FooterMenu footerHeight={FOOTER_HEIGHT} />
    </Flex>
  );
};

export default Layout;
