import React from 'react';
import cpvcServiceImg from '../assets/cpvc-service.png';
import pvcServiceImg from '../assets/pvc-service.avif';
import upvcServiceImg from '../assets/upvc-service.png';
import giServiceImg from '../assets/gi-service.png';
import pprServiceImg from '../assets/ppr-service.avif';
import compositeServiceImg from '../assets/composite-service.jpg';

// Service data
const services = [
  {
    img: cpvcServiceImg,
    alt: 'CPVC Pipe Installation and Repair Service',
    title: 'CPVC Plumbing',
    description: 'Expert CPVC pipe installations and repairs for reliable hot and cold water plumbing systems.',
  },
  {
    img: pvcServiceImg,
    alt: 'PVC Pipe Installation and Repair Service',
    title: 'PVC Plumbing',
    description: 'Specialists in PVC pipe installations for drainage, cold water supply, and irrigation systems.',
  },
  {
    img: upvcServiceImg,
    alt: 'UPVC Pipe Installation and Repair Service',
    title: 'UPVC Plumbing',
    description: 'UPVC pipe solutions for water supply and ventilation systems that meet industry standards.',
  },
  {
    img: giServiceImg,
    alt: 'GI Pipe Installation and Repair Service',
    title: 'GI Plumbing',
    description: 'Durable GI pipe services for high-pressure plumbing, ideal for outdoor and industrial use.',
  },
  {
    img: pprServiceImg,
    alt: 'PPR Pipe Installation and Repair Service',
    title: 'PPR Plumbing',
    description: 'We provide PPR pipe installations for heat-resistant and secure plumbing connections.',
  },
  {
    img: compositeServiceImg,
    alt: 'Composite Pipe Installation and Repair Service',
    title: 'Composite Plumbing',
    description: 'Versatile composite pipe installations, offering reliable plumbing solutions for various applications.',
  },
];

function OurServices() {
  return (
    <>
      {/* Services Section Start */}
      <div className="max-w-[1400px] mx-auto mt-6 custom-shadow">
        <h1 className="text-center text-[1.5rem] md:text-[2rem] font-semibold underline mb-6">
          Our Plumbing Services
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 pb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200"
            >
              <img
                className="md:h-[200px] h-[150px] w-full object-cover rounded-t-xl"
                src={service.img}
                alt={service.alt}
              />
              <div className="p-5 text-center">
                <h2 className="md:text-[1.5rem] text-[1.2rem] font-semibold">
                  {service.title}
                </h2>
                <p className="text-[0.9rem] text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Services Section End */}
    </>
  );
}

export default OurServices;
