import { FC, useEffect, useRef } from "react";
import styles from "./ChatList.module.scss";
import { Message } from "../message/Message";
import { IMessage } from "@interfaces/interfaces";

export const ChatList: FC<{ messages: IMessage[] }> = ({ messages }) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current != null) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.chatList}>
      {messages.length > 0 &&
        messages.map((message, index) => (
          <Message
            messageRef={messagesEndRef}
            key={index}
            textMessage={message.textMessage}
            sender={message.sender}
          />
        ))}
    </div>
  );
};
