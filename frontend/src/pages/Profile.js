import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import authStore from '../store/authStore';

const Profile = () => {

    const [registeredEvents, setRegisteredEvents] = useState(null);
    const authstore = authStore();

    useEffect(() => {
        // Assuming EventStore returns a Promise when fetching the event by ID
        // store.fetchEventById(eventId).then((event) => {
        //   setCurrentEvent(event);
        // });

        authstore.fetchRegisteredEvents().then((eventsRegistered) => {
            setRegisteredEvents(registeredEvents);
        });
      }, []);
  

  // Fetch event details using eventId and do something with them
  // For simplicity, just displaying the eventId here
  return (

    <>
    {registeredEvents && (
      <>
        <div>
          <h2>Event Detail</h2>
          <p>Event name: {registeredEvents[0].eventName}</p>
          <p>Event detail: {registeredEvents[0].eventDescription}</p>
          
        </div>
      </>
    )}
        </>
  );
};

export default Profile;
