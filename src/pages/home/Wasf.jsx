import React from 'react'
import imge1 from "../../assets/pexels-rdne-4910217.jpg"
import imge2 from "../../assets/washing-process-gas-cookercloseup-dirty-gas-cooker-covered-with-chemical-washing-liquid-housework-household-chores-concept (1).jpg"
import imge3 from "../../assets/still-life-cleaning-tools.jpg"

const Wasf = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* القسم الرئيسي */}
        <div className="bg-white shadow-xl rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
                🔧 تصليح أفران الغاز في عُمان – مع واثق الخطوة
              </h1>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  أفران الغاز تحتاج بين فترة وفترة لصيانة وتصليح، عشان تظل تشتغل بكفاءة وما تتعطل فجأة وتخرب عليك الطبخ أو تسبب مشاكل. علشان كذا، وفرنا لك في <span className="font-bold text-blue-600">مشاريع واثق الخطوة المتميزة</span> خدمات متكاملة لتصليح وصيانة الأفران في كل مناطق السلطنة.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  نقدم فحص شامل لكل أنواع وماركات الأفران، سواء كانت غاز أو كهرباء، ويتم الفحص عن طريق فنيين أصحاب خبرة ومعرفة، وكلهم مؤهلين للتعامل مع مختلف الأعطال.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img 
                src={imge1} 
                alt="تصليح الأفران" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* قسم الخدمات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-blue-600 text-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden relative min-h-80 md:min-h-96">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <img 
              src={imge2} 
              alt="فني صيانة" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center bg-gradient-to-t from-blue-900/70 to-blue-600/30">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">🛠️ خدماتنا تشمل:</h2>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl pr-4 md:pr-6">
                <li className="flex items-start bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm">
                  <span>• صيانة وتصليح أفران الغاز والكهرباء</span>
                </li>
                <li className="flex items-start bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm">
                  <span>• توفير قطع غيار أصلية لكل الموديلات</span>
                </li>
                <li className="flex items-start bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm">
                  <span>• استخدام أدوات حديثة وأساليب متطورة</span>
                </li>
                <li className="flex items-start bg-white/10 p-2 md:p-3 rounded-lg backdrop-blur-sm">
                  <span>• خدمة سريعة لكل ولايات عُمان</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden relative min-h-80 md:min-h-96">
            <img 
              src={imge3} 
              alt="قطع غيار" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-center bg-gradient-to-t from-gray-900/40 to-white/30">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 md:mb-6 drop-shadow-md">✅ لماذا نتميز؟</h2>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg lg:text-xl pr-4 md:pr-6">
                <li className="flex items-start bg-white/80 p-2 md:p-3 rounded-lg backdrop-blur-sm text-gray-800">
                  <span>• فريق فني محترف وذو خبرة واسعة</span>
                </li>
                <li className="flex items-start bg-white/80 p-2 md:p-3 rounded-lg backdrop-blur-sm text-gray-800">
                  <span>• ضمان على جميع أعمال الصيانة</span>
                </li>
                <li className="flex items-start bg-white/80 p-2 md:p-3 rounded-lg backdrop-blur-sm text-gray-800">
                  <span>• أسعار تنافسية وجودة عالية</span>
                </li>
                <li className="flex items-start bg-white/80 p-2 md:p-3 rounded-lg backdrop-blur-sm text-gray-800">
                  <span>• سرعة في الاستجابة والتنفيذ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wasf