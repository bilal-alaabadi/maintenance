import React from 'react';
import { FaInstagram, FaWhatsapp, FaTools, FaFire, FaBolt, FaStar, FaPhone, FaShieldAlt } from 'react-icons/fa';
import imge1 from "../assets/mechanic-uses-screwdriver-tighten-screws-tv.jpg";
import imge2 from "../assets/modern-kitchen-stove-natural-gas-burns-with-blue-flame-household-gas-consumption-close-up-selective-focus.jpg";
import imge3 from "../assets/service-maintenance-worker-repairing (1).jpg";
import imge4 from "../assets/small-metal-pan-stove-kitchen.jpg";
import imge5 from "../assets/washing-process-gas-cookercloseup-dirty-gas-cooker-covered-with-chemical-washing-liquid-housework-household-chores-concept.jpg";
import imge6 from "../assets/ChatGPT Image Jun 9, 2025, 11_34_21 PM.png";

const Kdmh = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8" dir='rtl'>
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            خدماتنا المتكاملة
          </h1>
          <div className="w-24 h-2 bg-yellow-500 mx-auto"></div>
        </div>

        {/* مقدمة الخدمات */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <FaTools className="inline mr-3 text-yellow-500" />
                لماذا تختار خدماتنا؟
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                نقدم خدمات صيانة متكاملة لأفران الغاز والكهرباء ومواقد الطباخ، مع ضمان أعلى معايير الجودة والأمان. فريقنا من الفنيين المتخصصين جاهز لمساعدتك في حل أي مشكلة تواجهها مع أجهزتك المنزلية.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3 flex items-center">
                  <FaShieldAlt className="mr-2" /> ضمان الجودة
                </h3>
                <p className="text-gray-700">
                  نستخدم قطع غيار أصلية ونقدم ضمان على جميع أعمال الصيانة التي نقوم بها.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={imge1} alt="صيانة الأفران" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* خدمات صيانة أفران الغاز */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <FaFire className="inline mr-3 text-red-500" />
                صيانة أفران الغاز
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">ضعف اللهب أو انقطاعه:</span> إصلاح مشاكل ضعف تدفق الغاز وتنظيف الفتحات
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">تسرب الغاز:</span> كشف التسربات وإصلاحها لضمان السلامة
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">الفرن لا يشتعل:</span> صيانة نظام الاشتعال الكهربائي
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">حرارة غير متوازنة:</span> معايرة منظم الحرارة وفحص العناصر الحرارية
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">توقف الفرن أثناء التشغيل:</span> فحص القطع الكهربائية وأجهزة الاستشعار
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">كسر زجاج الفرن:</span> استبدال الزجاج المعزول الحراري
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">باب الفرن لا يغلق:</span> تعديل أو استبدال مفصلات الباب
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">المقشط الكهربائي لا يعمل:</span> صيانة أو استبدال المحرك الكهربائي
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={imge2} alt="صيانة أفران الغاز" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* خدمات صيانة أفران الكهرباء */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <FaBolt className="inline mr-3 text-blue-500" />
                صيانة أفران الكهرباء
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">الفرن لا يسخن:</span> فحص العناصر الحرارية والوصلات الكهربائية
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">عدم انتظام الحرارة:</span> معايرة منظم الحرارة وأجهزة الاستشعار
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">الفيوز يفصل باستمرار:</span> كشف الأعطال الكهربائية وإصلاحها
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">الفرن لا يعمل نهائيًا:</span> فحص اللوحة الإلكترونية والوصلات الرئيسية
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">مشاكل الشاشة الرقمية:</span> صيانة أو استبدال لوحة التحكم
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">ضوضاء غير طبيعية:</span> فحص المراوح الداخلية والمحركات
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={imge3} alt="صيانة أفران الكهرباء" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* خدمات صيانة مواقد الطباخ */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <FaTools className="inline mr-3 text-orange-500" />
                صيانة مواقد الطباخ
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">لهب غير منتظم أو أصفر:</span> تنظيف الفتحات وتعديل خلطة الهواء والغاز
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">الاشتعال لا يعمل:</span> صيانة أو استبدال شمعات الإشعال
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">عين لا تعمل نهائيًا:</span> فحص الصمامات والموزعات
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">خروج صوت هدره أو فرقعة:</span> تعديل ضغط الغاز وتنظيف الفتحات
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">النار تنقطع أو تفصل ذاتيًا:</span> صيانة صمامات الأمان
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✔</span>
                  <span className="text-lg text-gray-700">
                    <span className="font-semibold">تلف في المقاشط:</span> استبدال المقاشط التالفة بأخرى أصلية
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={imge4} alt="صيانة مواقد الطباخ" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* الخدمة الذهبية */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-yellow-800 mb-6">
                <FaStar className="inline mr-3 text-yellow-500" />
                الخدمة الذهبية
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-lg text-gray-700 font-medium">صيانة وتنظيف عميق شامل لجميع أجزاء الجهاز</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-lg text-gray-700 font-medium">تلميع الأفران والطباخات من الداخل والخارج</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-lg text-gray-700 font-medium">فحص شامل لكفاءة التشغيل وضمان الأداء الأمثل</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-lg text-gray-700 font-medium">تقرير مفصل عن حالة الجهاز وقطع الغيار</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-lg text-gray-700 font-medium">ضمان إضافي لمدة 3 أشهر على الخدمة</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">★</span>
                  <span className="text-lg text-gray-700 font-medium">خدمة ما بعد الصيانة ومتابعة مجانية</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src={imge5} alt="الخدمة الذهبية" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* معلومات التواصل */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex flex-row-reverse">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                <FaPhone className="inline mr-3 text-green-500" />
                تواصل معنا
              </h2>
              <div className="space-y-6" >
                <p className="text-xl text-gray-700 flex items-center">
                  <span className="font-semibold ml-2">رقم الهاتف:</span>
                  <a
                    href="https://wa.me/96896294630"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center mr-2"
                  >
                    <FaWhatsapp className="text-green-500 ml-2 text-2xl" />
                    96294630
                  </a>
                </p>
                <p className="text-xl text-gray-700 flex items-center">
                  <span className="font-semibold ml-2">الإنستجرام:</span>
                  <a
                    href="https://www.instagram.com/abun_abbas?utm_source=qr&igsh=MXMweTR3eDY1OGoxMg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center mr-2"
                  >
                    <FaInstagram className="text-pink-600 ml-2 text-2xl" />
                    abun_abbas
                  </a>
                </p>
               <div className="bg-gray-100 p-6 rounded-lg mt-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">أوقات العمل:</h3>
    <div className="text-gray-700 space-y-2">
        <p>من السبت إلى الخميس</p>
        <p>الصباح إلى العصر: 8 صباحاً - 4 عصراً</p>
        <p>العصر إلى الليل: 4 عصراً - 10 مساءً</p>
        <p>الجمعة: إجازة</p>
    </div>
</div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src={imge6} alt="تواصل معنا" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kdmh;