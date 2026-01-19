export async function fetchItem(route, id) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/v1/${route}/${id}`
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
    console.log('item tried to be searched');
    const res = await fetch(`http://localhost:3000/api/v1/${route}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
