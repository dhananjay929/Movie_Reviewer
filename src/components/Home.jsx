import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate= useNavigate();
  return (
    <div >
    <input className='inp' type='text' placeholder='Enter Movie Name' width='100%' ></input>
    <hr/>
    <div  className='btn'>
    <button onClick={()=>{navigate("/details")}}>Get Movie Details</button>
    </div>
    </div>
  )
}

export default Home