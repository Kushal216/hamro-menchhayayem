"use client";

import { useState } from "react";

export default function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("contributer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, role, email, password };

    try {
      const res = await fetch("api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const text = await res.text();
        console.error("Server Returned:", text);
        throw new Error(`Request Failed: ${res.status}`);
      }
      const result = await res.json();
      console.log("Saved successfully:", result);

      setName("");
      setEmail("");
      setPassword([]);
      setRole("");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
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
