'use client';
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function Like({ totalLikes }) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(totalLikes);

  function handleLike() {
    setLike(true);
    setCount((c) => c + 1);
  }

  function handleUnlike() {
    setLike(false);
    setCount((c) => Math.max(0, c - 1));
  }

  return (
    <button
      type="button"
      onClick={like ? handleUnlike : handleLike}
      aria-label={like ? 'Unlike' : 'Like'}
      aria-pressed={like}
      className="flex gap-1 cursor-pointer p-1 min-w-[44px] min-h-[44px] items-center justify-center"
    >
      {like ? (
        <FaHeart size={25} color="red" className="hover:scale-110 transition z-2" />
      ) : (
        <FaRegHeart size={25} className="hover:scale-110 transition z-2" />
      )}
      <div className="text-xl">{count}</div>
    </button>
  );
}

export default Like;
