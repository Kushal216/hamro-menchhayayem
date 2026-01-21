'use client';

import { useState } from 'react';
import 'simplemde/dist/simplemde.min.css';
import { useMemo } from 'react';
import MarkDownEditor from './MarkDownEditor';
import ImageInput from '@/components/ImageInput';
import Input from '../Input';
import toast from 'react-hot-toast';

export default function LiteratureForm(toggleAdd) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [videoId, setVideoId] = useState('');
  const [videoStart, setVideoStart] = useState('');
  const [videoEnd, setVideoEnd] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const options = useMemo(
    () => ({
      minHeight: '300px',
      status: ['lines', 'words', 'cursor'],
      placeholder: 'Write your content here...',
      spellChecker: false,
    }),
    []
  );
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      authorImage,
      video: {
        id: videoId,
        start: videoStart,
        end: videoEnd,
      },
      category,
      author,
      likesCount: 0,
    };

    try {
      const res = await fetch('/api/v1/literature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      setTitle('');
      setDescription('');
      setCoverImage('');
      setAuthor('');
      setVideoId('');
      setVideoStart('');
      setVideoEnd('');

      toast.success(`${title} added successfully.`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
        Add Literature
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5 p-4">
        <Input
          label={'Title'}
          placeholder="Enter title"
          value={title}
          setValue={setTitle}
        />
        <Input
          label={"Author's name"}
          placeholder="Author's name"
          value={author}
          setValue={setAuthor}
        />

        <label>Description:</label>
        <MarkDownEditor
          description={description}
          setDescription={setDescription}
        />

        <label>
          Author Image:
          <ImageInput
            value={authorImage}
            setValue={setAuthorImage}
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
          Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-blue-500/10 w-full p-2 rounded"
          >
            <option value="story">Story</option>
            <option value="poem">Poem</option>
            <option value="article">Article</option>
          </select>
        </label>

        <button
          type="submit"
          disabled={uploading}
          className="cursor-pointer font-bold bg-blue-600 mt-2 text-white px-5 py-2 rounded-xl"
        >
          {uploading ? 'Uploading...' : 'Add Culture'}
        </button>
      </form>
    </>
  );
}
