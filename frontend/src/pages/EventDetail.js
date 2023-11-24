import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventStore from '../store/eventStore';
import authStore from '../store/authStore';

const EventDetail = () => {
  const { eventId } = useParams();
  const [currentEvent, setCurrentEvent] = useState(null);
  const store = EventStore();
  const authstore = authStore();

  useEffect(() => {
    // Assuming EventStore returns a Promise when fetching the event by ID
    store.fetchEventById(eventId).then((event) => {
      setCurrentEvent(event);
    });
  }, [eventId]);
  

  // Fetch event details using eventId and do something with them
  // For simplicity, just displaying the eventId here
  return (
    <>
    {currentEvent && (
      <>
        <div>
          <h2>Event Detail</h2>
          <p>Event name: {currentEvent.eventName}</p>
          <p>Event detail: {currentEvent.eventDescription}</p>
          <p>Event id: {currentEvent._id}</p>
          {
            authstore.loggedIn && (
            <button className="custom-button" onClick={() => authstore.userEventRegister(currentEvent._id)}>Register</button>)
          }
          
        </div>
      </>
    )}
        </>
  );
};

export default EventDetail;
