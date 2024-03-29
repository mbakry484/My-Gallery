import { Link } from "react-router-dom";
import Delete from "../Functions/Delete";
import Add from '../Functions/Add'
const PagesHeader = () => {
  return (
    <div className='myGal'>
      <Link to="/home">
        <h1 style={{ color: 'white' }}>My Gallery</h1>
      </Link>

        <div className="addDelBtns"></div>
        <Add />
        <Delete />

    </div>
  );
}

export default PagesHeader;
