import CultureForm from '@/components/Admin/AddItems/AddCulture';
import ManageData from '@/components/Admin/ManageData';
import ToggleForm from '@/components/Admin/ToggleForm';
import fetchData from '@/lib/fetchItem';
import React from 'react';

const page = () => {
  return (
    <>
      <div>
      <ToggleForm title="Add a literature" route="literature"/>
        <ManageData route="literature" />
      </div>
    </>
  );
};

export default page;
