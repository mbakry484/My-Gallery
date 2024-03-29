import { useState } from "react";
import { Link } from "react-router-dom"


const Buttons = () => {
  const[color,setColor]=useState("#55B3F3");

  return (
      
     <div style={{backgroundColor:color}}>
    <div className="btns">
      <Link to="/sunsets" onClic={()=>setColork("#739072")}> 
        <button className="btn">Sunsets</button>
      </Link>
      <Link to="/animals">
        <button className="btn">Animals</button>
        </Link>
        <Link to="/insects">
        <button className="btn">Insects</button>
        </Link>
        <Link to="/randoms">
        <button className="btn">Randoms</button>
        </Link>
        </div>   
      </div> 
      
       

  )
}

export default Buttons