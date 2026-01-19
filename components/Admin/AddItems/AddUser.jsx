"use client";

import { useState } from "react";

export default function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("contributer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, role, email, password };

    if (onSubmit) onSubmit(data);
    else console.log(data);
  };

  return (
    <>
      <div className="text-3xl font-bold text-blue-600 justify-center flex mb-4">
        ADD User
      </div>
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
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border w-full p-2 rounded"
          >
            <option value="contributer">Contributer</option>
            <option value="admin">Admin</option>
          </select>
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
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
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
    </>
  );
}
