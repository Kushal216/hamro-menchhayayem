import fetchData from '@/lib/fetchItem';
import RouteTitle from '@/components/layout/RouteTitle';
import LiteratureCard from '@/components/ui/LiteratureCard';

export default async function LiteraturePage() {
  const res = await fetchData('literature');
  if (!res) {
    return (
      <>
        <RouteTitle title={'साहित्यीक सृजनाहरु'} />
        <div className="text-center py-10">Failed to load literature.</div>
      </>
    );
  }
  const { data } = res;

  if (!data || data.length === 0) {
    return (
      <>
        <RouteTitle title={'साहित्यीक सृजनाहरु'} />
        <div className="text-center py-10 text-gray-500">अहिले कुनै साहित्य छैन।</div>
      </>
    );
  }

  return (
    <>
      <RouteTitle title={'साहित्यीक सृजनाहरु'} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <LiteratureCard
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            image={item.coverImage || '/images/fallback-image.jpg'}
            author={item.author}
            likes={item.likes || 0}
          />
        ))}
      </div>
    </>
  );
}
export const revalidate = 3600;
