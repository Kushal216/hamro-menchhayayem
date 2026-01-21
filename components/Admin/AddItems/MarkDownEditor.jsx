"use client"
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react'
  const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
    ssr: false,
  });

  const MarkDownEditor = ({description, setDescription}) => {
  const options = useMemo(
    () => ({
      status: ['lines', 'words', 'cursor'],
      placeholder: 'Write your content here...',
      spellChecker: false,
    }),
    []
  );
  return (
    <SimpleMDE
      value={description}
      onChange={setDescription}
      options={options}
    />
  );
}

export default MarkDownEditor
