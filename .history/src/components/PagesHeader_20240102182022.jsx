import { Link } from "react-router-dom"
const Header = () => {
  return (
      <div className='myGal'>
        <Link to="/home">
           <h1 style={{color:'white'}}>My Gallery</h1>
           </Link>
              <button><i class="fa-solid fa-trash-can"></i> </button>
    </div>

  )
}

export default Header