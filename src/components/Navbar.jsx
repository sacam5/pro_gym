import React from 'react';
import { navList } from '../constants/index';
import DarkMode from './DarkMode';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className='sticky h-[60px] backdrop-blur-sm top-0 z-10 w-full sm:px-10 p-1 flex justify-between items-center'>
      <nav className='backdrop-blur-sm flex items-center justify-between w-full screen-max-width'>
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='min-w-18 min-h-18 max-w-24 max-h-24 pt-3' />
        </div>
        <ul className='flex w-full justify-center items-center gap-7'>
          {navList.map(({ id, name, link }) => (
            <li key={id} className='py-4'>
              <Link to={link} className='text-txt inline-block text-sm lg:text-xl sm:text-md md:text-lg font-semibold hover:text-[#169976] duration-300'>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex justify-center px-3'>
          <DarkMode />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
