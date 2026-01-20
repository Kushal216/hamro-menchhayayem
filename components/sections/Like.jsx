'use client';
import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
function Like(LikeCount) {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(LikeCount.totalLikes);
  function handleLike() {
    setLike(!like);
    setCount(count + 1);
  }
  function handleUnlike() {
    setLike(!like);
    setCount(count - 1);
  }
  return (
    <div className="flex gap-1 cursor-pointer">
      {like ? (
        <FaHeart
          size={25}
          onClick={handleUnlike}
          color="red"
          className="hover:scale-110 transition z-2"
        />
      ) : (
        <FaRegHeart
          size={25}
          onClick={handleLike}
          className="hover:scale-110 transition z-2"
        />
      )}
      <div className="text-xl">{count}</div>
    </div>
  );
}

export default Like;
