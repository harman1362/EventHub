import React from 'react';
import './EventRegister.css'
import EventStore from '../store/eventStore';


function EventRegister() {
  const store = EventStore();
  return (
    <div>
      <h2>Event Registration</h2>
      <div className="event-registration-container">
        <form onSubmit={store.createEvent}>
          <div>
            <label>Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={store.eventFormData.eventName}
              onChange={store.setFormData}
              required
            />
          </div>
          <div>
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={store.eventFormData.location}
              onChange={store.setFormData}
              required
            />
          </div>
          <div>
            <label>Event Description:</label>
            <input
              type="text"
              name="eventDescription"
              value={store.eventFormData.eventDescription}
              onChange={store.setFormData}
              required
            />
          </div>
          <div>
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={store.eventFormData.category}
              onChange={store.setFormData}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={store.eventFormData.date}
              onChange={store.setFormData}
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