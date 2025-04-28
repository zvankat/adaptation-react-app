import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : 'desktop'}`}>
      {isMobile ? (
        <div className="mobile-nav">
          <a href="/" className="nav-item">
            <i className="fas fa-home"></i>
            <span>Главная</span>
          </a>
          <a href="/news" className="nav-item">
            <i className="fas fa-newspaper"></i>
            <span>Новости</span>
          </a>
          <a href="/about" className="nav-item">
            <i className="fas fa-info-circle"></i>
            <span>О нас</span>
          </a>
          <a href="/contact" className="nav-item">
            <i className="fas fa-envelope"></i>
            <span>Контакты</span>
          </a>
        </div>
      ) : (
        <div className="desktop-nav">
          <a href="/" className="nav-link">Главная</a>
          <a href="/news" className="nav-link">Новости</a>
          <a href="/about" className="nav-link">О нас</a>
          <a href="/contact" className="nav-link">Контакты</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 