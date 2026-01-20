'use client';
import { useState } from 'react';

export default function ToggleAdd({ AddComponent, addLabel = 'Add' }) {
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
            {showAdd ? `Close form` : 'Add Items'}
          </p>
        </div>
      </div>

      {showAdd && AddComponent && (
        <div className="mb-8">
          <AddComponent onClose={toggleAdd} />
        </div>
      )}
    </div>
  );
}
