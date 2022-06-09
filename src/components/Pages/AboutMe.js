import React from 'react';
import habib from '../../assets/images/habib.jpg';

const AboutMe = () => {
  return (
    <section className="pb-24 bg-lightBlue ">
      <div className="md:w-[800px] lg:w-[1000px] mx-auto pt-10 px-3">
        <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500  text-transparent bg-clip-text font-semibold pb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row lg:gap-48 md:gap-24 items-center text-center md:text-left">
          <img src={habib} alt="habib" className="w-56 md:w-64 lg:w-64" />
          <div className="self-center">
            <h3 className="text-xl font-bold text-gray-600 mb-6 mt-10 md:mt-0">
              Hi, I'm Habibur Rahman!
            </h3>
            <p className="text-[17px] leading-7 text-gray-600">
              Currently, I am a computer science department student at American
              International University-Bangladesh(AIUB). Besides I am a
              full-stack web developer. I love to learn new technology. As a
              quick learner with an enthusiasm for creating, building web
              applications. I'm constantly looking for the next project to throw
              myself into.
            </p>
            <p className="text-[17px] leading-7 mt-5 text-gray-700">
              With help of my skills, I'm able to do create web applications
              that can help organizations increase their digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
