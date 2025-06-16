import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="pb-48 pt-28 bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* استخدام grid لتقسيم الصفحة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* القسم الأيسر: النص */}
          <div dir='rtl'>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              صناعة المواقع الإلكترونية
            </h1>

            {/* وصف الخدمة */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                نقدم خدمة متكاملة لتصميم وتطوير المواقع الإلكترونية التي تلبي احتياجات عملك. سواء كنت بحاجة إلى موقع شخصي، موقع تجاري، أو منصة متكاملة، نحن هنا لمساعدتك.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                نستخدم أحدث التقنيات وأفضل الممارسات لضمان أن موقعك سريع، آمن، وسهل الاستخدام. نحرص على تقديم تجربة مستخدم ممتازة وتصميم عصري يعكس هوية علامتك التجارية.
              </p>
            </div>

            {/* ميزات الخدمة */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">ميزات الخدمة</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">تصميم عصري وجذاب</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">تحسين محركات البحث (SEO)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">توافق مع جميع الأجهزة (Responsive Design)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✔</span>
                  <span className="text-lg text-gray-700">دعم فني متكامل</span>
                </li>
              </ul>
            </div>

            {/* دعوة للعمل (Call to Action) */}
            <div className="mt-12 text-center md:text-left"><Link to='/Kdmh'>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                اطلب الخدمة الآن
              </button>
            </Link>
            </div>
          </div>

          {/* القسم الأيمن: الصورة */}
          {/* <div className="flex justify-center md:justify-end">
            <img
              src={img}
              alt="صناعة المواقع الإلكترونية"
              className="w-full max-w-md rounded-lg "
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;