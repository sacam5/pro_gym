import React from 'react'
import joinus from '../assets/img5.jpeg';

function JoinUs() {
  return (
    <div className='bg-cover bg-no-repeat relative z-0 bg-center h-[100vh] overflow-hidden' style={{ backgroundImage: `url(${joinus})` }}>
      <div className='absolute inset-0 bg-black/30 z-10'>
        <div className='flex items-center justify-center h-screen'>
          <div className='p-8 text-[#777] backdrop-blur-md rounded-xl bg-transparent border border-col1 shadow-xl w-[55%] sm:w-[40%] md:w-96 lg:w-96'>
            <h1 className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>Join Us Now</h1>
            <div className='flex flex-col mt-2'>
              <label id='form' className='mb-1 text-md md:text-lg lg:text-xl font-semibold text-center'>Name</label>
              <input className='px-2 py-1 text-[#777] bg-transparent border border-col1 focus:outline-none focus:text-white focus:ring-0 focus:border-col1 focus:shadow-[0_0_10px_2px_#1DCD9F]' type='text' placeholder='Name' />
            </div>
            <div className='flex flex-col mt-2'>
              <label id='form' className='mb-1 text-md md:text-lg lg:text-xl font-semibold text-center'>E-mail</label>
              <input className='px-2 py-1 text-[#777] bg-transparent border border-col1 focus:outline-none focus:text-white focus:ring-0 focus:border-col1 focus:shadow-[0_0_10px_2px_#1DCD9F]' type='email' placeholder='E-mail' />
            </div>
            <div className='flex flex-col mt-2'>
              <label id='form' className='mb-1 text-md md:text-lg lg:text-xl font-semibold text-center'>Phone number</label>
              <input className='px-2 py-1 text-[#777] bg-transparent border border-col1 focus:outline-none focus:text-white focus:ring-0 focus:border-col1 focus:shadow-[0_0_10px_2px_#1DCD9F]' type='tel' placeholder='Phone number' />
            </div>
            <div className='flex flex-col mt-8'>
              <button className='px-9 py-1 rounded-full border-2 border-col1 text-col1 font-semibold bg-transparent transition-all duration-300 hover:text-[#777] hover:bg-col1 shadow-[0_0_10px_1px_#1DCD9F] hover:shadow-[0_0_20px_4px_#1DCD9F]' type='submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs
