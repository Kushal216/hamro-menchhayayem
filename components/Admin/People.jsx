"use client";

import { useState } from "react";

export default function PeopleForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
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
      position,
    };

    if (onSubmit) onSubmit(data);
    else console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div>
        <label>Photo URL:</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Enter photo URL"
          className="border w-full p-2 rounded"
        />
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="border w-full p-2 rounded"
        />
      </div>

      <div>
        <label>Website:</label>
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Enter website URL"
          className="border w-full p-2 rounded"
        />
      </div>

      <div>
        <label>Social Links:</label>
        <div className="space-y-2">
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="Facebook URL"
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="Instagram URL"
            className="border w-full p-2 rounded"
          />
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="LinkedIn URL"
            className="border w-full p-2 rounded"
          />
        </div>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <div>
        <label>Position:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Enter position"
          className="border w-full p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
