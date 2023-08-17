import { IMessage } from "@interfaces/interfaces";
import { RefObject } from "react";

export interface MessageProps extends IMessage {
  messageRef: RefObject<HTMLDivElement>;
}
