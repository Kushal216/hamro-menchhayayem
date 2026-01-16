"use client";

import Titlebar from "@/components/ui/Titlebar";
import OurCard from "@/components/ui/OurCard";
import data from "@/app/Data/OurTeam";
import { useState } from "react";

export default function HomePage() {
  const [isAll, setIsAll] = useState(false);
  const fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum reiciendis nisi cupiditate   voluptas corporis, praesentium suscipit iste. Facilis optio illum doloremque aperiam autem debitis quaerat, enim numquam earum recusandae!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quam, neque cum quaerat laboriosam in omnis doloribus, quidem illum laborum placeat dolor non recusandae, cupiditate aperiam quasi. Sit, maxime nisi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor eligendi nostrum, excepturi at dignissimos repudiandae aliquam veritatis non molestiae dolorem totam! Obcaecati saepe eligendi beatae aut. Doloribus minima doloremque dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, totam magni asperiores error ipsa iste. Doloribus est commodi non, quod temporibus illum in quae ullam cum. Quaerat accusamus beatae aspernatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias ex delectus incidunt quibusdam tenetur! Quidem quisquam doloribus doloremque corrupti, quod suscipit! Dignissimos obcaecati veritatis rerum eligendi beatae nostrum harum fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima id quis hic quaerat! Pariatur laborum iure, molestiae ducimus nam, reprehenderit debitis quasi inventore porro, culpa dignissimos tempore quaerat recusandae.";

  const shortText = fullText.slice(0, 300) + "...";

  return (
    <>
      <div className="flex-4/5 p-4">
        <Titlebar title="परीचय" />
        <div className="py-1 pl-2 pb-3 text-xl">
          {isAll ? fullText : shortText}
          <button
            onClick={() => setIsAll(!isAll)}
            className="text-[#2eade7] underline pl-2"
          >
            {isAll ? "See Less" : "See More"}
          </button>
        </div>
        <Titlebar title="निर्माता" />

        <div className="flex justify-center gap-15">
          {data.map((item, index) => (
            <OurCard
              key={index}
              image={item.image}
              name={item.name}
              position={item.position}
              website={item.website}
              phone={item.phone}
              email={item.email}
              linkedin={item.linkedin}
              instagram={item.instagram}
            />
          ))}
        </div>
      </div>
    </>
  );
}
