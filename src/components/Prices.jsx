import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

function Prices() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  useGSAP(() => {
    if (inView) {
      gsap.fromTo(
        '.sp',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, delay: 0.3, stagger: 0.3 }
      );
    }
  }, [inView]);

  return (
    <div className='w-full shadow-md flex flex-col justify-center items-center p-5 lg:p-10 xl:p-15'>
      <h3 className='text-txt text-xl md:text-2xl lg:text-3xl font-bold mb-2 sp'>Membership Plans</h3>
      <p className='pt-1 text-txt text-sm sm:text-base lg:text-lg mb-5 lg:mb-10 max-w-2xl text-center sp'>
        Choose the plan that fits your lifestyle and goals. Whether you’re just starting your fitness journey or looking for premium features, we have the right option for you.
      </p>

      <section className='w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 place-items-center max-w-[900px] mx-auto'>
          
          <div className='flex flex-col items-center justify-between h-[300px] lg:h-[350px] w-full max-w-[280px] rounded-2xl border border-col1 bg-white/70 dark:bg-[#222]/70 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
            <div className='m-6'>
              <h4 className='text-xl text-center font-bold text-col1 mb-2 underline decoration-col1'>Basic Plan</h4>
              <p className='text-gray-800 text-center dark:text-gray-100 text-md lg:text-lg xl:text-xl font-semibold mb-4'>$20 / month</p>
              <ul className='text-gray-700 dark:text-gray-200 text-sm lg:text-md xl:text-lg space-y-2'>
                <li>✔ Access to gym equipment</li>
                <li>✔ Free locker usage</li>
                <li>✔ Regular hours (8 AM – 8 PM)</li>
              </ul>
            </div>
            <Link to='/join'>
              <button className='mb-4 px-4 py-2 rounded-full border-2 border-col1 text-col1 font-semibold bg-transparent transition-all duration-300 hover:text-white hover:bg-col1'>
                Join Now
              </button>
            </Link>
          </div>

          <div className='flex flex-col items-center justify-between h-[300px] lg:h-[350px] w-full max-w-[280px] rounded-2xl border border-col1 bg-white/70 dark:bg-[#222]/70 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
            <div className='p-5'>
              <h4 className='text-xl text-center font-bold text-col1 mb-2 underline decoration-col1'>Regular Plan</h4>
              <p className='text-gray-800 text-center dark:text-gray-100 text-md lg:text-lg xl:text-xl font-semibold mb-4'>$40 / month</p>
              <ul className='text-gray-700 dark:text-gray-200 text-sm lg:text-md xl:text-lg space-y-2'>
                <li>✔ 24/7 gym access</li>
                <li>✔ Free group classes</li>
                <li>✔ Sauna & wellness area</li>
                <li>✔ Priority support</li>
              </ul>
            </div>
            <Link to='/join'>
              <button className='mb-4 px-4 py-2 rounded-full border-2 border-col1 text-col1 font-semibold bg-transparent transition-all duration-300 hover:text-white hover:bg-col1'>
                Join Now
              </button>
            </Link>
          </div>

          <div className='flex flex-col justify-between items-center h-[300px] lg:h-[350px] w-full max-w-[280px] rounded-2xl border border-col1 bg-white/70 dark:bg-[#222]/70 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
            <div className='p-5'>
              <h4 className='text-xl text-center font-bold text-col1 mb-2 underline decoration-col1'>Premium Plan</h4>
              <p className='text-gray-800 text-center dark:text-gray-100 text-md lg:text-lg xl:text-xl font-semibold mb-4'>$60 / month</p>
              <ul className='text-gray-700 dark:text-gray-200 text-sm lg:text-md xl:text-lg space-y-2'>
                <li>✔ All Regular benefits</li>
                <li>✔ 1-on-1 personal training</li>
                <li>✔ VIP lounge & recovery area</li>
              </ul>
            </div>
            <Link to='/join'>
              <button className='self-center mb-4 px-4 py-2 justify-center items-center rounded-full border-2 border-col1 text-col1 font-semibold bg-transparent transition-all duration-300 hover:text-white hover:bg-col1'>
                Join Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Prices;
