import SchoolCard from "@/components/ui/SchoolCard";
import data from "@/app/Data/data";
import RouteTitle from '@/components/layout/RouteTitle';

export default function TourismPage() {
  return (
    <>
      <RouteTitle title={'हाम्रा शिक्षण संस।थाहरु'} />
      <div className="md:grid md:grid-cols-2 flex flex-wrap ">
        {data.map((item, index) => (
          <SchoolCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            phone={item.phone}
            location={item.location}
          />
        ))}
      </div>
    </>
  );
}
