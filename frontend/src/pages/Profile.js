import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import authStore from '../store/authStore';
import './profile.css'

const Profile = () => {
  const authstore = authStore();
  const [registeredEvents, setRegisteredEvents] = useState(null);

  useEffect(() => {
    authstore.fetchRegisteredEvents().then((userInfo) => {
      setRegisteredEvents(userInfo);
    });
  }, []);
  
  const handleUnsubscribe = (event) => {
    console.log("event clicked is", event);
    console.log("logged in user info", authstore.loggedInUserInfo);
  }
  return (

    <>

      {authstore && authstore.loggedInUserInfo && (

        <div>
          <form>
            <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
              {/* <div class="rounded-t-lg h-32 overflow-hidden">
                <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
              </div>
              <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
              </div>
              <div class="text-center mt-2">
                <h2 class="font-semibold">
                  <input
                    type="text"
                    className="form-control text-center outline-none cursor-pointer"
                    id="firstName"
                    value={editedFirstName}
                    onChange={(e) => setEditedFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control text-center outline-none cursor-pointer"
                    id="lastName"
                    value={editedLastName}
                    onChange={(e) => setEditedLastName(e.target.value)}
                  />
                </h2>
              </div> */}
            </div>

          </form>
          <div class="profile-container">
    <h2>Update User Information</h2>
    <form id="updateForm">
        <label className='profile-label' for="firstName">First Name:</label>
        <input className='profile-input' type="text" id="firstName" name="firstName" required />

        <label  className='profile-label'for="lastName">Last Name:</label>
        <input className='profile-input' type="text" id="lastName" name="lastName" required/>

        <label className='profile-label' for="address">Address:</label>
        <input className='profile-input' type="text" id="address" name="address"/>

        <label className='profile-label' for="contactNumber">Contact Number:</label>
        <input className='profile-input' type="tel" id="contactNumber" name="contactNumber"/>

        <label className='profile-label' for="city">City:</label>
        <input className='profile-input' type="text" id="city" name="city"/>

        <label className='profile-label' for="province">Province:</label>
        <input className='profile-input' type="text" id="province" name="province"/>

        <label  className='profile-label' for="zipCode">Zip Code:</label>
        <input className='profile-input' type="text" id="zipCode" name="zipCode"/>

        <div class="p-4 border-t mx-8 mt-2">
                <button className=" profile-button w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                  onClick={() => authstore.userUpdate()}>Update Info</button>
              </div>
    </form>
</div>
        </div>
      )}

      {
        registeredEvents && (
          <>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Events Registered Details
                <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of All the Events Registered by this user at one place and the admin has the Authority to Approve or Reject any Event .</p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Event Name
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Event Description
                  </th>

                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>

                </tr>
              </thead>

              {registeredEvents.map((event, index) => (
                <tbody>
                  <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-950 whitespace-nowrap dark:text-white">
                      {event.eventName}
                    </th>

                    <td class="px-6 py-4" className="text-black">
                      {event.eventDescription}
                    </td>
                    <td>
                      <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleUnsubscribe(event)}>
                        Unsubscribe
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}

            </table>

          </>
        )
      }
    </>
  );
};

export default Profile;
