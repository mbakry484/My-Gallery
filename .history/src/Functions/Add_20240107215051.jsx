
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  const uploadImg=()=>
  {
      <input onChange={handleFileSelected} type="file" />

  }
  return (
    <>
      

<button className="addBtn" onClick={uploadImg()}>
<i className="fa-solid fa-plus">  </i>
 </button>
 </> 
  )

}

export default Add