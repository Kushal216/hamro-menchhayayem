"use client";
import Image from "next/image";
import down from "@/public/images/down-arrow.png";
import photo from "@/public/images/image.png";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";

import { useState } from "react";

export default function HomePage() {
  const [isAll, setIsAll] = useState(false);
  const fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum reiciendis nisi cupiditate   voluptas corporis, praesentium suscipit iste. Facilis optio illum doloremque aperiam autem debitis quaerat, enim numquam earum recusandae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quam, neque cum quaerat laboriosam in omnis doloribus, quidem illum laborum placeat dolor non recusandae, cupiditate aperiam quasi. Sit, maxime nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi nostrum, excepturi at dignissimos repudiandae aliquam veritatis non molestiae dolorem totam! Obcaecati saepe eligendi beatae aut. Doloribus minima doloremque dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, totam magni asperiores error ipsa iste. Doloribus est commodi non, quod temporibus illum in quae ullam cum. Quaerat accusamus beatae aspernatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex delectus incidunt quibusdam tenetur! Quidem quisquam doloribus doloremque corrupti, quod suscipit! Dignissimos obcaecati veritatis rerum eligendi beatae nostrum harum fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima id quis hic quaerat! Pariatur laborum iure, molestiae ducimus nam, reprehenderit debitis quasi inventore porro, culpa dignissimos tempore quaerat recusandae.";

  const shortText = fullText.slice(0, 300) + "...";

  return (
    <>
      <div className="flex-4/5 p-4">
        <div>
          <div className="bg-[#010BB2] text-2xl font-bold pl-2 p-1 text-white flex ">
            परीचय
            <div className="ml-auto pr-3">
              <Image
                src={down}
                alt="down arrow"
                className="rounded-full "
                w
                idth={30}
                height={20}
                priority
              />
            </div>
          </div>
          <div className="pt-3 pb-3">
            {isAll ? fullText : shortText}
            <button onClick={() => setIsAll(!isAll)}>
              {isAll ? "See Less" : "See More"}
            </button>
          </div>
          <div className="bg-[#010BB2] text-2xl font-bold pl-2 p-1 text-white flex ">
            HISTORY
            <div className="ml-auto pr-3">
              <Image
                src={down}
                alt="down arrow"
                className="rounded-full"
                w
                idth={30}
                height={20}
                priority
              />
            </div>
          </div>
          <div className="pt-3 pb-3">
            {isAll ? fullText : shortText}
            <button onClick={() => setIsAll(!isAll)}>
              {isAll ? "See Less" : "See More"}
            </button>
          </div>
        </div>
        <div className="bg-[#010BB2] text-2xl font-bold pl-2 p-1 text-white flex ">
          REPRESENTATIVES
          <div className="ml-auto pr-3">
            <Image
              src={down}
              alt="down arrow"
              className="rounded-full"
              width={30}
              height={20}
              priority
            />
          </div>
        </div>

        <div className="flex justify-center gap-15">
          <div className=" mt-3 p-2 w-75 h-100 rounded-2xl  shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">
            <Image
              src={photo}
              alt="down arrow"
              className="rounded-3xl p-1 aspect-square object-cover "
              priority
            />

            <div className="flex text-2xl font-bold justify-center">
              Yadav bahadur Khapung
            </div>
            <div className="text-[#303030]  flex justify-center">
              aadhakshya
            </div>
            <div className="flex mt-2  gap-4 justify-center ">
              <a href="tel:+9779812345678">
                <FaPhoneAlt size={20} className="text-[#018378]" />
              </a>
              <a href="mailto:aaaaaaaaaaaaaaaaa@gmail.com" target="_blank">
                <FaEnvelope size={20} className="text-[#018378]" />
              </a>
              <a
                href="https://www.facebook.com/in/yadabkhapung "
                target="_blank"
              >
                <FaFacebook size={20} className="text-[#018378]" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-15">
          <div className=" mt-3 p-2 w-60 h-80 rounded-2xl  shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">
            <Image
              src={photo}
              alt="down arrow"
              className="rounded-3xl p-1 aspect-square object-cover "
              priority
            />

            <div className="flex text-xl font-bold justify-center">
              Yadav Khapung
            </div>
            <div className="text-[#303030]  flex justify-center">
              aadhakshya
            </div>
            <div className="flex mt-2  gap-4 justify-center ">
              <a href="tel:+9779812345678">
                <FaPhoneAlt size={20} className="text-[#018378]" />
              </a>
              <a href="mailto:aaaaaaaaaaaaaaaaa@gmail.com" target="_blank">
                <FaEnvelope size={20} className="text-[#018378]" />
              </a>
              <a
                href="https://www.facebook.com/in/yadabkhapung "
                target="_blank"
              >
                <FaFacebook size={20} className="text-[#018378]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
