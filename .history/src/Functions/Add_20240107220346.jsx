
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  return (
    <>
      

<button className="addBtn">
<input onChange={handleFileSelected} type="file" tex />
 </button>
 </> 
  )

}

export default Add