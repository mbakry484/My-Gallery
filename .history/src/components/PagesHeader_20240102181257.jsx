import { Link } from "react-router-dom"
const Header = () => {
  return (
      <div className='myGal'>
        <Link to="/home">
           <h1 style={{color:'white'}}>My Gallery</h1>
           </Link>
              <button><i className="fa fa-trash" aria-hidden="true"></i> 
    </div>

  )
}

export default Header