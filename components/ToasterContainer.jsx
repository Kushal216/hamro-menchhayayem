'use client';
import { Toaster } from 'react-hot-toast';

export default function ToasterContainer() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        success: { style: { background: '#4ade80', color: '#000' } },
        error: { style: { background: '#f87171', color: '#fff' } },
      }}
    />
  );
}
