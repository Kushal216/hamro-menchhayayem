'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

export default function MarkdownViewer({ content }) {
  return (
    <div className="prose prose-neutral max-w-none px-2 lg:text-lg xl:text-2xl text-gray-900">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
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
          p: ({ children }) => (
            <p className="whitespace-pre-line">{children}</p>
          ),
          hr: () => (
            <hr className="my-6 h-0.5 border-0 bg-linear-to-r from-purple-500 via-pink-500 to-red-500" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
