import React, { useState } from 'react';
import './EventRegister.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function EventRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: '',
    location: '',
    eventDescription: '',
    category: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    console.log(formData);
    const endpoint = 'http://localhost:2300/events';

    axios
      .post(endpoint, formData)
      .then((response) => {
        alert("Event Registered Successful")
        console.log('Request was successful:', response.data);
        navigate('/events')
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return (
    <div>
      <h2>Event Registration</h2>
      <div className="event-registration-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Event Description:</label>
            <input
              type="text"
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default EventRegister;