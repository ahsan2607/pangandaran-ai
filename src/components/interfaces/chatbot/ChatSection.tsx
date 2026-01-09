// src/components/interfaces/chatbot/ChatSection.tsx
import { Box, Flex } from "@chakra-ui/react";
import { ChatInitDisplay, ChatMessage, HorizontalCardScroller } from ".";
import { dummyMessage, dummyAttractions } from "@/utils/data";
import React from "react";

interface ChatSectionProps {
  footerHeight: string;
}

export const ChatSection: React.FC<ChatSectionProps> = ({ footerHeight }) => {
  // Kondisi: apakah ada riwayat pesan atau masih chat baru?
  const isNewChat = dummyMessage.details.length === 0;

  return (
    <Box flex="1" overflowY="auto" bg="gray.100" px={4} pt={4} pb={`calc(${footerHeight} + 8px)`}>
      {isNewChat ? (
        <ChatInitDisplay footerHeight={footerHeight} />
      ) : (
        <>
          {/* <Text fontWeight="bold" fontSize="lg" mb={4} textAlign="center" color="secondary">
            {dummyMessage.title}
          </Text> */}

          <Flex direction="column" gap={3}>
            {/* Riwayat pesan */}
            {dummyMessage.details.map((detail) => (
              <ChatMessage key={detail.message_detail_uuid} messageDetail={detail} />
            ))}

            {/* Kartu rekomendasi setelah percakapan */}
            <HorizontalCardScroller attractions={dummyAttractions} />
          </Flex>
        </>
      )}
    </Box>
  );
};
