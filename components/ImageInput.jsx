'use client';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';

const ImageInput = ({ value, setValue, setUploading }) => {
  async function handleImageUpload(file) {
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    const res = await fetch('/api/v1/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      throw new Error('Image upload failed');
    }
    const { url, message } = await res.json();
    toast.success(message);
    setValue(url);
    setUploading(false);
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e.target.files[0])}
        className="border border-gray-300 rounded-md p-2 w-full text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
      />
      {value && (
        <div className="mt-4 w-48 h-48 relative rounded-lg overflow-hidden shadow-md border border-gray-200 group">
          <Image
            src={value}
            alt="Cover"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
    </>
  );
};

export default ImageInput;
