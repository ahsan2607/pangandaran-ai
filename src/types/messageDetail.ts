import { UUID, ISODateString, MessageDetailRequest, MessageDetailType } from "./common";

export interface MessageDetail {
  user_name: string | null;
  bot_model: string | null;
  message: string;
  type: MessageDetailType;
  request: MessageDetailRequest;
  message_detail_uuid: UUID;
  message_uuid: UUID;
  created_at: ISODateString;
  is_delete: boolean;
}

export interface MessageDetailCreate {
  user_name?: string | null;
  bot_model?: string | null;
  message: string;
  type?: MessageDetailType;
  request: MessageDetailRequest;
}
