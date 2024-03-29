// DraggableImage.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableImage = ({ src, index, onImageClick }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'IMAGE',
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab', marginBottom: '10px' }}
      onClick={() => onImageClick(src, index)}
    >
      <img src={src} alt={`gallery-${index}`} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default DraggableImage;
