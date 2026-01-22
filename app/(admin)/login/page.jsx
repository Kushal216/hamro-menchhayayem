import LoginPage from '@/components/Admin/LoginPage';
import validateJWT from '@/lib/middlewares/validataJWT';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Login() {
  const cookie = await cookies();
  const token = cookie.get('token')?.value;

  if (!token) {
    return <LoginPage />;
  }

  const tokenPayload = validateJWT(token);

  if (!tokenPayload) {
    return <LoginPage />;
  }
  redirect('/admin?login=success');
}
