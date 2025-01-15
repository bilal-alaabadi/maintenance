import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Footer = () => {
  return (
    <> 
      <footer className='section__container footer__container'>
      <div className=''>
  <h4 className='text-xl font-bold text-gray-800 mb-4'>معلومات الاتصال</h4>
  <p className='text-gray-600 flex items-center gap-2 mb-3'> {/* إضافة مسافة بين الفقرات */}
    <span><i className="ri-map-pin-2-fill text-primary"></i></span>
    عمان
  </p>
  <p className='text-gray-600 flex items-center gap-2 mb-3'> {/* إضافة مسافة بين الفقرات */}
    <span><i className="ri-mail-fill text-primary"></i></span>
    <a href="mailto:royasoftwre@gmail.com" className="hover:text-primary transition-colors duration-300">
      royasoftwre@gmail.com
    </a>
  </p>
  <a
    href="https://wa.me/96877423855"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 flex items-center ml-2"
  >
    <FaWhatsapp className="text-green-500 mr-2" />
    +968 77423855
  </a>
</div>


        <div className='footer__col'>
          <h4 className='text-xl font-bold text-gray-800 mb-4'>الشركة</h4>
          <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'></a>
          <Link to="/storey">
            <a className='text-gray-600 hover:text-primary transition-colors duration-300'>قصتنا</a>
          </Link>
          <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>العمل معنا</a>
          <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>تطوير مواقع</a>
        </div>

        <div className='footer__col'>
          <h4 className='text-xl font-bold text-gray-800 mb-4'>روابط مفيدة</h4>
          <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>مساعدة</a>
          <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>الشروط والأحكام</a>
          <a href="/" className='text-gray-600 hover:text-primary transition-colors duration-300'>سياسة الخصوصية</a>
        </div>

        <div className=''>
          <h4 className='text-xl font-bold text-gray-800 mb-4'>الحسابات</h4>
          <div className='instagram__grid grid grid-cols-3 gap-2'>
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/roya_sow/"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white hover:opacity-90'
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </footer>

      <div className='footer__bar bg-gray-800 text-white text-center py-4'>
        حقوق النشر © 2025 بواسطة رؤيا. جميع الحقوق محفوظة.
      </div>
    </>
  )
}

export default Footer
