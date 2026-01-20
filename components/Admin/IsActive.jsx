"use client";
import React, { useState } from "react";
import Place from "@/components/Admin/AddItems/AddPlace";
import Culture from "@/components/Admin/AddItems/AddCulture";
import School from "@/components/Admin/AddItems/AddSchool";
import People from "@/components/Admin/AddItems/AddPeople";
import User from "@/components/Admin/AddItems/AddUser";
import Literature from "@/components/Admin/AddItems/AddLiterature";

function IsActive({ role }) {
  const sections = {
    Place: {
      component: Place,
      title: "Manage Places",
      addLabel: "Add Place",
      route: "places",
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
      route: "schools",
    },
    People: {
      component: People,
      title: "Manage People",
      addLabel: "Add Person",
      route: "people",
    },
    Literature: {
      component: Literature,
      title: "Manage Literature",
      addLabel: "Add Literature",
      route: "literature",
    },
  };

  if (role === "admin") {
    sections.User = {
      component: User,
      title: "Manage Users",
      addLabel: "Add User",
      route: "users",
    };
  }

  const [active, setActive] = useState(null);
  const ActiveComponent = active ? sections[active].component : null;

  // const handleclick = () => {
  //   const data = {
  //     ActiveComponent: ActiveComponent,
  //     title: sections[active].title,
  //     route: sections[active].route,
  //   };
  //   onSendData(data);
  // };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.keys(sections).map((key) => (
          <div
            key={key}
            onClick={() => setActive(key)}
            className={`cursor-pointer p-6 rounded-xl shadow transition ${
              active === key
                ? "bg-blue-100 shadow-lg"
                : "bg-white hover:shadow-lg"
            }`}
          >
            <h2 className="text-xl font-semibold">{key}</h2>
            <p className="text-gray-500">Manage {key}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">{ActiveComponent && <ActiveComponent />}</div>

      {/* <div onClick={handleclick}> Manage Old Data</div> */}
    </div>
  );
}

export default IsActive;
