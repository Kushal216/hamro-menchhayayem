import Titlebar from "@/components/ui/Titlebar";
import RouteTitle from "@/components/layout/RouteTitle";
import Audio from "@/components/ui/Audio";
import OurCard from "@/components/ui/OurCard";
import fetchData from '@/lib/fetchItem';
export default async function HomePage() {
const res = await fetchData('peoples');
  const { message, data } = res;
  console.log(message);

  const introduction =
    "मेन्छयायेम गाउँपालिका, कोशी प्रदेश स्थित तेह्रथुम जिल्लाको उत्तर पूर्वी गाउँपालिका हो । यो गाउँपालिकाको क्षेत्रफल ७०.०९ वर्ग कि. मि. मा फैलिएको छ । दुर्गम तर मनोरम धरातलीय बनोट, उच्च भू–भाग, खोला नाला र समथल बेसी र लालीगुराँसको घना जंगलले यस गाउँपालिकाको पर्यटकीय आकर्षण उत्तिकै बढेको पाइन्छ । यो गाउँपालिका इतिहासमा पनि प्रसिद्ध रहेको किम्बदन्तीको भनाइ छ । प्राचीन समयमा तेनाहाङ राजाको दरबार, प्रसिद्ध धार्मिक स्थल गौखुरी धाम, मेन्छयायेम डाँडालगायत ऐतिहासिक तथा धार्मिक स्थलले यस गाउँपालिकाको परिचयलाई थप फराकिलो बनाएको छ । राज्यको पुनर्संरचनाअनुसार स्थानीय तहको नाम स्थानीय पहिचान, सांस्कृतिक, भाषिक र जातीय सभ्यताका आधारमा नामाकरण गरिएको छ । जसअनुसार यस गाउँपालिकाको नामाकरण लिम्बू धर्म, संस्कृतिका आधारमा नामाकरण गरिएको छ । किम्बदन्तीका अनुसार मेन्छयायेमलाई तीन किसिमले परिभाषित गरिएको छ । तीन किसिमकै परिभाषा मेन्छयायेम डाँडामा आधारित छ । ‘मेन्छया’ र ‘येप’ को अपभ्रंस भएर ‘मेन्छयायेम’ रहन गएको भन्ने किम्बदन्तीको भनाइ छ । मेन्छयायेम डाँडा तेह्रथुम, संखुवासभा र ताप्लेजुङ, तीन जिल्लाको संगम स्थलमा अवस्थित छ । धार्मिक तथा सांस्कृतिक महत्व बोकेको यही डाँडाको अर्थका आधारमा यहाँको चली आएका धर्मरसंस्कृति र रीतिरिवाज अनुसार मेन्छयायेम रहन गएको हो ।";

  return (
    <>
      <RouteTitle title={"पालिका विवरण"} />
      <div className="flex-4/5 ">
        <div className="lg:mt-5">
          <Titlebar title="मेन्छयायेम परीचय" />
          <div className="px-4 py-2 md:text-xl text-justify ">
            {introduction}
          </div>
        </div>

        <Audio />
      </div>

      <Titlebar title="REPRESENTATIVES" />
      {/* pass img height 200*200 for small and 300*300 for large */}
      {/* pass height 60*80 for large and 75*100 for large */}
      <OurCard
        image="/images/kd-pp.jpeg"
        name="Y Khapung"
        position="alksdjf;"
        email="aaaaaaaaaaaaaaaa@gmail.com"
        phone="9812345678"
        facebook="klrej;wlierh;gtwkrhn;"
        imgHeight={250}
        imgWidth={250}
        height={450}
        width={350}
      />
      <OurCard
        image="/images/kd-pp.jpeg"
        name="Y Khapung"
        position="alksdjf;"
        email="aaaaaaaaaaaaaaaa@gmail.com"
        phone="9812345678"
        facebook="klrej;wlierh;gtwkrhn;"
        imgHeight={200}
        imgWidth={200}
        height={370}
        width={350}
      />
    </>
  );
}
