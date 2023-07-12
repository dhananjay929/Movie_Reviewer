import React from 'react'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Alert from './components/Alert'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Alert/> */}
    <Button />
    </>
  )
}

export default App