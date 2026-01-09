// src/components/interfaces/chatbot/ChatMessage.tsx
import { Flex, Text, IconButton } from "@chakra-ui/react";
import { IoCopyOutline } from "react-icons/io5";
import { MessageDetail } from "@/types"; // adjust path if needed
import React from "react";

interface ChatMessageProps {
  messageDetail: MessageDetail;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ messageDetail }) => {
  const isUser = messageDetail.request === "Question";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(messageDetail.message);
      // You can replace alert with toast later
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Flex
      align="start"
      justify={isUser ? "end" : "start"}
      alignSelf={isUser ? "flex-end" : "flex-start"}
      gap={1}
      maxW="90%"
    >
      <Flex
        bg={isUser ? "primary" : "white"}
        color={isUser ? "white" : "black"}
        p={3}
        borderLeftRadius={isUser ? "2xl" : "none"}
        borderRightRadius={!isUser ? "2xl" : "none"}
        borderTopRadius="2xl"
        maxW="100%"
        whiteSpace="pre-wrap" // preserves \n line breaks
        wordBreak="break-word"
      >
        <Text fontSize="sm">{messageDetail.message}</Text>
      </Flex>

      {/* Copy button only for bot messages */}
      {!isUser && (
        <IconButton
          aria-label="Copy message"
          size="xs"
          variant="ghost"
          onClick={handleCopy}
        >
          <IoCopyOutline />
        </IconButton>
      )}
    </Flex>
  );
};