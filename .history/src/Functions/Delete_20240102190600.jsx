import Randoms from "../components/pages/Randoms"
const Delete = () => {

    const DeletePhoto=()=>
    {
        Randoms.images
        console.log("bye")
    }
  return (

    <button className="delBtn" onClick={DeletePhoto}>
    <i className="fa-solid fa-trash-alt"></i>
  </button>

    )
}

export default Delete