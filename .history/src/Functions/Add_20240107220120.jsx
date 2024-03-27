import React, { useState } from 'react';

const Add = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleAddButtonClick = () => {
    // Perform the action you want with the selected files
    console.log("Selected files:", selectedFiles);

    // Reset the selectedFiles state for the next selection
    setSelectedFiles([]);
  };

  return (
    <>
      <button className="addBtn" onClick={handleAddButtonClick}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
  );
};

export default Add;
