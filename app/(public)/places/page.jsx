import TourismCard from '@/components/ui/TourismCard';
import RouteTitle from '@/components/layout/RouteTitle';
import fetchData from '@/lib/fetchItem';

async function TourismPage() {
  const res = await fetchData("places");
  const { message, data } = res;
  console.log(message);
  return (
    <>
      <RouteTitle title={'हाम्रा पर्यटकिय स्थलहरु'} />
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <TourismCard
            key={index}
            image={item.coverImage}
            id={item._id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
export default TourismPage;
