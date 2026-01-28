"use client"
import { createLog } from '@/app/(admin)/admin/logs/page';
import { useRouter } from 'next/navigation';
import React from 'react';

const LogoutButton = () => {
  const router = useRouter();
  async function logout() {
    try {
      await createLog('logout');
      const res = await fetch('/api/v1/auth', {
        method: 'DELETE',
        credentials: 'include',
      });

      if (!res.ok) console.log('error in logging out');
      else {
        router.push('/login');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button
      onClick={logout}
      className="bg-red-600 text-white text-xl font-bold p-2 px-8 m-2 rounded-xl cursor-pointer"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
