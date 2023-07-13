import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ title }) => {

  const navigate = useNavigate();
  const arrow = " ⇦";
  return (
    <div>
      <nav className="navbar ">
        <div style={{display: "flex",flexDirection: "row"}} >
          {title=="Details"? 
          <div id= 'arr' onClick={()=>{navigate("/");}} >{   arrow}</div> 
          : <></>
          }
          <div className="container-fluid">{title}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
