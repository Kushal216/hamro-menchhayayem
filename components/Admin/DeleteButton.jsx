"use client";
import React from "react";

function DeleteButton({ data }) {
  async function handledelete(route, id) {
    await fetch(`/api/v1/${route}/${id}`, {
      method: "DELETE",
    });
  }
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.title}</div>
            <button
              onClick={() => {
                handledelete("cultures", item._id);
              }}
              className="px-3 py-1.5 text-sm bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteButton;
