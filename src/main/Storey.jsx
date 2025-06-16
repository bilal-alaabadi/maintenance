import React from 'react';
import img from '../assets/Leonardo_Phoenix_10_A_group_of_four_Omani_maintenance_workers_0.jpg'
import { FaTools, FaShieldAlt, FaLightbulb, FaHandshake, FaCogs, FaUsers } from 'react-icons/fa';

const Storey = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          قصة تأسيسنا
        </h1>

        {/* قسم الصورة والنص */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* الصورة */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="فريق الصيانة"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>

          {/* النص */}
          <div className="space-y-8" dir='rtl'>
            <h2 className="text-3xl font-bold text-gray-800">من نحن؟</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              نحن فريق من الفنيين المتخصصين في صيانة وإصلاح الأجهزة المنزلية، بدأنا رحلتنا عام 2010 بهدف تقديم خدمات صيانة بجودة عالية وسرعة في الأداء.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              على مر السنين، اكتسبنا خبرة واسعة في التعامل مع كافة أنواع أعطال الأفران والمواقد، وأصبحنا الخيار الأول للعديد من العملاء الذين يثقون بخبرتنا وجودة خدمتنا.
            </p>
          </div>
        </div>

        {/* قسم المهمة والرؤية */}
        <div className="mt-20" dir='rtl'>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            مهمتنا ورؤيتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* المهمة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaTools className="text-blue-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">مهمتنا</h3>
              <p className="text-lg text-gray-700">
                تقديم حلول صيانة وإصلاح فعالة تضمن استمرارية عمل أجهزتكم المنزلية بأعلى كفاءة.
              </p>
            </div>

            {/* الرؤية */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaShieldAlt className="text-green-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
              <p className="text-lg text-gray-700">
                أن نكون مركز الصيانة المعتمد الأول في المنطقة بمعايير الجودة والكفاءة.
              </p>
            </div>
          </div>
        </div>

        {/* قسم القيم */}
        <div className="mt-20" dir='rtl'>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            قيمنا الأساسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* الخبرة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaCogs className="text-red-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الخبرة</h3>
              <p className="text-lg text-gray-700">
                فريق فني مدرب بأعلى المستويات لضمان الإصلاح الصحيح من المرة الأولى
              </p>
            </div>

            {/* الجودة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaLightbulb className="text-yellow-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الجودة</h3>
              <p className="text-lg text-gray-700">
                نستخدم قطع غيار أصلية مع ضمان على جميع أعمالنا
              </p>
            </div>

            {/* السرعة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-blue-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">السرعة</h3>
              <p className="text-lg text-gray-700">
                وصول سريع  لضمان عدم تعطيل حياتكم اليومية
              </p>
            </div>

            {/* الثقة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <FaHandshake className="text-green-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الثقة</h3>
              <p className="text-lg text-gray-700">
                شفافية في التقييم والتكلفة قبل البدء بأي عمل
              </p>
            </div>
          </div>
        </div>

        {/* دعوة للعمل */}
<div className="mt-20 text-center bg-blue-600 p-12 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-white mb-6">هل تحتاج إلى خدمة صيانة؟</h2>
  <p className="text-xl text-blue-100 mb-8">فريقنا جاهز لمساعدتك في أي وقت!</p>
<a 
  href="https://wa.me/96896294630" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-50 transition duration-300 inline-block"
>
  تواصل معنا عبر واتساب: +968 96294630
</a>
</div>
      </div>
    </div>
  );
};

export default Storey;