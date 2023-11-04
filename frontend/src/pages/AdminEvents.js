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

        const apiUrl = `http://localhost:2300/events/eventStatus/${eventId}`;

        // Create an object with the data you want to send in the request body
        const requestData = {
            approvalStatus: 'approved',
        };

        // Send the PUT request using Axios
        axios.put(apiUrl, requestData)
            .then(response => {
                console.log('PUT request successful', response.data);
                // Handle the response data as needed
                alert("Event status updated!!!")
            })
            .catch(error => {
                console.error('Error sending PUT request', error);
                // Handle any errors
            });
    }

    const eventRejected = (eventId) => {

        const apiUrl = `http://localhost:2300/events/eventStatus/${eventId}`;

        // Create an object with the data you want to send in the request body
        const requestData = {
            approvalStatus: 'rejected',
        };

        // Send the PUT request using Axios
        axios.put(apiUrl, requestData)
            .then(response => {
                console.log('PUT request successful', response.data);
                // Handle the response data as needed
                alert("Event status updated!!!")
            })
            .catch(error => {
                console.error('Error sending PUT request', error);
                // Handle any errors
            });
    }


    return (

        <div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                        Registered Events
                        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of All the Events at one place and the admin has the Authority to Approve or Reject any Event .</p>
                    </caption>
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Event Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Event Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>

                    {events.map((event, index) => (
                        <tbody>
                            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-950 whitespace-nowrap dark:text-white">
                                    {event.eventName}
                                </th>
                                <td class="px-6 py-4" className="text-black">
                                    {event.location}
                                </td>
                                <td class="px-6 py-4" className="text-black">
                                    {event.eventDescription}
                                </td>
                                <td class="px-6 py-4" className="text-black">
                                    {event.category}
                                </td>
                                <td class="px-6 py-4" className="text-black">
                                    {event.date}
                                </td>
                                <td class="px-6 py-4" className="text-black">
                                    {event.approvalStatus}
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => eventApproved(event._id)}>Approve</button>
                                    <button class="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => eventRejected(event._id)}>Reject</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}

                </table>
            </div>

        </div>
    );
}

export default AdminEvents;
