"usse client";
import CultureCard from "@/components/ui/CultureCard";

import data from "@/app/Data/data";

export default function TourismPage() {
  return (
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
  );
}
