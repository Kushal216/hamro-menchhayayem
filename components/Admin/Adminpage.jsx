"use client";
import ManageItem from "@/components/Admin/ManageItem";
import Place from "@/components/Admin/AddItems/AddPlace";
import Culture from "@/components/Admin/AddItems/AddCulture";
import School from "@/components/Admin/AddItems/AddSchool";
import People from "@/components/Admin/AddItems/AddPeople";
import User from "@/components/Admin/AddItems/AddUser";
import Literature from "@/components/Admin/AddItems/AddLiterature";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { redirect, useSearchParams } from 'next/navigation';

export default function AdminLandingPage({ username }) {
  const name = username ? username : 'User';
  const [active, setActive] = useState(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('login') === 'success') {
      toast.success('You are already logged in!');
      redirect('/admin');
    }
  }, [searchParams]);

  // Config for each section
  const sections = {
    Place: {
      component: Place,
      title: 'Manage Places',
      addLabel: 'Add Place',
    },
    Culture: {
      component: Culture,
      title: 'Manage Cultures',
      addLabel: 'Add Culture',
    },
    School: {
      component: School,
      title: 'Manage Schools',
      addLabel: 'Add School',
    },
    People: {
      component: People,
      title: 'Manage People',
      addLabel: 'Add Person',
    },
    User: {
      component: User,
      title: 'Manage Users',
      addLabel: 'Add User',
    },
    Literature: {
      component: Literature,
      title: "Manage Literature",
      addLabel: "Add Literature",
    },
  };

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
            onClick={() => setActive(key)}
            className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{key}</h2>
            <p className="text-gray-500">Manage {key}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        {active ? (
          <ManageItem
            title={sections[active].title}
            AddComponent={sections[active].component}
            addLabel={sections[active].addLabel}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ) : (
          <p className="text-gray-500 text-center">Select a section to begin</p>
        )}
      </div>
    </div>
  );
}
