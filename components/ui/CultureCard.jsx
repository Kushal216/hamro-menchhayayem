import Image from 'next/image';
import Like from '@/components/sections/Like';
import ShortText from '../sections/ShortText';
import Link from 'next/link';

export default function CultureCard({ title, description, image, id, likes }) {
  return (
    <div className="p-3 sm:p-5 md:p-8 mx-auto w-full">
      <Link href={`/cultures/${id}`} className="block">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-full sm:max-w-md md:max-w-lg mx-auto hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer">
          <h2 className="font-bold text-lg sm:text-xl md:text-2xl border-l-8 border-[#010BB2] pl-3 m-4">
            {title}
          </h2>

          <div className="flex justify-center px-4">
            <div className="relative w-full aspect-5/3 sm:aspect-4/3 md:aspect-video">
              <Image
                src={image}
                alt={title}
                fill
                className="rounded-2xl object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 450px"
              />
            </div>
          </div>

          <div className="px-4 pb-4 sm:px-5 sm:pb-5">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3 min-h-16">
              <ShortText text={description} limit={50} />
            </p>

            <div className="flex sm:flex-row items-center justify-between gap-4 mt-5">
              <span className="w-full sm:w-full bg-black text-white font-bold rounded-2xl px-5 py-2 text-center">
                थप पढ्नुहोस्
              </span>

              <div className="flex gap-5">
                <Like totalLikes={likes} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
