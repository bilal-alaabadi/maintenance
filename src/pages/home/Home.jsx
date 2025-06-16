import React from 'react'
import Banner from './Banner'
import OurProj from './OurProj'
import Wasf from './Wasf'
import { FaWhatsapp } from 'react-icons/fa'

const Home = () => {
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
    </>
  )
}

export default Home