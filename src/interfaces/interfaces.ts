export interface IMessage {
  sender: "bot" | "user";
  textMessage: string;
}

export interface IApiResponse {
  status: "content" | "done";
  value: "string" | null;
}
