import { FaMapMarkerAlt, FaClock, FaDumbbell, FaAppleAlt } from 'react-icons/fa';

import coverVideo from '../assets/cover.mp4';
import cover from '../assets/cv1.png';
import gym1 from '../assets/gym2.jpeg';
import gym2 from '../assets/gym3.jpeg';
import gym3 from '../assets/gym5.jpeg';
import gym4 from '../assets/gym.jpeg';

import MarqueeComponent from '../components/MarqueeComponent';
import SecondSection from '../components/SecondSection';
import Prices from '../components/Prices';
import Calendar from '../components/Calendar';

function Hero() {
 
  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-5xl font-bold mt-5 mb-4" />,
      title: 'Find Us',
      frontText: (
        <>
          <p className="text-txt px-5 text-center text-sm lg:text-lg xl:text-lg mt-2">Located in the heart of New Belgrade.</p>
          <p className="text-txt px-5 text-center text-sm lg:text-lg xl:text-lg mt-2 font-semibold">Address: Bulevar Zorana Đinđića 125, Belgrade, Serbia</p>
        </>
      ),
      backImg: gym1,
    },
    {
      icon: <FaClock className="text-5xl font-bold mt-5 mb-4" />,
      title: 'Working Hours',
      frontText: (
        <>
          <p className="text-txt px-5  text-center text-sm lg:text-lg xl:text-lg mt-2">Mon–Fri: 6:00 AM – 11:00 PM</p>
          <p className="text-txt px-5  text-center text-sm lg:text-lg xl:text-lg">Sat: 8:00 AM – 10:00 PM, <br/> Sun: 9:00 AM – 9:00 PM</p>
        </>
      ),
      backImg: gym2,
    },
    {
      icon: <FaDumbbell className="text-5xl mt-5 font-bold mb-4" />,
      title: 'Personal Training',
      frontText: (
        <p className="text-txt px-5 text-center text-sm lg:text-lg xl:text-lg mt-2">Our personal training sessions are tailored to your needs. Book a free consultation today.</p>
      ),
      backImg: gym3,
    },
    {
      icon: <FaAppleAlt className="text-5xl font-bold mt-5 mb-4" />,
      title: 'Nutrition Plans',
      frontText: (
        <p className="text-txt px-5  text-center mt-2 text-sm lg:text-lg xl:text-lg">Achieve your fitness goals faster with personalized nutrition plans.</p>
      ),
      backImg: gym4,
    },
  ];
  
  

  return (
    <div>
      {/* Hero Image */}
      <div className='w-full lg:h-[750px] md:h-[600px] sm:h-[500px] bg-cover flex mt-0'>
        <img src={cover} className='w-full' alt="cover" />
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-5 lg:py-10 xl:py-15 gap-5 justify-items-center bg-bgLight dark:bg-bgDark">
      {cards.map((card, idx) => (
        <div key={idx} className="card w-full max-w-[370px] min-h-[300px] md:min-h-[350px] lg:min-h-[370px] ">
          <div className="card-inner">
            {/* Front */}
            <div className="card-front border border-col1
                w-full h-full
                bg-transparent p-5 cursor-pointer 
                rounded-xl shadow-xl  transition-transform duration-300 hover:scale-[1.03]
                flex flex-col justify-start items-center backface-hidden overflow-hidden">
              {card.icon}
              <h3 className="text-txt text-lg md:text-xl lg:text-xl xl:text-2xl font-semibold mb-3'">{card.title}</h3>
              {card.frontText}
            </div>
            {/* Back */}
            <div className="card-back backface-hidden overflow-hidden border border-col1 w-full max-w-[370px] min-h-[300px] md:min-h-[350px] lg:min-h-[370px] bg-transparent rounded-xl shadow-xl">
              <img
                src={card.backImg}
                alt={card.title}
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </div>
        </div>
      ))}
     </section>


      {/* Marquee */}
      <MarqueeComponent />

      {/* Other Sections */}
      <SecondSection />
      <Prices />

      {/* Cover Video */}
      <div className='w-full bg-cover flex mt-0'>
        <video
          className="w-full h-full lg:h-[80vh] xl:h-[80vh] object-cover bg-black/50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={coverVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Calendar */}
      <div className='flex flex-col justify-center items-center pb-3 p-3 lg:p-5 w-full'>
        <Calendar />
      </div>
    </div>
  );
}

export default Hero;
