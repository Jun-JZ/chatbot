export interface MessageType {
  msg?: string;
  type?: "msg" | "image";
  id?: string;
  processing?: boolean;
  from?: "bot" | "client";
  timestamp?: number;
}
