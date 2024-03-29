
import { useDrag } from 'react-dnd';
import { propTypes } from 'react-bootstrap/esm/Image';
const DraggableImage = ({ src, index, onMouseMove }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'IMAGE',
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  DraggableImage.propTypes = {
    src: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onImageClick: PropTypes.func.isRequired,
  };
  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab', marginBottom: '10px' }}
      onClick={() => onMouseMove(src, index)}
    >
      <img src={src} alt={`gallery-${index}`} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default DraggableImage;
