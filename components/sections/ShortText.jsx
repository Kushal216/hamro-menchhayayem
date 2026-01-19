"use client";

export default function ShortText({ text, limit }) {
  const shortText =
    (text || "").slice(0, limit) + (text?.length > limit ? " ..." : "");

  return <>{shortText}</>;
}
