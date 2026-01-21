import Image from "next/image";
import photo from "@/public/images/image.png";
import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa";
import Titlebar from "@/components/ui/Titlebar";
import RouteTitle from "@/components/layout/RouteTitle";
import Audio from "@/components/ui/Audio";
export default function HomePage() {
  const introduction =
    "मेन्छयायेम गाउँपालिका, कोशी प्रदेश स्थित तेह्रथुम जिल्लाको उत्तर पूर्वी गाउँपालिका हो । यो गाउँपालिकाको क्षेत्रफल ७०.०९ वर्ग कि. मि. मा फैलिएको छ । दुर्गम तर मनोरम धरातलीय बनोट, उच्च भू–भाग, खोला नाला र समथल बेसी र लालीगुराँसको घना जंगलले यस गाउँपालिकाको पर्यटकीय आकर्षण उत्तिकै बढेको पाइन्छ । यो गाउँपालिका इतिहासमा पनि प्रसिद्ध रहेको किम्बदन्तीको भनाइ छ । प्राचीन समयमा तेनाहाङ राजाको दरबार, प्रसिद्ध धार्मिक स्थल गौखुरी धाम, मेन्छयायेम डाँडालगायत ऐतिहासिक तथा धार्मिक स्थलले यस गाउँपालिकाको परिचयलाई थप फराकिलो बनाएको छ । राज्यको पुनर्संरचनाअनुसार स्थानीय तहको नाम स्थानीय पहिचान, सांस्कृतिक, भाषिक र जातीय सभ्यताका आधारमा नामाकरण गरिएको छ । जसअनुसार यस गाउँपालिकाको नामाकरण लिम्बू धर्म, संस्कृतिका आधारमा नामाकरण गरिएको छ । किम्बदन्तीका अनुसार मेन्छयायेमलाई तीन किसिमले परिभाषित गरिएको छ । तीन किसिमकै परिभाषा मेन्छयायेम डाँडामा आधारित छ । ‘मेन्छया’ र ‘येप’ को अपभ्रंस भएर ‘मेन्छयायेम’ रहन गएको भन्ने किम्बदन्तीको भनाइ छ । मेन्छयायेम डाँडा तेह्रथुम, संखुवासभा र ताप्लेजुङ, तीन जिल्लाको संगम स्थलमा अवस्थित छ । धार्मिक तथा सांस्कृतिक महत्व बोकेको यही डाँडाको अर्थका आधारमा यहाँको चली आएका धर्मरसंस्कृति र रीतिरिवाज अनुसार मेन्छयायेम रहन गएको हो ।";

  return (
    <>
      <RouteTitle title={"पालिका विवरण"} />
      <div className="flex-4/5 ">
        <div className="lg:mt-5">
          <Titlebar title="मेन्छयायेम परीचय" />
          {/* <Paragraph text={introduction} limit={300} /> */}
          <div className="px-4 py-2 md:text-xl text-justify ">
            {introduction}
          </div>
        </div>

        <Audio />
      </div>

      <Titlebar title="REPRESENTATIVES" />

      <div className="flex justify-center gap-15">
        <div className=" mt-3 p-2 w-75 h-100 rounded-2xl  shadow-lg ">
          <Image
            src={photo}
            alt="down arrow"
            className="rounded-3xl p-1 aspect-square object-cover "
            priority
          />

          <div className="flex text-2xl font-bold justify-center">
            Yadav bahadur Khapung
          </div>
          <div className="text-[#303030]  flex justify-center">aadhakshya</div>
          <div className="flex mt-2  gap-4 justify-center ">
            <a href="tel:+9779812345678">
              <FaPhoneAlt size={20} className="text-[#018378]" />
            </a>
            <a
              href="mailto:aaaaaaaaaaaaaaaaa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={20} className="text-[#018378]" />
            </a>
            <a
              href="https://www.facebook.com/in/yadabkhapung "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} className="text-[#018378]" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-15">
        <div className=" mt-3 p-2 w-60 h-80 rounded-2xl  shadow-lg ">
          <Image
            src={photo}
            alt="down arrow"
            className="rounded-3xl p-1 aspect-square object-cover "
            priority
          />

          <div className="flex text-xl font-bold justify-center">
            Yadav Khapung
          </div>
          <div className="text-[#303030]  flex justify-center">aadhakshya</div>
          <div className="flex mt-2  gap-4 justify-center ">
            <a href="tel:+9779812345678">
              <FaPhoneAlt size={20} className="text-[#018378]" />
            </a>
            <a
              href="mailto:aaaaaaaaaaaaaaaaa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={20} className="text-[#018378]" />
            </a>
            <a
              href="https://www.facebook.com/in/yadabkhapung "
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} className="text-[#018378]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
