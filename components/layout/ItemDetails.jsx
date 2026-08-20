import BackButton from './BackButton';
import { fetchItem } from '@/lib/fetchItem';
import CoverImage from './CoverImage';
import dynamic from 'next/dynamic';

const MarkdownViewer = dynamic(() => import('./MarkdownViewer'), { ssr: false });

export default async function ItemDetails({ route, id }) {
  let content = 'पर्खनुहोस ...';
  const res = await fetchItem(route, id);
  const culture = res.data;
  content = culture.description;

  return (
    <>
      <div className="w-full px-2 relative mt-2 select-none pb-10">
        <BackButton />
        <div className="">
          <CoverImage
            title={culture.title}
            coverImage={culture.coverImage || '/images/fallback-image.jpg'}
            id={id}
            route={`/${route}/${id}`}
            video={culture.video}
            location={culture.location}
          />

          <div className="mt-2">
            <div className="font-bold text-xl lg:text-3xl text-black border-b-2 lg:border-b-4 border-red-500 w-fill inline-block px-2 mb-2">
              परिचय
            </div>
            <MarkdownViewer content={content} />
          </div>
        </div>
      </div>
    </>
  );
}
