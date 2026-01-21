import fetchData from '@/lib/fetchItem';
import handleDelete from '@/lib/handleDelete';
import React from 'react';
import DeleteButton from './DeleteButton';

const ManageData = async ({ route }) => {
  const res = await fetchData(route);
  const { data } = res;
  // console.log(data);
  return (
    <div className='bg-white p-2 rounded-lg shadow-lg px-4 mt-8'>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex bg-blue-500/10 py-4 p-2 rounded-lg my-4 px-4 items-center justify-center"
          >
            <div className='font-bold'>
              {route == 'users' || route == 'people'
                ? `${item.name} - (${route == 'people' ? `${item.position}` : `${item.role}`}) `
                : item.title}
            </div>
            <div className="ml-auto">
              <button
                // onClick={() => {
                // handleUpdate(route, item._id);
                //   window.
                // }}
                className=" cursor-pointer px-3 py-1.5 text-sm bg-blue-500 text-white rounded-xl"
              >
                Update
              </button>

              <DeleteButton route={route} id={item._id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManageData;
