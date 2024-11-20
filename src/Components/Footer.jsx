import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <footer className="bg-orange-100 p-8 flex flex-col gap-4 text-center items-center justify-center pb-3">
      {/* Social Media Icons */}
      <div className="flex gap-4 text-[2rem] cursor-pointer">
        <span
          className="hover:scale-125 hover:bg-blue-200 p-2 rounded-full"
          aria-label="Facebook"
          title="Visit our Facebook page"
        >
          <CiFacebook />
        </span>
        <span
          className="hover:scale-125 hover:bg-blue-200 p-2 rounded-full"
          aria-label="Instagram"
          title="Visit our Instagram profile"
        >
          <CiInstagram />
        </span>
        <span
          className="hover:scale-125 hover:bg-blue-200 p-2 rounded-full"
          aria-label="Twitter"
          title="Visit our Twitter profile"
        >
          <CiTwitter />
        </span>
      </div>

      {/* Navigation Links */}
      <nav className="flex gap-4 cursor-pointer text-[0.85rem] md:text-[1rem]">
        <p
          className="hover:bg-gray-200 hover:scale-110 p-1 rounded-lg"
          title="Scroll to Home"
        >
          <Link
            to="home"
            smooth={true}
            offset={-115}
            duration={400}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </p>
        <p
          className="hover:bg-gray-200 hover:scale-110 p-1 rounded-lg"
          title="Scroll to Services"
        >
          <Link
            to="services"
            smooth={true}
            offset={-115}
            duration={400}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </p>
        <p
          className="hover:bg-gray-200 hover:scale-110 p-1 rounded-lg"
          title="Scroll to Our Clients"
        >
          <Link
            to="clients"
            smooth={true}
            offset={-115}
            duration={400}
            onClick={() => setIsOpen(false)}
          >
            Our Clients
          </Link>
        </p>
        <p
          className="hover:bg-gray-200 hover:scale-110 p-1 rounded-lg"
          title="Scroll to Contact Us"
        >
          <Link
            to="contact"
            smooth={true}
            offset={-115}
            duration={400}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </p>
        <p
          className="hover:bg-gray-200 hover:scale-110 p-1 underline text-green-400 rounded-md"
          title="Book Now"
        >
          <a
            href="https://wa.link/d7uioh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </a>
        </p>
      </nav>

      {/* Footer Text */}
      <div>
        <p className="text-[0.7rem] md:text-[0.9rem] text-gray-600">
          © 2024 Universal Plumbing Work India. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
