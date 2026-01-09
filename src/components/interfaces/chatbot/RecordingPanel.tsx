import { Flex, Text, Button } from "@chakra-ui/react";
import { LuMic } from "react-icons/lu";
import React from "react";

interface RecordingPanelProps {
  isRecording: boolean;
  handleStartRecording: () => void;
  handleStopRecording: () => void;
}

export const RecordingPanel: React.FC<RecordingPanelProps> = ({ isRecording, handleStartRecording, handleStopRecording }) => (
  <Flex
    flex="1"
    bg={isRecording ? "white" : "gray.100"}
    borderRadius="md"
    p={3}
    align="center"
    justify="center"
    boxShadow="2xl"
    flexDirection="column"
    transition="all 0.2s"
  >
    <Text fontSize="sm" mb={2} color={isRecording ? "black" : "gray.500"}>
      {isRecording ? "Recording..." : "Hold to record"}
    </Text>
    <Button
      onMouseDown={handleStartRecording}
      onMouseUp={handleStopRecording}
      onTouchStart={handleStartRecording}
      onTouchEnd={handleStopRecording}
      bg={isRecording ? "primary" : "white"}
      border="1px solid"
      borderRadius="100%"
      borderColor="secondary"
      color={isRecording ? "white" : "primary"}
      w={10}
      h={10}
    >
      <LuMic />
    </Button>
  </Flex>
);
