import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
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
};

export default Footer;