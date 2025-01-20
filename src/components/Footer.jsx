import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // استيراد أيقونة X الجديدة
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>
        <div className=''>
          <h4 className='text-xl font-bold text-gray-800 mb-4'>معلومات الاتصال</h4>
          <p className='text-gray-600 flex items-center gap-2 mb-3'>
            <span><i className="ri-map-pin-2-fill text-primary"></i></span>
            عمان
          </p>
          <p className='text-gray-600 flex items-center gap-2 mb-3'>
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
          <div className='social__icons flex space-x-4'>
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/profile.php?id=61572463585628&locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300'
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/roya-sow-87b673347/"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-300'
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>

            {/* X (Twitter) Icon */}
            <a
              href="https://x.com/roya_sow"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300'
              aria-label="Twitter"
            >
              <FaXTwitter className="text-xl" /> {/* أو <span className="text-xl font-bold">X</span> */}
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/roya_sow/"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white hover:opacity-90 transition-opacity duration-300'
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </footer>

      <div className='footer__bar bg-gray-800 text-white text-center py-4'>
        حقوق النشر © 2025 بواسطة رؤيا. جميع الحقوق محفوظة.
      </div>
    </>
  );
};

export default Footer;