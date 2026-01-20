import { logout } from '@/lib/logout';
import validateJWT from '@/lib/middlewares/validataJWT';
import { cookies } from 'next/headers';
import Link from 'next/link';
const sections = [
  {
    title: 'Manage Places',
    addLabel: 'Add Place',
    route: 'places',
  },
  {
    title: 'Manage Cultures',
    addLabel: 'Add Culture',
    route: 'cultures',
  },
  {
    title: 'Manage Schools',
    addLabel: 'Add School',
    route: 'schools',
  },
  {
    title: 'Manage People',
    addLabel: 'Add Person',
    route: 'people',
  },
  {
    title: 'Manage Literature',
    addLabel: 'Add Literature',
    route: 'literature',
  },
];
export default async function AdminPage() {
  const cookie = await cookies();
  const token = cookie.get('token')?.value;

  if (token) {
    console.log('token exists and now can be validated');
    const tokenPayload = validateJWT(token);
    console.log(tokenPayload);

    if (sections.length == 5 && tokenPayload.role == 'admin')
      sections.push({
        title: 'Manage Users',
        addLabel: 'Add users',
        route: 'users',
      });

    return (
      <>
        {tokenPayload && (
          <div className="">
            {/* <Adminpage username={tokenPayload.name}  role={tokenPayload.role} /> */}

            <div className="flex flex-col gap-2">
              {sections.map((item, index) => (
                <Link
                  href={`admin/${item.route}`}
                  key={index}
                  className={`cursor-pointer p-6 rounded-xl shadow transition ${
                    false ? 'bg-blue-100 shadow-lg' : 'bg-white hover:shadow-lg'
                  }`}
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Manage {item.title}</p>
                </Link>
              ))}
            </div>
            <button
              onClick={logout}
              className="bg-red-600 text-white text-xl font-bold p-2 px-8 m-2 rounded-xl cursor-pointer"
            >
              Logout
            </button>
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="h-[60vh] text-center pt-60 text-5xl">
        you need to{' '}
        <Link
          href={'/login'}
          className="border rounded-xl p-2 font-bold bg-black text-white inline-block "
        >
          Login
        </Link>{' '}
        first
      </div>
    );
  }
}
