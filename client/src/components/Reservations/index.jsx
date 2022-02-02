import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { getReservations } from "../../api";
import ReservationItem from "../ReservationItem";
import Footer from "../Footer";
import Button from "../Button";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";


const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [color, setColor] = useState("#000000");

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
      <div className={styles.title}>
        <h1>Reservations</h1>
      </div>
      {!isLoading && (
        <div>
          <div>
            {reservations.length > 0 && reservations.map(reservation => (
              <ReservationItem 
                key={reservation.id} 
                reservation={reservation} 
                setReservations={setReservations}
              />
              ))}
            {reservations.length === 0 && !isLoading && <div className={styles.empty}>There are no reservations</div>}
          </div>
          <Footer>
            <Link to="/create"> 
              <Button className="create" >Create Reservation</Button>
            </Link>
          </Footer>

        </div>
      )}
      {isLoading && (
        <div className={styles.spinner}>
          <FadeLoader color={color} loading={isLoading} size={150} />
        </div>
      )}
    </div>
  );
}

export default Reservations;