import TourismCard from "@/components/ui/TourismCard";
import data from "@/app/Data/data";

export default function TourismPage() {
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <TourismCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
      ;
    </div>
  );
}
