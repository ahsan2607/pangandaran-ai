import { Flex, IconButton, Input } from "@chakra-ui/react";
import { LuMic, LuSendHorizontal } from "react-icons/lu";
import { RecordingPanel } from ".";
import React from "react";

interface ChatInputProps {
  footerHeight: string;
  isRecording: boolean;
  isRecordingPanel: boolean;
  setIsRecordingPanel: React.Dispatch<React.SetStateAction<boolean>>;
  handleStartRecording: () => void;
  handleStopRecording: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  footerHeight,
  isRecording,
  isRecordingPanel,
  setIsRecordingPanel,
  handleStartRecording,
  handleStopRecording,
}) => (
  <Flex position="sticky" bottom={footerHeight} minH={footerHeight} px={4} py={2} align="center" gap={2}>
    {isRecordingPanel ? (
      <RecordingPanel
        isRecording={isRecording}
        handleStartRecording={handleStartRecording}
        handleStopRecording={handleStopRecording}
      />
    ) : (
      <>
        <Flex flex="1" bg="white" borderRadius="md" p={1.5} align="center" boxShadow="2xl">
          <Input
            placeholder="Type a message..."
            flex="1"
            border="none"
            outline="none"
            _focus={{ border: "none", outline: "none", boxShadow: "none" }}
            _active={{ border: "none", outline: "none", boxShadow: "none" }}
            _focusVisible={{ border: "none", outline: "none", boxShadow: "none" }}
          />
          <IconButton aria-label="Microphone" variant="ghost" color="primary" onClick={() => setIsRecordingPanel(true)}>
            <LuMic />
          </IconButton>
        </Flex>
        <IconButton aria-label="Send" bg="primary" borderRadius="full">
          <LuSendHorizontal />
        </IconButton>
      </>
    )}
  </Flex>
);
