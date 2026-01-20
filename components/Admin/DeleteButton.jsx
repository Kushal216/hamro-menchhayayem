"use client"
import handleDelete from '@/lib/handleDelete';
import React from 'react'

const DeleteButton = ({route, id}) => {
  return (
    <button
      onClick={() => {
        handleDelete(route, id);
      }}
      className=" cursor-pointer px-3 py-1.5 text-sm bg-red-500 text-white rounded-xl ml-3"
    >
      Delete
    </button>
  );
}

export default DeleteButton
