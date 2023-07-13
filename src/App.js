import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import './App.css'
import App2 from './App2';
import Alert from './components/Alert';

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