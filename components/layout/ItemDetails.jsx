import React from 'react';
import ReactMarkdown from 'react-markdown';
import BackButton from './BackButton';
import { fetchItem } from '@/lib/fetchItem';
import CoverImage from './CoverImage';

export default async function ItemDetails({ route, id }) {
  let content = 'पर्खनुहोस ...';
  const res = await fetchItem(route, id);
  const culture = res.data;
  content = culture.description;

  return (
    <>
      <div className="w-full px-2 relative mt-2 select-none">
        <BackButton />
        <div className="">
          <CoverImage title={culture.title} id={id} route={`/${route}/${id}`} />

          <div className="mt-2">
            <div className="font-bold text-xl  lg:text-3xl text-black border-b-2 lg:border-b-4 border-red-500 w-fill inline-block px-2 mb-2">
              परिचय
            </div>
            <MarkdownViewer content={content} />
          </div>
        </div>
      </div>
    </>
  );
}

function MarkdownViewer({ content }) {
  return (
    <div className="prose prose-neutral max-w-none px-2">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-4 mb-2">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-3 mb-1">{children}</h3>
          ),
          ul: ({ children }) => (
            <ul className="list-disc ml-6 space-y-1">{children}</ul>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
