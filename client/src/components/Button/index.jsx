import React from "react";
import styles from './index.module.css';

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[className]}`}>
      {children}
    </button>
  );
}

export default Button;