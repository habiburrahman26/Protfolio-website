import React from 'react';
import '../../App.css';

const Banner = () => {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5">
        I'm
        <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text ml-3">
          Habibur Rahman
        </span>
      </h1>
      <p className="text-xl lg:text-2xl mb-7">Web designer | Web developer</p>
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/adnan.anik.587/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 172 172"
            className="w-8 h-8"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#666666" className="hover:fill-blue-600">
                <path d="M86,16.125c-38.58712,0 -69.875,31.28788 -69.875,69.875c0,35.03156 25.80806,63.95981 59.42869,69.01231v-50.49544h-17.28869v-18.36638h17.28869v-12.22275c0,-20.23419 9.85775,-29.11369 26.67613,-29.11369c8.05175,0 12.31681,0.59931 14.32975,0.86806v16.03094h-11.47025c-7.138,0 -9.632,6.7725 -9.632,14.39963v10.03781h20.92219l-2.83531,18.36638h-18.08687v50.64056c34.10437,-4.6225 60.41769,-33.78188 60.41769,-69.15744c0,-38.58712 -31.28519,-69.875 -69.875,-69.875z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/habib002/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 172 172"
            className="w-8 h-8"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#666666" className="hover:fill-blue-800">
                <path d="M137.6,22.93333h-103.2c-6.33533,0 -11.46667,5.13133 -11.46667,11.46667v103.2c0,6.33533 5.13133,11.46667 11.46667,11.46667h103.2c6.33533,0 11.46667,-5.13133 11.46667,-11.46667v-103.2c0,-6.33533 -5.13133,-11.46667 -11.46667,-11.46667zM62.80293,126.13333h-16.91333v-54.4208h16.91333zM54.17427,63.9324c-5.4524,0 -9.86133,-4.4204 -9.86133,-9.86133c0,-5.44093 4.41467,-9.8556 9.86133,-9.8556c5.4352,0 9.8556,4.4204 9.8556,9.8556c0,5.44093 -4.4204,9.86133 -9.8556,9.86133zM126.15627,126.13333h-16.90187v-26.46507c0,-6.3124 -0.11467,-14.4308 -8.7892,-14.4308c-8.80067,0 -10.15373,6.87427 -10.15373,13.97213v26.92373h-16.90187v-54.4208h16.22533v7.43613h0.22933c2.25893,-4.27707 7.7744,-8.7892 16.00173,-8.7892c17.12547,0 20.29027,11.27173 20.29027,25.92613z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          href="https://github.com/habiburrahman26"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 172 172"
            className="w-8 h-8"
          >
            <g
              fill="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#666666" className="hover:fill-black">
                <path d="M86,16.125c-38.58981,0 -69.875,31.28519 -69.875,69.875c0,32.99444 22.876,60.63 53.62906,67.95613c-1.591,-0.37894 -3.16856,-0.80356 -4.71656,-1.28731v-16.00944c0,0 -2.62031,0.87344 -6.11406,0.87344c-9.77444,0 -13.83525,-8.72094 -14.84844,-13.10156c-0.61544,-2.66869 -2.22256,-5.19762 -3.94794,-6.74294c-2.06131,-1.83825 -3.02613,-1.84363 -3.03956,-2.4725c-0.02688,-1.31956 1.76837,-1.26581 2.62031,-1.26581c4.36719,0 7.67819,4.64669 9.21544,7.04931c3.80819,5.93131 7.89587,6.92569 10.00019,6.92569c2.62031,0 4.88319,-0.39238 6.44194,-1.14487c0.72025,-5.074 2.97775,-9.59437 6.65963,-12.83012c-16.38569,-3.27606 -27.95,-12.67425 -27.95,-27.95c0,-7.869 3.15781,-15.10106 8.41994,-20.941c-0.5375,-1.52381 -1.43244,-4.60637 -1.43244,-9.62931c0,-3.31906 0.23112,-7.39331 1.74687,-11.35469c0,0 9.96525,0.06988 19.36344,8.97088c4.33763,-1.26312 8.97894,-1.98337 13.82719,-1.98337c4.84825,0 9.48956,0.72025 13.82719,1.98337c9.39819,-8.901 19.36344,-8.97087 19.36344,-8.97087c1.52381,3.96138 1.74688,8.03563 1.74688,11.35469c0,5.41531 -0.72025,8.57313 -1.161,9.93569c5.10088,5.78619 8.1485,12.90537 8.1485,20.63463c0,15.27575 -11.56431,24.67394 -27.95,27.95c4.37525,3.84312 6.9875,9.44119 6.9875,15.72187v22.99694c-1.548,0.48644 -3.12287,0.90838 -4.71656,1.28731c30.75306,-7.32613 53.62906,-34.96169 53.62906,-67.95613c0,-38.58981 -31.28519,-69.875 -69.875,-69.875zM90.87244,155.68687c-1.60981,0.11288 -3.23306,0.18813 -4.87244,0.18813c1.63938,0 3.25994,-0.07794 4.87244,-0.18813zM101.54988,154.11737c-3.12825,0.71219 -6.33444,1.21206 -9.60781,1.48888c3.27338,-0.27681 6.47956,-0.77937 9.60781,-1.48888zM86,155.875c-1.63938,0 -3.26262,-0.07525 -4.87244,-0.18813c1.6125,0.11019 3.23306,0.18813 4.87244,0.18813zM80.05525,155.60625c-3.27069,-0.27681 -6.47956,-0.77669 -9.60513,-1.48888c3.12825,0.7095 6.33444,1.21206 9.60513,1.48888z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          href="https://twitter.com/habibur_26"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 172 172"
            className="w-8 h-8 icon"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#666666" className="hover:fill-blue-400 transition">
                <path d="M172.215,35.905c-6.35594,2.82188 -13.16875,4.71656 -20.33094,5.57656c7.31,-4.38063 12.92687,-11.31438 15.56062,-19.565c-6.82625,4.04469 -14.41844,6.9875 -22.4675,8.57312c-6.45,-6.88 -15.64125,-11.16656 -25.81344,-11.16656c-19.53812,0 -35.38094,15.82937 -35.38094,35.3675c0,2.76812 0.3225,5.46906 0.92719,8.0625c-29.40125,-1.47813 -55.45656,-15.56063 -72.91187,-36.96656c-3.05031,5.24062 -4.78375,11.31437 -4.78375,17.79125c0,12.26844 6.235,23.09906 15.73531,29.455c-5.805,-0.18813 -11.26062,-1.78719 -16.03094,-4.43438c0,0.14781 0,0.29563 0,0.44344c0,17.14625 12.20125,31.43031 28.36656,34.69562c-2.95625,0.80625 -6.08719,1.23625 -9.31219,1.23625c-2.28438,0 -4.50156,-0.215 -6.665,-0.645c4.515,14.04219 17.57625,24.295 33.04281,24.57719c-12.09375,9.48688 -27.34531,15.13063 -43.92719,15.13063c-2.86219,0 -5.67062,-0.16125 -8.42531,-0.49719c15.64125,10.05125 34.23875,15.89656 54.22031,15.89656c65.06438,0 100.64688,-53.89781 100.64688,-100.63344c0,-1.53187 -0.04031,-3.07719 -0.09406,-4.58219c6.90687,-4.98531 12.9,-11.22031 17.64344,-18.31531z"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <button className='mt-8 px-8 py-3 uppercase font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full text-white hover:scale-110 transition-all'>Hire Me</button>
    </section>
  );
};

export default Banner;