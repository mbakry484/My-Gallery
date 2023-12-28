import { Link } from "react-router-dom";
import pic1 from './pics/sunsets/IMG_20221224_170141.jpg';
import pic2 from './pics/animals/IMG_20221225_120503.jpg';
import pic3 from './pics/sunsets/IMG_20221215_172438.jpg';
import pic4 from './pics/insects/.jpg';
import pic5 from './pics/animals/IMG_20221225_115613.jpg';
import pic6 from './pics/randoms/IMG_20221225_134946.jpg';

const Images = () => {
  return (
    <div className="imgsContainer">
      <div className="imgs">
        <Link to="/sunsets">
          <img src={pic1} alt="sunset" />
        </Link>
        <Link to="/animals">
          <img src={pic2} alt="fish" />
        </Link>
        <Link to="/sunsets">
          <img src={pic3} alt="sunset" />
        </Link>
        <Link to="/insects">
          <img src={pic4} alt="bee" />
        </Link>
        <Link to="/animals">
          <img src={pic5} alt="turtle" />
        </Link>
        <Link to="/randoms">
          <img src={pic6} alt="boats" />
        </Link>
      </div>
    </div>
  );
};

export default Images;
