import React, { FC, useState } from 'react';

interface ImageRendererProps {
  id?: string
  value: string;
  updateValue: (newValue: string) => void;
}

export const ImageRenderer: FC<ImageRendererProps> = ({ id, value, updateValue }) => {
  const [image, setImage] = useState<string | null>( null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImage(imageUrl);
        updateValue(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {image ? (
        <img src={image} alt="Uploaded" className="w-40 h-40 object-cover rounded-md shadow-md" style={{
          width: 300,
          height: 300
        }} />
      ) : (
        <div className="w-40 h-40 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
          <span className="text-gray-500">No image</span>
        </div>
      )}
      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="image-upload" />
    </div>
  );
};
