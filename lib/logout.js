'use client';

import { createLog } from '@/app/(admin)/admin/logs/page';
import { redirect, useRouter } from 'next/navigation';

export async function logout() {
  // delete cookie on client
  try {
    await createLog('logout');
    const res = await fetch('/api/v1/auth', {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!res.ok) console.log('error in logging out');
    else {
      redirect('/login')
    }
  } catch (err) {
    console.log(err);
  }
}


// async function createLog(activity, itemType, itemId) {
//   console.log(activity);
//   console.log('i am called and i am running like a pro');

//   try {
//     const res = await fetch('/api/v1/logs', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         activity,
//         item: {
//           id: itemId,
//           type: itemType,
//         },
//       }),
//     });

//     const data = await res.json();
//     console.log(data.message);

//     if (!res.ok) {
//       console.error(data);
//     } else {
//       console.log('activity logged successfully');
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }
