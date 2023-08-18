import { FC } from "react";

import { IMessage } from "@interfaces/interfaces";

import styles from "./Avatar.module.scss";
import cn from "classnames";

export const Avatar: FC<Pick<IMessage, "sender">> = ({ sender }) => {
  return (
    <div
      className={cn(styles.avatar, {
        [styles.botAvatar]: sender === "bot",
        [styles.userAvatar]: sender === "user",
      })}
    >
      {sender === "user" && <span>T</span>}
    </div>
  );
};
