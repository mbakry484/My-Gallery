import React from 'react'
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




    )
}

export default DraggableImg