'use client';
import { useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import MarkDownEditor from './MarkDownEditor';
import Input from '../Input';
import toast from 'react-hot-toast';
import ImageInput from '@/components/ImageInput';
import Image from 'next/image';

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

        <div>
          <label className="block mb-1 font-medium">Gallery:</label>
          {gallery.map((url, index) => (
            <div key={index} className="flex mb-2 gap-2">
              <input
                type="text"
                value={url}
                onChange={(e) => {
                  const newGallery = [...gallery];
                  newGallery[index] = e.target.value;
                  setGallery(newGallery);
                }}
                placeholder={`Image URL ${index + 1}`}
                className="border w-full p-2 rounded"
              />

              <button
                type="button"
                onClick={() => {
                  const newGallery = gallery.filter((_, i) => i !== index);
                  setGallery(newGallery);
                }}
                className="bg-red-500 text-white px-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setGallery([...gallery, ''])}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Add More
          </button>
        </div>

        <label>
          Cover Image:
          <ImageInput
            value={coverImage}
            setValue={setCoverImage}
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
          className="cursor-pointer font-bold bg-blue-600 text-white px-5 py-2 rounded-xl"
        >
          {uploading ? 'Uploading...' : 'Add Culture'}
        </button>
      </form>
    </>
  );
}
