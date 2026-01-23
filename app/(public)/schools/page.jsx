import SchoolCard from "@/components/ui/SchoolCard";
import RouteTitle from '@/components/layout/RouteTitle';
import fetchData from "@/lib/fetchItem";

export default async function SchoolPage() {
    const res = await fetchData('schools');
    const { data } = res;
  return (
    <>
      <RouteTitle title={'हाम्रा शिक्षण संस्थाहरु'} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data.map((item, index) => (
          <SchoolCard
            key={index}
            image={item.coverImage || '/images/fallback-image.jpg'}
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
export const dynamic = 'force-dynamic';
