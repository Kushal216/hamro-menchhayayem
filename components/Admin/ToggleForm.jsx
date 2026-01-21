'use client';
import { useState } from 'react';
import CultureForm from './AddItems/AddCulture';
import LiteratureForm from './AddItems/AddLiterature';
import UserForm from './AddItems/AddUser';
import SchoolForm from './AddItems/AddSchool';
import PlaceForm from './AddItems/AddPlace';
import PeopleForm from './AddItems/AddPeople';
import toast from 'react-hot-toast';

export default function ToggleForm({ title, route }) {
  const [showAdd, setShowAdd] = useState(false);

  const toggleAdd = ({ title }) => {
    setShowAdd((prev) => !prev);
  };

  let form = <>Form not fetched</>;

  switch (route) {
    case 'cultures':
      form = <CultureForm />;
      break;
    case 'literature':
      form = <LiteratureForm />;
      break;
    case 'places':
      form = <PlaceForm />;
      break;
    case 'schools':
      form = <SchoolForm />;
      break;
    case 'people':
      form = <PeopleForm />;
      break;
    case 'users':
      form = <UserForm />;
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
      ) : (
        <button
          onClick={toggleAdd}
          className="cursor-pointer font-bold bg-red-500 text-white px-5 py-2 rounded-xl float-right m-2"
        >
          X
        </button>
      )}

      <div className='bg-white rounded-lg shadow-xl py-2'>

      {showAdd && form}
      </div>

      <div className="text-xl font-bold mt-5">Manage Data</div>
    </>
  );
}
