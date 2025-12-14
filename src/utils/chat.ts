// Chat message types and helpers

export interface ChatMessage {
  id: string | number;
  sender: "user" | "bot";
  content: string;
  timestamp?: string;
}

/**
 * Creates a ChatMessage object easily.
 */
export const createMessage = (
  sender: "user" | "bot",
  content: string
): ChatMessage => ({
  id: Date.now(),
  sender,
  content,
  timestamp: new Date().toISOString(),
});

/**
 * Optionally: generate placeholders for skeleton UIs or testing.
 */
export const generatePlaceholderMessages = (count = 5): ChatMessage[] =>
  Array.from({ length: count }, (_, i) =>
    createMessage(i % 2 === 0 ? "user" : "bot", `Sample message ${i + 1}`)
  );
