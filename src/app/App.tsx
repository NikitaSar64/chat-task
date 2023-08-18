import { Chat } from "@components/chat/Chat";

import styles from "./App.module.scss";
import { FC } from "react";

export const App: FC = () => {
  return (
    <div className={styles.bg}>
      <Chat className={styles.appChat} />
    </div>
  );
};
