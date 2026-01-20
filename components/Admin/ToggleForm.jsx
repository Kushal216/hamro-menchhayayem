'use client';
import { useState } from 'react';
import CultureForm from './AddItems/AddCulture';

export default function ToggleForm({ title }) {
  const [showAdd, setShowAdd] = useState(false);

  const toggleAdd = ({ title }) => {
    setShowAdd((prev) => !prev);
  };

  return (
    <>
      {!showAdd && (
        <>
          <div
            onClick={toggleAdd}
            className="cursor-pointer font-bold flex border p-2 rounded my-2 justify-center "
          >
            <div className="flex items-center gap-5">
              <div>{title}</div>
              <div className="text-3xl">+</div>
            </div>
          </div>
        </>
      ) }
      {showAdd && <CultureForm toggleAdd={toggleAdd} />}
      <div className="text-xl font-bold">Manage Data</div>
    </>
  );
}
