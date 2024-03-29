import { useState, useEffect } from 'react';
import img1 from '../pics/animals/IMG_20231227_133414.jpg';
import img2 from '../pics/animals/IMG_20221225_140245.jpg';
import img3 from '../pics/animals/IMG_20221225_135622.jpg';
import img4 from '../pics/animals/IMG_20221225_123228.jpg';
import img5 from '../pics/animals/IMG_20221225_121026.jpg';
import img6 from '../pics/animals/IMG_20221225_121636.jpg';
import img7 from '../pics/animals/IMG_20221225_120503.jpg';
import img8 from '../pics/animals/IMG_20221225_115613.jpg';
import img9 from '../pics/animals/IMG_20221225_120452.jpg';


const Animals = () => {
  const [data, setData] = useState({ imgSrc: '', index: 0 });
  const imagesArray = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9,
    
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

          <img src={data.imgSrc} style={{ width: 'auto', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5' }} alt={`More Image ${data.index + 1}`} />

          <button style={{ position: 'absolute', top: '48%', right: '30px', backgroundColor: 'green' }} onClick={() => imgAction('next-img')}>
            Next{' '}
          </button>
        </div>
      )}
      <div className='randImgContainer'>
        <div className='randImg'>
          
          {
            imagesArray.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`More Image ${index + 1}`}
                onClick={() => viewImage(imgSrc, index)}
              />
            ))
          }
        </div>
      </div>

    </>
  );
};

export default Animals;
