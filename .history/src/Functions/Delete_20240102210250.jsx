import React, { useState } from 'react';

const Delete = ({ onDelete }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteClick = () => {
    setDeleteMode(!deleteMode);
  };

  

  return (
    <div>
      <button className='delBtn' onClick={handleDeleteClick} style={{ color: deleteMode ? 'red' : 'white' }}>
       
       
          <i className="fa-solid fa-trash-alt"></i>
        </button>
      
    </div>
  );
};

export default Delete;
