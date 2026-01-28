import toast from 'react-hot-toast';

export default async function createLog(activity, itemType, itemId) {
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
    console.log(err);
  }
}
