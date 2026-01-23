import React from 'react';
import ToggleForm from './ToggleForm';

const UpdateButton = async ({item=null, update, setUpdate, route}) => {
  return (
    <button className=" cursor-pointer px-3 py-1.5 text-sm bg-blue-500 text-white rounded-xl">
      Update
    </button>
  );
};

export default UpdateButton;
