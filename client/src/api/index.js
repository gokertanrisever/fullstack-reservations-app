const API_ENDPOINT = `http://localhost:3050/api/`;

export const getReservations = async () => {
  const response = await fetch(`${API_ENDPOINT}`);
  const data = await response.json();
  return data;
}

export const deleteReservation = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: 'DELETE',
  });
  return response.status;
}

export const addReservation = async (reservation) => {
  const response = await fetch(`${API_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
  return response.status;
}