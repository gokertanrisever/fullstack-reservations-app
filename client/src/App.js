import './App.css';
import Reservations from './components/Reservations';
import ReservationForm from './/components/ReservationForm';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Reservations />} />
        <Route path="/create" element={<ReservationForm />} />
      </Routes>
    </div>
  );
}

export default App;
