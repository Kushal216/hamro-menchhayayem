import TourismCard from '@/components/ui/TourismCard';
import RouteTitle from '@/components/layout/RouteTitle';
import fetchData from '@/lib/fetchItem';

async function TourismPage() {
  const res = await fetchData("places");
  if (!res) {
    return (
      <>
        <RouteTitle title={'हाम्रा पर्यटकिय स्थलहरु'} />
        <div className="text-center py-10">Failed to load places.</div>
      </>
    );
  }
  const { data } = res;

  if (!data || data.length === 0) {
    return (
      <>
        <RouteTitle title={'हाम्रा पर्यटकिय स्थलहरु'} />
        <div className="text-center py-10 text-gray-500">अहिले कुनै पर्यटकिय स्थल छैन।</div>
      </>
    );
  }

  return (
    <>
      <RouteTitle title={'हाम्रा पर्यटकिय स्थलहरु'} />
      <div className="flex flex-wrap gap-2">
        {data.map((item, index) => (
          <TourismCard
            key={index}
            image={item.coverImage || '/images/fallback-image.jpg'}
            id={item._id}
            title={item.title}
            location={item.location}
            description={item.description}
            likes={item.likesCount}
          />
        ))}
      </div>
    </>
  );
}
export default TourismPage;
export const revalidate = 3600;
