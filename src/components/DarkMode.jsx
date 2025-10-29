import { useState, useEffect } from 'react';

function DarkMode() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('prefers-color-scheme: dark').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light'); }

  return (
    <>
      <input type='checkbox' id='darkmode-toggle' onChange={toggleTheme} checked={theme === 'dark'} aria-label={`switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} />
      <label htmlFor='darkmode-toggle' />
    </>
  );
};

export default DarkMode;
