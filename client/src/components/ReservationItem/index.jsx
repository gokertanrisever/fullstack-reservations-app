import React from "react";
import styles from "./index.module.css";
import { RESERVATION_STATUS } from "../../constants";

const ReservationItem = ({ reservation }) => {
  let statusStyle = `status${reservation.status}`;
  return (
    <div className={styles.item}>
      <div className={styles.name}>{reservation.name}</div>
      <div className={styles.action}>
        <div className={styles.actionItem}>
          <span className={styles[statusStyle]} >{RESERVATION_STATUS[reservation.status]}</span>
        </div>
        <div className={styles.actionItem}>Delete</div>

      </div>
    </div>
  );
}

export default ReservationItem;