import img1 from '../pics/sunsets/IMG_20220611_190040.jpg';
import img2 from '../pics/sunsets/IMG_20220725_191103.jpg';
import img3 from '../pics/sunsets/IMG_20220802_191946.jpg';
import img4 from '../pics/sunsets/IMG_20220926_104247.jpg';
import img5 from '../pics/sunsets/IMG_20221215_172438.jpg';
import img6 from '../pics/sunsets/IMG_20221215_183218.jpg';
import img7 from '../pics/sunsets/IMG_20221224_170141.jpg';
import img8 from '../pics/sunsets/IMG_20221226_165107.jpg';
const Sunsets = () => {

  const imgClick=>
  {
    console.log("hello")
  }
  
  return (
    
   

<div className="sunImgsContainer">
      <div className="sunImgs">
      <img src={img1} onClick={imgClick} id='item' alt="" />
      <img src={img2} id='item' alt="" />
      <img src={img3} id='item' alt="" />
      <img src={img4} id='item' alt="" />
      <img src={img5} id='item' alt="" />
      <img src={img6} id='item' alt="" />
      <img src={img7} id='item' alt="" />
      <img src={img8} id='item' alt="" />      
          </div>
          </div>


    )
}
export default Sunsets;