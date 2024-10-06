import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div className="bg-orange-100 p-8 flex flex-col gap-2 text-center items-center justify-center pb-3">
      <div className="flex gap-3 text-[2rem] cursor-pointer">
        <span className="hover:scale-125 hover:bg-blue-200">
          <CiFacebook />
        </span>
        <span className="hover:scale-125 hover:bg-blue-200">
          <CiInstagram />
        </span>
        <span className="hover:scale-125 hover:bg-blue-200">
          <CiTwitter />
        </span>
      </div>

      <div className="flex gap-3 cursor-pointer">
        {/* Same smooth scroll links as used in Header */}
        <p className="hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">
          <Link to="home" smooth={true} offset={-115} duration={400} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </p>

        <p className="hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">
          <Link to="services" smooth={true} offset={-115} duration={400} onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </p>

        <p className="hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">
          <Link to="clients" smooth={true} offset={-115} duration={400} onClick={() => setIsOpen(false)}>
            Our Clients
          </Link>
        </p>

        <p className="hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">
          <Link to="contact" smooth={true} offset={-115} duration={400} onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </p>

        <p className="hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem] underline text-green-400 rounded-md px-1">
         <a href="https://wa.link/9n2yjg" target="_blank" rel="noopener noreferrer">Book Now</a> 
        </p>
      </div>

      <div>
        <p className="text-[.7rem] md:text-[.9rem]">© 2024 A1 Plumbing Work</p>
      </div>
    </div>
  );
};

export default Footer;
