import CultureForm from '@/components/Admin/AddItems/AddCulture';
import ManageData from '@/components/Admin/ManageData';
import ToggleForm from '@/components/Admin/ToggleForm';
import fetchData from '@/lib/fetchItem';
import React from 'react';

const page = () => {
  const res = fetchData('cultures');

  return (
    <>
    <div className='flex justify-center'>
    </div>
      <div>
        {/* <div className='text-xl font-bold'>Manage Data</div> */}
      <ToggleForm title="Add a culture"/>
        <ManageData route="cultures" />
      </div>
    </>
  );
};

export default page;
