import TourismCard from '@/components/ui/TourismCard';
import data from '@/app/Data/data';
import RouteTitle from '@/components/layout/RouteTitle';

export default function TourismPage() {
  return (
    <>
      <RouteTitle title={'हाम्रा पर्यटकिय स्थलहरु'} />
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <TourismCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
