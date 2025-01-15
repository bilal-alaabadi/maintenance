import React from 'react';
import {
  FaCode, // برمجة خاصة
  FaLaptopCode, // تصميم مواقع انترنت
  FaShoppingCart, // تصميم متجر إلكتروني
  FaBalanceScale, // تصميم موقع مكتب محاماة
  FaSchool, // تصميم موقع مدرسة
  FaPlane, // تصميم موقع سياحي
  FaBuilding, // تصميم موقع شركة مقاولات
  FaHome, // تصميم موقع عقارات
  FaWordpress, // تصميم موقع وورد بريس
  FaBook, // تصميم الكتب والمجلات والبروفايل
  FaPalette, // تصميم الهوية التجارية
} from 'react-icons/fa';

const OurProj = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 mt-0">مشاريعنا</h1> {/* العنوان في الأعلى تمامًا */}

      {/* قسم "خدماتنا" */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">خدماتنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* خدمة 1: برمجة خاصة */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaCode className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">برمجة خاصة</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة المواقع برمجة خاصة حسب الطلب.
            </p>
          </div>

          {/* خدمة 2: تصميم مواقع انترنت */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaLaptopCode className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم مواقع انترنت</h3>
            <p className="text-gray-700 text-center">
              نحن نقدم لكم خدمة تصميم مواقع انترنت باحترافية عالية ونعتمد على أحدث وسائل تكنولوجيا تصميم المواقع الإلكترونية.
            </p>
          </div>

          {/* خدمة 3: تصميم متجر إلكتروني */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaShoppingCart className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم متجر إلكتروني</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة المتاجر الإلكترونية.
            </p>
          </div>

          {/* خدمة 4: تصميم موقع مكتب محاماة */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaBalanceScale className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع مكتب محاماة</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع الكتروني لمكاتب المحاماة والاستشارات القانونية.
            </p>
          </div> */}

          {/* خدمة 5: تصميم موقع مدرسة */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaSchool className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع مدرسة</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع الكتروني للمدارس الخاصة و المعاهد ومراكز التدريب.
            </p>
          </div> */}

          {/* خدمة 6: تصميم موقع سياحي */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaPlane className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع سياحي</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع لشركات ومكاتب السفر و السياحة.
            </p>
          </div> */}

          {/* خدمة 7: تصميم موقع شركة مقاولات */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaBuilding className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع شركة مقاولات</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع الكتروني لشركات المقاولات والانشاءات والاستشارات الهندسية و اعمال الديكور.
            </p>
          </div> */}

          {/* خدمة 8: تصميم موقع عقارات */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaHome className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع عقارات</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع الكتروني للشركات العقارية و مكاتب ادارة العقارات والوحدات العقارية و السكنات.
            </p>
          </div>

          {/* خدمة 9: تصميم موقع وورد بريس */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaWordpress className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع وورد بريس</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع الكتروني باستخدام نظام وورد بريس - نظام ادارة محتوى.
            </p>
          </div> */}

          {/* خدمة 10: تصميم موقع جوملا */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaJoomla className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم موقع جوملا</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم وبرمجة موقع الكتروني باستخدام نظام جوملا - نظام ادارة محتوى.
            </p>
          </div> */}

          {/* خدمة 11: تصميم الكتب والمجلات والبروفايل */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaBook className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم الكتب والمجلات والبروفايل</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم الكتب و المجلات والبروفايل للشركات والمؤسسات و الأفراد.
            </p>
          </div>

          {/* خدمة 12: تصميم الفيديوهات الإعلانية والموشن جرافيك */}
          {/* <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaVideo className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم الفيديوهات الإعلانية والموشن جرافيك</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم الفيديوهات الإعلانية والموشن جرافيك والمونتاج.
            </p>
          </div> */}

          {/* خدمة 13: تصميم الهوية التجارية */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <div className="flex justify-center mb-4">
              <FaPalette className="text-4xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">تصميم الهوية التجارية</h3>
            <p className="text-gray-700 text-center">
              نقدم لكم خدمة تصميم الهوية التجارية للشركات والمؤسسات.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProj;