import { getMessageText } from "@helpers/getMessage";
import { parseChunk } from "@helpers/parseChunk";
import { IApiResponse, IMessage } from "@interfaces/interfaces";
import { fetchMessage } from "@services/services";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const sendMessage = async (message: string) => {
    try {
      setLoading(true);
      const response = await fetchMessage(API_URL, message);

      if (!response.ok || !response.body) {
        throw new Error(response.statusText);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          setLoading(false);
          break;
        }

        const decodedChunk = decoder.decode(value);

        const chunk = parseChunk<IApiResponse>(
          decodedChunk,
          /{"status":"[^}]*}/g
        );

        setMessages((prevMessages) => {
          if (prevMessages.slice(-1)[0]?.sender === "bot") {
            const [lastMessage] = prevMessages.slice(-1);
            lastMessage.textMessage += getMessageText(chunk);
            return [...prevMessages.slice(0, -1), lastMessage];
          } else {
            const newMessage: IMessage = {
              sender: "bot",
              textMessage: getMessageText(chunk),
            };
            return [...prevMessages, newMessage];
          }
        });
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return { loading, sendMessage, messages, setMessages };
};
