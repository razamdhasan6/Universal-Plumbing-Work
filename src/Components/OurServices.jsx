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
            {/* services start here */}
      <div className="max-w-[1400px] mx-auto mt-4 custom-shadow ">
          <div>
              <h1 className="pt-3 flex justify-center text-[1.5rem] md:text-[2rem] font-semibold underline">Our Service's</h1>
            <div className="grid sm:grid-cols-2 
            md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1rem] md:p-5 p-2 m-5">
            
            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="md:h-[200px] h-[150px] w-full cover" src={cpvcServiceImg} alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">CPVC</h1>
              <p className="mx-auto text-[.8rem]">We install and repair CPVC pipes for reliable hot and cold water systems.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="md:h-[200px] h-[150px] w-full cover" src={pvcServiceImg} alt="PVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">PVC</h1>
              <p className="mx-auto text-[.8rem]">Our team handles PVC pipe installations and repairs for cold water, drainage, and irrigation.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="md:h-[200px] h-[150px] w-full cover" src={upvcServiceImg} alt="UPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">UPVC</h1>
              <p className="mx-auto text-[.8rem]">We specialize in UPVC pipe services for water supply and ventilation systems.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="md:h-[200px] h-[150px] w-full cover" src={giServiceImg} alt="GI-Service" />
              </div>
              <div className="p-5">
                <h1 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">GI</h1>
              <p className="mx-auto text-[.8rem]">We provide strong GI pipe installations and repairs for high-pressure and outdoor systems.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="md:h-[200px] h-[150px] w-full cover" src={pprServiceImg} alt="PPR-Service" />
              </div>
              <div className="p-5">
                <h1 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">PPR</h1>
              <p className="mx-auto text-[.8rem]">Our PPR pipe services ensure secure, heat-resistant plumbing connections.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="md:h-[200px] rounded-t-xl h-[150px] w-full cover" src={compositeServiceImg} alt="Composite-Service"/>
              </div>
              <div className="p-5">
                <h1 className="md:text-[2rem] text-[1.2rem] font-semibold text-center">COMPOSITE</h1>
              <p className="mx-auto text-[.8rem]">We offer versatile composite pipe installations and repairs for various applications.</p>
              </div>
            </div>

              </div>
          </div>
      </div>
            {/* services end here */}
      </>
  )
}

export default OurServices;
