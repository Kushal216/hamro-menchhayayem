import ManageItem from "@/components/Admin/ManageItem";
import Place from "@/components/Admin/AddItems/AddPlace";
import Culture from "@/components/Admin/AddItems/AddCulture";
import School from "@/components/Admin/AddItems/AddSchool";
import People from "@/components/Admin/AddItems/AddPeople";
import User from "@/components/Admin/AddItems/AddUser";
import Literature from "@/components/Admin/AddItems/AddLiterature";

export default function AdminLandingPage({ username, role }) {
  const name = username ? username : "User";

  const sections = {
    Place: {
      component: Place,
      title: "Manage Places",
      addLabel: "Add Place",
      route: "cultures",
    },
    Culture: {
      component: Culture,
      title: "Manage Cultures",
      addLabel: "Add Culture",
      route: "cultures",
    },
    School: {
      component: School,
      title: "Manage Schools",
      addLabel: "Add School",
      route: "cultures",
    },
    People: {
      component: People,
      title: "Manage People",
      addLabel: "Add Person",
      route: "cultures",
    },

    Literature: {
      component: Literature,
      title: "Manage Literature",
      addLabel: "Add Literature",
      route: "cultures",
    },
  };

  if (role == "admin") {
    sections.User = {
      component: User,
      title: "Manage Users",
      addLabel: "Add User",
      route: "cultures",
    };
  }

  const handleUpdate = () => {
    console.log(`Update ${active} clicked`);
  };

  const handleDelete = () => {
    console.log(`Delete ${active} clicked`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-6">Hello, {name}</h2>
      <p className="text-gray-600 mb-8">Choose a section to manage</p>

      {/* Section selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.keys(sections).map((key) => (
          <div
            key={key}
            // onClick={() => setActive(key)}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{key}</h2>
            <p className="text-gray-500">Manage {key}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        {
          <ManageItem
            route={sections.route}
            title={sections.title}
            AddComponent={sections.component}
            addLabel={sections.addLabel}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        }
      </div>
    </div>
  );
}
