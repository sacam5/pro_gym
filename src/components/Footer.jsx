import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='flex w-full py-5 sm:px-10 px-5'>
      <div className='flex flex-col w-full justify-center items-center'>
        <div>
          <p className='text-sm text-[#1DCD9F] font-semibold'>© Copyright 2025 ProGym</p>
        </div>
        <div className='flex flex-row gap-4'>
          <div className="sm:block hidden text-sm font-semibold text-[#1DCD9F]">Find us on:</div>
          <a href="#"><FaInstagram className="text-md text-[#1DCD9F]" /></a>
          <a href="#"><FaFacebook className="text-md text-[#1DCD9F]" /></a>
          <a href="#"><FaTiktok className="text-md text-[#1DCD9F]" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
