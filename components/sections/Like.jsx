"use client";
import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
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
    <div>
      {like ? (
        <FaHeart size={30} onClick={handleUnlike} color="red" />
      ) : (
        <FaRegHeart size={30} onClick={handleLike} />
      )}
      {count}
    </div>
  );
}

export default Like;
