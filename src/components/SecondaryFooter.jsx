import { FaEnvelope, FaPhone } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

function SecondaryFooter() {
  return (
    <div className='w-full shadow-lg lg:pt-5 xl:pt-5'>
      <div className='w-[60vw] lg:w-[40vw] xl:w-[30vw] flex flex-col justify-start items-center my-3 p-2 mt-2'>
        
        <div className="h-auto w-full bg-transparent text-col1 flex flex-col justify-start items-start lg:mb-3 p-3">
          <h3 className="text-sm sm:text-sm md:text-md lg:text-md font-semibold mb-2 text-[#777]">Contact Details</h3>
          <p className="flex items-center mb-2 text-xs md:text-sm lg:text-sm text-[#777]">
            <FaEnvelope className="mr-3 text-black text-lg" /> progym@gmail.com
          </p>
          <p className="flex items-center text-xs md:text-sm lg:text-sm text-[#777]">
            <FaPhone className="mr-3 text-black lg:text-sm md:text-sm sm:text-xs text-xs" /> +381 11 123 4567
          </p>
        </div>

        <div className="w-full h-auto bg-transparent text-[#777] flex flex-col justify-start items-start lg:mb-3 p-3">
          <h3 className="text-sm sm:text-sm md:text-md lg:text-md font-semibold mb-2">About Us</h3>
          <p className="text-xs md:text-sm lg:text-sm mr-5 lg:mr-15">
            ProGym is a modern gym helping you build strength, stay fit, and reach your goals.
          </p>
        </div>

        <div className="w-full h-auto bg-transparent text-[#777] flex flex-col justify-start items-start lg:mb-3 p-3">
          <h3 className="text-sm sm:text-sm md:text-md lg:text-md font-semibold mb-2">Join Us</h3>
          <p className="text-xs md:text-sm lg:text-sm">
            Don’t wait for tomorrow. Start today and become the best version of yourself.
          </p>
          <div className='py-5'>
            <Link to='/join'>
              <button className='lg:px-4 lg:py-1 px-3 py-1 rounded-full border-2 border-black text-[#777] font-semibold bg-transparent transition-all duration-300 hover:text-[#777] hover:bg-col1 text-sm lg:text-md' type='submit'>
                Join Us
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SecondaryFooter;
