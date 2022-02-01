import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { getReservations } from "../../api";
import ReservationItem from "../ReservationItem";
import Footer from "../Footer";
import Button from "../Button";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

const override = css`
  // display: block;
  margin: auto;
`;

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
      <div>
        {reservations.length > 0 && reservations.map(reservation => (
          <ReservationItem 
            key={reservation.id} 
            reservation={reservation} 
            setReservations={setReservations}
          />
          ))}
        {reservations.length === 0 && !isLoading && <div className={styles.empty}>There are no reservations</div>}
        <FadeLoader color={color} loading={isLoading} size={150} css={override} />
      </div>
      <Footer>
        <Button className="create" to="/reservations/new">Create Reservation</Button>
      </Footer>
    </div>
  );
}

export default Reservations;