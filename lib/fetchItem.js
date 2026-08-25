const api = process.env.API_BASE_URL || ''

export async function fetchItem(route, id) {
  try {
    const res = await fetch(
      `${api}/${route}/${id}`,
      { next: { revalidate: 600 } }
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
    const res = await fetch(`${api}/${route}`, { next: { revalidate: 3600 } });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}
