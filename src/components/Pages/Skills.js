import React from 'react';
import skill from '../../assets/images/skill.svg';

const Skills = () => {
  return (
    <section className="py-24 px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500  text-transparent bg-clip-text font-semibold pb-12">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:w-[800px] lg:w-[1000px] mx-auto px-4 ">
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {/* HTML */}
          <div>
            <div className="flex justify-between font-semibold mb-1">
              <p>HTML</p>
              <p>95%</p>
            </div>
            <div className="progressbar html">
              <div></div>
            </div>
          </div>
          {/* CSS */}
          <div>
            <div className="flex justify-between font-semibold mb-1">
              <p>CSS/CSS3</p>
              <p>85%</p>
            </div>
            <div className="progressbar css">
              <div></div>
            </div>
          </div>
          {/* Javascript */}
          <div>
            <div className="flex justify-between font-semibold mb-1">
              <p>Javascript</p>
              <p>85%</p>
            </div>
            <div className="progressbar javascript">
              <div></div>
            </div>
          </div>
          {/* React */}
          <div>
            <div className="flex justify-between font-semibold mb-1">
              <p>React</p>
              <p>85%</p>
            </div>
            <div className="progressbar javascript">
              <div></div>
            </div>
          </div>
          {/* Tailwind */}
          <div>
            <div className="flex justify-between font-semibold mb-1">
              <p>Tailwind</p>
              <p>85%</p>
            </div>
            <div className="progressbar tailwind">
              <div></div>
            </div>
          </div>
          {/* Bootstrap */}
          <div>
            <div className="flex justify-between font-semibold mb-1">
              <p>Bootstrap</p>
              <p>90%</p>
            </div>
            <div className="progressbar bootstrap">
              <div></div>
            </div>
          </div>
        </div>
        <div className="justify-self-center order-1 md:order-2">
          <img src={skill} alt="skill" className=" w-[320px] lg:w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
