import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminEvents.css'

function AdminEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:2300/events');
                setEvents(response.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Registered Events</h2>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Location</th>
                        <th>Event Description</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event, index) => (
                        <tr key={index}>
                            <td>{event.eventName}</td>
                            <td>{event.location}</td>
                            <td>{event.eventDescription}</td>
                            <td>{event.category}</td>
                            <td>{event.date} </td>
                            <td>
                                <select
                                    // value={event.status}
                                    value="pending"
                                // onChange={(e) => {
                                //     handleStatusChange(event.id, e.target.value);
                                // }}
                                >
                                    <option value="Approve">Approve</option>
                                    <option value="Reject">Reject</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminEvents;
