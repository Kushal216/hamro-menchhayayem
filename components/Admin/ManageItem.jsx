import fetchData from "@/lib/fetchItem";
import ToggleAdd from "./ToggleAdd";
import DeleteButton from "./DeleteButton";

async function ManageItem({ title, AddComponent, onUpdate, onDelete, route }) {
  const res = await fetchData("cultures");
  const data = res.data;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ToggleAdd AddComponent={AddComponent} />

      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* <div className="flex gap-2">
          <button
            onClick={onUpdate}
            className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded"
          >
            Update
          </button>
          <button
            onClick={onDelete}
            className="px-3 py-1.5 text-sm bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div> */}
      </div>
      <DeleteButton data={data} />
      {/* <div>
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.title}</div>
              <button
                onClick={() => {
                  handledelete("cultures", item._id);
                }}
                className="px-3 py-1.5 text-sm bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
export default ManageItem;
