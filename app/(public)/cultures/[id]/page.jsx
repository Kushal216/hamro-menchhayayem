import ItemDetails from '@/components/layout/ItemDetails';

export default async function Page({ params }) {
  const { id } = await params;

  return <ItemDetails route="cultures" id={id} />;
}
