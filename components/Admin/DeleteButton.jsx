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
          <div
            key={index}
            className="flex border p-2 rounded my-2 justify-center"
          >
            <div>{item.title}</div>
            <div className="ml-auto">
              <button
                // onClick={() => {
                //   handleUpdate(route, item._id);
                // }}
                className=" cursor-pointer px-3 py-1.5 text-sm bg-blue-500 text-white rounded-xl"
              >
                Update
              </button>
              <button
                onClick={() => {
                  handledelete(route, item._id);
                }}
                className=" cursor-pointer px-3 py-1.5 text-sm bg-red-500 text-white rounded-xl ml-3"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DeleteButton;
