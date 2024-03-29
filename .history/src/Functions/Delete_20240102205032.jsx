const Delete = () => {

    const DeletePhoto=()=>
    {
        
        console.log("bye")
    }
  return (

    <button className="delBtn"  color={DeletePhoto? 'Red':''}>
    <i className="fa-solid fa-trash-alt"></i>
  </button>

    )
}

export default Delete