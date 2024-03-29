else if(action==='delete')
{
 let  newArr= imagesArray.filter((imgSrc)=>data.imgSrc!==imgSrc)
  setData({imgSrc: imagesArray.filter((imgSrc)=>data.imgSrc!==imgSrc), index:''})
  imagesArray=newArr
  console.log(imagesArray.length)
}