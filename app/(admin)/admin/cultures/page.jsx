import ManageData from '@/components/Admin/ManageData';
import fetchData from '@/lib/fetchItem';
import React from 'react';

const page = () => {
const res = fetchData('cultures')

  return (
    <>
    <button>Add Items</button>
    <div>
      <div>Data(delete/update):</div>
      <ManageData route="cultures"/>
    </div>
    </>
  );
};

export default page;
