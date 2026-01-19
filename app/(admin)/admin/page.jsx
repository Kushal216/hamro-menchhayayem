"use client";

// import Place from "@/components/Admin/AddPlace";
// import Culture from "@/components/Admin/AddCulture";
// import School from "@/components/Admin/AddSchool";
// import People from "@/components/Admin/AddPeople";
// import User from "@/components/Admin/AddUser";
// import { useState } from "react";
import Adminpage from "@/components/Admin/Adminpage";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 ">
      <Adminpage />

      {/* 
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeComponent === "Place"
              ? "bg-blue-600 text-white"
              : "bg-blue-200 text-blue-800 hover:bg-blue-300"
          }`}
          onClick={() => setActiveComponent("Place")}
        >
          ADD Places
        </button>

        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeComponent === "Culture"
              ? "bg-green-600 text-white"
              : "bg-green-200 text-green-800 hover:bg-green-300"
          }`}
          onClick={() => setActiveComponent("Culture")}
        >
          ADD Culture
        </button>

        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeComponent === "School"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-purple-800 hover:bg-purple-300"
          }`}
          onClick={() => setActiveComponent("School")}
        >
          ADD Schools
        </button>

        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeComponent === "People"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-purple-800 hover:bg-purple-300"
          }`}
          onClick={() => setActiveComponent("People")}
        >
          ADD People
        </button>

        <button
          className={`px-4 py-2 rounded font-medium transition ${
            activeComponent === "User"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-purple-800 hover:bg-purple-300"
          }`}
          onClick={() => setActiveComponent("User")}
        >
          ADD User
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow-md">
        {activeComponent === "Place" && <Place />}
        {activeComponent === "Culture" && <Culture />}
        {activeComponent === "School" && <School />}
        {activeComponent === "People" && <People />}
        {activeComponent === "User" && <User />}
      </div> */}
    </div>
  );
}
