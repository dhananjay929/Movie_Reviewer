import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import Alert from'./Alert';

const Home = () => {
  const navigate= useNavigate();
  // function empty(x) {
  //   if(x==''){
  //   <Alert/>
  //  }
   
  
  const [title,setTitle] = useState("");

  const [showAlert,setShowAlert] = useState(false);

  return (
    <>
      <Navbar title={"Movies App"} />
      <div>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="inp"
          type="text"
          placeholder="Enter Movie Name"
          width="100%"
        ></input>
        <hr />
        <div className="btn">
          <button
            onClick={() => {
              if (title.length === 0) {
                setShowAlert(true);
                // setTimeout(()=>{
                //   setShowAlert(false);
                // },1000)
              } else {
                navigate("/details",{
                  state: {
                    title: title,
                  },
      
                });
              }
            }}
          >
            Get Movie Details
          </button>
        </div>
        {showAlert === true ? <Alert setShowAlert={setShowAlert} /> : <></>}
      </div>
    </>
  );
  }

export default Home