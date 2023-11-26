import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import authStore from '../store/authStore';

const Profile = () => {
    const authstore = authStore();
    const [registeredEvents, setRegisteredEvents] = useState(null);
    const [editedFirstName, setEditedFirstName] = useState(authstore.loggedInUserInfo.firstName);
  const [editedLastName, setEditedLastName] = useState(authstore.loggedInUserInfo.lastName);
    

    useEffect(() => {

        authstore.fetchRegisteredEvents().then((userInfo) => {
            setRegisteredEvents(userInfo);
        });

        
      }, []);
  

      const handleUnsubscribe = (event) => {
        console.log("event clicked is" , event);
        console.log("logged in user info", authstore.loggedInUserInfo);
      }
  return (

    <>
    {authstore && authstore.loggedInUserInfo && (
        <div>
          <h2>User Information</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={editedFirstName}
                onChange={(e) => setEditedFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={editedLastName}
                onChange={(e) => setEditedLastName(e.target.value)}
              />
            </div>
            <button type="button" className="btn btn-primary" onClick={() => authstore.userUpdate(editedFirstName, editedLastName )}>
              Update Information
            </button>
          </form>
        </div>
      )}

    {registeredEvents && (
      <>
        <div>
          <h2>Events Registered Details</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {registeredEvents.map((event, index) => (
                <tr key={index}>
                  <td>{event.eventName}</td>
                  <td>{event.eventDescription}</td>
                  <td>
                    <button className="btn btn-danger"  onClick={() => handleUnsubscribe(event)}>
                      Unsubscribe
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )}
  </>
  );
};

export default Profile;
