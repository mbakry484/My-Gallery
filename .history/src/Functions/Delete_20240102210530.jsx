import  { useState } from 'react';

const Delete = () => {
  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteClick = () => {
    setDeleteMode(!deleteMode);
  };

  

  return (
    <div>
      <button onClick={handleDeleteClick} style={{ color: deleteMode ? 'red' : 'white' }}>
          <i className="fa-solid fa-trash-alt"></i>
        </button>
      
    </div>
  );
};

export default Delete;