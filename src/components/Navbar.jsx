import React from 'react';
import logo from '../assets/logo.png'; // تأكد من استيراد الصورة بشكل صحيح
import { FaBell, FaEnvelope, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black shadow-sm p-1">
  <div className="container mx-auto flex items-center justify-between">
    {/* الشعار وعناصر القائمة */}
    <div className="flex items-center space-x-8">
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="text-white text-lg hover:text-[#80cbc4] transition-colors">الرئيسية</a>
        </li>
        <li>
          <a href="#" className="text-white text-lg hover:text-[#80cbc4] transition-colors">الخدمات</a>
        </li>
        <li>
          <a href="#" className="text-white text-lg hover:text-[#80cbc4] transition-colors">المبدعين</a>
        </li>
        <li>
          <a href={"/story"} className="text-white text-lg hover:text-[#80cbc4] transition-colors">من نحن</a>
        </li>
      </ul>
    </div>

    {/* الشعار */}
    <a href="/" className="flex items-center">
      <img src={logo} alt="شعار وصل" className="h-16" /> {/* تم تغيير حجم الشعار إلى h-16 */}
    </a>

    {/* الأيقونات */}
    <div className="flex items-center ">
      <ul className="flex items-center space-x-14">
        <li>
            <Link to={"./Login.jsx"}>
          <a href="" className="text-white text-xl hover:text-[#80cbc4] transition-colors">
            <FaBell />
          </a>
            </Link>
        </li>
        <li>
          <a href="#" className="text-white text-xl hover:text-[#80cbc4] transition-colors">
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-xl hover:text-[#80cbc4] transition-colors">
            <FaShoppingCart />
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-xl hover:text-[#80cbc4] transition-colors">
            <FaUser />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;