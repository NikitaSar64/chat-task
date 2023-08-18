import { FC } from "react";

import { ChatInputProps } from "./ChatInput.props";

import styles from "./ChatInput.module.scss";

export const ChatInput: FC<ChatInputProps> = ({ onSubmit, inputRef }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Start typing here..."
        className={styles.input}
        ref={inputRef}
      />
      <button type="submit" className={styles.sendBtn} />
    </form>
  );
};
