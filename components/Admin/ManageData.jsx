import fetchData from '@/lib/fetchItem';
import handleDelete from '@/lib/handleDelete';
import React from 'react';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import ManageDataListItem from './ManageDataListItem';

const ManageData = async ({ route }) => {
  const res = await fetchData(route);
  const { data } = res;
  // console.log(data);
  return (
    <div className="bg-white p-2 rounded-lg shadow-lg px-4 mt-8">
      {data.map((item, index) => {
        return <ManageDataListItem key={index} route={route} item={item} />;
      })}
    </div>
  );
};

export default ManageData;
export const dynamic = 'force-dynamic';
