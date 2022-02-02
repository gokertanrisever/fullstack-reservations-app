import './App.css';
import Reservations from './components/Reservations';
import ReservationForm from './/components/ReservationForm';
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <Routes>
        <Route path="/" element={<Reservations setTitle={setTitle} />} />
        <Route path="/create" element={<ReservationForm setTitle={setTitle} />} />
      </Routes>
    </div>
  );
}

export default App;
