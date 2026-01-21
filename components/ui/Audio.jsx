"use client";
import React, { useState } from "react";

function Audio() {
  const [anthem, setAnthem] = useState("false");
  const song = `श्रीझुङ, पौठाक, मोराहाङ धर्ती गौरवशाली
गाउँपालिका मेन्छयायेमबासी हामी हौं नेपाली
बहुजाती, भाषा, धर्म संस्कृती हाम्रो पहिचान
गौखुरी धाम, इपुङ झरना सम्पदा छन् महान
मेन्छयायेम डाँडा, मुराहाङ ओडार ऐतिहासिक
ताङमाया, खोरुङ्गा, सपुवा खोला बगेका सलल
गुराँस फुल्ने सुन्दर लेक प्रकृतिको यो अमुल्य देन
युगौं युग अटलभूमी जय जय जय मेन्छयायेम
                    - विव्णु कुमार खापुङ्ग`;

  function handleClick() {
    setAnthem((prev) => !prev);
  }

  return (
    <div>
      <div className="flex justify-center ">
        <div className="w-full text-center  border-black/30 border rounded-2xl shadow-lg p-3 m-3 md:w-110 ">
          <div className="text-[#010BB2]  text-2xl pb-2 font-bold underline">
            मेन्छयायेम गान
          </div>
          {!anthem ? (
            <>
              <div
                onClick={handleClick}
                className="cursor-pointer flex   rounded  justify-center "
              >
                <pre className="whitespace-pre-wrap lg:text-lg text-center leading-relaxed py-1 pl-2 pb-3 md:text-xl inline-block ">
                  {song}
                </pre>
              </div>
            </>
          ) : (
            <>
              <button onClick={handleClick} 
              className="hover:underline hover:text-blue-500"
                              >मेन्छयायेम गान पढ्नुहोस</button>
            </>
          )}

          <div className="flex justify-center mt-2">
            <audio controls>
              <source src="/audio/menchhayayem.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio;
