import React from "react";
import GalleryPage from "@/components/layout/GalleryPage";

export default function Gallery({ params }) {
  const { id } = React.use(params);

  return <GalleryPage id={id} route="places" />;
}
