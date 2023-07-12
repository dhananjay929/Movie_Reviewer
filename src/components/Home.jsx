import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';

const Home = () => {
  const navigate= useNavigate();
  return (
    <>
    <Navbar title={"Movies App"} />
    <div >
    <input className='inp' type='text' placeholder='Enter Movie Name' width='100%' ></input>
    <hr/>
    <div  className='btn'>
    <button onClick={()=>{navigate("/details")}}>Get Movie Details</button>
    </div>
    </div>
    </>
  )
}

export default Home