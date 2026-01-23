"use client"
import React, { useState } from 'react'
import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';
import ToggleForm from './ToggleForm';

const ManageDataListItem = ({route , item}) => {
  const [update, setUpdate] = useState(false);
  return (
    <>
      <div className="flex bg-blue-500/10 py-4 p-2 rounded-lg my-4 px-4 items-center justify-center">
        <div className="font-bold">
          {route == 'users' || route == 'people'
            ? `${item.name} - (${route == 'people' ? `${item.position}` : `${item.role}`}) `
            : item.title}
        </div>
        <div className="ml-auto flex gap-2">
          <DeleteButton route={route} id={item._id} />
          <button onClick={() => {setUpdate(prev => !prev)}} className="w-20 cursor-pointer px-3 py-1.5 text-sm bg-blue-500 text-white rounded-xl">
            {update?'Close':'Update'}
          </button>
        </div>
      </div>
      {update && <ToggleForm route={route} update item={item} />}
    </>
  );
}

export default ManageDataListItem
