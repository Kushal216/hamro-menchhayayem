import fetchData from '@/lib/fetchItem';
import RouteTitle from '@/components/layout/RouteTitle';
import LiteratureCard from '@/components/ui/LiteratureCard';

export default async function LiteraturePage() {
  const res = await fetchData('literature');
  const { message, data } = res;

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
          />
        ))}
      </div>
    </>
  );
}
export const dynamic = 'force-dynamic';
