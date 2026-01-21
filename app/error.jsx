'use client';
import { useState } from 'react';

export default function Error({ error, reset }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!error?.message) return;
    navigator.clipboard.writeText(error.message).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-6 text-red-600">
        Oops! Something went wrong
      </h1>
      <div className="bg-red-100 border border-red-400 text-red-800 px-6 py-4 rounded-md mb-6 text-center max-w-md w-full">
        {error?.message || 'An unexpected error occurred. Please try again.'}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition w-50"
        >
          Retry
        </button>
        <button
          onClick={handleCopy}
          className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 w-50 transition"
        >
          {copied ? 'Copied!' : 'Copy Error'}
        </button>
      </div>
    </div>
  );
}
