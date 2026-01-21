'use client';
import { useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import MarkDownEditor from './MarkDownEditor';
import toast from 'react-hot-toast';
import Input from '../Input';
import ImageInput from '@/components/ImageInput';

export default function PlaceForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gallery, setGallery] = useState([]);
  const [coverImage, setCoverImage] = useState('');
  const [location, setLocation] = useState('');
  const [videoId, setVideoId] = useState('');
  const [videoStart, setVideoStart] = useState('');
  const [videoEnd, setVideoEnd] = useState('');
  const [region, setRegion] = useState('menchhayayem');
  const [category, setCategory] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      gallery,
      coverImage,
      location,
      video: {
        id: videoId,
        start: videoStart,
        end: videoEnd,
      },
      category,
      region,
      likesCount: 0,
    };

    try {
      const res = await fetch('/api/v1/places', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error('Server returned:', text);
        toast.error(text);
        throw new Error(`Request failed: ${res.status}`);
      }
      const result = await res.json();
      console.log('Saved successfully:', result);
      toast.success(`${title} added successfully.`);

      setTitle('');
      setDescription('');
      setGallery([]);
      setCoverImage('');
      setLocation('');
      setCategory('');
      setRegion('menchhayayem');
      setVideoId('');
      setVideoStart('');
      setVideoEnd('');
    } catch (err) {
      console.error(err);
      toast.error(err);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-blue-600 justify-center flex">
        ADD Places{' '}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 ">
        <Input
          label={'Title'}
          placeholder="Enter title"
          value={title}
          setValue={setTitle}
        />

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
          Region:
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-blue-500/10 w-full p-2 rounded"
          >
            <option value="menchhayayem">Menchhayayem</option>
            <option value="morahang">Morahang</option>
            <option value="shreejung">Shreejung</option>
            <option value="paunthak">Paunthak</option>
          </select>
        </label>
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-blue-500/10 w-full p-2 rounded"
          >
            <option value="place">Select tourism type</option>
            <option value="temple">Temple</option>
            <option value="river">River</option>
            <option value="lake">Lake</option>
            <option value="park">Park</option>
            <option value="heritage">Heritage Site</option>
          </select>
        </label>

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
