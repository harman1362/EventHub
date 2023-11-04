import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminEvents.css'

function AdminEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:2300/events');
                console.log("events information", response.data.events);
                setEvents(response.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const eventApproved = (eventId) => {

        console.log("event id is :", eventId);
        const apiUrl = `http://localhost:2300/events/${eventId}`;     

    // Create an object with the data you want to send in the request body
    const requestData = {
      approvalStatus: 'approved',
    };

    // Send the PUT request using Axios
    axios.put(apiUrl, requestData)
      .then(response => {
        console.log('PUT request successful', response.data);
        // Handle the response data as needed
      })
      .catch(error => {
        console.error('Error sending PUT request', error);
        // Handle any errors
      });
    }

    const eventRejected = () => {
        
    }

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
                                <button onClick={() => eventApproved(event._id)}>Approve</button>
                                <button onClick={() => eventApproved(event._id)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminEvents;
