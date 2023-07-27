import React, { useState } from 'react';

const Drop = () => {
  const [isDragOver, setIsDragOver] = useState(false);


  console.log(isDragOver)


  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const files = event.dataTransfer.files;
    handleFiles(files);
    // console.log(files)
  };

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Handle the dropped or selected files here
    // For demonstration purposes, we'll just log the file names
    Array.from(files).forEach((file) => {
    //   console.log(file.name);
    });
  };

  return (
    <label
      className={`border-4 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer ${
        isDragOver ? 'border-blue-500' : ''
      }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <input type="file" className="" onChange={handleFileInputChange} />
      {isDragOver ? (
        <p className="text-blue-500 font-bold">Drop the image here</p>
      ) : (
        <p className="text-gray-500">Drag and drop an image here or click to select</p>
      )}
    </label>
  );
};

export default Drop;
