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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
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
