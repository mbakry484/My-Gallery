const Delete = () => {

    const DeletePhoto=()=>
    {
        
        console.log("bye")
    }
  return (

    <button className="delBtn" onClick={DeletePhoto} color={DeletePhoto? }>
    <i className="fa-solid fa-trash-alt"></i>
  </button>

    )
}

export default Delete