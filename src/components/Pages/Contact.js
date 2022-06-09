import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../assets/images/contact.svg';

const Contact = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ttx5r0q',
        'template_azulok6',
        e.target,
        'xBinCgEuBKunjkunM'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setResult(true);
  };

  return (
    <section id='contactme' className="pb-24 pt-10 px-4 bg-darkLight">
      <h2 className="text-xl md:text-2xl lg:text-3xl uppercase text-center bg-gradient-to-r from-violet-500 to-fuchsia-500  text-transparent bg-clip-text font-semibold pb-12">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:w-[800px] lg:w-[1200px] mx-auto px-4 ">
        <div className="justify-self-center">
          <img
            src={contact}
            alt="skill"
            className="w-[320px] lg:w-[500px] self-center"
          />
        </div>
        <div>
          <form onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0">
              <input
                className="border border-gray-700 px-2 py-3 flex-grow lg:mr-3 focus:outline-none focus:border focus:border-purple-500 bg-darkLight text-white"
                type="text"
                name="from_name"
                placeholder="Name"
                required
              />
              <input
                className="border border-gray-700 px-2 py-3 flex-grow focus:outline-none focus:border focus:border-purple-500 bg-darkLight text-white"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0">
              <input
                className="border border-gray-700 px-2 py-3 flex-grow lg:mr-3 focus:outline-none focus:border focus:border-purple-500 bg-darkLight text-white"
                type="text"
                placeholder="Phone"
                name="phone"
                required
              />
              <input
                className="border border-gray-700 px-2 py-3 flex-grow focus:outline-none focus:border focus:border-purple-500 bg-darkLight text-white"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div>
              <textarea
                className="border border-gray-700 px-2 py-3 w-full focus:outline-none focus:border focus:border-purple-500 bg-darkLight text-white"
                name="message"
                id="comment"
                cols="30"
                rows="4"
                placeholder="Comment"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="md:self-start px-10 py-3 rounded-full border-2 border-purple-500 hover:bg-purple-500 text-white"
            >
              Send Message
            </button>
          </form>
          {result && <p className='text-white mt-3'>Your message has been successfully sent. I will contact you soon.</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
