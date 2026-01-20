import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

export default async function handleDelete(route, id) {
  const confirm = window.confirm('Do you really want to delete this item?');

  if (confirm) {
    const res = await fetch(`/api/v1/${route}/${id}`, {
      method: 'DELETE',
    });
    const { message } = await res.json();
    toast.success(message);

    redirect(`/admin/${route}`);
  }
  else toast.error("Deletion cancelled by the user.")
}
