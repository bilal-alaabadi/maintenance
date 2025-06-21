import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import OurProj from './OurProj'
import Wasf from './Wasf'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

const Home = () => {
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    // عرض الرسالة كل 5 ثوانٍ
    const interval = setInterval(() => {
      setShowContact(true)
      
      // إخفاء الرسالة تلقائياً بعد 3 ثوانٍ
      setTimeout(() => {
        setShowContact(false)
      }, 3000)
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Banner />
      <Wasf />
      <OurProj />
      
      {/* زر واتساب عائم على اليمين */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <div className="relative group">
          <a 
            href="https://wa.me/96896294630" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white w-16 h-16 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110"
            aria-label="تواصل عبر واتساب"
          >
            <FaWhatsapp className="text-3xl" />
          </a>
          <div className="absolute right-20 bottom-1/2 translate-y-1/2 bg-white text-green-600 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap hidden group-hover:block border border-green-100">
            <span className="font-bold">تواصل معنا</span>
            <div className="text-sm">96896294630</div>
          </div>
        </div>
      </div>

      {/* رسالة رقم التواصل في منتصف الشاشة */}
      {showContact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-md w-full mx-4 relative border-2 border-green-500 animate-fadeIn">
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-2 left-2 text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">تواصل معنا</h3>
              <p className="text-gray-700 mb-4">نحن هنا لمساعدتك في أي استفسار</p>
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <p className="text-xl font-bold text-green-800">96896294630</p>
              </div>
              <a 
                href="https://wa.me/96896294630" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2 rounded-lg transition-all"
              >
                <FaWhatsapp className="ml-2" />
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home