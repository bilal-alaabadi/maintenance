import React from "react";
import { FaFire, FaBolt, FaTools, FaUsers, FaWrench, FaShippingFast, FaCheck, FaCrown, FaSearchDollar } from "react-icons/fa";
import beforeImage from "../../assets/Screenshot 2025-06-13 185032.png";
import afterImage from "../../assets/Screenshot 2025-06-1س3 185032.png";

// أبرز الأعطال
const commonIssues = [
  {
    category: "أفران الغاز",
    icon: <FaFire className="text-red-500 text-2xl" />,
    issues: [
      "عدم اشتعال الموقد",
      "ضعف اللهب",
      "تسرب الغاز",
      "مشاكل في منظم الحرارة"
    ]
  },
  {
    category: "أفران الكهرباء",
    icon: <FaBolt className="text-yellow-500 text-2xl" />,
    issues: [
      "عدم تسخين",
      "مشاكل في المؤقت",
      "أعطال في السخانات",
      "أعطال لوحة التحكم"
    ]
  },
  {
    category: "العيون والمواقد",
    icon: <FaTools className="text-blue-500 text-2xl" />,
    issues: [
      "كسر الزجاج",
      "مشاكل في الإشعال",
      "أعطال في الحساسات",
      "تلف المنظمات"
    ]
  }
];

// لماذا نحن؟
const whyUs = [
  { icon: <FaUsers className="text-purple-500" />, text: "فريق محترف" },
  { icon: <FaWrench className="text-green-500" />, text: "قطع غيار أصلية" },
  { icon: <FaShippingFast className="text-blue-500" />, text: "سرعة الوصول" },
  { icon: <FaCheck className="text-red-500" />, text: "ضمان على الصيانة" },
  { icon: <FaSearchDollar className="text-yellow-500" />, text: "أسعار تنافسية" }
];

const OurProj = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pt-28 md:pb-48" dir="rtl">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-800 text-center mb-8 md:mb-12">صيانة وإصلاح الأجهزة المنزلية باحترافية</h1>
        
        {/* قسم أبرز الأعطال */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6 md:mb-8">أبرز الأعطال التي نخدمها</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {commonIssues.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-2 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">{item.category}</h3>
                <ul className="space-y-1 sm:space-y-2 text-base sm:text-lg md:text-xl text-gray-700">
                  {item.issues.map((issue, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <span className="ml-2">•</span> {issue}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الخدمة الذهبية */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <FaCrown className="text-yellow-500 text-2xl sm:text-3xl md:text-4xl mr-2" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">الخدمة الذهبية ✨</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-gray-700 leading-relaxed">
                "تنظيف عميق، صيانة شاملة، تلميع كامل – كأن جهازك جديد!"
              </p>
              <a 
                href="https://wa.me/96896294630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-base sm:text-lg md:text-xl transition duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-1 sm:gap-2">
                  طلب الخدمة الذهبية
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" sm:w-5 sm:h-5 viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-xs sm:text-sm"> 96294630</span>
                </button>
              </a>
            </div>
            
            <div className="flex justify-center">
              <div className="border-2 border-yellow-300 p-1 sm:p-2 rounded-lg bg-white shadow-sm">
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={afterImage} 
                      alt="فرن بعد الصيانة" 
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover transform transition duration-500 hover:scale-110"
                    />
                    <p className="text-center mt-1 sm:mt-2 text-sm sm:text-base md:text-lg font-medium">بعد الصيانة</p>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src={beforeImage} 
                      alt="فرن قبل الصيانة" 
                      className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover transform transition duration-500 hover:scale-110"
                    />
                    <p className="text-center mt-1 sm:mt-2 text-sm sm:text-base md:text-lg font-medium">قبل الصيانة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم لماذا نحن؟ */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6 md:mb-8">لماذا تختارنا؟</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {whyUs.map((item, index) => (
              <div key={index} className="bg-gray-50 p-2 sm:p-3 md:p-4 rounded-lg text-center hover:bg-white hover:shadow-md transition-all duration-300">
                <div className="flex justify-center mb-1 sm:mb-2 text-xl sm:text-2xl md:text-3xl">
                  {item.icon}
                </div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProj;