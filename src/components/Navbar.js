'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import React, { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">ANNI WEB</div>

      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label htmlFor="menu-toggle" className="hamburger">
        {isOpen ? '✖' : '☰'}
      </label>

      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>

        <li className="submenu">
          <span>Services ▾</span>
          <ul className="dropdown">
            <li><Link href="/services/web-development">Web Development</Link></li>
            <li><Link href="/services/seo">SEO</Link></li>
            <li><Link href="/services/cybersecurity">Cyber Security</Link></li>
          </ul>
        </li>

        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

      <ul className="right">
        <li className="list"><ThemeToggle /></li>
      </ul>
    </nav>
  );
}

export default Navbar;
