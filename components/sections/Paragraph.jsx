"use client";

import { useState } from "react";

export default function Paragraph({ text, limit = 200 }) {
  const [isAll, setIsAll] = useState(false);

  const isLong = text.length > limit;
  const shorttext = text.slice(0, 300) + "  ";

  return (
    <div className="py-1 pl-2 pb-3 md:text-xl">
      {isAll ? text : shorttext}
      <button
        onClick={() => setIsAll(!isAll)}
        className="mt-2 text-blue-600 hover:underline"
      >
        {isAll ? "See Less" : "...See More"}
      </button>
    </div>
  );
}
