import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { getReservations } from "../../api";
import ReservationItem from "../ReservationItem";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);

  // Fetch data from server
  useEffect(() => {
    async function fetchData() {
      const response = await getReservations();
      setReservations(response);
    }
    fetchData()
  }, []);

  return (
    <div className={styles.reservations}>
      <div className={styles.title}>Reservations</div>
      {/* <h1>Reservations</h1> */}
      {reservations.length > 0 && reservations.map(reservation => (
        <ReservationItem 
          key={reservation.id} 
          reservation={reservation} 
          setReservations={setReservations}
        />))
      }
      {reservations.length === 0 && <div className={styles.empty}>There are no reservations</div>}
    </div>
  );
}

export default Reservations;