import CultureCard from "@/components/ui/CultureCard";
import data from "@/app/Data/data";
import Titlebar from "@/components/ui/Titlebar";

export default function TourismPage() {
  return (
    <>
      <Titlebar title="dsfdj" />
      <div className="flex flex-wrap">
        {data.map((item, index) => (
          <CultureCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
        ;
      </div>
    </>
  );
}
