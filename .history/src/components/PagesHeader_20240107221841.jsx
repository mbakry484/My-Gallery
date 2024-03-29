import { Link } from "react-router-dom";
const PagesHeader = () => {
  return (
    <div className='myGal'>
      <Link to="/home">
        <h1 style={{ color: 'white' }}>My Gallery</h1>
      </Link>

        <div className="addDelBtns">
        {/* <Add /> */}
      </div>
    </div>
  );
}

export default PagesHeader;
