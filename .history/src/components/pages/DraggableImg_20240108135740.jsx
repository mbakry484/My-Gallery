import React from 'react'
import { useDrag } from 'react-dnd';

const DraggableImg = ({src,index,onMouseMove}) => {
  const[{isDragging},drag]=useDrag([ type: 'IMAGE',
  item: { index },
  collect: (monitor) => ({
    isDragging: !!monitor.isDragging(),
  
  }
 ) }
  
  
    return (




    )
}

export default DraggableImg