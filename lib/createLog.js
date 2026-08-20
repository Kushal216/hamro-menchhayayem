'use client';
import toast from 'react-hot-toast';

export default async function createLog(activity, itemType, itemId) {
  try {
    const body = { activity };
    if (itemType && itemId) {
      body.item = { id: itemId, type: itemType };
    }

    const res = await fetch('/api/v1/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const data = await res.json();
      toast.error(data.message || 'Failed to log activity');
    } else {
      toast.success('Activity logged successfully');
    }
  } catch (err) {
    console.error('createLog error:', err);
  }
}
