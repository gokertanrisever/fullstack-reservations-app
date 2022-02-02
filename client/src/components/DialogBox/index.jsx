import React from "react";
import styles from "./index.module.css";

const DialogBox = ({ children, title, onClose }) => {
  return (
    <div className={styles.dialogBox}>
      <div className={styles.dialogBoxHeader}>
        <h1>{title}</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DialogBox;