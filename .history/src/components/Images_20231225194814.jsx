import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pic1 from './pics/IMG_20221224_170141.jpg';
import pic2 from './pics/IMG_20221225_120503.jpg';
import pic3 from './pics/IMG_20221215_172438.jpg';
import pic4 from './pics/IMG_202301301_143946.jpg';
import pic5 from './pics/IMG_20221225_115613.jpg';
import pic6 from './pics/IMG_20221225_134946.jpg';

const Images = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This effect will run when the component mounts
    // You can add additional logic here if needed
  }, []); // Empty dependency array means it runs once on mount

  const handleImageClick = () => {
    // Now you can call navigate directly in the event handler
    navigate("/sunsets");
  };

  return (
    <div className="imgsContainer">
      <div className="imgs">
        <img onClick={handleImageClick} src={pic1} alt="sunset" />
        <img onClick={handleImageClick} src={pic2} alt="sunset" />
        <img onClick={handleImageClick} src={pic3} alt="sunset" />
        <img onClick={handleImageClick} src={pic4} alt="sunset" />
        <img onClick={handleImageClick} src={pic5} alt="sunset" />
        <img onClick={handleImageClick} src={pic6} alt="sunset" />
      </div>
    </div>
  );
};

export default Images;
