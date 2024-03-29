import  { useState } from 'react';

const Delete = ({ onDelete }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteClick = () => {
    setDeleteMode(!deleteMode);
  };

  const handleDeletePhoto = () => {
    onDelete();
    setDeleteMode(false);
  };

  return (
    <div>
      <button onClick={handleDeleteClick} style={{ color: deleteMode ? 'red' : 'white' }}>
     

          <i className="fa-solid fa-trash-alt"></i>
        </button>
      )
    </div>
  );
};

export default Delete;