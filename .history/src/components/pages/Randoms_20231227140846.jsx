import { useState, useEffect } from 'react';
import img1 from '../pics/randoms/1671969967359.jpg';
import img2 from '../pics/randoms/IMG_20221009_171312.jpg';
import img3 from '../pics/randoms/IMG_20221225_123853.jpg';
import img4 from '../pics/randoms/IMG_20221225_131840.jpg';
import img5 from '../pics/randoms/IMG_20221225_132347.jpg';
import img6 from '../pics/randoms/IMG_20221225_134057.jpg';
import img7 from '../pics/randoms/IMG_20221225_134946.jpg';
import img8 from '../pics/randoms/IMG_20221225_135007.jpg';
import img9 from '../pics/randoms/IMG_20221225_141722.jpg';
import img10 from '../pics/randoms/IMG_20221226_122021.jpg';
import img11 from '../pics/randoms/IMG_20221226_123328.jpg';
import img12 from '../pics/randoms/IMG_20221226_124017.jpg';
import img13 from '../pics/randoms/IMG_20221226_124154.jpg';
import img14 from '../pics/randoms/IMG_20221226_125641.jpg';
import img15 from '../pics/randoms/IMG_20221226_130345.jpg';
import img16 from '../pics/randoms/IMG_20230201_001224.jpg';
import img17 from '../pics/randoms/IMG_20230201_175812.jpg';
import img18 from '../pics/randoms/IMG_20230327_220403.jpg';
import img19 from '../pics/randoms/IMG_20230722_190625.jpg';
import img20 from '../pics/randoms/IMG_20230805_153918.jpg';
import img21 from '../pics/randoms/IMG_20230808_172208.jpg';
import img22 from '../pics/randoms/IMG_20230901_213409.jpg';
import img23 from '../pics/randoms/IMG_20230922_214632.jpg';
import img24 from '../pics/randoms/IMG_20231014_194013.jpg';
import img25 from '../pics/randoms/IMG_20231014_194354.jpg';
import img26 from '../pics/randoms/IMG_20231014_202127.jpg';
import img27 from '../pics/randoms/IMG_20231125_225508.jpg';
import img28 from '../pics/randoms/IMG_20231208_153510.jpg';
import img29 from '../pics/randoms/IMG_20231208_162302.jpg';
import img30 from '../pics/randoms/Picsart_23-03-24_21-26-57-388.jpg';
import img31 from '../pics/randoms/Picsart_23-09-23_23-53-19-531.jpg';

const Randoms = () => {
  const [data, setData] = useState({ img: '', index: 0 });

  const imagesArray = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30, img31,
  ];

const Randoms = () => {
  
  <div className='randImgContainer'>
    <div className='randImg'>
      {
      imagesArray.map((imgSrc,index)=>(<img key={index} />))
      }    
      </div>
  </div>
}
}

export default Randoms