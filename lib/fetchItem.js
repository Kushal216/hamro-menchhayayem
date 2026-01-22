import toast from "react-hot-toast";

const api = process.env.API_BASE_URL

export async function fetchItem(route, id) {
  console.log(api)
  try {
    const res = await fetch(
      `${api}/${route}/${id}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
export default async function fetchData(route){
  try {
    const res = await fetch(`${api}/${route}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    toast.error(err.message)
    return null;
  }
}
