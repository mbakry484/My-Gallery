
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  const uploadImg=()=>
  {

  }
  return (
    <>
      

<button className="addBtn">
<i className="fa-solid fa-plus">  </i>
 </button>
 </> 
  )

}

export default Add