import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/رؤية-1.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed-nav-bar w-full bg-white'>
      <nav className='max-w-screen-2xl mx-auto px-10 py-4 flex justify-between items-center'>
        {/* الجزء الأيسر: روابط التنقل (يظهر فقط على الشاشات الكبيرة) */}
        <ul className='hidden md:flex space-x-4 font-black text-2xl'>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/prodect">المنتجات</Link>
          </li>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/kdmh">الخدمات</Link>
          </li>
        </ul>

        {/* الجزء الأوسط: الشعار مع النص "رؤية" */}
        <div className="flex flex-col items-center justify-center flex-grow md:flex-grow-0">
          <Link to="/">
            <span className="transition-shadow">
              <img
                src={img}
                alt="Logo"
                className="max-w-[150px] w-full"
              />
            </span>
          </Link>
        </div>

        {/* الجزء الأيمن: روابط التنقل (يظهر فقط على الشاشات الكبيرة) */}
        <ul className='hidden md:flex space-x-4 font-black text-2xl'>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/Kdmh">التواصل</Link>
          </li>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/storey">قصتنا</Link>
          </li>
        </ul>

        {/* زر القائمة في الشاشات الصغيرة */}
        <div className="md:hidden flex items-center">
          <button
            className="text-2xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
      </nav>

      {/* قائمة التنقل في الجوال */}
      {isMenuOpen && (
        <nav className="md:hidden flex items-center justify-center bg-white">
          <ul className="flex flex-col items-center justify-center space-y-4 font-black text-xl px-6 py-4">
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/prodect">المنتجات</Link>
            </li>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/kdmh">الخدمات</Link>
            </li>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/Kdmh">التواصل</Link>
            </li>
            <li className='link hover:text-blue-600 transition-colors duration-300'>
              <Link to="/storey">قصتنا</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
