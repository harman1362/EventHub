import EventCard from './EventCard';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EventCard.css'

const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:2300/events');
                const allEvents = response.data.events;
                const approvedEvents = allEvents.filter( (event)=> event.approvalStatus === "approved" );
                setEvents(approvedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">

                    {events.map((event, index) => ( 
                        <EventCard event={event}/>
                    ))}

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Events;