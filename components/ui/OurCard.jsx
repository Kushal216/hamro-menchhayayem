'use client';
import Image from 'next/image';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaLink,
} from 'react-icons/fa';

function OurCard({
  image,
  name,
  position,
  website,
  phone,
  email,
  linkedin,
  instagram,
  facebook,
  imgHeight = 200,
  imgWidth = 200,
}) {
  return (
    <div className="flex justify-center">
      <div className="mt-3 p-3 rounded-2xl shadow-lg">
        {/* Image wrapper reserves space */}
        <div className="flex justify-center" style={{ height: imgHeight }}>
          <Image
            src={image || '/images/fallback-image.jpg'}
            alt={name}
            width={imgWidth}
            height={imgHeight}
            className="rounded-3xl object-cover"
          />
        </div>

        <div className="flex text-2xl font-bold justify-center items-center mt-2">
          {name}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <FaLink size={26} className="pl-2" />
            </a>
          )}
        </div>

        {position && (
          <div className="text-[#303030] flex justify-center">{position}</div>
        )}

        <div className="flex mt-3 gap-4 justify-center">
          {phone && (
            <a href={`tel:${phone}`}>
              <FaPhoneAlt size={20} className="text-[#018378]" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}>
              <FaEnvelope size={20} className="text-[#018378]" />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} className="text-[#018378]" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} className="text-[#018378]" />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} className="text-[#018378]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default OurCard;
