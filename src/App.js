import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Alert from './components/Alert'
import App2 from './App2';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home/>,
    }, {
      path: "/details",
      element: < App2/>,
    }
    
  ]);
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App