import SchoolCard from "@/components/ui/SchoolCard";
import RouteTitle from '@/components/layout/RouteTitle';
import fetchData from "@/lib/fetchItem";

export default async function SchoolPage() {
    const res = await fetchData('schools');
    const { data } = res;
  return (
    <>
      <RouteTitle title={'हाम्रा शिक्षण संस्थाहरु'} />
      <div className="md:grid md:grid-cols-2 flex flex-wrap ">
        {data.map((item, index) => (
          <SchoolCard
            key={index}
            image={item.image}
            title={item.title}
            id={item._id}
            description={item.description}
            phone={item.phone}
            location={item.location}
          />
        ))}
      </div>
    </>
  );
}
