import RouteTitle from '@/components/layout/RouteTitle';
import CultureCard from '@/components/ui/CultureCard';
import fetchData from '@/lib/fetchItem';

export default async function CulturesPage() {
  const res = await fetchData('cultures');
  const { message, data } = res;
  console.log(message);

  return (
    <>
      <RouteTitle title={'हाम्रा संस्कृितीक पहिचानहरु'} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item, index) => (
          <CultureCard
            key={item._id}
            id={item._id}
            image={item.coverImage}
            title={item.title}
            description={item.description}
            likes={item.likesCount}
          />
        ))}
      </div>
    </>
  );
}
