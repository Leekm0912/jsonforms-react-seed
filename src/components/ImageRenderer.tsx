import React, { FC, useState } from 'react';

interface ImageRendererProps {
  id?: string
  value: string;
  updateValue: (newValue: string) => void;
}

export const ImageRenderer: FC<ImageRendererProps> = ({ id, value, updateValue }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const blobURL = URL.createObjectURL(file); // Blob URL 생성
      updateValue(blobURL)
    }
  };

  return (
    <div>
      {value ? (
        <img src={value} alt="Uploaded" style={{
          width: 300,
          height: 300
        }} />
      ) : (
        <div>
          <span>No image</span>
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} id="image-upload" />
    </div>
  );
};
