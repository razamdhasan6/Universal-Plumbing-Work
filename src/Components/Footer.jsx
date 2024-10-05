import { CiFacebook ,CiInstagram ,CiTwitter  } from "react-icons/ci";
const Footer = () => {
  return (
      <div className="bg-orange-100 p-8 flex flex-col gap-2  text-center items-center justify-center">
          <div className="flex gap-3 text-[2rem] cursor-pointer ">
              <span className="hover:scale-125 hover:bg-blue-200"><CiFacebook /></span>
              <span className="hover:scale-125 hover:bg-blue-200"><CiInstagram /></span>
              <span className="hover:scale-125 hover:bg-blue-200"><CiTwitter /></span>
      </div>
      <div className="flex gap-3 cursor-pointer">
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">Home</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">Service's</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">Our Clints</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">Contact-Us</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg whitespace-nowrap text-[.85rem] md:text-[1rem]">Book Now</p>
      </div>
          <div>
              <p className="text-[.7rem] md:text-[.9rem]">© 2024 A1 Plumbing Work</p>
          </div>
    </div>
  )
}

export default Footer