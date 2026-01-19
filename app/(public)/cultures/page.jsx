import CultureCard from '@/components/ui/CultureCard';
import Titlebar from '@/components/ui/Titlebar';
import fetchData from '@/lib/fetchItem';

export default async function CulturesPage() {
  const res = await fetchData('cultures');
  const {message, data}= res;
  console.log(message)

  return (
    <>
      <Titlebar title="rai" />
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <CultureCard
            key={item._id}
            id={item._id}
            image={item.coverImage}
            title={item.title}
            description={item.description}
          />
        ))}
        ;
      </div>
    </>
  );
}
