import React from 'react';
import Marquee from 'react-fast-marquee';

function MarqueeComponent() {
  return (
    <div className='w-full flex h-[60px] lg:h-[100px] md:h-[100px] sm:h-[80px] shadow-lg py-4'>
      <Marquee autoFill>
        <div className='marquee-outline text-col1 m-1 flex space-x-5 font-bold md:text-xl'>
          Stay fit, stay healthy, get back in shape Now!
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;
