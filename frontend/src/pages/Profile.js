import React, { useEffect, useState } from 'react';
import './profile.css'
import authStore from '../store/authStore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const store = authStore();

  useEffect(() => {
    // Check if loggedInUserInfo is not null before updating userUpdateForm
    if (store.loggedInUserInfo !== null) {
      // Loop through the keys of loggedInUserInfo and update userUpdateForm
      Object.keys(store.loggedInUserInfo).forEach((key) => {
        store.updateUserUpdateForm({
          target: { name: key, value: store.loggedInUserInfo[key] || '' },
        });
      });
    }
  }, [store.loggedInUserInfo, store.updateUserUpdateForm]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      //create Event
      const response = await store.userUpdate();
      if (response == 200) {
        // show toast before navigating to new page
        toast.success("User info updated Successfull!!", {
        });
      } else {
        toast.error("User info updatation failed!! Try Again", {
        });
      }
    } catch (error) {
      toast.error("Unsuccessfull!! Try Again", {
      });
    }
  }
  return (

    <>

      {store && store.loggedInUserInfo && (
        <div>
          <div class="profile-container">
            <h2>Update User Information</h2>
            <form id="updateForm" onSubmit={(e) => updateUser(e)}>
              <label className='profile-label' htmlFor="firstName">First Name:</label>
              <input
                className='profile-input'
                type="text"
                id="firstName"
                name="firstName"
                required
                value={store.userUpdateForm.firstName}
                onChange={store.updateUserUpdateForm}
              />

              <label className='profile-label' htmlFor="lastName">Last Name:</label>
              <input
                className='profile-input'
                type="text"
                id="lastName"
                name="lastName"
                required
                value={store.userUpdateForm.lastName}
                onChange={store.updateUserUpdateForm}
              />

              <label className='profile-label' htmlFor="address">Address:</label>
              <input
                className='profile-input'
                type="text"
                id="address"
                name="address"
                value={store.userUpdateForm.address}
                onChange={store.updateUserUpdateForm}
              />

              <label className='profile-label' htmlFor="contactNumber">Contact Number:</label>
              <input
                className='profile-input'
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={store.userUpdateForm.contactNumber}
                onChange={store.updateUserUpdateForm}
              />

              <label className='profile-label' htmlFor="city">City:</label>
              <input
                className='profile-input'
                type="text"
                id="city"
                name="city"
                value={store.userUpdateForm.city}
                onChange={store.updateUserUpdateForm}
              />

              <label className='profile-label' htmlFor="province">Province:</label>
              <input
                className='profile-input'
                type="text"
                id="province"
                name="province"
                value={store.userUpdateForm.province}
                onChange={store.updateUserUpdateForm}
              />

              <label className='profile-label' htmlFor="zipCode">Zip Code:</label>
              <input
                className='profile-input'
                type="text"
                id="zipCode"
                name="zipCode"
                value={store.userUpdateForm.zipCode}
                onChange={store.updateUserUpdateForm}
              />

              <div class="p-4 border-t mx-8 mt-2">
                <button className=" profile-button w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2"
                  type='submit'>Update Info</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default Profile;
