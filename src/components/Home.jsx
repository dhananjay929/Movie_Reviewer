import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Alert from'./Alert';

const Home = () => {
  const navigate= useNavigate();
  // function empty(x) {
  //   if(x==''){
  //   <Alert/>
  //  }
   
  
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