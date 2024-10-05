// Importing React
import React from 'react';

// Importing images from the assets folder
import myHome from '../assets/my-home.jpg'; // Adjust the path according to your file structure
import phoenixMultiplex from '../assets/phoenix-multiplex.jpg';
import dps from '../assets/dps.avif';
import bashyamTitanic from '../assets/bashyam-titanic.avif';
import villas from '../assets/villas.jpg';
import matrivanam from '../assets/matrivanam.jpg';
import hitechhome from '../assets/hitech-home.jpeg';



const OurClints = () => {
  return (
    <div className="max-w-[1400px] mx-auto custom-shadow">
      <h1 className="text-center text-[1.5rem] md:text-[2rem] font-semibold py-3 underline">Our <span className='text-green-500'>Clint's</span>/Project's</h1>
      <div className="gap-3 items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={myHome} alt="My Home Tarkashya" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">My Home Group/ Tarkashya</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Kokapet, Hyderabad</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl"> 
            <a href="https://maps.app.goo.gl/7qPXQfonaaRDb2Td8" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
        </div>

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-50 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={hitechhome} alt="Bashyam Hitech-home Guntur" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">Aqua Infotech/ Hitech Homes</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Chanda Nagar, Hyderabad, Telangana</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl">
            <a href="https://maps.app.goo.gl/t9kD9DvPQ6EoWpnx8" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
        </div>

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={phoenixMultiplex} alt="Phoenix Multiplex" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">Phoenix Multiplex</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Guntur, Andhra Pradesh</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl">
            <a href="https://maps.app.goo.gl/MLERnC4FY2Q4SjkK7" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
        </div>

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={dps} alt="Delhi Public School Guntur" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">Delhi Public School Guntur</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Lam, Guntur, Andhra Pradesh</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl">
            <a href="https://maps.app.goo.gl/MRUEzL19UwTWjN2n6" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
        </div>

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={bashyamTitanic} alt="Bashyam Titanic Campus" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">Bashyam Titanic Campus</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Gorentla, Guntur, Andhra Pradesh</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline md:text-[1rem] rounded-xl">
            <a href="https://maps.app.goo.gl/cRAteG2Ry7iJSsGSA" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
        </div>

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={villas} alt="Alince Project Villas" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">Alince Project Villas</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Gujjangulla, Guntur, Andhra Pradesh</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl">
            <a href="https://maps.app.goo.gl/6B3y3fcXJaBSfjQN9" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
        </div>

        <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-50 custom-shadow">
          <img className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]" src={matrivanam} alt="Bashyam Matrivanam Guntur" />
          <h1 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">Bashyam Matrivanam Guntur</h1>
          <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">Guntur, Andhra Pradesh</p>
          <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl">
            <a href="https://maps.app.goo.gl/Fy62zaxYg7Rdskkx7" target="_blank" rel="noopener noreferrer">
        Visit Location
        </a></button>
              </div>
              
            

      </div>
    </div>
  );
}

export default OurClints;
