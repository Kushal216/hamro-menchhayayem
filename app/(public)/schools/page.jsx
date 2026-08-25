import SchoolCard from "@/components/ui/SchoolCard";
import RouteTitle from '@/components/layout/RouteTitle';
import fetchData from "@/lib/fetchItem";

export default async function SchoolPage() {
    const res = await fetchData('schools');
    if (!res) {
      return (
        <>
          <RouteTitle title={'हाम्रा शिक्षण संस्थाहरु'} />
          <div className="text-center py-10">Failed to load schools.</div>
        </>
      );
    }
    const { data } = res;

    if (!data || data.length === 0) {
      return (
        <>
          <RouteTitle title={'हाम्रा शिक्षण संस्थाहरु'} />
          <div className="text-center py-10 text-gray-500">अहिले कुनै शिक्षण संस्था छैन।</div>
        </>
      );
    }

  return (
    <>
      <RouteTitle title={'हाम्रा शिक्षण संस्थाहरु'} />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <SchoolCard
            key={index}
            image={item.coverImage || '/images/fallback-image.jpg'}
            title={item.title}
            id={item._id}
            description={item.description}
            phone={item.phone}
            location={item.location}
            likes={item.likes || 0}
          />
        ))}
      </div>
    </>
  );
}
export const revalidate = 3600;
