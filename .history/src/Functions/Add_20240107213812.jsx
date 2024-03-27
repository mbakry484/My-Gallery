
const Add = () => {
  
  return (
    
    <Input 
  type='file' label='Upload' accept='.txt' 
  buttonAfter={uploadFileButton} 
  ref={(ref) => this.fileUpload = ref}
/>
<button className="addBtn">
<i className="fa-solid fa-plus"></i>
 </button> 
  )
}

export default Add