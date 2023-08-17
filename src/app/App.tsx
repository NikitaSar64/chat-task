import styles from "./App.module.scss";
import { Chat } from "@components/chat/Chat";

export const App = () => {
  return (
    <div className={styles.bg}>
      <Chat className={styles.appChat} />
    </div>
  );
};
