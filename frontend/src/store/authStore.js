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
            await axios.get('/check-auth');
            // now set the loggedIn state to true
            set({ loggedIn: true });
        } catch (error) {
            set({ loggedIn: false });
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
                userType: '',
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
    }
}))

export default authStore;