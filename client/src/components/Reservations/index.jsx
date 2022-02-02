import React, { useState, useEffect } from "react";
import styles from './index.module.css';
import { getReservations, deleteReservation } from "../../api";
import ReservationItem from "../ReservationItem";
import Footer from "../Footer";
import Button from "../Button";
import FadeLoader from "react-spinners/FadeLoader";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import DialogBox from "../DialogBox";

const Reservations = ({ setTitle }) => {
  const [reservations, setReservations] = useState([]);
  let [isLoading, setIsLoading] = useState(false);
  let [dialogOpen, setDialogOpen] = useState(false);
  let [selected, setSelected] = useState({});
  setTitle("Reservations");

  const handleDelete = async (id) => {
    setDialogOpen(false);
    setIsLoading(true);
    let status = await deleteReservation(id);
    if (status !== 200) {
      alert("Failed to delete reservation");
      setIsLoading(false);
      return;
    }
    setReservations(reservations =>  reservations.filter(res => res.id !== id));
    setIsLoading(false);
  }

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
              setDialogOpen={setDialogOpen}
              setSelected={setSelected}
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
      <Modal show={dialogOpen}>
        <DialogBox title="Delete Reservation" onClose={() => setDialogOpen(false)}>
          <div className={styles.deleteBox}>
            <p>You are about to delete the reservation '{selected.name}'. If you proceed with this action the item will be permanently deleted.</p>
            <div className={styles.buttons}>
              <Button className="delete" onClick={() => handleDelete(selected.id)}>Delete</Button>
              <Button className="cancel" onClick={() => setDialogOpen(false)}>Cancel</Button>
            </div>
          </div>
        </DialogBox>
      </Modal>
    </div>
  );
}

export default Reservations;