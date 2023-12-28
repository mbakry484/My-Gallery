import { Link } from "react-router-dom"
const Header = () => {
  return (
      <div className='myGal'>
        <Link to="/home">
           <h1 style={{color:'blue'}}>My Gallery</h1>
           </Link>
 
    </div>

  )
}

export default Header