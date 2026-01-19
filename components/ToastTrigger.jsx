'use client';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

export default function ToastTrigger({ message, type, redirectRoute }) {
  useEffect(() => {
    if (!message) return;
    if (type === 'success') toast.success(message);
    else if (type === 'error') toast.error(message);
    else toast(message);
  }, [message, type]);

  if(redirectRoute){
    redirect(redirectRoute);
  }

  return null;
}
