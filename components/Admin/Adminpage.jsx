"use client";
import Place from "@/components/Admin/AddItems/AddPlace";
import Culture from "@/components/Admin/AddItems/AddCulture";
import School from "@/components/Admin/AddItems/AddSchool";
import People from "@/components/Admin/AddItems/AddPeople";
import User from "@/components/Admin/AddItems/AddUser";
import { useState } from "react";

export default function AdminLandingPage() {
  const name = "Kushal";
  const [active, setActive] = useState(null);
  const components = {
    Place: <Place />,
    Culture: <Culture />,
    School: <School />,
    People: <People />,
    User: <User />,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <h1 className="text-3xl font-bold mb-6">Hello, {name}</h1>
      <p className="text-gray-600 mb-8">Choose a section to manage</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.keys(components).map((key) => (
          <div
            key={key}
            onClick={() => setActive(key)}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{key}</h2>
            <p className="text-gray-500">Manage {key}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        {active ? (
          components[active]
        ) : (
          <p className="text-gray-500 text-center">Select a section to begin</p>
        )}
      </div>
    </div>
  );
}
