import { Link } from "react-router-dom";
import pic1 from './pics/IMG_20221224_170141.jpg';
import pic2 from './pics/IMG_20221225_120503.jpg';
import pic3 from './pics/IMG_20221215_172438.jpg';
import pic4 from './pics/IMG_202301301_143946.jpg';
import pic5 from './pics/IMG_20221225_115613.jpg';
import pic6 from './pics/IMG_20221225_134946.jpg';

const Images = () => {
  return (
    <div className="imgsContainer">
      <div className="imgs">
        <Link to="/sunsets">
          <img src={pic1} alt="sunset" />
        </Link>
        <Link to="/sunsets">
          <img src={pic2} alt="sunset" />
        </Link>
        <Link to="/sunsets">
          <img src={pic3} alt="sunset" />
        </Link>
        <Link to="/sunsets">
          <img src={pic4} alt="sunset" />
        </Link>
        <Link to="/sunsets">
          <img src={pic5} alt="sunset" />
        </Link>
        <Link to="/sunsets">
          <img src={pic6} alt="sunset" />
        </Link>
      </div>
    </div>
  );
};

export default Images;
