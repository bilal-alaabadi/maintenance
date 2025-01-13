import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // استيراد أيقونات الإنستجرام والواتساب
import img from '../assets/undraw_professor_d7zn.png'; // استيراد الصورة

const Kdmh = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* استخدام grid لتقسيم الصفحة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* القسم الأيسر: النص */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              خدماتنا
            </h1>

            {/* وصف الخدمات */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                نقدم مجموعة متنوعة من الخدمات التي تساعدك على تحقيق أهدافك. سواء كنت بحاجة إلى تصميم مواقع إلكترونية، تطوير تطبيقات، أو خدمات تسويق رقمي، نحن هنا لمساعدتك.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                نحرص على تقديم حلول مبتكرة وعالية الجودة تلبي احتياجات عملائنا. نستخدم أحدث التقنيات وأفضل الممارسات لضمان نجاح مشاريعك.
              </p>
            </div>

            {/* قائمة الخدمات */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">خدماتنا الرئيسية</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">تصميم وتطوير المواقع الإلكترونية</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">تطوير المواقع الإلكترونية</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">خدمات التسويق الرقمي</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">تحسين محركات البحث وسرعة المواقع (SEO)</span>
                </li>
              </ul>
            </div>

            {/* معلومات التواصل */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">تواصل معنا</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 flex items-center">
                  <span className="font-semibold">رقم الهاتف:</span>{' '}
                  <a
                    href="https://wa.me/96877423855" // رابط الواتساب
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center ml-2"
                  >
                    <FaWhatsapp className="text-green-500 mr-2" /> {/* أيقونة الواتساب */}
                    +968 77423855
                  </a>
                </p>
                <p className="text-lg text-gray-700 flex items-center">
                  <span className="font-semibold">الإنستجرام:</span>{' '}
                  <a
                    href="https://www.instagram.com/roya_sow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center ml-2"
                  >
                    <FaInstagram className="text-pink-600 mr-2" /> {/* أيقونة الإنستجرام */}
                    roya_sow
                  </a>
                </p>
              </div>
            </div>

            {/* دعوة للعمل (Call to Action) */}
            <div className="mt-12 text-center md:text-left">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                تواصل معنا الآن
              </button>
            </div>
          </div>

          {/* القسم الأيمن: الصورة */}
          <div className="flex justify-center md:justify-end">
            <img
              src={img}
              alt="خدماتنا"
              className="w-full  rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kdmh;