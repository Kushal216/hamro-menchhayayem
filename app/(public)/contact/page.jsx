'use client';
import React from 'react';

export default function ContactsPage() {
  const hospital = [
    {
      institute: 'मेन्छयायेम अस्पताल',
      contact_person: 'हस्पिटल रिसेप्सनिस्ट',
      contact_no: '',
    },
    {
      institute: 'बिपी कोइराला स्वास्थ्य विज्ञान प्रतिष्ठान(घोपा)',
      contact_person: 'ग्राहक प्रतिनिधी',
      contact_no: '025-525555',
    },
    {
      institute: 'तेह्रथुम जिल्ला अस्पताल',
      contact_person: 'ग्राहक प्रतिनिधी',
      contact_no: '026-460188',
    },
  ];

  const palika = [
    {
      institute: 'अध्यक्ष',
      contact_person: 'यादव बहादुर खापुङ्ग',
      contact_no: '9812345678',
    },
    {
      institute: 'उपाध्यक्ष',
      contact_person: 'गीतादेवि तिम्सिना गाैतम',
      contact_no: '9852083777',
    },
    {
      institute: ' ६ न. वडाध्यक्ष/प्रवक्ता',
      contact_person: 'प्रदिप कुमार बुढाथोकी',
      contact_no: '9842220782',
    },
    {
      institute: 'प्रमूख प्रशासकीय अधिकृत',
      contact_person: 'दिलकुमार अधिकारी',
      contact_no: '9852082777',
    },
    {
      institute: 'सूचना प्रविधि अधिकृत (सूचना अधिकारी)',
      contact_person: 'इश्वर भट्टराई',
      contact_no: '9843335861',
    },
    {
      institute: '१ न. वडाध्यक्ष',
      contact_person: 'डम्बरबहादुर लिम्बू',
      contact_no: '9842478587',
    },
    {
      institute: ' १ न. वडा सचिव',
      contact_person: 'नेत्र राई',
      contact_no: '9842254788',
    },
    {
      institute: '२ न. वडाध्यक्ष',
      contact_person: 'रामबहादुर लिम्बू',
      contact_no: '9861630096',
    },
    {
      institute: ' २ न. वडा सचिव',
      contact_person: 'नेत्र राई',
      contact_no: '9842254788',
    },
    {
      institute: '३ न. वडाध्यक्ष',
      contact_person: 'बिनयकुमार सुब्बा',
      contact_no: '9847808391',
    },
    {
      institute: ' ३ न. वडा सचिव',
      contact_person: 'बलराम कामत',
      contact_no: '9842400725',
    },
    {
      institute: '४ न. वडाध्यक्ष',
      contact_person: 'कविन्द्र कुमार लिम्बू',
      contact_no: '9842181569',
    },
    {
      institute: ' ४ न. वडा सचिव',
      contact_person: 'बलराम कामत',
      contact_no: '9842400725',
    },
    {
      institute: '५ न. वडाध्यक्ष',
      contact_person: 'दोजराज गौतम',
      contact_no: '9866257833',
    },
    {
      institute: ' ५ न. वडा सचिव',
      contact_person: 'तारादेवि सम्बहाङ्फे',
      contact_no: '9848567848',
    },
    {
      institute: '६ न. वडाध्यक्ष',
      contact_person: 'प्रदिपकुमार बुढाथोकी',
      contact_no: '9842220782',
    },
    {
      institute: '६ न. वडा सचिव',
      contact_person: 'अनिता जिरेल',
      contact_no: '9869122010',
    },
  ];

  const schools = [
    {
      institute: 'श्री प्रतिभा इङ्गलिस बोर्डिङ्ग स्कुल',
      contact_person: 'घनश्याम गौतम',
      contact_no: '',
    },
   {
    institute: 'श्री जनकल्याण आधारभूत विद्यालय',
    contact_person: 'निरकुमार लिम्बु',
    contact_no: '9860700671',
  },
  {
    institute: 'श्री सिद्धदेवी आधारभूत विद्यालय',
    contact_person: 'नवराज भट्टराई',
    contact_no: '9746880000',
  },
  {
    institute: 'श्री शारदा आधारभूत विद्यालय',
    contact_person: 'चन्द्रसिंह पंगाक',
    contact_no: '9811020825',
  },
  {
    institute: 'श्री जनप्रिय मा.वि. पोक्चाक',
    contact_person: 'डेनु प्रसाद गौतम',
    contact_no: '9842192913',
  },
  {
    institute: 'श्री जलकन्या आधारभूत विद्यालय',
    contact_person: 'टीका देवी दकाल',
    contact_no: '9842344653',
  },
  {
    institute: 'श्री सुवा आधारभूत विद्यालय',
    contact_person: 'मुना संयोज लिम्बु',
    contact_no: '',
  },
  {
    institute: 'श्री कालिका आधारभूत विद्यालय',
    contact_person: 'सन्तवीर लिम्बु',
    contact_no: '9860781767',
  },
  {
    institute: 'श्री युवा वर्ष आधारभूत विद्यालय',
    contact_person: 'मदन तिवारी',
    contact_no: '9842128120',
  },
  {
    institute: 'श्री श्रीजंग माध्यमिक विद्यालय',
    contact_person: 'रामऔतार मण्डल',
    contact_no: '9742295600',
  },
  {
    institute: 'श्री अशिने आधारभूत विद्यालय',
    contact_person: 'डिल्ली राम खनाल',
    contact_no: '9866222739',
  },
  {
    institute: 'श्री सिद्धदेवी आधारभूत विद्यालय',
    contact_person: 'सोमनाथ भट्टराई',
    contact_no: '9842114721',
  },
  {
    institute: 'श्री जाते आधारभूत विद्यालय',
    contact_person: 'गंगा दाहाल',
    contact_no: '9864551700',
  },
  {
    institute: 'श्री बशिष्ट आधारभूत विद्यालय',
    contact_person: 'दिपक कुमार भट्टराई',
    contact_no: '9862296675',
  },
  {
    institute: 'श्री गौखुरी मा.वि. मोराहा',
    contact_person: 'सूर्य प्रसाद गौतम',
    contact_no: '9842426055',
  },
  {
    institute: 'श्री हर्क आधारभूत विद्यालय',
    contact_person: 'दीना गुरुङ',
    contact_no: '9862205383',
  },
  {
    institute: 'श्री रत्न आधारभूत विद्यालय',
    contact_person: 'गोमा देवी गुरागाईं',
    contact_no: '9842210320',
  },
  {
    institute: 'श्री सिद्धेश्वर माध्यमिक विद्यालय',
    contact_person: 'नारायण कुमार राई',
    contact_no: '9862048708',
  },
  {
    institute: 'श्री ललित चन्द्रा आधारभूत विद्यालय',
    contact_person: 'तारा देवी लिम्बु',
    contact_no: '9844358299',
  },
  {
    institute: 'श्री पञ्चकन्या आधारभूत विद्यालय',
    contact_person: 'सुशिला आङवुहाङ',
    contact_no: '9842209671',
  },
  {
    institute: 'श्री लक्ष्मी आधारभूत विद्यालय',
    contact_person: 'भीममाया तामाङ खापुङ',
    contact_no: '9861769220',
  },
  {
    institute: 'श्री पहल गंगा बालविकास केन्द्र',
    contact_person: 'चन्द्रकला थापा',
    contact_no: '9862068145',
  },
  {
    institute: 'श्री नवज्योति बालविकास केन्द्र',
    contact_person: 'खिनमाया तामाङ',
    contact_no: '9762720887',
  },,
  ];

  const renderTable = (title, data) => (
    <div className="mb-8 ">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <table className="min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left">नाम</th>
            <th className="px-4 py-3 text-left">सम्पर्क व्यक्ति</th>
            <th className="px-4 py-3 text-left">सम्पर्क नम्बर</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-gray-100 transition-colors"
            >
              <td className="px-4 py-3 border-b border-gray-200">
                {item.institute}
              </td>
              <td className="px-4 py-3 border-b border-gray-200">
                {item.contact_person}
              </td>
              <td className="px-4 py-3 border-b border-gray-200">
                <a
                  href={`tel:+977-${item.contact_no}`}
                  className="text-purple-600 hover:underline"
                >
                  {item.contact_no}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-4 max-w-4xl mx-auto">
      {renderTable('अस्पताल', hospital)}
      {renderTable('पालिका', palika)}
      {renderTable('विद्यालय', schools)}
    </div>
  );
}


