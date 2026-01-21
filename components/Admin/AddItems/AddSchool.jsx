"use client";
import { useState } from "react";
import Image from "next/image";
import "simplemde/dist/simplemde.min.css";
import { uploadImage } from "@/utils/uploadImage";
import MarkDownEditor from "./MarkDownEditor";

export default function SchoolForm({ toggleAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gallery, setGallery] = useState([]);
  const [coverImage, setCoverImage] = useState("");
  const [location, setLocation] = useState("");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [phoneNo, setPhoneNo] = useState("");
  const [likesCount, setLikesCount] = useState(0);
  const [uploading, setUploading] = useState(false);

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
      description: description || "No description is provided.",
      gallery,
      coverImage,
      location,
      video,
      category: category || "Uncategorized",
      phoneNo,
      likesCount: 0,
    };
    try {
      const res = await fetch("api/v1/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Server Returned:", text);
        throw new Error(`Request Failed: ${res.status}`);
      }

      setTitle("");
      setDescription("");
      setGallery([]);
      setCoverImage("");
      setVideo("");
      setCategory("");
      setPhoneNo("");
      alert("School added successfully");
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
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter school title"
            className="border w-full p-2 rounded"
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <MarkDownEditor
            description={description}
            setDescription={setDescription}
          />
        </div>

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
                onClick={() =>
                  setGallery(gallery.filter((_, i) => i !== index))
                }
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

        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border w-full p-2 rounded"
            required
          />
        </div>

        <div>
          <label>Video URL:</label>
          <input
            type="text"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            placeholder="Enter video URL"
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="Enter phone number"
            className="border w-full p-2 rounded"
          />
        </div>

        <div className="flex gap-10 justify-center">
          <button
            type="submit"
            disabled={uploading}
            className="cursor-pointer font-bold bg-blue-600 text-white px-5 py-2 rounded-xl"
          >
            {uploading ? 'Uploading...' : 'Add School'}
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
