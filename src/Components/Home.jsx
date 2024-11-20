import React from 'react';
import { IoLogInOutline } from "react-icons/io5";
import plumberAvatar from '../assets/Plumber-avtar.webp';
import avatar1 from '../assets/avtar1.png';

function Home() {
  return (
      <>
          {/* Home Page Start */}
          <div className="sm:mt-[115px] grid custom-shadow sm:grid-cols-3 bg-blue-100 mx-auto max:h-auto py-2 max-w-[1400px] sm:h-[65vh] mt-[7rem]">
              <div className="h-[50vh] w-full sm:h-auto col-span-2 flex flex-col items-center md:h-[100%] py-[2rem] justify-center px-3 md:px-[2rem]">
                  <h1 className="text-[1.5rem] sm:text-[2rem] font-bold mx-auto text-center sm:mt-[-3rem] md:mt-0">
                      Plumbing Problems? We Provide Guaranteed Solutions!
                  </h1>
                  <p className="text-[.8rem] sm:text-[1rem] px-[.5rem] xl:px-[5rem] font-semibold pt-2  md:pt-5 sm:mb-5">
                      "Are you facing plumbing issues in your home, apartment, or commercial space? Our licensed plumbers offer reliable plumbing repairs, installations, and maintenance services. From minor leaks to major installations, we ensure high-quality, affordable solutions. Browse our services below and let us help you solve your plumbing problems today!"
                  </p>
                  <button className={`flex items-center text-center md:text-[1.5rem] mt-5 w-auto p-[.5rem] sm:mt-0 gap-2 text-white bg-blue-600 rounded-[1.5rem] sm:p-[.7rem] hover:bg-orange-400 hover:text-black transition-all duration-300`}>
                      <a href="https://wa.link/d7uioh" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2'>
                          <span><IoLogInOutline /></span>
                          <span>Contact a Plumber Now</span>
                          </a>
                  </button>
              </div>
              <div className="w-full mx-auto sm:h-auto flex items-center justify-start px-10 sm:justify-center">
                  <img className="h-[150px] sm:h-[200px] md:h-[300px]" src={plumberAvatar} alt="Professional Plumber" />
                  <img className="h-[150px] sm:hidden" src={avatar1} alt="Plumbing Service Icon" />
              </div>
          </div>
          {/* Home Page End */}
      </>
  )
}

export default Home;
