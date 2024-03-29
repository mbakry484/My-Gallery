import  { useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from './pics/sunsets/IMG_20221224_170141.jpg';
import pic2 from './pics/animals/IMG_20221225_120503.jpg';
import pic3 from './pics/sunsets/IMG_20221215_172438.jpg';
import pic4 from './pics/insects/IMG_202301301_143946.jpg';
import pic5 from './pics/animals/IMG_20221225_115613.jpg';
import pic6 from './pics/randoms/IMG_20221225_134946.jpg';

const Images = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const titleDiv = () => {
    return <div className='hoverDiv'>Your title here</div>;
  };

  return (
    <div className="imgsContainer">
      <div className="imgs">
        <Link to="/sunsets">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && titleDiv()}
            <img src={pic1} alt="sunset" />
          </div>
        </Link>
        <Link to="/animals">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && titleDiv()}
            <img src={pic2} alt="fish" />
          </div>
        </Link>
        <Link to="/sunsets">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && titleDiv()}
            <img src={pic3} alt="sunset" />
          </div>
        </Link>
        <Link to="/insects">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && titleDiv()}
            <img src={pic4} alt="bee" />
          </div>
        </Link>
        <Link to="/animals">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && titleDiv()}
            <img src={pic5} alt="turtle" />
          </div>
        </Link>
        <Link to="/randoms">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered && titleDiv()}
            <img src={pic6} alt="boats" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Images;
