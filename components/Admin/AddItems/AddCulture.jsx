'use client';
import { useState } from 'react';
import Image from 'next/image';
import 'simplemde/dist/simplemde.min.css';
import { uploadImage } from '@/utils/uploadImage';
import MarkDownEditor from './MarkDownEditor';
import ImageInput from '@/components/ImageInput';
import Input from '../Input';

export default function CultureForm({ toggleAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [gallery, setGallery] = useState([]);
  const [caste, setCaste] = useState('all');
  const [uploading, setUploading] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [videoStart, setVideoStart] = useState('');
  const [videoEnd, setVideoEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      coverImage,
      gallery,
      video: {
        id: videoId,
        start: videoStart,
        end: videoEnd,
      },
      caste,
      likesCount: 0,
    };

    try {
      const res = await fetch('/api/v1/cultures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const { message } = await res.json();
        toast.error(message);
        throw new Error(message);
      }

      // reset form
      setTitle('');
      setDescription('');
      setCoverImage('');
      setGallery([]);
      setCategory('');
      toast.success(`${title} added successfully`);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black text-center mb-4">
        Add Details
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5 p-4">
        {/* Title */}

        <Input
          label={'Title'}
          placeholder="Enter title"
          value={title}
          setValue={setTitle}
          required
        />
        {/* Description */}
        <label>Description:</label>
        <MarkDownEditor
          description={description}
          setDescription={setDescription}
        />

        <label>
          Cover Image:
          <ImageInput
            value={coverImage}
            setValue={setCoverImage}
            setUploading={setUploading}
            required
          />
        </label>
        <label>
          Gallery:
          <ImageInput
            multiple
            value={gallery}
            setValue={setGallery}
            setUploading={setUploading}
          />
        </label>

        <div>
          <label>Video URL:</label>

          <div className="flex gap-2">
            <Input
              placeholder="Video ID"
              value={videoId}
              setValue={setVideoId}
            />
            <Input
              placeholder="0:00 (start time)"
              value={videoStart}
              setValue={setVideoStart}
            />
            <Input
              placeholder="1:00 (end time)"
              value={videoEnd}
              setValue={setVideoEnd}
            />
          </div>
        </div>
        <label>
          Caste:
          <select
            value={caste}
            onChange={(e) => setCaste(e.target.value)}
            className="bg-blue-500/10 w-full p-2 rounded"
          >
            <option value="brahmin">Brahmin</option>
            <option value="chhetri">Chhetri</option>
            <option value="kirant">Kirant</option>
            <option value="tamang">Tamang</option>
          </select>
        </label>
        {/* Submit */}

        <button
          type="submit"
          disabled={uploading}
          className="cursor-pointer font-bold bg-blue-600 mt-4 text-white px-5 py-2 rounded-xl"
        >
          {uploading ? 'Uploading...' : 'Add Culture'}
        </button>
      </form>
    </>
  );
}
