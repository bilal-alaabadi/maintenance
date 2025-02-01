import React from 'react';
import img from '../assets/undraw_hello_ccwj.png'
const Storey = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          قصتنا
        </h1>

        {/* قسم الصورة والنص */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* الصورة */}
          <div className="flex justify-center">
            <img
              src={img} // استبدل بمسار الصورة الفعلي
              alt="قصتنا"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>

          {/* النص */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">من نحن؟</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              نحن فريق من المحترفين الملتزمين بتحويل الأفكار إلى واقع ملموس. بدأنا رحلتنا برؤية واضحة: تقديم حلول تكنولوجية مبتكرة تساعد الشركات والأفراد على النمو والنجاح.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              نؤمن بأن التكنولوجيا هي المحرك الرئيسي للتغيير، ولذلك نحرص على تقديم خدمات تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storey;