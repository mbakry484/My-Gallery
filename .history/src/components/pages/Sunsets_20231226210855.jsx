import { useState } from 'react';
import img1 from '../pics/sunsets/IMG_20220611_190040.jpg';
import img2 from '../pics/sunsets/IMG_20220725_191103.jpg';
import img3 from '../pics/sunsets/IMG_20220802_191946.jpg';
import img4 from '../pics/sunsets/IMG_20220926_104247.jpg';
import img5 from '../pics/sunsets/IMG_20221215_172438.jpg';
import img6 from '../pics/sunsets/IMG_20221215_183218.jpg';
import img7 from '../pics/sunsets/IMG_20221224_170141.jpg';
import img8 from '../pics/sunsets/IMG_20221226_165107.jpg';
const Sunsets = () => {

  const [data,setData]=useState({img:'',i:0})
  const imagesArray = [img1,img2, img3, img4, img5, img6, img7, img8];
  
  const viewImage=(imgSrc,index) =>
   {
      setData({imgSrc,index})
   }
  return (
<>

   { data.imgSrc &&
    <div  style={{
      width: '100vw',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      position: 'fixed',
      margin: 0, 
      padding: 0, 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'auto',
      zIndex: 9999,
    }}>

    <button style={{position:'absolute',top:'10',right:'10px', backgroundColor:'blue'}} >  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
    <img src={data.imgSrc} style={{width:'auto', maxWidth:'100%',maxHeight:'100%', borderRadius:'0.1'}}/>

  </div>
  
  
  
  }
    
   

<div className="sunImgsContainer">
      <div className="sunImgs">
      {imagesArray.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            id="item"
            alt=""
            onClick={()=>viewImage(imgSrc,index)}
          />
        ))}
      </div>     
          </div>
          

          </>
    )
}
export default Sunsets;