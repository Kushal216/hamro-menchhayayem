"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "simplemde/dist/simplemde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function PlaceForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [gallery, setGallery] = useState([]);
  const [coverImage, setCoverImage] = useState("");
  const [location, setLocation] = useState("Menchhayayem rural municipality");
  const [video, setVideo] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      description,
      gallery,
      coverImage,
      location,
      video,
      category,
      subCategory,
      likesCount: 0,
    };

    try {
      const res = await fetch("/api/v1/places", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Server returned:", text);
        throw new Error(`Request failed: ${res.status}`);
      }
      const result = await res.json();
      console.log("Saved successfully:", result);

      setTitle("");
      setDescription("");
      setGallery([]);
      setCoverImage("");
      setLocation("Menchhayayem rural municipality");
      setVideo("");
      setCategory("");
      setSubCategory("");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <div className="text-3xl font-bold text-blue-600 justify-center flex">
        ADD Places{" "}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-4 ">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="border w-full p-2 rounded"
            required
          />
        </div>

        <div>
          <label>Description:</label>
          <SimpleMDE
            value={description}
            // onChange={setDescription}
            options={{
              placeholder: "Write description...",
              minHeight: "150px",
              status: false,
            }}
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
            onClick={() => setGallery([...gallery, ""])}
            className="bg-green-600 text-white px-3 py-1 rounded"
          >
            Add More
          </button>
        </div>

        <div>
          <label>Cover Image URL:</label>
          <input
            type="text"
            value={coverImage}
            onChange={(e) => setCoverImage(e.target.value)}
            placeholder="Enter cover image URL"
            className="border w-full p-2 rounded"
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border w-full p-2 rounded"
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
            required
          />
        </div>

        <div>
          <label>Subcategory:</label>
          <input
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            placeholder="Enter subcategory"
            className="border w-full p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Place
        </button>
      </form>
    </>
  );
}
