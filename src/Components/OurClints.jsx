import React from 'react';
import myHome from '../assets/my-home.jpg';
import phoenixMultiplex from '../assets/phoenix-multiplex.jpg';
import dps from '../assets/dps.avif';
import bashyamTitanic from '../assets/bashyam-titanic.avif';
import villas from '../assets/villas.jpg';
import matrivanam from '../assets/matrivanam.jpg';
import hitechhome from '../assets/hitech-home.jpeg';
import ankura from '../assets/Ankura Urban Trilla.webp';
import urvanVills from '../assets/Urvan Trilla Vills.jpg';
import samtamamta from '../assets/samtamamta.png';

const projects = [
  {
    imgSrc: myHome,
    title: 'My Home Group / Tarkashya',
    location: 'Kokapet, Hyderabad',
    mapLink: 'https://maps.app.goo.gl/7qPXQfonaaRDb2Td8',
  },
  {
    imgSrc: ankura,
    title: 'Ankura Urban Trilla',
    location: 'Mokila, Rangareddy, Telangana',
    mapLink: 'https://maps.app.goo.gl/W9bpbJrFqvigP3CBA',
  },
  {
    imgSrc: urvanVills,
    title: 'Urban Trilla Farms Villas',
    location: 'Shankarpalle, Hyderabad, Telangana',
    mapLink: 'https://maps.app.goo.gl/vD2VJDSsuUV4dYVd7',
  },
  {
    imgSrc: hitechhome,
    title: 'Aqua Infotech / Hitech Homes',
    location: 'Chanda Nagar, Hyderabad, Telangana',
    mapLink: 'https://maps.app.goo.gl/t9kD9DvPQ6EoWpnx8',
  },
  {
    imgSrc: phoenixMultiplex,
    title: 'Phoenix Multiplex',
    location: 'Guntur, Andhra Pradesh',
    mapLink: 'https://maps.app.goo.gl/MLERnC4FY2Q4SjkK7',
  },
  {
    imgSrc: dps,
    title: 'Delhi Public School Guntur',
    location: 'Lam, Guntur, Andhra Pradesh',
    mapLink: 'https://maps.app.goo.gl/MRUEzL19UwTWjN2n6',
  },
  {
    imgSrc: bashyamTitanic,
    title: 'Bashyam Titanic Campus',
    location: 'Gorentla, Guntur, Andhra Pradesh',
    mapLink: 'https://maps.app.goo.gl/cRAteG2Ry7iJSsGSA',
  },
  {
    imgSrc: villas,
    title: 'Ananta Luxury Villas',
    location: 'Guntur, Andhra Pradesh 522006',
    mapLink: 'https://maps.app.goo.gl/4CcxCUzcTg4HgD8R7',
  },
  {
    imgSrc: matrivanam,
    title: 'Bashyam Maitrivanam Guntur',
    location: 'Guntur, Andhra Pradesh',
    mapLink: 'https://maps.app.goo.gl/PMutPbosdfhGs6XF8',
  },
  {
    imgSrc: samtamamta,
    title: 'Bhashyam Girls Campus',
    location: 'Guntur, Andhra Pradesh 522034',
    mapLink: 'https://maps.app.goo.gl/D5d3kvPkav9kWGL9A',
  },
];

const ProjectCard = ({ imgSrc, title, location, mapLink }) => (
  <article className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
    <img
      className="rounded-t-xl w-full object-cover md:h-[200px] h-[150px]"
      src={imgSrc}
      alt={title}
    />
    <h3 className="ml-5 mt-2 font-semibold md:text-[1.5rem] text-[1.2rem]">
      {title}
    </h3>
    <p className="ml-5 my-2 text-[.8rem] md:text-[1rem]">{location}</p>
    <button className="ml-5 mb-3 text-blue-400 p-2 bg-gray-100 underline text-[.rem] md:text-[1rem] rounded-xl">
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        Visit Location
      </a>
    </button>
  </article>
);

const OurClients = () => {
  return (
    <div className="max-w-[1400px] mx-auto custom-shadow">
      <h2 className="text-center text-[1.5rem] md:text-[2rem] font-semibold py-3 underline">
        Our <span className="text-green-500">Clients</span> / Projects
      </h2>
      <div className="gap-3 items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
