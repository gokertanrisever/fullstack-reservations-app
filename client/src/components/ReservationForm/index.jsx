import React, { useState } from "react";
import styles from "./index.module.css";
import { RESERVATION_STATUS } from "../../constants";
import Footer from "../Footer";
import Button from "../Button";
import { Link } from "react-router-dom";
import { addReservation } from "../../api";
import Modal from "../Modal";
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigate } from "react-router-dom";

const ReservationForm = ({ children }) => {
  const [name, setName] = useState("");
  const [store, setStore] = useState("");
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await addReservation({ name, store, status });
    if (response !== 200) {
      alert("Failed to add reservation");
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <Modal show={isLoading}>
        <FadeLoader color="#000000" loading={true} size={150} />
      </Modal>
      <div className={styles.title}>
        <h1>Create Reservation</h1>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>Reservation Name
          <input 
            required
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.label}> Store
          <select value={store} onChange={event => setStore(event.target.value)} required>
            <option value="" >-</option>
            <option value="A">Stora A</option>
            <option value="B">Store B</option>
            <option value="C">Store C</option>
          </select>
        </label>
        <label className={styles.label}> Status
          {Object.keys(RESERVATION_STATUS).map(s => (
            <div className={styles.radio}>
              <input
                key={status}
                id={s}
                type="radio"
                name={RESERVATION_STATUS[s].toLowerCase().replace(/ /g, "_")}
                value={parseInt(s)}
                checked={s == status}
                onChange={e => setStatus(parseInt(e.target.value))}
              />
              <label htmlFor={s}>{RESERVATION_STATUS[s]}</label>
            </div>
          ))}
          
        </label>
        <Footer>
          <Link to="/">
            <Button className="cancel" >
              Cancel
            </Button>
          </Link>
          <Button className="create" type="submit">Create Reservation</Button>
        </Footer>
      </form>
    </div>
  );
}

export default ReservationForm;
