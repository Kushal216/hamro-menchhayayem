import Adminpage from "@/components/Admin/Adminpage";
import LoginPage from "@/components/Admin/LoginPage";
import { logout } from "@/lib/logout";
import validateJWT from "@/lib/middlewares/validataJWT";
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Login() {
  const cookie = await cookies();
  const token = cookie.get('token')?.value;

  if(!token){
    console.log("token exists and now can be validated");
    const tokenPayload = validateJWT(token);
    console.log(tokenPayload);

  return (<>
     <div>
      <button onClick={logout}>Logout</button>
      <LoginPage/>
    </div>
  </>
  );
}
else {
  redirect('/admin');
  return <div className="h-[60vh] text-center pt-60 text-5xl">
  You are already Logged in dear {tokenPayload.name} just go to the <Link href={'/admin'} className="border rounded-xl p-2 font-bold bg-black text-white inline-block ">Admin</Link> Page
  </div>
}
}
