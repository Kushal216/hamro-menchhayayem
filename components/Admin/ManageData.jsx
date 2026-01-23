import fetchData from '@/lib/fetchItem';
import React from 'react';
import ManageDataListItem from './ManageDataListItem';

const ManageData = async ({ route }) => {
  const res = await fetchData(route);
  const { data } = res;
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
