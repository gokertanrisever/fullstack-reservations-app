import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { getReservations } from "../../api";
import ReservationItem from "../ReservationItem";
import Footer from "../Footer";
import Button from "../Button";

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
      <div className={styles.title}>
        <h1>Reservations</h1>
      </div>
      <div>
        {reservations.length > 0 && reservations.map(reservation => (
          <ReservationItem 
            key={reservation.id} 
            reservation={reservation} 
            setReservations={setReservations}
          />
          ))}
        {reservations.length === 0 && <div className={styles.empty}>There are no reservations</div>}
      </div>
      <Footer>
        <Button className="create" to="/reservations/new">Create Reservation</Button>
      </Footer>
    </div>
  );
}

export default Reservations;