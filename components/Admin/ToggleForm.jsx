'use client';
import { useContext, useEffect, useState } from 'react';
import CultureForm from './AddItems/AddCulture';
import LiteratureForm from './AddItems/AddLiterature';
import UserForm from './AddItems/AddUser';
import SchoolForm from './AddItems/AddSchool';
import PlaceForm from './AddItems/AddPlace';
import PeopleForm from './AddItems/AddPeople';
import toast from 'react-hot-toast';

export default function ToggleForm({ title, route, update, item = null }) {
const [showAdd, setShowAdd] = useState(Boolean(update));
  const toggleAdd = ({ title }) => {
    setShowAdd((prev) => !prev);
  };

  let form = <>Form not fetched</>;

  switch (route) {
    case 'cultures':
      form = <CultureForm patch={Boolean(update)} item={item} />;
      break;
    case 'literature':
      form = <LiteratureForm patch={Boolean(update)} item={item} />;
      break;
    case 'places':
      form = <PlaceForm patch={Boolean(update)} item={item} />;
      break;
    case 'schools':
      form = <SchoolForm patch={Boolean(update)} item={item} />;
      break;
    case 'people':
      form = <PeopleForm patch={Boolean(update)} item={item} />;
      break;
    case 'users':
      form = <UserForm patch={Boolean(update)} item={item} />;
      break;

    default:
      toast.error('Invalid route prop Passed.');
      form = <>Something went wrong !!</>;
      break;
  }

  return (
    <>
      {!showAdd ? (
        <>
          {!update && (
            <div
              onClick={toggleAdd}
              className="cursor-pointer font-bold flex border p-2 rounded my-2 justify-center "
            >
              <div className="flex items-center gap-5">
                <div>{title}</div>
                <div className="text-3xl">+</div>
              </div>
            </div>
          )}
        </>
      ) : (<>
        {!update&& <button
          onClick={toggleAdd}
          className="cursor-pointer font-bold bg-red-500 text-white px-5 py-2 rounded-xl float-right m-2"
        >
          X
        </button>}</>
      )}

      <div className="bg-white rounded-lg shadow-xl py-2">
        {showAdd && form}
      </div>

      {!update && <div className="text-xl font-bold mt-5">Manage Data</div>}
    </>
  );
}
