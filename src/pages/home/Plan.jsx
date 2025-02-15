import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export const Plan = () => {

  const plans = [
    {
      "title": "الخطة التقليدية",
      "price": "49 ر.ع شهريًا",
      "description": "الخطة المثالية لإعداد خطة تسويقية واضحة وإنشاء محتوى جذاب.",
      "features": [
        "وضع خطة تسويقية احترافية.",
        "تصميم أفكار منشورات لحسابات السوشيال ميديا."
      ]
    },    
    {
      title: "الخطة الأساسية",
      price: "99 ر.ع شهريًا",
      description: "الخطة المثالية لإدارة حسابات السوشيال ميديا بشكل أساسي.",
      features: [
        "خطة تسويقية.",
        "إدارة حسابات السوشيال ميديا.",
        "تصميم 10 منشورات شهريًا.",
        "إعداد وتحليل التقارير الشهرية."
      ],
    },
    {
      title: "الخطة الاحترافية",
      price: "249 ر.ع شهريًا",
      description: "الخيار المثالي للشركات التي تحتاج إلى استراتيجيات تسويقية أكثر احترافية وزيادة التفاعل مع الجمهور.",
      features: [
        "كل ميزات الخطة الأساسية.",
        "إدارة الحملات الإعلانية المدفوعة.",
        "كتابة محتوى تسويقي متكامل.",
        "دراسة وتحليل المنافسين."
      ],
      isMostPopular: true // إضافة خاصية لتحديد أن هذه الخطة هي الأكثر طلبًا
    },
    {
      title: "الخطة المتقدمة",
      price: "448 ر.ع شهريًا",
      description: "لأصحاب المشاريع الكبيرة الذين يبحثون عن نتائج قوية وهيمنة رقمية في السوق.",
      features: [
        "كل ميزات الخطة الاحترافية.",
        "استراتيجية تسويق رقمي مخصصة.",
        "تحسين محركات البحث (SEO).",
        "إدارة الحملات الإعلانية المتقدمة.",
        "تحسين معدل التحويل (CRO)."
      ],
    },
];


  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-md mx-auto mt-10 max-w-8xl pt-28 pb-48" dir="rtl">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-black mb-8">
        خططنا التسويقية
      </h1>
      <div className="flex flex-col gap-6 md:flex-row">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-lg flex flex-col justify-between min-h-[550px] transition-all transform hover:scale-105 overflow-hidden relative"
          >
            {/* إضافة علامة "الأكثر طلبًا" إذا كانت الخطة هي الاحترافية */}
            {plan.isMostPopular && (
              <div 
                className="absolute top-0 left-0 bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-br-lg"
                style={{ zIndex: 1 }}
              >
                الأكثر طلبًا
              </div>
            )}
            <div>
              <h2 
                className="text-2xl md:text-4xl font-bold mb-4 text-white text-center" 
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #172C63, #079CBA)', // تدرج لوني من اليسار إلى اليمين
                  borderRadius: '20px', // حواف منحنية لجميع الزوايا
                  padding: '16px' 
                }}
              >
                {plan.title}
              </h2>
              <p className="text-gray-900 text-lg md:text-xl mb-4 ">{plan.description}</p>
              <p className="text-xl md:text-2xl font-semibold mb-4 text-custom-blue">
                {plan.price}
              </p>
              <ul className="list-decimal list-inside space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-800 text-base md:text-lg flex items-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={() => window.open("https://wa.me/message/NB734AMIDQODA1", "_blank")} 
              className="mt-6 bg-green-500 text-white text-sm md:text-base py-2 px-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>تواصل معنا</span>
              <FaWhatsapp className="icon-whatsapp text-white text-lg" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;