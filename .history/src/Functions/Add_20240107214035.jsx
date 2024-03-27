
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  return (
    <>
        <input  type="file" />

<button className="addBtn">
<i className="fa-solid fa-plus"></i>
 </button>
 </> 
  )

}

export default Add