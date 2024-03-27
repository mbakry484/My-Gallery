
const Add = (onAdd) => {

  return (
    <>
      

<button className="addBtn">
  Add
<input onChange={onAdd} type="file" accept="image/png, image/jpeg" />
 </button>
 </> 
  )

}

export default Add