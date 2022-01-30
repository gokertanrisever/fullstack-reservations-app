import React from "react";
import styles from "./index.module.css";
import { RESERVATION_STATUS } from "../../constants";
import Button from "../Button";
import { deleteReservation } from "../../api";

const ReservationItem = ({ reservation, setReservations }) => {
  let statusStyle = `status${reservation.status}`;

  const handleDelete = async (id) => {
    let status = await deleteReservation(id);
    if (status !== 200) {
      alert("Failed to delete reservation");
      return;
    }
    setReservations(reservations =>  reservations.filter(res => res.id !== id));
  }

  return (
    <div className={styles.item}>
      <div className={styles.name}>{reservation.name}</div>
      <div className={styles.action}>
        <div className={styles.actionItem}>
          <span className={styles[statusStyle]} >{RESERVATION_STATUS[reservation.status]}</span>
        </div>
        <div className={styles.actionItem}>
          <Button
            className="delete"
            onClick={() => handleDelete(reservation.id)}
            >Delete</Button>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;