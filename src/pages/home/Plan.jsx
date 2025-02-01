import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // استيراد الأيقونة بشكل صحيح

export const Plan = () => {
  const basicPlanFeatures = [
    "تحليل السوق",
    "تحليل حسابات البراند",
    "تحليل حسابات المنافسين",
    "تحليل SWOT",
    "تحديد الفئة المستهدفة وشخصية العميل",
    "تحديد المنصات المستخدمة",
    "تحديد خطة واستراتيجية ونوع المحتوى المستخدم لكل منصة",
    "تحديد مواعيد النشر المقترحة",
    "خطة للإعلانات الممولة",
    "تحديد الـ KPI's والنتائج المتوقعة",
    "مقترحات إضافية"
  ];

  const plans = [
    {
      title: "خطة تسويقية أساسية",
      description: "خطة متكاملة لتحليل السوق وتعزيز حضورك الرقمي.",
      features: basicPlanFeatures,
      price: "ابتداءً من 100 OMR"
    },
    {
      title: "خطة تسويقية مع مسوق إلكتروني",
      description: "خطة شاملة تشمل التسويق وإدارة الحملات بواسطة مسوق إلكتروني محترف.",
      features: [
        ...basicPlanFeatures,
        "إدارة حملات السوشيال ميديا",
        "تحسين مستمر للأداء",
        "إعداد وتحليل تقارير الأداء",
        "إدارة الإعلانات الممولة",
        "تحسين محركات البحث (SEO)",
        "إدارة العلاقات مع العملاء (CRM)"
      ]
    },
    {
      title: "خطة تسويقية مع متجر إلكتروني",
      description: "خطة تسويقية متكاملة مع إنشاء متجر إلكتروني احترافي.",
      features: [
        ...basicPlanFeatures,
        "إنشاء متجر إلكتروني احترافي",
        "تصميم واجهة مستخدم حديثة",
        "نظام دفع وتوصيل متكامل"
      ]
    },
    {
      title: "خطة تسويقية مع مسوق إلكتروني و متجر أكتروني",
      description: "خطة متقدمة تشمل كل مميزات الخطة الأساسية مع إدارة متكاملة للحملات التسويقية.",
      features: [
        ...basicPlanFeatures,
        "إدارة متكاملة لحملات السوشيال ميديا",
        "تحليل أداء متقدم باستخدام أدوات متخصصة",
        "إدارة الإعلانات الممولة على جميع المنصات",
        "تحسين محركات البحث (SEO) المتقدم",
        "إدارة علاقات العملاء (CRM) المتقدمة",
        "تقارير أداء أسبوعية وشهرية",
        "دعم فني واستشاري متخصص"
      ]
    }
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-md mx-auto mt-10" dir="rtl">
      <h1 className="text-7xl font-extrabold text-center text-black mb-8">
        خططنا التسويقية
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#5ed4e8' }}>
                {index + 1}. {plan.title}
              </h2>
              <p className="text-gray-700 text-xl mb-4">{plan.description}</p>
              <ul className="list-decimal list-inside space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-800 text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button 
  onClick={() => window.open("https://wa.me/message/NB734AMIDQODA1", "_blank")} 
  className="mt-6 bg-green-500 text-white text-sm py-2 px-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
>
  <span>تواصل معنا</span>
  <FaWhatsapp className="text-white text-lg" />
</button>


          </div>
        ))}
      </div>
    </div>
=======

export const Plan = () => {

  return (
   <></>
>>>>>>> 81152128cb605215c31a108a548d8d6072fb5753
  );
};

export default Plan;
