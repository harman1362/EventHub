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
import AdminEvents from './pages/AdminEvents';
import Logout from './pages/Logout';
import RequireAuth from './pages/RequireAuth';
import RequireAdminAuth from './pages/requireAdminAuth';
import EventDetail from './pages/EventDetail';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='events' element={ <Events />}></Route>
        <Route path='events/eventRegister' element={ <RequireAuth>  <EventRegister />  </RequireAuth>}></Route>
        <Route path='register' element={<Register />}></Route>
        <Route path='admin' element={ <RequireAdminAuth > <AdminEvents /> </RequireAdminAuth>}></Route>
        <Route path='addEvent' element={<RequireAuth>  <EventRegister /> </RequireAuth>}></Route>
        <Route path='logout' element={<Logout />}></Route>
      <Route path="event-detail/:eventId" element={<EventDetail />} />
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