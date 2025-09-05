

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/home') {
      navigate('/home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  // Determine if we are on signin or signout page
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <nav
      className={`container ${sticky && !isAuthPage ? 'dark-nav' : ''}`}
      style={isAuthPage ? { backgroundColor: '#0a1f44', color: 'white' } : {}}
    >
      <div className="brand-logo" onClick={() => scrollToSection('home')}>
        <img src={logo} alt="Company Logo" className="logo-img" />
        <div className="brand-text">
          <span className="brand-main">Zevora</span>{" "}
          <span className="brand-sub">Technologies</span>
        </div>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? 'active' : ''} style={isAuthPage ? { color: 'white' } : {}}>
        {!user ? (
          <>
            <li onClick={() => navigate('/')}>Home</li>
            <li onClick={() => navigate('/signin')}>Sign In</li>
            <li onClick={() => navigate('/signup')}>Sign Up</li>
          </>
        ) : (
          <>
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About Us</li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('blogs')}>Blogs</li>
            <li onClick={() => scrollToSection('testimonial')}>Testimonial</li>
            <li onClick={() => scrollToSection('contact')}>
              <button className="nav-contact-btn">Contact Us</button>
            </li>
            <li className="user-icon" title={user.name}>
              {user.name.charAt(0).toUpperCase()}
            </li>
            <li onClick={handleLogout}>Logout</li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
