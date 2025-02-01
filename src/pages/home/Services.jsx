import React from 'react';
import photographer from '../../assets/photographer.jpg';
import graphicDesigner from '../../assets/graphic-designer.jpg';
import engineering from '../../assets/engineering.jpg';
import programming from '../../assets/programming.jpg';
import contentWriter from '../../assets/content-writer.jpg';
import voiceover from '../../assets/voiceover.jpg';
import videoEditor from '../../assets/video-editor.jpg';
import digitalMarketing from '../../assets/digital-marketing.jpg';

const Services = () => {
  const services = [
    { id: 1, title: "التصوير الاحترافي", image: photographer, description: "جلسات تصوير للمناسبات التجارية أو الشخصية بأعلى مستوى." },
    { id: 2, title: "التصميم الإبداعي", image: graphicDesigner, description: "احصل على تصميمات مبتكرة واحترافية لمشروعك بأعلى جودة." },
    { id: 3, title: "الهندسة", image: engineering, description: "خدمات هندسية متقدمة في التصميم والتخطيط والتنفيذ." },
    { id: 4, title: "البرمجة والتطوير", image: programming, description: "تطوير وتصميم مواقع وتطبيقات مبتكرة تلبي احتياجاتك." },
    { id: 5, title: "الترجمة الاحترافية", image: contentWriter, description: "ترجمات دقيقة وسريعة لجميع اللغات بأعلى معايير الجودة." },
    { id: 6, title: "التعليق الصوتي", image: voiceover, description: "تعليق صوتي احترافي لجميع أنواع المشاريع واللغات." },
    { id: 7, title: "تحرير الفيديو", image: videoEditor, description: "مونتاج احترافي لفيديوهاتك بما يتناسب مع مشروعك." },
    { id: 8, title: "التسويق الرقمي", image: digitalMarketing, description: "استراتيجيات تسويق إلكتروني مبتكرة لزيادة انتشار علامتك التجارية." }
  ];

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">خدماتنا</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={service.image} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition-colors">
                اكتشف المزيد
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;