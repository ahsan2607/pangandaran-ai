"use client"
import React, { useState, useRef } from "react";
import { FOOTER_HEIGHT, createRecordingHandlers } from "@/utils";
import { ChatSection, ChatInput } from ".";

export const ChatInterface: React.FC = () => {
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
    <div>
      <ChatSection footerHeight={FOOTER_HEIGHT} />
      <ChatInput
        footerHeight={FOOTER_HEIGHT}
        isRecording={isRecording}
        isRecordingPanel={isRecordingPanel}
        setIsRecordingPanel={setIsRecordingPanel}
        handleStartRecording={startRecording}
        handleStopRecording={stopRecording}
      />
    </div>
  );
};
