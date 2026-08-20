import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import Like from "@/components/sections/Like";
import ShortText from "../sections/ShortText";
import Link from "next/link";

export default function TourismCard({
  image,
  title,
  description,
  id,
  likes,
  location,
}) {
  return (
    <div className="w-full mx-auto p-4">
      <Link href={`/places/${id}`} className="block">
        <div className="bg-white rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer">
          <div className="flex flex-col md:flex-row gap-4 p-4">
            <div className="w-full md:w-2/5 h-fit relative aspect-6/3">
              <Image
                src={image}
                alt={title}
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="w-full md:w-2/3 flex flex-col">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold border-l-8 border-[#010BB2] pl-3">
                {title}
              </h2>

              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                <ShortText text={description} limit={300} />
              </p>

              <div className="mt-auto pt-3 flex items-center justify-between font-bold">
                <span className="px-4 py-2 rounded-xl bg-black text-white text-sm sm:text-base">
                  थप पढ्नुहोस्
                </span>

                <div className="flex items-center gap-5">
                  {location && (
                    <a href={location} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <FaMapMarkerAlt
                        size={33}
                        className="text-black text-lg cursor-pointer hover:scale-110 transition"
                      />
                    </a>
                  )}
                  <Like totalLikes={likes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
