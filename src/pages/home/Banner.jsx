import React from 'react';

const Banner = () => {
    return (
        <div className="header-text">
            <h1>وصل - خدمات فورية بجودة عالية</h1>
            <p>منصة تربط مقدمي الخدمات الإبداعية بالعملاء الباحثين عن حلول احترافية وفورية.</p>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="ما العمل الذي تحتاج إلى تنفيذة؟" />
                <button className="search-button">بحث</button>
            </div>
        </div>
    );
};

export default Banner;