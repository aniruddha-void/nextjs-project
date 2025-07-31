'use client';

import { useState, useEffect } from 'react';
import "../styles/toggle.css"
export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        setIsDarkMode(true);
        document.body.classList.add('dark');
      } else {
        setIsDarkMode(false);
        document.body.classList.remove('dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.body.classList.toggle('dark', newMode);
  };

  return (
  <div className="theme-toggle-container">
  <div className="theme-toggle-wrapper" onClick={toggleTheme}>
    <div className={`toggle-slider ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="toggle-circle">
        {isDarkMode ? '🌙' : '☀️'}
      </div>
    </div>
    <span className="toggle-label">
      {isDarkMode ? 'DARK MODE' : 'LIGHT MODE'}
    </span>
  </div>
</div>
  )
}