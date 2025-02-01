import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/ro.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed-nav-bar w-full bg-white'>
      <nav className='max-w-screen-2xl mx-auto px-10 py-4 flex justify-between items-center'>
        {/* الجزء الأيسر: روابط التنقل (يظهر فقط على الشاشات الكبيرة) */}
        <ul className='hidden md:flex space-x-8 font-black text-2xl'>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/prodect">المنتجات</Link>
          </li>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/kdmh">الخدمات</Link>
          </li>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/"></Link>
          </li>
        </ul>

        {/* الجزء الأوسط: الشعار مع النص "رؤية" */}
        <div className="flex flex-col items-center space-y-2">
          <Link to="/">
          <span className="block w-48 h-48 transition-shadow duration-300">
                <img
                  src={img}
                  alt="Logo"
                  className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </span>
          </Link>
          {/* <h1 className="text-4xl font-medium text-gray-800">رؤية</h1> */}
        </div>

        {/* الجزء الأيمن: روابط التواصل وقصتنا (يظهر فقط على الشاشات الكبيرة) */}
        <ul className='hidden md:flex space-x-8 font-black text-2xl'>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/Kdmh">التواصل</Link>
          </li>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/storey">قصتنا</Link>
          </li>
        </ul>

        {/* أيقونة هامبرجر للشاشات الصغيرة */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* قائمة منسدلة للشاشات الصغيرة */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4">
          <ul className='flex flex-col space-y-4 font-black text-2xl text-center'>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/prodect" onClick={toggleMenu}>المنتجات</Link>
            </li>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/kdmh" onClick={toggleMenu}>الخدمات</Link>
            </li>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/Kdmh" onClick={toggleMenu}>التواصل</Link>
            </li>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/storey" onClick={toggleMenu}>قصتنا</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;