
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  return (
    <>
      

<input onChange={handleFileSelected} type="file" ></input>
<button className="addBtn">
<i className="fa-solid fa-plus"> </i>
 </button>
 </> 
  )

}

export default Add