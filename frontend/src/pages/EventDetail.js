import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventStore from '../store/eventStore';
import authStore from '../store/authStore';
import banner from './homeBanner.jpg'

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
          {/* <div>
            <h2>Event Detail</h2>
            <p>Event name: {currentEvent.eventName}</p>
            <p>Event detail: {currentEvent.eventDescription}</p>
            <p>Event id: {currentEvent._id}</p>
            {
              authstore.loggedIn && (
                <button className="custom-button" onClick={() => authstore.userEventRegister(currentEvent._id)}>Register</button>)
            }

          </div> */}
          <section class="text-gray-600 body-font border p-12">
            <div class="container mx-auto flex md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-800">Register For this Event...
                </h1>
                <h1 className='font-gray-800 text-2xl'>{currentEvent.eventName}</h1>

                <p class="mb-8 leading-relaxed font-black">{currentEvent.eventDescription}</p>
                {
                  authstore.loggedIn && (
                    <button className="custom-button" onClick={() => authstore.userEventRegister(currentEvent._id)}>Register</button>)
                }
              </div>
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src={banner} />
              </div>
            </div>

          </section>
        </>
      )}
    </>
  );
};

export default EventDetail;
