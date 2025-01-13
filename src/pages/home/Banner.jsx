import React from 'react'
import timings from '../../assets/undraw_programming_65t2.png'
const Banner = () => {
  return (
    <div className=" header__container py-8">
    <div className="header__content z-30 text-right ">
    <h1 className="text-gray-800 text-4xl font-bold mt-4 mb-6 font-sans leading-tight tracking-tight">
    نحو حلول تقنية مبتكرة لتطوير أعمالك</h1>
    <p className="text-gray-900 text-xl font-bold leading-relaxed font-sans text-justify mt-6 mb-6">
رؤية هي شركة متخصصة في تقديم حلول برمجية متكاملة مدعومة بأحدث التقنيات، تهدف إلى تعزيز نمو أعمالك وتحقيق أهدافك بكفاءة وابتكار</p>        </div>
    <div className=" ">
        <img 
            src={timings} 
            alt="صورة البانر" 
            className=""
        />
    </div>
</div>
  )
}

export default Banner