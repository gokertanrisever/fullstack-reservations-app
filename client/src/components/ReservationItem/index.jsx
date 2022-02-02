import React from "react";
import styles from "./index.module.css";
import { RESERVATION_STATUS } from "../../constants";
import Button from "../Button";
import { deleteReservation } from "../../api";

const ReservationItem = ({ reservation, setReservations, setDialogOpen, setSelected }) => {
  let statusStyle = `status${reservation.res_status}`;

  const handleDelete = async (res) => {
    setDialogOpen(true);
    setSelected(res);
  }

  return (
    <div className={styles.item}>
      <div className={styles.name}>{reservation.name}</div>
      <div className={styles.action}>
        <div className={styles.actionItem}>
          <span className={styles[statusStyle]} >{RESERVATION_STATUS[reservation.res_status]}</span>
        </div>
        <div className={styles.actionItem}>
          <Button
            className="delete"
            onClick={() => handleDelete(reservation)}
            >Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;