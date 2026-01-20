import SchoolCard from "@/components/ui/SchoolCard";
import data from "@/app/Data/data";
import Titlebar from "@/components/ui/Titlebar";

export default function SchoolPage() {
  return (
    <>
      <Titlebar title="विद्यालयहरु" />
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
