"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "simplemde/dist/simplemde.min.css";
import { useMemo } from "react";
import { uploadImage } from "@/utils/uploadImage";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function LiteratureForm(toggleAdd) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorImage, setauthorImage] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [uploading, setUploading] = useState(false);

  const options = useMemo(
    () => ({
      minHeight: "300px",
      status: ["lines", "words", "cursor"],
      placeholder: "Write your content here...",
      spellChecker: false,
    }),
    [],
  );

  const handleAuthorUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    const { url } = await uploadImage(file);
    setauthorImage(url);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
      authorImage,
      video,
      category,
      author,
      likesCount: 0,
    };

    try {
      const res = await fetch("/api/v1/literature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      setTitle("");
      setDescription("");
      setauthorImage("");
      setVideo("");
      setAuthor("");
      setCategory("");

      alert("Literature added successfully");
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
        <input
          type="text"
          placeholder="Literature Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setTitle(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />

        <SimpleMDE
          value={description}
          onChange={setDescription}
          options={options}
        />

        <div>
          <label className="font-semibold block mb-2">Author Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleAuthorUpload(e.target.files[0])}
            className="border w-full p-2 rounded cursor-pointer"
          />

          {authorImage && (
            <div className="mt-4 w-48 h-48 relative rounded overflow-hidden border shadow">
              <Image
                src={authorImage}
                alt="Cover"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <input
          type="text"
          placeholder="Video URL (optional)"
          value={video}
          onChange={(e) => setVideo(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <div className="flex gap-10 justify-center">
          <button
            type="submit"
            disabled={uploading}
            className="cursor-pointer font-bold bg-blue-600 text-white px-5 py-2 rounded-xl"
          >
            {uploading ? "Uploading..." : "Add Literature"}
          </button>
          <button
            onClick={toggleAdd}
            className="cursor-pointer font-bold bg-red-500 text-white px-5 py-2 rounded-xl"
          >
            Close Form
          </button>
        </div>
      </form>
    </>
  );
}
