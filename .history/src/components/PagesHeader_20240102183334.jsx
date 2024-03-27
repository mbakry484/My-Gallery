import { Link } from "react-router-dom";

const PagesHeader = () => {
  return (
    <div className='myGal'>
      <Link to="/home">
        <h1 style={{ color: 'white' }}>My Gallery</h1>
      </Link>
      <button className="addBtn">
      <i className="fa-solid fa-plus"></i>
       </button>
      <button className="delBtn">
        <i className="fa-solid fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default PagesHeader;
