import { UUID, ISODateString, PaginatedResponse } from "./common";
import { MessageDetail as MD } from "./messageDetail"; // avoid circular content duplication

export interface Message {
  title: string;
  message_uuid: UUID;
  session_uuid: UUID;
  created_at: ISODateString;
  updated_at: ISODateString;
  is_delete: boolean;
}

export interface MessageCreate {
  title: string;
  session_uuid: UUID;
}

export interface MessageUpdate {
  title?: string | null;
}

export interface MessageWithDetails extends Message {
  details: MD[];
}

export type PaginatedMessages = PaginatedResponse<Message>;
