import { Link } from "react-router-dom"
const Buttons = () => {
  return (
      
        
    <div className="btns">
      <Link to="/sunsets"> 
        <button className="btn">Sunsets</button>
      </Link>
      <Link to="/animals"></Link>
        <button className="btn">Animals</button>
        <button className="btn">Insects</button>
        <button className="btn">Randoms</button>

      </div> 
      
       

  )
}

export default Buttons