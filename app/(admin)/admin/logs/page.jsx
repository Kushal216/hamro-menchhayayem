import LogsDeleteButton from '@/components/LogsDeleteButton';
import fetchData from '@/lib/fetchItem';
import React from 'react';
import toast from 'react-hot-toast';

const bgColors = {
  create: 'bg-green-200',
  update: 'bg-blue-200',
  delete: 'bg-red-200',
  login: 'bg-amber-200',
  logout: 'bg-purple-200',
};

const verbs = {
  create: 'Created',
  update: 'Updated',
  delete: 'Deleted',
  login: 'Logged in.',
  logout: 'Logged out.',
};

const page = async () => {
  const res = await fetchData('logs'); // assume logs is an array
  const logs = res.data;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Logs Monitoring</h1>

      <div className="space-y-4">
        {[...logs].reverse().map((log) => (
          <div
            key={log._id}
            className={`p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${bgColors[log.activity]} flex flex-col space-y-2 relative`}
          >
            {/* <LogsDeleteButton /> */}
            {/* Top row: user name + activity */}
            <div className="">
              <span className="font-bold text-black text-xl">
                {log.user.name}
              </span>{' '}
              {/* Timestamp */}
              <span className="text-gray-700 float-right">
                {new Date(log.createdAt).toLocaleString()}
              </span>
            </div>

            <div>
              <span className="text-gray-700 font-bold ">
                {verbs[log.activity]}{' '}
              </span>

              {/* Item info */}
              {log.item && (
                <span className="text-gray-800 font-medium ">
                  {log.item.type ? <>{log.item.type} </> : 'Item '} -{' '}
                  <span className='bg-white/60 p-1 rounded'>{log.item.id}</span>
                </span>
              )}
            </div>

            {/* Email
            <div className="text-gray-800 text-sm">{log.user.email}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

export async function createLog(activity, itemType, itemId) {
  console.log(activity);

  try {
    const res = await fetch('/api/v1/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        activity,
        item: {
          id: itemId,
          type: itemType,
        },
      }),
    });

    console.log(res.message);

    if (!res.ok) {
      toast.error(res.error);
    } else toast.success('activity logged successfully');
  } catch (err) {
    // toast.error(err.message);
    console.log(err)
  }
  
}
