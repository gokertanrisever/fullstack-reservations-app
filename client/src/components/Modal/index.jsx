import React from "react";
import styles from "./index.module.css";

const Modal = ({ handleClose, show, children }) => {
  const state = show ? "show" : "hide";

  return (
    <div className={`${styles.modal} ${styles[state]}`}>
      <section className={styles.main}>
        {children}
      </section>
    </div>
  );
};

export default Modal;