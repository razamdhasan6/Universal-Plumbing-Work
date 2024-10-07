import React from 'react';
import cpvcServiceImg from '../assets/cpvc-service.png';
import pvcServiceImg from '../assets/pvc-service.avif';
import upvcServiceImg from '../assets/upvc-service.png';
import giServiceImg from '../assets/gi-service.png';
import pprServiceImg from '../assets/ppr-service.avif';
import compositeServiceImg from '../assets/composite-service.jpg';

function OurServices() {
  return (
      <>
          {/* Services Section Start */}
          <div className="max-w-[1400px] mx-auto mt-4 custom-shadow">
              <div>
                  <h1 className="pt-3 flex justify-center text-[1.5rem] md:text-[2rem] font-semibold underline">Our Plumbing Services</h1>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1rem] md:p-5 p-2 m-5">
                  
                  {/* CPVC Service */}
                  <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
                      <div>
                          <img className="md:h-[200px] h-[150px] w-full cover" src={cpvcServiceImg} alt="CPVC Pipe Installation and Repair Service" />
                      </div>
                      <div className="p-5">
                          <h2 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">CPVC Plumbing</h2>
                          <p className="mx-auto text-[.8rem]">Expert CPVC pipe installations and repairs for reliable hot and cold water plumbing systems.</p>
                      </div>
                  </div>

                  {/* PVC Service */}
                  <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
                      <div>
                          <img className="md:h-[200px] h-[150px] w-full cover" src={pvcServiceImg} alt="PVC Pipe Installation and Repair Service" />
                      </div>
                      <div className="p-5">
                          <h2 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">PVC Plumbing</h2>
                          <p className="mx-auto text-[.8rem]">Specialists in PVC pipe installations for drainage, cold water supply, and irrigation systems.</p>
                      </div>
                  </div>

                  {/* UPVC Service */}
                  <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
                      <div>
                          <img className="md:h-[200px] h-[150px] w-full cover" src={upvcServiceImg} alt="UPVC Pipe Installation and Repair Service" />
                      </div>
                      <div className="p-5">
                          <h2 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">UPVC Plumbing</h2>
                          <p className="mx-auto text-[.8rem]">UPVC pipe solutions for water supply and ventilation systems that meet industry standards.</p>
                      </div>
                  </div>

                  {/* GI Service */}
                  <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
                      <div>
                          <img className="md:h-[200px] h-[150px] w-full cover" src={giServiceImg} alt="GI Pipe Installation and Repair Service" />
                      </div>
                      <div className="p-5">
                          <h2 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">GI Plumbing</h2>
                          <p className="mx-auto text-[.8rem]">Durable GI pipe services for high-pressure plumbing, ideal for outdoor and industrial use.</p>
                      </div>
                  </div>

                  {/* PPR Service */}
                  <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
                      <div>
                          <img className="md:h-[200px] h-[150px] w-full cover" src={pprServiceImg} alt="PPR Pipe Installation and Repair Service" />
                      </div>
                      <div className="p-5">
                          <h2 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">PPR Plumbing</h2>
                          <p className="mx-auto text-[.8rem]">We provide PPR pipe installations for heat-resistant and secure plumbing connections.</p>
                      </div>
                  </div>

                  {/* Composite Service */}
                  <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
                      <div>
                          <img className="md:h-[200px] rounded-t-xl h-[150px] w-full cover" src={compositeServiceImg} alt="Composite Pipe Installation and Repair Service" />
                      </div>
                      <div className="p-5">
                          <h2 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">Composite Plumbing</h2>
                          <p className="mx-auto text-[.8rem]">Versatile composite pipe installations, offering reliable plumbing solutions for various applications.</p>
                      </div>
                  </div>

                  </div>
              </div>
          </div>
          {/* Services Section End */}
      </>
  )
}

export default OurServices;
