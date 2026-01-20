'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('token', { path: '/' });
  console.log(`logged out successfully`);

  redirect('/login');
}
