
const Add = () => {
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    console.log("files:", files)
  }


  return (
    <>
      

<button className="addBtn">
<i className="fa-solid fa-plus"> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum obcaecati enim quam error necessitatibus tempora doloremque! Ducimus sapiente totam dignissimos. Ex laborum optio maxime quisquam doloremque voluptates itaque labore aut?  </p></i>
<input onChange={handleFileSelected} type="file" />
 </button>
 </> 
  )

}

export default Add