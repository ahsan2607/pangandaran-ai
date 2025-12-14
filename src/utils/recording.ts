import { MutableRefObject } from "react";

export interface RecordingHandlers {
  startRecording: () => Promise<void>;
  stopRecording: () => void;
}

export const createRecordingHandlers = (
  setIsRecording: (v: boolean) => void,
  setIsRecordingPanel: (v: boolean) => void,
  mediaRecorderRef: MutableRefObject<MediaRecorder | null>,
  audioChunksRef: MutableRefObject<Blob[]>
): RecordingHandlers => {
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        console.log("🎙️ Recorded audio available at:", url);
      };

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch (err) {
      console.error("Microphone access error:", err);
    }
  };

  const stopRecording = () => {
    const rec = mediaRecorderRef.current;
    if (rec) {
      rec.stop();
      rec.stream.getTracks().forEach((t) => t.stop());
    }
    setIsRecording(false);
    setIsRecordingPanel(false);
  };

  return { startRecording, stopRecording };
};
