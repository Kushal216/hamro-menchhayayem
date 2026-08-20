import GalleryPage from "@/components/layout/GalleryPage";

export default async function Gallery({ params }) {
  const { id } = await params;

  return <GalleryPage id={id} route="places" />;
}
