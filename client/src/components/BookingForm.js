import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [form, setForm] = useState({
    vehicleNumber: '',
    ownerName: '',
    slotNumber: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bookings', form);
      alert('Booking successful!');
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert('Error booking slot');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="vehicleNumber" placeholder="Vehicle Number" onChange={handleChange} required />
      <input name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
      <input name="slotNumber" type="number" placeholder="Slot Number" onChange={handleChange} required />
      <button type="submit">Book Slot</button>
    </form>
  );
}

export default BookingForm;
