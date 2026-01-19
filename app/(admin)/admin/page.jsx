import Adminpage from "@/components/Admin/Adminpage";
import { logout } from "@/lib/logout";
import validateJWT from "@/lib/middlewares/validataJWT";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function AdminPage() {
  const cookie = await cookies();
  const token = cookie.get('token')?.value;

  if(token){
    console.log("token exists and now can be validated");
    const tokenPayload = validateJWT(token);
    console.log(tokenPayload);

  return (<>
    {tokenPayload && <div>
      <button onClick={logout} className="bg-red-600 text-white font-bold float-right p-1 px-8 m-2 rounded-xl cursor-pointer">Logout</button>
      <Adminpage username={tokenPayload.name} />
    </div>}
  </>
  );
}
else {
  return <div className="h-[60vh] text-center pt-60 text-5xl">
  you need to <Link href={'/login'} className="border rounded-xl p-2 font-bold bg-black text-white inline-block ">Login</Link> first
  </div>
}
}
