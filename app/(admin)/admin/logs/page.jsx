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

const page = async () => {
  const res = await fetchData('logs'); // assume logs is an array
  const logs = res.data;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Logs Monitoring</h1>

      <div className="space-y-4">
        {logs.map((log) => (
          <div
            key={log._id}
            className={`p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${bgColors[log.activity]} flex flex-col space-y-2`}
          >
            {/* Top row: user name + activity */}
            <div className="">
              <span className="font-semibold text-gray-800 text-lg">
                {log.user.name}
              </span>{' '}
              {/* Timestamp */}
              <span className="text-gray-700 text-xs ml-2">
                {new Date(log.createdAt).toLocaleString()}
              </span>
              <span className="text-sm text-gray-700 font-medium float-right">
                {log.activity.toUpperCase()}
              </span>
            </div>

            {/* Item info */}
            {log.item && (
              <div className="text-gray-800 text-sm">
                <span className="font-medium">
                  {log.item.type ? <>{log.item.type} </> : 'Item'}
                </span>
                {': '}
                {log.item.id}{' '}
              </div>
            )}

            {/* Email */}
            <div className="text-gray-800 text-sm">{log.user.email}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

export async function createLog(activity, item) {
  console.log(activity, item);
  try {
    const res = await fetch('/api/v1/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

      body: JSON.stringify({
        activity,
        itemId: item._id,
      }),
    });

    console.log(res.message);

    if (!res.ok) {
      toast.error('Something went wrong in logging res not ok.');
    } else toast.success('activity logged successfully');
  } catch (err) {
    toast.error('some error occurred in logging thrown');
  }
}
