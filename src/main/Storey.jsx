import React from 'react';
import img from '../assets/undraw_trip_rh66.png'
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

        {/* قسم المهمة والرؤية */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            مهمتنا ورؤيتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* المهمة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">مهمتنا</h3>
              <p className="text-lg text-gray-700">
                تقديم حلول تكنولوجية مبتكرة تساعد الشركات والأفراد على تحقيق أهدافهم.
              </p>
            </div>

            {/* الرؤية */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">رؤيتنا</h3>
              <p className="text-lg text-gray-700">
                أن نكون الشريك المفضل في مجال التكنولوجيا والتصميم في المنطقة.
              </p>
            </div>
          </div>
        </div>

        {/* قسم القيم */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            قيمنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* الابتكار */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الابتكار</h3>
              <p className="text-lg text-gray-700">
                نبحث دائمًا عن طرق جديدة لتحسين خدماتنا.
              </p>
            </div>

            {/* الجودة */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الجودة</h3>
              <p className="text-lg text-gray-700">
                نلتزم بأعلى معايير الجودة في كل ما نقدمه.
              </p>
            </div>

            {/* الشفافية */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">الشفافية</h3>
              <p className="text-lg text-gray-700">
                نعامل عملائنا بصدق ووضوح.
              </p>
            </div>

            {/* التعاون */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">التعاون</h3>
              <p className="text-lg text-gray-700">
                نعمل مع عملائنا كفريق واحد لتحقيق النجاح.
              </p>
            </div>
          </div>
        </div>

        {/* دعوة للعمل (Call to Action) */}
        <div className="mt-20 text-center">

        </div>
      </div>
    </div>
  );
};

export default Storey;