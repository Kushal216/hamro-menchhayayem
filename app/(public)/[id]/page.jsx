import HomeHeading from '@/components/homepage/HomeHeading';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const page = (content) => {
  const content1 = `## नेपालको एक विद्यालय

**नेपालको एक आदर्श विद्यालय** शान्त र स्वच्छ वातावरणमा अवस्थित छ। यहाँ **अनुशासित विद्यार्थी**, *मेहनती तथा अनुभवी शिक्षक* र **सहयोगी अभिभावक**को सक्रिय सहभागिता देखिन्छ।

विद्यालयले निम्न कुरामा विशेष ध्यान दिन्छ:

* 📚 **गुणस्तरीय शिक्षा**
* 🧠 **नैतिक मूल्य र अनुशासन**
* 💻 **आधुनिक प्रविधिको प्रयोग**
* ⚽ **खेलकुद तथा अतिरिक्त क्रियाकलाप**

विद्यालयमा **पुस्तकालय**, **विज्ञान प्रयोगशाला**, र **सफा तथा सुरक्षित कक्षा कोठा** उपलब्ध छन्। यसले विद्यार्थीको सर्वाङ्गीण विकासमा महत्वपूर्ण भूमिका खेल्छ।
`;

  return (
    <>
      <div className="w-full flex flex-col justify-center px-2 relative mt-2 select-none">
        <div className="aspect-video w-full lg:w-[90%] xl:w-[80%] md:w-full relative mx-auto">
          <div className="absolute z-2 top-0 left-0 ">
            <HomeHeading
              title={'श्री गौखुरी उच्च माध्यामिक विद्यालाय'}
              color={'white'}
              fixed
            />
          </div>
          <Image
            src={'/images/image.png'}
            fill
            alt="image of something"
            className="object-cover rounded-lg"
          />
          <div className="absolute bottom-0 z-2 w-full text-center bg-[#00000040] pt-0.5 md:pt-1 text-white text-sm rounded-b-lg hover:underline hover:backdrop-blur-[1px]">
            आरु तस्बिर हेर्नुहोस &gt;&gt;
          </div>
        </div>

        <div className="mt-2">
          <div className="font-bold text-lg bg-black text-white rounded w-full px-2">
            परिचय
          </div>
          <div className="prose prose-neutral max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-4 mb-2">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-4 mb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold mt-3 mb-1">
                    {children}
                  </h3>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-6 space-y-1">{children}</ul>
                ),
              }}
            >
              {content1}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
