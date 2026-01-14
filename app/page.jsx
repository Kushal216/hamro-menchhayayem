"use client";
import Menubar from "@/components/layout/Menubar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import down from "@/public/images/down-arrow.png";
import link from "@/public/images/link.png";
import kdpp from "@/public/images/kd-pp.jpeg";
import sbpp from "@/public/images/sb-pp.jpeg";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { useState } from "react";

export default function HomePage() {
  const [isAll, setIsAll] = useState(false);
  const fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum reiciendis nisi cupiditate   voluptas corporis, praesentium suscipit iste. Facilis optio illum doloremque aperiam autem debitis quaerat, enim numquam earum recusandae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quam, neque cum quaerat laboriosam in omnis doloribus, quidem illum laborum placeat dolor non recusandae, cupiditate aperiam quasi. Sit, maxime nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi nostrum, excepturi at dignissimos repudiandae aliquam veritatis non molestiae dolorem totam! Obcaecati saepe eligendi beatae aut. Doloribus minima doloremque dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, totam magni asperiores error ipsa iste. Doloribus est commodi non, quod temporibus illum in quae ullam cum. Quaerat accusamus beatae aspernatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex delectus incidunt quibusdam tenetur! Quidem quisquam doloribus doloremque corrupti, quod suscipit! Dignissimos obcaecati veritatis rerum eligendi beatae nostrum harum fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima id quis hic quaerat! Pariatur laborum iure, molestiae ducimus nam, reprehenderit debitis quasi inventore porro, culpa dignissimos tempore quaerat recusandae.";

  const shortText = fullText.slice(0, 300) + "...";

  return (
    <>
      <div className=" bg-[#FAFAFF] flex flex-col h-screen">
        <header>
          <Navbar />
        </header>

        <div className="body flex-1 flex">
          <aside className="flex-1/5 ">
            <Menubar />
          </aside>
          <main className="flex-4/5 p-4">
            <div className="bg-[#010BB2] text-2xl font-bold pl-2 p-1 text-white flex ">
              परीचय
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
            <div className="pt-3 pb-3">
              {isAll ? fullText : shortText}
              <button onClick={() => setIsAll(!isAll)}>
                {isAll ? "See Less" : "See More"}
              </button>
            </div>
            <div className="bg-[#010BB2] text-2xl font-bold pl-2 p-1 text-white flex ">
              निर्माता
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
              <div className=" mt-3 p-2 w-80 h-128 rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">
                <Image
                  src={kdpp}
                  alt="down arrow"
                  className="rounded-3xl p-1"
                  width={320}
                  priority
                />

                <div className="flex text-2xl font-bold justify-center">
                  कुशल ढकाल
                  <a href="https://kushaldhakal216.com.np/">
                    <Image
                      src={link}
                      alt="down arrow"
                      className="rounded-full ml-2.5"
                      width={25}
                      priority
                    />
                  </a>
                </div>
                <div className="text-[#303030]  flex justify-center pr-9">
                  वेबसाइट निर्माता
                </div>
                <div className="flex mt-2 gap-4 justify-center ">
                  <a href="tel:+9779865090216">
                    <FaPhoneAlt size={20} className="text-[#018378]" />
                  </a>
                  <a href="mailto:kushaldhakal216@gmail.com">
                    <FaEnvelope size={20} className="text-[#018378]" />
                  </a>
                  <a href="https://www.linkedin.com/in/kushal-dhakal ">
                    <FaLinkedinIn size={20} className="text-[#018378]" />
                  </a>
                  <a href="https://www.instagram.com/kushal.dhakall?igsh=MTY0aHU2d28xNzR1NA==">
                    <FaInstagram size={20} className="text-[#018378]" />
                  </a>
                </div>
              </div>
              <div className=" mt-3 p-2 w-80 h-128 rounded-2xl shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">
                <Image
                  src={sbpp}
                  alt="down arrow"
                  className="rounded-3xl p-1"
                  width={320}
                  priority
                />

                <div className="flex text-2xl font-bold justify-center">
                  सुनिल भट्टराई
                  <a href="https://sunil-bhattarai.com.np/">
                    <Image
                      src={link}
                      alt="down arrow"
                      className="rounded-full ml-2.5"
                      width={25}
                      priority
                    />
                  </a>
                </div>
                <div className="text-[#303030]  flex justify-center pr-9">
                  वेबसाइट निर्माता
                </div>
                <div className="flex mt-2 gap-4 justify-center ">
                  <a href="tel:+9779866325865">
                    <FaPhoneAlt size={20} className="text-[#018378]" />
                  </a>
                  <a href="mailto:sunil9866325865@gmail.com">
                    <FaEnvelope size={20} className="text-[#018378]" />
                  </a>
                  <a href="https://www.linkedin.com/in/sunil-bhattaraii/ ">
                    <FaLinkedinIn size={20} className="text-[#018378]" />
                  </a>
                  <a href="https://www.instagram.com/sunil._.bhattarai_?igsh=c2s0dDl3bHB6dm52">
                    <FaInstagram size={20} className="text-[#018378]" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
