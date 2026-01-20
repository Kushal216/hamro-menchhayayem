"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "simplemde/dist/simplemde.min.css";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch("/api/v1/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Image upload failed");
  }

  return await res.json();
}

export default function WriterForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");

  const [uploading, setUploading] = useState(false);

  const handlePhotoUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    const { url } = await uploadImage(file);
    setPhoto(url);
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      description,
      photo,
      contact: {
        phone,
        website,
        social: {
          facebook,
          instagram,
          linkedin,
        },
        email,
      },
    };

    try {
      const res = await fetch("/api/v1/writers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      setName("");
      setDescription("");
      setPhoto("");
      setPhone("");
      setWebsite("");
      setFacebook("");
      setInstagram("");
      setLinkedin("");
      setEmail("");

      alert("Writer added successfully ✍️");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
        Add Writer
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5 p-4">
        <input
          type="text"
          placeholder="Writer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />

        <SimpleMDE
          value={description}
          onChange={setDescription}
          options={{ minHeight: "160px", status: false }}
        />

        <div>
          <label className="font-semibold block mb-2">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handlePhotoUpload(e.target.files[0])}
            className="border w-full p-2 rounded cursor-pointer"
          />

          {photo && (
            <div className="mt-4 w-40 h-40 relative rounded overflow-hidden border shadow">
              <Image
                src={photo}
                alt="Writer Photo"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>

        <h2 className="text-lg font-semibold text-gray-700">
          Contact Information
        </h2>

        <input
          type="email"
          placeholder="Email (required)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 rounded"
          required
        />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <input
          type="text"
          placeholder="Facebook URL"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <input
          type="text"
          placeholder="Instagram URL"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          className="border w-full p-2 rounded"
        />

        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {uploading ? "Uploading..." : "Add Writer"}
        </button>
      </form>
    </>
  );
}
