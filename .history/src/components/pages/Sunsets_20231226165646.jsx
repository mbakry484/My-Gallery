import React, { useState } from 'react';

import img1 from '../pics/sunsets/IMG_20220611_190040.jpg';
import img3 from '../pics/sunsets/IMG_20220802_191946.jpg';
import img4 from '../pics/sunsets/IMG_20220926_104247.jpg';
import img5 from '../pics/sunsets/IMG_20221215_172438.jpg';
import img6 from '../pics/sunsets/IMG_20221215_183218.jpg';
import img7 from '../pics/sunsets/IMG_20221224_170141.jpg';
import img8 from '../pics/sunsets/IMG_20221226_165107.jpg';

const Sunsets = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const imagesArray = [img1, img3, img4, img5, img6, img7, img8];

  const showLightbox = (index) => {
    setCurrentSlideIndex(index);
    setLightboxVisible(true);
  };

  const nextItem = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  };

  const prevItem = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
  };

  const closeItem = () => {
    setLightboxVisible(false);
  };

  return (
    <div className="sunImgsContainer">
      <div className="sunImgs">
        {imagesArray.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            id="item"
            alt=""
            onClick={() => showLightbox(index)}
          />
        ))}
      </div>

      {lightboxVisible && (
        <div id="lightbox-container" className="lightbox-container">
          <div
            id="lightbox-img"
            className="lightbox-img"
            style={{ backgroundImage: `url(${imagesArray[currentSlideIndex]})` }}
          ></div>
          <button id="prev" className="lightbox-btn" onClick={prevItem}>
            Prev
          </button>
          <button id="next" className="lightbox-btn" onClick={nextItem}>
            Next
          </button>
          <button id="close" className="lightbox-btn" onClick={closeItem}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Sunsets;
