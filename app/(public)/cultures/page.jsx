'use client';
import { useEffect, useState } from 'react';
import RouteTitle from '@/components/layout/RouteTitle';
import CultureCard from '@/components/ui/CultureCard';
import fetchData from '@/lib/fetchItem';

export default function CulturesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData('cultures')
      .then((res) => {
        setData(res.data || []);
        console.log(res.message);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <RouteTitle title={'हाम्रा संस्कृितीक पहिचानहरु'} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item) => (
          <CultureCard
            key={item._id}
            id={item._id}
            image={item.coverImage || '/images/fallback-image.jpg'}
            title={item.title}
            description={item.description}
            likes={item.likesCount}
          />
        ))}
      </div>
    </>
  );
}
