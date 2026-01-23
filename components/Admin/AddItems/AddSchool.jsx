'use client';
import { useEffect, useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import MarkDownEditor from './MarkDownEditor';
import toast from 'react-hot-toast';
import Input from '../Input';
import ImageInput from '@/components/ImageInput';
import { useRouter } from 'next/navigation';

export default function SchoolForm({ patch = false, item }) {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [gallery, setGallery] = useState([]);
  const [coverImage, setCoverImage] = useState('');
  const [location, setLocation] = useState('');
  const [_id, setId] = useState('');
  const [video, setVideo] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [phoneNo, setPhoneNo] = useState('');
  const [likesCount, setLikesCount] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [videoStart, setVideoStart] = useState('');
  const [videoEnd, setVideoEnd] = useState('');

  useEffect(() => {
    if (patch && item) {
      setTitle(item.title);
      setId(item._id);
      setDescription(item.description);
      setCoverImage(item.coverImage);
      setGallery(item.gallery);
      setCaste(item.caste);
      setVideoId(item.video.id);
      setVideoStart(item.video.start);
      setVideoEnd(item.video.end);
      setLocation(item.location);
      setCategory(item.category);
      setPhoneNo(item.phoneNo);
      setVideoId(item.video.id);
      setVideoStart(item.video.start);
      setVideoEnd(item.video.end);
    }
  }, [patch, item]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      _id,
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
      let res = null;
      if (!patch) {
        res = await fetch('/api/v1/schools', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } else {
        res = await fetch(`/api/v1/schools/${item._id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }

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
      setLocation('');
      setId('');
      setVideo('');
      setCategory('Uncategorized');
      setPhoneNo('');
      setLikesCount(0);
      setUploading(false);
      setVideoId('');
      setVideoStart('');
      setVideoEnd('');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
    router.refresh();
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
        <Input
          label={'custom route'}
          placeholder="route"
          value={_id}
          disabled={patch}
          setValue={setId}
          required
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
          className="cursor-pointer font-bold bg-blue-600 mt-4 text-white px-5 py-2 rounded-xl"
        >
          {uploading ? 'Uploading...' : `${patch ? 'Update' : 'Add'} Item`}
        </button>
      </form>
    </>
  );
}
