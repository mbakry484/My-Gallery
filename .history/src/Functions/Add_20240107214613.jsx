
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  return (
    <>
      

<button className="addBtn">
<i className="fa-solid fa-plus"> <p></p></i>
<input onChange={handleFileSelected} type="file" />
 </button>
 </> 
  )

}

export default Add