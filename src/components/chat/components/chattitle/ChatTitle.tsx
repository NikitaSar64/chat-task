import { FC } from "react";

import styles from "./ChatTitle.module.scss";

export const ChatTitle: FC<{ title: string; subTitle?: string }> = ({
  title,
  subTitle,
}) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      {subTitle && <div className={styles.subtitle}>{subTitle}</div>}
    </div>
  );
};
