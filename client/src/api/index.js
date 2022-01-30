const API_ENDPOINT = 'http://localhost:3000';

export const getReservations = async () => {
  const response = await fetch(`${API_ENDPOINT}/`);
  const data = await response.json();
  return data;
}

export const deleteReservation = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/${id}`, {
    method: 'DELETE',
  });
  return response.status;
}