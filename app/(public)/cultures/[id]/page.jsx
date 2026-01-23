import React from 'react';
import ItemDetails from '@/components/layout/ItemDetails';
import Loading from './loading';

export default function Page({ params }) {
  const { id } = React.use(params);

  return <ItemDetails route="cultures" id={id} />;
}
