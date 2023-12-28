import  { useState, useEffect } from 'react';
import img1 from '../pics/insects/IMG_20220513_215716.jpg';
import img2 from '../pics/insects/IMG_20230130_143946.jpg';
import img3 from '../pics/insects/IMG_20230130_144113.jpg';
import img4 from '../pics/insects/IMG_20230709_165237.jpg';
import img5 from '../pics/insects/IMG_20230709_170132.jpg';
import img6 from '../pics/insects/IMG_20230717_171110.jpg';
import img7 from '../pics/insects/IMG_20230718_194501.jpg';
import img8 from '../pics/insects/IMG_20230721_155007.jpg';
import img9 from '../pics/insects/IMG_20230721_155042.jpg';
import img11 from '../pics/insects/IMG_20230806_120554.jpg';
import img11 from '../pics/insects/IMG_20230806_120554.jpg';

import Header from '../Header';

const Insects = () => {
  const [data, setData] = useState({ imgSrc: '', index: 0 });
  const imagesArray = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img11
  ];

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
        setData({ imgSrc: imagesArray[imagesArray.length - 1], index: imagesArray.length - 1 });
      }
    } else if (action === 'close') {
      setData({ imgSrc: '', index: 0 });
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
          <button style={{ position: 'absolute', top: '10px', right: '30px', backgroundColor: 'red' }} onClick={() => imgAction('close')}>
            X{' '}
          </button>

          <button style={{ position: 'absolute', top: '48%', left: '30px', backgroundColor: 'green' }} onClick={() => imgAction('prev-img')}>
            Prev{' '}
          </button>

          <img src={data.imgSrc} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5' }} alt={`Random Image ${data.index + 1}`} />

          <button style={{ position: 'absolute', top: '48%', right: '30px', backgroundColor: 'green' }} onClick={() => imgAction('next-img')}>
            Next{' '}
          </button>
        </div>
      )}
      
      <div className="sunImgsContainer">
        <div className="sunImgs">
            <Header />
          {imagesArray.map((imgSrc, index) => (
            <img key={index} src={imgSrc} id="item" alt="" onClick={() => viewImage(imgSrc, index)} />
          ))}
        </div>
      </div>
  
    </>
  );
};

export default Insects;
