import ManageItem from "@/components/Admin/ManageItem";
import IsActive from "./IsActive";

export default function AdminLandingPage({ username, role }) {
  const name = username ? username : "User";
  let data;
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-6">Hello, {name}</h2>
      <p className="text-gray-600 mb-8">Choose a section to manage</p>

      {/* Section selection */}
      <IsActive role={role} />
      {/* <IsActive onSendData={data} />
      {data.ActiveComponent && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow">
          <ManageItem
            AddComponent={data.ActiveComponent}
            title={data.title}
            route={data.route}
          />
        </div> */}
      {/* )} */}
    </div>
  );
}
