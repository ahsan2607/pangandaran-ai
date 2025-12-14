import { Box, Flex } from "@chakra-ui/react";
import ChatInitDisplay from "./ChatInitDisplay";
import ChatMessage from "./ChatMessage";
import HorizontalCardScroller from "./HorizontalCardScroller";
import React from "react";

interface Props {
  footerHeight: string;
}

const ChatSection: React.FC<Props> = ({ footerHeight }) => (
  <Box flex="1" overflowY="auto" bg="gray.100" px={4} pt={4} pb={`calc(${footerHeight} + 8px)`}>
    <ChatInitDisplay footerHeight={footerHeight} />

    <Flex direction="column" gap={3}>
      {Array.from({ length: 16 }).map((_, i) => (
        <ChatMessage key={i} index={i} />
      ))}
      <HorizontalCardScroller />
    </Flex>
  </Box>
);

export default ChatSection;
