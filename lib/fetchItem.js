export async function fetchItem(route, itemId) {
  try {
    const res = await fetch(`/api/v1/${route}/${itemId}`);
    const data = await res.json().data();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
export default async function fetchData(route){
  try {
    const res = await fetch(`http://localhost:3000/api/v1/${route}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
