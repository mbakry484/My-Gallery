import { useState, useEffect } from 'react';
import img3 from '../pics/randoms/IMG_20221225_123853.jpg';
import img4 from '../pics/randoms/IMG_20221225_131840.jpg';
import img5 from '../pics/randoms/IMG_20221225_132347.jpg';
import img6 from '../pics/randoms/IMG_20221225_134057.jpg';
import img7 from '../pics/randoms/IMG_20221225_134946.jpg';
import img8 from '../pics/randoms/IMG_20221225_135007.jpg';
import img9 from '../pics/randoms/IMG_20221226_125641.jpg';
import img10 from '../pics/randoms/IMG_20221226_122021.jpg';
import img11 from '../pics/randoms/IMG_20221226_123328.jpg';
import img12 from '../pics/randoms/IMG_20221226_124017.jpg';
import img13 from '../pics/randoms/IMG_20221226_124154.jpg';
import img14 from '../pics/randoms/IMG_20221225_141722.jpg';
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
import img31 from '../pics/randoms/1671969967359.jpg';

const Randoms = () => {

  const [data,setData]=useState({img:'',index:0})
  const imagesArray = [
     img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30, img31,
  ];

 
  const viewImg=(imgSrc,index)=>
  {
      setData({imgSrc,index})
  }


  return (
    <>
      {data.imgSrc && (
        <div
          style={{
            width: '100vw',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 5, 0.8)',
            position: 'fixed',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'auto',
            zIndex: 9999,
          }}
        >
          <button style={{ position: 'absolute', top: '10px', right: '30px', backgroundColor: 'red' }} onClick={() => imgAction('close')}>
            X{' '}
          </button>

          <button style={{ position: 'absolute', top: '48%', left: '30px', backgroundColor: 'green' }} onClick={() => imgAction('prev-img')}>
            Prev{' '}
          </button>

          <img src={data.imgSrc} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5' }} />

          <button style={{ position: 'absolute', top: '48%', right: '30px', backgroundColor: 'green' }} onClick={() => imgAction('next-img')}>
            Next{' '}
          </button>
        </div>
      )}

      <div className="sunImgsContainer">
        <div className="sunImgs">
          {imagesArray.map((imgSrc, index) => (
            <img key={index} src={imgSrc} id="item" alt="" onClick={() => viewImage(imgSrc, index)} />
          ))}
        </div>
      </div>
    </>
  );
};

export de