import { UUID, ISODateString } from "./common";

export interface Session {
  name: string;
  email: string;
  session_uuid: UUID;
  created_at: ISODateString;
  updated_at: ISODateString;
}

export interface SessionCreate {
  name: string;
  email: string;
}
