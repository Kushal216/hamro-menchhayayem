'use client';
import { useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import MarkDownEditor from './MarkDownEditor';
import toast from 'react-hot-toast';
import Input from '../Input';
import ImageInput from '@/components/ImageInput';

export default function SchoolForm({ toggleAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gallery, setGallery] = useState([]);
  const [coverImage, setCoverImage] = useState('');
  const [location, setLocation] = useState('');
  const [video, setVideo] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [phoneNo, setPhoneNo] = useState('');
  const [likesCount, setLikesCount] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [videoStart, setVideoStart] = useState('');
  const [videoEnd, setVideoEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description: description,
      gallery,
      location,
      video: {
        id: videoId,
        start: videoStart,
        end: videoEnd,
      },
      category,
      phoneNo,
      coverImage,
      likesCount: 0,
    };
    try {
      setUploading(true);

      const res = await fetch('/api/v1/schools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setUploading(false);

      if (!res.ok) {
        const { message } = await res.json();
        toast.error(message);
        throw new Error(message);
      }
      const result = await res.json();
      console.log('Saved successfully:', result);
      toast.success(result.message);

      setTitle('');
      setDescription('');
      setGallery([]);
      setCoverImage('');
      setVideo('');
      setCategory('');
      setPhoneNo('');
      setVideoId('');
      setVideoStart('');
      setVideoEnd('');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-blue-600 justify-center flex">
        ADD School
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <Input
          label={'Title'}
          placeholder="Enter title"
          value={title}
          setValue={setTitle}
        />

        <div>
          <label>Description:</label>
          <MarkDownEditor
            description={description}
            setDescription={setDescription}
          />
        </div>

        <label>
          Cover Image:
          <ImageInput
            value={coverImage}
            setValue={setCoverImage}
            setUploading={setUploading}
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

        <Input
          label={'Location'}
          placeholder="https://maps.app.goo.gl/..."
          value={location}
          setValue={setLocation}
        />

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
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-blue-500/10 w-full p-2 rounded"
          >
            <option value="school">School</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="higher-secondary">Higher Secondary</option>
          </select>
        </label>

        <Input
          type="number"
          label={'Phone Number'}
          placeholder="+977-9xxxxxxxxx"
          value={phoneNo}
          setValue={setPhoneNo}
        />

        <button
          type="submit"
          disabled={uploading}
          className="cursor-pointer mt-2 font-bold bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          {uploading ? 'Uploading...' : 'Add Item'}
        </button>
      </form>
    </>
  );
}
