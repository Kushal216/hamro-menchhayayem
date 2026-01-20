import CultureCard from "@/components/ui/LiteratureCard";
import Titlebar from "@/components/ui/Titlebar";
import fetchData from "@/lib/fetchItem";

export default async function LiteraturePage() {
  const res = await fetchData("literature");
  const { message, data } = res;
  console.log(message);

  return (
    <>
      <Titlebar title="rai" />
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <CultureCard
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            image={item.coverImage}
            author={item.author}
          />
        ))}
        ;
      </div>
    </>
  );
}
