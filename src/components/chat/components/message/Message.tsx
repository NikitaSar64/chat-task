import { FC } from "react";

import { Avatar } from "./components/avatar/Avatar";
import { MessageProps } from "./Message.props";

import styles from "./Message.module.scss";
import cn from "classnames";

export const Message: FC<MessageProps> = ({
  textMessage,
  sender,
  messageRef,
}) => {
  return (
    <div className={styles.message} ref={messageRef}>
      <Avatar sender={sender} />
      <div
        className={cn(styles.text, {
          [styles.userMessage]: sender === "user",
          [styles.botMessage]: sender === "bot",
        })}
      >
        {textMessage}
      </div>
    </div>
  );
};
