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
    console.log('item tried to be searched');
    const res = await fetch(`${api}/${route}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
