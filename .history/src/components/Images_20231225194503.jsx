import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

import pic1 from './pics/IMG_20221224_170141.jpg'
import pic2 from './pics/IMG_20221225_120503.jpg'
import pic3 from './pics/IMG_20221215_172438.jpg'
import pic4 from './pics/IMG_202301301_143946.jpg'
import pic5 from './pics/IMG_20221225_115613.jpg'
import pic6 from './pics/IMG_20221225_134946.jpg'
const Images = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    // Use useEffect to ensure the navigation is performed after the initial render
   useEffect(() => {
      navigate("/sunsets");
    }, [navigate]);
  };
  return (
    <div className="imgsContainer">
        <div className="imgs">
        <img onClick={ handleImageClick} src={pic1} alt="sunset" />
        <img onClick={ handleImageClick} src={pic2} alt="sunset" />
        <img onClick={ handleImageClick} src={pic3} alt="sunset" />
        <img onClick={ handleImageClick} src={pic4} alt="sunset" />
        <img onClick={ handleImageClick} src={pic5} alt="sunset" />
        <img onClick={ handleImageClick} src={pic6} alt="sunset" />
        </div>
    </div>
  )
}

export default Images