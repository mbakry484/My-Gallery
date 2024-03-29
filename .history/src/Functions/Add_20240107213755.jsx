
const Add = () => {

  <Input 
  type='file' label='Upload' accept='.txt' 
  buttonAfter={uploadFileButton} 
  ref={(ref) => this.fileUpload = ref}
/>
  return (
<button className="addBtn">
<i className="fa-solid fa-plus"></i>
 </button> 
  )
}

export default Add