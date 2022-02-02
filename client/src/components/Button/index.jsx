import React from "react";
import styles from './index.module.css';

const Button = ({ children, onClick, className, form }) => {
  return (
    <button form={form} onClick={onClick} className={`${styles.button} ${styles[className]}`}>
      {children}
    </button>
  );
}

export default Button;