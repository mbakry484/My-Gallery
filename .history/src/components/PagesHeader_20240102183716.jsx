import { Link } from "react-router-dom";
import Delete from "../Functions/Delete";
const PagesHeader = () => {
  return (
    <div className='myGal'>
      <Link to="/home">
        <h1 style={{ color: 'white' }}>My Gallery</h1>
      </Link>

      <button className="addBtn">
      <i className="fa-solid fa-plus"></i>
       </button>

<Delete />
    </div>
  );
}

export default PagesHeader;
