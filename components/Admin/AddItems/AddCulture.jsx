'use client';
import { useState } from 'react';
import Image from 'next/image';
import 'simplemde/dist/simplemde.min.css';
import { uploadImage } from '@/utils/uploadImage';
import MarkDownEditor from './MarkDownEditor';


export default function CultureForm({ toggleAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [gallery, setGallery] = useState([]);
  const [video, setVideo] = useState('');
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);



  /* ---------- handlers ---------- */
  const handleCoverUpload = async (file) => {
    setUploading(true);
    const { url } = await uploadImage(file);
    setCoverImage(url);
    setUploading(false);
  };

  const handleGalleryUpload = async (files) => {
    setUploading(true);
    const urls = [];

    for (const file of files) {
      const { url } = await uploadImage(file);
      urls.push(url);
    }

    setGallery((prev) => [...prev, ...urls]);
    setUploading(false);
  };

  const removeGalleryImage = (index) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      coverImage,
      gallery,
      video,
      category,
      likesCount: 0,
    };

    try {
      const res = await fetch('/api/v1/cultures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      // reset form
      setTitle('');
      setDescription('');
      setCoverImage('');
      setGallery([]);
      setVideo('');
      setCategory('');
      alert('Culture added successfully');
    } catch (err) {
      alert(err.message);
    }
  };

  /* ---------- UI ---------- */
  return (
    <>
      <h1 className="text-2xl font-bold text-black text-center mb-4">
        Add Details
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5 p-4">
        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />
        {/* Description */}

        <MarkDownEditor description={description} setDescription={setDescription}/>

        {/* Cover Image */}
        <div className="mb-6">
          <label className="font-semibold text-gray-700 block mb-2">
            Cover Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleCoverUpload(e.target.files[0])}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />

          {coverImage && (
            <div className="mt-4 w-48 h-48 relative rounded-lg overflow-hidden shadow-md border border-gray-200 group">
              <Image
                src={coverImage}
                alt="Cover"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
        </div>
        {/* Gallery */}
        <div className="mb-6">
          <label className="font-semibold text-gray-700 block mb-2">
            Gallery Images
          </label>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleGalleryUpload(e.target.files)}
            className="border border-gray-300 rounded-md p-2 w-full text-gray-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />

          <div className="flex gap-4 mt-4 flex-wrap">
            {gallery.map((url, index) => (
              <div
                key={index}
                className="relative w-28 h-28 group rounded-lg overflow-hidden shadow-md border border-gray-200"
              >
                <Image
                  src={url}
                  alt={`Gallery ${index}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => removeGalleryImage(index)}
                  className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Video */}
        <input
          type="text"
          placeholder="Video URL"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          className="border w-full p-2 rounded"
        />
        {/* Category */}
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border w-full p-2 rounded"
        />
        {/* Submit */}

          <button
            type="submit"
            disabled={uploading}
            className="cursor-pointer font-bold bg-blue-600 text-white px-5 py-2 rounded-xl"
          >
            {uploading ? 'Uploading...' : 'Add Culture'}
          </button>
      </form>
    </>
  );
}
