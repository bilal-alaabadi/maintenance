import React from "react";
import { FaLaptop, FaMobileAlt, FaSearchDollar, FaShippingFast, FaCogs, FaUsers } from "react-icons/fa";
import img from "../../assets/undraw_modern-design_yur1.png";

const features = [
  { icon: <FaLaptop className="text-blue-500 mr-2" />, text: "تصميم متجر إلكتروني مخصص يعكس هوية علامتك التجارية." },
  { icon: <FaMobileAlt className="text-green-500 mr-2" />, text: "تطوير متجر متجاوب يعمل بسلاسة على جميع الأجهزة." },
  { icon: <FaUsers className="text-purple-500 mr-2" />, text: "تحسين تجربة المستخدم (UX/UI) لزيادة معدل التحويل." },
  { icon: <FaCogs className="text-orange-500 mr-2" />, text: "إدارة المنتجات والمخزون بسهولة من لوحة تحكم مرنة." },
  { icon: <FaSearchDollar className="text-yellow-500 mr-2" />, text: "دعم أنظمة الدفع الإلكتروني المختلفة لتسهيل عمليات الشراء." },
  { icon: <FaShippingFast className="text-red-500 mr-2" />, text: "ربط ببوابات الشحن والتوصيل لعمليات لوجستية سلسة." },
  { icon: <FaUsers className="text-pink-500 mr-2" />, text: "تكامل مع وسائل التواصل الاجتماعي لجذب العملاء وزيادة المبيعات." },
  { icon: <FaCogs className="text-gray-500 mr-2" />, text: "دعم فني مستمر وتحديثات دورية للحفاظ على أداء المتجر." },
];

const OurProj = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-28 pb-48">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-6xl font-extrabold text-gray-800 text-center mb-12">تصميم متجر إلكتروني</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img src={img} alt="Modern Design" className="w-full max-w-md" />
            </div>

            <div className="text-gray-800" dir="rtl">
              <p className="mb-6 text-4xl leading-relaxed">
                نساعدك في إنشاء متجر إلكتروني احترافي يلبي احتياجات عملك، ويضمن تجربة شراء سلسة لعملائك، مع جميع الأدوات التي تحتاجها لإدارة متجرك بكفاءة.
              </p>
              <ul className="space-y-4 text-2xl">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProj;
