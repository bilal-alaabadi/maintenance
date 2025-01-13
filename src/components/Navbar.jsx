import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/file.png';

const Navbar = () => {
  return (
    <header className='fixed-nav-bar w-full bg-white '>
      <nav className='max-w-screen-2xl mx-auto px-10 py-4 flex justify-between items-center'>
        {/* الجزء الأيسر: روابط التنقل */}
        <ul className='flex space-x-8 font-black text-2xl'>
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
            <span className="block w-24 h-24 overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={img}
                alt="Logo"
                className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </span>
          </Link>
          <h1 className="text-4xl font-medium text-gray-800">رؤية</h1>
        </div>

        {/* الجزء الأيمن: روابط التواصل وقصتنا */}
        <ul className='flex space-x-8 font-black text-2xl'>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/Kdmh">التواصل</Link>
          </li>
          <li className='link hover:text-blue-600 transition-colors duration-300'>
            <Link to="/storey">قصتنا</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;