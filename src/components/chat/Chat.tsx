import { FC, FormEvent, HTMLAttributes, useEffect, useRef } from "react";

import { ChatTitle } from "./components/chattitle/ChatTitle";
import { ChatList } from "./components/chatlist/ChatList";
import { ChatInput } from "./components/chatinput/ChatInput";

import { useSendMessage } from "@hooks/useSendMessage";

import styles from "./Chat.module.scss";
import cn from "classnames";

export const Chat: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  const { loading, sendMessage, messages, setMessages } = useSendMessage();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    sendMessage("start bot");
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current !== null) {
      const { value } = inputRef.current;

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", textMessage: value },
      ]);

      if (!loading) {
        sendMessage(value);
      }

      inputRef.current.value = "";
    }
  };

  return (
    <div className={cn(styles.chat, className)}>
      <ChatTitle title="bot Chat" subTitle="AI-based service" />
      <ChatList messages={messages} />
      <ChatInput onSubmit={handleSubmit} inputRef={inputRef} />
    </div>
  );
};
