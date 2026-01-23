'use client';
import { useEffect, useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import MarkDownEditor from './MarkDownEditor';
import ImageInput from '@/components/ImageInput';
import Input from '../Input';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CultureForm({ patch = false, item }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [_id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [gallery, setGallery] = useState([]);
  const [caste, setCaste] = useState('all');
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
    }
  }, [patch, item]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      _id,
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
      setUploading(true);
      let res = null;

      if (!patch) {
        res = await fetch('/api/v1/cultures', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } else {
        res = await fetch(`/api/v1/cultures/${item._id}`, {
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

      // reset form
      setTitle('');
      setId('');
      setDescription('');
      setCoverImage('');
      setGallery([]);
      setCaste('all');
      setUploading(false);
      setVideoId('');
      setVideoStart('');
      setVideoEnd('');

      toast.success(`${title} added successfully`);
    } catch (err) {
      toast.error(err.message);
    }
    router.refresh();
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-black text-center mb-4">
        {patch ? 'Update' : 'Add'} Details
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
        <Input
          label={'custom route'}
          placeholder="route"
          value={_id}
          setValue={setId}
          required
          disabled={patch}
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
          {uploading ? 'Uploading...' : `${patch ? 'Update' : 'Add'} Item`}
        </button>
      </form>
    </>
  );
}
