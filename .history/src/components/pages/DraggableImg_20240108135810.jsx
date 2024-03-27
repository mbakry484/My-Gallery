import React from 'react'
import { useDrag } from 'react-dnd';

const DraggableImage = ({ src, index, on }) => {
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