import React from 'react';
import { FaCheck } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import im1 from '../assets/ls1.jpg';

function SecondSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useGSAP(() => {
    if (inView) {
      gsap.fromTo('.ss , .ss2', { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.1, stagger: 0.3 });
    }
  }, [inView]);

  return (
    <div ref={ref} className='w-full'>

      <div className="flex flex-col justify-center p-5 lg:p-10 xl:p-15 items-center">
        <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold text-txt mb-4 text-center ss">
          Who We Are
        </h2>
        <p className="text-md lg:text-lg xl:text-lg text-txt mb-2 max-w-6xl px-2 text-center ss">
          Building fitness means building not only your body, but also your confidence.  
          Our mission is to help you transform through training, dedication, and guidance.
        </p>
        <p className="text-txt lg:text-lg xl:text-lg mb-5 text-md lg:mb-10 max-w-6xl px-2 text-center ss">
          From personalized training programs to nutrition support, we provide everything you need to stay motivated and achieve lasting results.
        </p>

        <section className="w-full px-6 mb-2 lg:px-20 ss2">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-5">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex items-start gap-6 p-2">
                <FaCheck className="text-2xl sm:text-3xl md:text-4xl text-col1" />
                <div>
                  <h3 className="text-md lg:text-lg xl:text-lg font-semibold text-txt">Professional Guidance</h3>
                  <p className="text-txt text-sm md:text-md lg:text-lg xl:text-lg">
                    Our coaches create personalized workout plans to help you reach your goals efficiently and stay motivated along the way.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-2">
                <FaCheck className="text-2xl sm:text-3xl md:text-4xl text-col1" />
                <div>
                  <h3 className="text-md lg:text-lg xl:text-lg font-semibold text-txt">Modern Equipment</h3>
                  <p className="text-txt text-sm md:text-md lg:text-lg xl:text-lg">
                    We provide access to the latest gym machines and tools, ensuring your training is safe, efficient, and enjoyable.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-2">
                <FaCheck className="text-2xl sm:text-3xl md:text-4xl text-col1" />
                <div>
                  <h3 className="text-md lg:text-lg xl:text-lg font-semibold text-txt">Supportive Community</h3>
                  <p className="text-txt text-sm md:text-md lg:text-lg xl:text-lg">
                    Train in a positive environment where motivation, encouragement, and teamwork help you stay consistent and inspired.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-2">
                <FaCheck className="text-2xl sm:text-3xl md:text-4xl text-col1" />
                <div>
                  <h3 className="text-md lg:text-lg xl:text-lg font-semibold text-txt">Visible Results</h3>
                  <p className="text-txt text-sm md:text-md lg:text-lg xl:text-lg">
                    With proper guidance and structured programs, you will see real progress in strength, endurance, and overall health.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      <div
        ref={ref}
        className="flex w-full h-[30vh] justify-center p-5 items-center gap-5 lg:gap-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${im1})` }}>
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-col1">
            {inView ? <CountUp end={1050} duration={2.7} /> : '0'}+
          </h3>
          <p className="text-xl xl:text-2xl text-white">Program Members</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-col1">
            {inView ? <CountUp end={856} duration={2.7} /> : '0'}+
          </h3>
          <p className="text-xl xl:text-2xl text-white">Progress Complete</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-col1">
            {inView ? <CountUp end={316} duration={2.7} /> : '0'}+
          </h3>
          <p className="text-xl xl:text-2xl text-white">Plans Member</p>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-col1">
            {inView ? <CountUp end={211} duration={2.7} /> : '0'}+
          </h3>
          <p className="text-xl xl:text-2xl text-white">Success Stories</p>
        </div>
      </div>

    </div>
  );
}

export default SecondSection;
