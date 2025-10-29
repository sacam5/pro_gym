import React from 'react'
import { days, hours, schedule } from '../constants/index'
import { useInView } from "react-intersection-observer";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Calendar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  useGSAP(() => {
    if (inView) {
      gsap.fromTo(".ss , .ss2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.1, stagger: 0.3 });
    }
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col justify-center p-5 xl:py-10 lg:py-10 items-center">
      <h2 className="text-xl lg:text-3xl xl:text-3xl font-bold text-txt mb-3 sm:mb-5 text-center">Our Classes</h2>
      <p className="text-md lg:text-lg xl:text-lg text-txt mb-4 sm:mb-7 text-center max-w-md sm:max-w-xl lg:max-w-2xl">
        Choose one of the classes we offer and explore our weekly schedule below. From yoga to crossfit – we’ve designed programs that fit every lifestyle and goal.
      </p>
      <div className="overflow-x-auto w-full max-h-80 sm:max-h-[450px] lg:max-h-[550px] rounded-md sm:rounded-lg lg:rounded-xl border text-txt border-white dark:border-black bg-transparent my-2">
        <div className="grid grid-cols-[60px_repeat(5,1fr)] sm:grid-cols-[90px_repeat(5,1fr)] lg:grid-cols-[120px_repeat(5,1fr)] w-full text-sm sm:text-md lg:text-lg">
          <div className="bg-transparent p-1 sm:p-2 lg:p-3 border"></div>
          {days.map((day) => (
            <div key={day} className="bg-transparent p-1 sm:p-2 lg:p-3 font-semibold text-center border border-white dark:border-black">{day}</div>
          ))}
          {hours.map((hour) => (
            <React.Fragment key={hour}>
              <div className="p-1 sm:p-2 lg:p-3 text-center border border-white dark:border-black font-medium">{hour}</div>
              {days.map((day) => {
                const classItem = schedule.find((c) => c.day === day && c.time === hour);
                return (
                  <div key={day + hour} className={`p-1 sm:p-2 lg:p-3 border border-white dark:border-black text-center ${classItem ? "bg-col1 text-txt font-medium" : "bg-bgLight dark:bg-bgDark"} rounded`}>
                    {classItem ? classItem.class : ""}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
