import { useState, useEffect } from 'react';
import PagesHeader from '../PagesHeader.jsx';
import img3 from '../pics/randoms/IMG_20230901_213409.jpg';
import img4 from '../pics/randoms/IMG_20221225_131840.jpg';
import img5 from '../pics/randoms/IMG_20221225_132347.jpg';
import img6 from '../pics/randoms/IMG_20221225_134057.jpg';
import img7 from '../pics/randoms/IMG_20221225_134946.jpg';
import img8 from '../pics/randoms/IMG_20221225_135007.jpg';
import img9 from '../pics/randoms/IMG_20221225_123853.jpg';
import img10 from '../pics/randoms/IMG_20230808_172208.jpg';
import img11 from '../pics/randoms/IMG_20221226_123328.jpg';
import img12 from '../pics/randoms/IMG_20221226_124017.jpg';
import img13 from '../pics/randoms/IMG_20221226_124154.jpg';
import img14 from '../pics/randoms/IMG_20221225_141722.jpg';
import img15 from '../pics/randoms/Snapchat-1739146077.jpg';
import img16 from '../pics/randoms/IMG_20230201_001224.jpg';
import img17 from '../pics/randoms/IMG_20230201_175812.jpg';
import img18 from '../pics/randoms/IMG_20230327_220403.jpg';
import img19 from '../pics/randoms/IMG_20230722_190625.jpg';
import img20 from '../pics/randoms/IMG_20230805_153918.jpg';
import img21 from '../pics/randoms/IMG_20221226_122021.jpg';
import img22 from '../pics/randoms/IMG_20221226_125641.jpg';
import img23 from '../pics/randoms/IMG_20230922_214632.jpg';
import img24 from '../pics/randoms/IMG_20231014_194013.jpg';
import img25 from '../pics/randoms/IMG_20231014_194354.jpg';
import img26 from '../pics/randoms/IMG_20231014_202127.jpg';
import img27 from '../pics/randoms/IMG_20231125_225508.jpg';
import img28 from '../pics/randoms/IMG_20231208_153510.jpg';
import img29 from '../pics/randoms/IMG_20231208_162302.jpg';
import img30 from '../pics/randoms/Picsart_23-03-24_21-26-57-388.jpg';
import img31 from '../pics/randoms/1671969967359.jpg';
import img32 from '../pics/randoms/IMG_20221226_130345.jpg';


const Randoms = () => {

  const [data,setData]=useState({img:[],index:0})

  const [imagesArray, setImagesArray] = useState( [
    img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30, img31,img32,
  ])


  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          imgAction('prev-img');
          break;
        case 'ArrowRight':
          imgAction('next-img');
          break;
        case 'Escape':
          imgAction('close');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [data]);


  const handleFileSelected = (e) => {
    let currentLength = imagesArray.length;
    const files = Array.from(e.target.files);
    const fileSrc = files[0].name;
    console.log(files[0]);
    console.log(fileSrc);
    console.log(files[0].name);
    console.log("files:", files);
    const index=currentLength+1;
    console.log(index)
    // const newImg={...files,[index]:index};
    const newImg={fileSrc};
    setImagesArray([...imagesArray,)
    console.log(imagesArray)
  }


  const viewImage = (imgSrc, index) => {
    setData({ imgSrc, index });
  };

  const imgAction = (action) => {
    let currentIndex = data.index;

    if (action === 'next-img') {
      if (currentIndex < imagesArray.length - 1) {
        setData({ imgSrc: imagesArray[currentIndex + 1], index: currentIndex + 1 });
      } else {
        setData({ imgSrc: imagesArray[0], index: 0 });
      }
    } else if (action === 'prev-img') {
      if (currentIndex > 0) {
        setData({ imgSrc: imagesArray[currentIndex - 1], index: currentIndex - 1 });
      } else {
        setData({ imgSrc: imagesArray[imagesArray.length - 1], index: imagesArray.length });
      }
    } else if (action === 'close') {
      setData({ imgSrc: '', index: 0 });
    }
    else if(action==='delete')
    {
      const newArr = imagesArray.filter((imgSrc) => data.imgSrc !== imgSrc);
    setData({ imgSrc: newArr.length > 0 ? newArr[0] : '', index: 0 });
    setImagesArray(newArr);
    console.log(newArr.length);
    }
  };

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
          <button style={{ position: 'absolute', top: '10px', right: '30px', backgroundColor: '#660000' }} onClick={() => imgAction('close')}>
            X{' '}
          </button>

          <button style={{ position: 'absolute', top: '48%', left: '30px', backgroundColor: 'green' }} onClick={() => imgAction('prev-img')}>
            Prev{' '}
          </button>

          {/* delete Button */}
          <button style={{ position: 'absolute', top: '85%', right: '30px', backgroundColor: 'red' }} onClick={() =>imgAction('delete')}>
          <i className="fa fa-trash" aria-hidden="true"></i>
          </button>

          <img src={data.imgSrc} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5' }} />

          <button style={{ position: 'absolute', top: '48%', right: '30px', backgroundColor: 'green' }} onClick={() => imgAction('next-img')}>
            Next{' '}
          </button>
        </div>
      )}

      <div className="sunImgsContainer">
        <div className="sunImgs">
          <div>
            <PagesHeader />
            <button className="addBtn">
                       Add
              <input onChange={handleFileSelected} type="file" accept="image/png, image/jpeg" />
            </button>
            </div>

              


          {imagesArray.map((imgSrc, index) => (         
            <img key={index} src={imgSrc} id="item" alt="" onClick={() =>viewImage(imgSrc)}  />
         )) }
          
        </div>
      </div>
    </>
  );
};

export default Randoms;