import toast from "react-hot-toast";

export default async function postItem(route, data){
  const res = await fetch(`/api/v1/${route}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

}
