import { Link } from "react-router-dom"
const Header = () => {
  return (
      <div className='myGal'>
        <Link to="/home">
           <h1 style={{color:'white'}}>My Gallery</h1>
           </Link>
           <button><i class="fa fa-trash" aria-hidden="true"></i></button>
 
    </div>

  )
}

export default Header