import { Flex, Text, IconButton } from "@chakra-ui/react";
import { IoCopyOutline } from "react-icons/io5";
import React from "react";

const ChatMessage = ({ index }: { index: number }) => {
  const isUser = index % 2 === 0;
  const message = `Message ${index + 1} ${isUser ? "from you" : "from friend"}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(message);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy text:", err);
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
        maxW={!isUser ? "100%" : "90%"}
      >
        <Text fontSize="sm">
          {message}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente neque perspiciatis, molestiae
          quod eligendi dolores quaerat soluta animi quibusdam eaque officia ipsum. Veniam delectus distinctio alias
          corporis iste nisi ad?
        </Text>
      </Flex>
      {!isUser && (
        <IconButton aria-label="Copy message" size="xs" variant="ghost" onClick={handleCopy}>
          <IoCopyOutline />
        </IconButton>
      )}
    </Flex>
  );
};

export default ChatMessage;
