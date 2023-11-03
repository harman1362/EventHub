import './App.css';
import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import EventRegister from './pages/EventRegister';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='events' element={<Events />}></Route>
        <Route path='events/eventRegister' element={<EventRegister />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Route>
      <Route path='*' element={<NotFound />}></Route>

    </>
  )
  // {
  //   path: "/",
  //   element: <Root />,
  //   loader: rootLoader,
  //   children: [
  //     {
  //       path: "team",
  //       element: <Team />,
  //       loader: teamLoader,
  //     },
  //   ],
  // },
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
library.add(fab, fas, far)