import TourismCard from "@/components/ui/TourismCard";
import Titlebar from "@/components/ui/Titlebar";
import fetchData from "@/lib/fetchItem";

async function TourismPage() {
  const res = await fetchData("places");
  const { message, data } = res;
  console.log(message);
  return (
    <>
      <Titlebar title="पर्यटकिय स्थलहरु" />
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
export default TourismPage;
