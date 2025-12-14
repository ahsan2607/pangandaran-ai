"use client";
import React, { useState, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { FOOTER_HEIGHT, createRecordingHandlers } from "@/utils";
import Header from "./Header";
import ChatSection from "./ChatSection";
import ChatInput from "./ChatInput";
import FooterMenu from "./FooterMenu";

const Layout: React.FC = () => {
  const [isRecordingPanel, setIsRecordingPanel] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const { startRecording, stopRecording } = createRecordingHandlers(
    setIsRecording,
    setIsRecordingPanel,
    mediaRecorderRef,
    audioChunksRef
  );

  return (
    <Flex direction="column" h="100vh" bg="white">
      <Header />
      <ChatSection footerHeight={FOOTER_HEIGHT} />
      <ChatInput
        footerHeight={FOOTER_HEIGHT}
        isRecording={isRecording}
        isRecordingPanel={isRecordingPanel}
        setIsRecordingPanel={setIsRecordingPanel}
        handleStartRecording={startRecording}
        handleStopRecording={stopRecording}
      />
      <FooterMenu footerHeight={FOOTER_HEIGHT} />
    </Flex>
  );
};

export default Layout;
