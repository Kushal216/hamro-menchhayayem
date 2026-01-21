'use client';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
const MAX_SIZE_MB = 2;

const ImageInput = ({ value, setValue, setUploading, multiple }) => {
  async function handleImageUpload(file) {
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      toast.error(`File is too large. Max size is ${MAX_SIZE_MB} MB.`);
      return;
    }

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

  const handleImagesUpload = async (files) => {
    setUploading(true);
    const urls = [];

    for (const file of files) {
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
      urls.push(url);
    }

    setValue((prev) => [...prev, ...urls]);
    setUploading(false);
  };

  return (
    <>
      {multiple ? (
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleImagesUpload(e.target.files)}
          className="border border-gray-300 rounded-md p-2 w-full text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      ) : (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files[0])}
          className="border border-gray-300 rounded-md p-2 w-full text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      )}
      {value && !multiple && (
        <div className="mt-4 w-48 h-48 relative rounded-lg overflow-hidden shadow-md border border-gray-200 group">
          <Image
            src={value}
            alt="Cover"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      {value && multiple && (
        <div className="flex flex-wrap gap-1 my-2">
          {value.map((photo, index) => (
            <div
              key={index}
              className="mt-4 w-32 aspect-square relative rounded-lg overflow-hidden group"
            >
              <Image
                src={photo}
                alt="Cover"
                fill
                quality={40}
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ImageInput;
