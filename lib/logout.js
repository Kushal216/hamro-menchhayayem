'use server';
import ToastTrigger from '@/components/ToastTrigger';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('token', { path: '/' });
  <ToastTrigger message={'logged out successfully'} />;

  redirect('/login');
}
