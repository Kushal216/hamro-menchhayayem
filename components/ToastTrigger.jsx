'use client';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';

export default function ToastTrigger({ message, type, redirectRoute }) {
  useEffect(() => {
    if (!message) return;

    switch (type) {
      case 'success':
        toast.success(message);
        break;

      case 'error':
        toast.error(message);
        break;

      case 'loading':
        toast.loading(message);
        break;

      case 'info':
      case 'default':
        toast(message);
        break;

      case 'custom':
        toast.custom(message);
        break;

      default:
        toast(message);
    }
  }, [message, type]);

  if (redirectRoute) {
    redirect(redirectRoute);
  }

  return null;
}
