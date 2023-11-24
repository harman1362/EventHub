import axios from 'axios';
import { create } from 'zustand';

const authStore = create((set) => ({
    // states
    loginForm: {
        email: '',
        password: ''
    },
    signupForm: {
        email: '',
        password: '',
        userType: 'user',
    },
    loggedIn: null,
    userType: null,
    userId: null,
    // functions
    updateLoginForm: (e) => {
        // get value and name from event(onChange)
        const { name, value } = e.target;
        // set loginForm values in the state
        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                }
            }
        })
    },
    login: async () => {
        try {
          const { loginForm } = authStore.getState();
          
          if (!loginForm.email || !loginForm.password) {
            alert('Please provide both email and password');
            return;
          }
          
          const response = await axios.post('http://localhost:2300/login', loginForm);
      
          if (response.status === 200) {
            set((state) => ({
              ...state,
              loginForm: {
                email: '',
                password: '',
              },
              loggedIn: true,
              userType: response.data.userType,
              userId: response.data._id
            }));
          } else {
            alert('Wrong Email or Password');
          }
        } catch (error) {
          console.log(error);
          alert('Wrong Email or Password');
        }
      },
      
    // check if session have authorization
    checkAuth: async () => {
        try {
            await axios.get('http://localhost:2300/check-auth');
            // now set the loggedIn state to true
            set({ loggedIn: true });
        } catch (error) {
            set({ loggedIn: false });
        }
    },
    // check if session have authorization
    checkAdminAuth: async () => {
        try {
            await axios.get('http://localhost:2300/check-admin-auth');
            set({ loggedIn: true,
                userType: 'admin'
             });

        } catch (error) {
            set({ loggedIn: false, userType: '' });
        }
    },
    logout: async () => {
        try {
            await axios.get('http://localhost:2300/logout');
            // now set the loggedIn state to false
            set({ loggedIn: false ,
                loginForm: {
                    email: '',
                    password: '',
                    
                },
                userType: null,
                userId: null,
            });
        } catch (error) {
        }
    },
    updateSignupForm: (e) => {
        // get value and name from event(onChange)
        const { name, value } = e.target;
        // set loginForm values in the state
        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                }
            }
        })
    },
    signup: async () => {
        // get email and password from state 
        const { signupForm } = authStore.getState();

        try {
            const response  = await axios.post('http://localhost:2300/signup', signupForm);
            if (response.status === 200) {
            // clear the state
            set({
                signupForm: {
                    email: '',
                    password: '',
                    userType: '',
                }
            });
            alert("Register Successfull!!");
            return 1;
        }else {
            alert("Email already exist!!");
            return 0;
        }
        } catch (error) {
            return 0;
        }
    },
    userEventRegister: async (eventId) => {
        const {userId} = authStore.getState();
        try {
            const response  = await axios.put(`http://localhost:2300/user-event-register/${userId}`, {eventId});
            if (response.status === 200) {
           
            alert("Event Register Successfull!!");
            return 1;
        }else {
            alert("Try again!!");
            return 0;
        }
        } catch (error) {
            alert("Try again!!");
            return 0;
        }
    },
    userUpdate: async () => {
        const {userId} = authStore.getState();
        // add new user data for update
        try {
            const response  = await axios.put(`http://localhost:2300/user-update/${userId}`);
            if (response.status === 200) {
           
            alert("User updated Successfull!!");
            return 1;
        }else {
            alert("Try again!!");
            return 0;
        }
        } catch (error) {
            alert("Try again!!");
            return 0;
        }
    },
    fetchRegisteredEvents: async () => {
        const {userId} = authStore.getState();
        // add new user data for update
        try {
            const response  = await axios.put(`http://localhost:2300/user-registered-events/${userId}`);
            if (response.status === 200) {
           
            alert("User updated Successfull!!");
            return response.data.events;
        }else {
            alert("Try again!!");
            return 0;
        }
        } catch (error) {
            alert("Try again!!");
            return 0;
        }
    },

}))

export default authStore;