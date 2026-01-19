"use client";
import { useState } from "react";

export default function ManageItem({
  title,
  AddComponent, 
  onUpdate,
  onDelete,
  addLabel = "Add",
}) {
  const [showAdd, setShowAdd] = useState(false);

  const toggleAdd = () => {
    setShowAdd((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div
          onClick={toggleAdd}
          className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
        >
          <p className="text-gray-500">
            {showAdd ? `Close ${addLabel}` : addLabel}
          </p>
        </div>
      </div>

      {showAdd && AddComponent && (
        <div className="mb-8">
          <AddComponent onClose={toggleAdd} />
        </div>
      )}

      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        <div className="flex gap-2">
          <button
            onClick={onUpdate}
            className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded"
          >
            Update
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1.5 text-sm bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
