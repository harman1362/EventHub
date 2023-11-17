import React from 'react';
import './EventCard.css';
import { useNavigate } from 'react-router-dom';

const EventCard = (props) => {
    const navigate = useNavigate();



    const navigateToRegister = () => {
        let eventId = props.event._id;
        navigate(`/event-detail/${eventId}`);
    }

    return (
        <>

            <div class="p-2">
                <div class="h-full bg-gray-100 bg-opacity-75 px-8  pb-6 rounded-lg overflow-hidden text-center relative">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.event.category}</h2>
                    <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{props.event.eventName}</h1>
                    <p class="leading-relaxed mb-3">{props.event.eventDescription}</p>
                    <p class="leading-relaxed mb-3">{props.event.location}</p>
                    <p class="leading-relaxed mb-3">{props.event.date}</p>
                    <button className="custom-button" onClick={navigateToRegister}>View Event </button>

                </div>
            </div>
        </>
    )
}

export default EventCard;