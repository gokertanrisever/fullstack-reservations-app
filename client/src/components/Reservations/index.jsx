import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { getReservations } from "../../api";
import ReservationItem from "../ReservationItem";
import Footer from "../Footer";
import Button from "../Button";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";
import Modal from "../Modal";


const Reservations = ({ setTitle }) => {
  const [reservations, setReservations] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  setTitle("Reservations");

  // Fetch data from server
  useEffect(() => {
    async function fetchData() {
      const response = await getReservations();
      setReservations(response);
      setIsLoading(false);
    }
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className={styles.reservations}>
      <div className={styles.container}>
        <div className={styles.list}>
          {reservations.length > 0 && reservations.map(reservation => (
            <ReservationItem 
              key={reservation.id} 
              reservation={reservation} 
              setReservations={setReservations}
            />
            ))}
          {reservations.length === 0 && !isLoading && <div className={styles.empty}>There are no reservations</div>}
        </div>
      </div>
      <Footer>
        <Link to="/create"> 
          <Button className="create" >Create Reservation</Button>
        </Link>
      </Footer>
      <Modal show={isLoading}>
        <FadeLoader color="#000000" loading={true} size={150} />
      </Modal>
    </div>
  );
}

export default Reservations;