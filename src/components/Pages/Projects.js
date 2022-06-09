import React from 'react';
import gymTrainer from '../../assets/images/Capture-1.PNG';
import manufacture from '../../assets/images/Capture-2.PNG';
import warehouse from '../../assets/images/Capture-3.PNG';

const Projects = () => {
  return (
    <section className="pb-24">
      <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500  text-transparent bg-clip-text font-semibold pb-12">
        My Projects
      </h2>
      <div className="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto md:w-[800px] lg:w-[1200px]">
        <div className="shadow-lg rounded px-4 py-2 hover:scale-105 transition">
          <img src={manufacture} alt="" />
          <p className="text-xl font-semibold my-3 text-center">
            Computer parts manufacture
          </p>
          <p>
            This is an online manufacture website. In this site user can buy
            product. Admin can mange all things. Here I use firebase for
            implement authentication. These are full responsive for mobile,
            tablet and desktop.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://github.com/habiburrahman26/manufacturer-website-client-side"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-purple-500 mb-6 inline-block rounded font-semibold text-white hover:bg-purple-600"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="shadow-lg rounded px-4 py-2 hover:scale-105 transition">
          <img src={warehouse} alt="" />
          <p className="text-xl font-semibold my-3 text-center">
            Warehouse System
          </p>
          <p>
            Complete and fully functional warehouse web site with advanced
            functionalities build with React.JS || NodeJS || Express.js ||
            MongoDB || React firebase Hooks and || Firebase (For authentication)
            || tailwind CSS
          </p>
          <div className="text-center mt-6">
            <a
              href="https://github.com/habiburrahman26/warehouse-management-client"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-purple-500 mb-6 inline-block rounded font-semibold text-white hover:bg-purple-600"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="shadow-lg rounded px-4 py-2 hover:scale-105 transition">
          <img src={gymTrainer} alt="" />
          <p className="text-xl font-semibold my-3 text-center">Gym Trainer</p>
          <p>
            This is an independent services provider website. Here I use
            firebase for implement authentication. These are full responsive for
            mobile, tablet and desktop.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://github.com/habiburrahman26/gym-trainer"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-purple-500 mb-6 inline-block rounded font-semibold text-white hover:bg-purple-600"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
