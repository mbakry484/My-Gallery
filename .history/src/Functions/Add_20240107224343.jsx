
const Add = (onAdd) => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
    
  }
  
  return (
    <>
      

<button className="addBtn">
  Add
<input onChange={handleFileSelected} type="file" accept="image/png, image/jpeg" />
 </button>
 </> 
  )

}

export default Add