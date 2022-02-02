import React from "react";
import styles from "./index.module.css";

const Footer = ({ children }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

export default Footer;