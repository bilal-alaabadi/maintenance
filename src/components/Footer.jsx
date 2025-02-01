import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
<<<<<<< HEAD
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
            href="https://wa.me/message/NB734AMIDQODA1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 flex items-center ml-2"
          >
            <FaWhatsapp className="text-green-500 mr-2" />
            +968 97596380
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
              href="https://www.facebook.com/profile.php?id=61572348878996&locale=ar_AR"
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
              <FaXTwitter className="text-xl" />
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

            {/* Snapchat Icon */}
            <a
              href="https://www.snapchat.com/add/royasow?invite_id=USv8Bn1q&locale=ar_OM&share_id=pTUtLcyrTLauS5GWml_3bg&sid=f725486d26564b92a6f7fb1098eb7cef"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white hover:bg-yellow-500 transition-colors duration-300'
              aria-label="Snapchat"
            >
              <FaSnapchat className="text-xl" />
            </a>

            {/* TikTok Icon */}
            <a
              href="https://www.tiktok.com/@roya.sow?_t=ZS-8tEBXUbykem&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300'
              aria-label="TikTok"
            >
              <FaTiktok className="text-xl" />
            </a>
          </div>
        </div>
      </footer>

      <div className='footer__bar bg-gray-800 text-white text-center py-4'>
        حقوق النشر © 2025 بواسطة رؤيا. جميع الحقوق محفوظة.
      </div>
    </>
  );
=======
    return (
        <footer>
            <div className="container">
                <p className="mb-2">© 2025 وصل - خدمات فورية بجودة عالية.</p>
                <p className="mb-3">
                    <a href="#">سياسة الخصوصية</a> |
                    <a href="#">الشروط والأحكام</a>
                </p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/wasll_link" target="_blank" className="text-white mx-2">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="https://twitter.com/wasll_link" target="_blank" className="text-white mx-2">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                    <a href="https://www.linkedin.com/company/wasll" target="_blank" className="text-white mx-2">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
>>>>>>> 81152128cb605215c31a108a548d8d6072fb5753
};

export default Footer;