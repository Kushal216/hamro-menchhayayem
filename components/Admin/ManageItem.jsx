
import fetchData from "@/lib/fetchItem";
import ToggleAdd from "./ToggleAdd";
import DeleteButton from "./DeleteButton";

async function ManageItem({ title, AddComponent, route }) {
  const res = await fetchData(route);
  const data = res.data;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToggleAdd AddComponent={AddComponent} />

      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800"> Added {title}</h2>
      </div>
      <DeleteButton data={data} />
    </div>
  );
}
export default ManageItem;
