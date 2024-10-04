import { CiFacebook ,CiInstagram ,CiTwitter  } from "react-icons/ci";
const Footer = () => {
  return (
      <div className="bg-orange-100 p-8 flex flex-col gap-2 mt-10 text-center items-center justify-center">
          <div className="flex gap-3 text-[2rem] cursor-pointer ">
              <span className="hover:scale-125 hover:bg-blue-200"><CiFacebook /></span>
              <span className="hover:scale-125 hover:bg-blue-200"><CiInstagram /></span>
              <span className="hover:scale-125 hover:bg-blue-200"><CiTwitter /></span>
      </div>
      <div className="flex gap-3 cursor-pointer">
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg">Home</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg">Service's</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg">Our Clints</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg">Contact-Us</p>
        <p className=" hover:bg-gray-200 hover:scale-125 hover:p-1 hover:rounded-lg">Book Now</p>
      </div>
          <div>
              <p>© 2024 A1 Plumbing Work</p>
          </div>
    </div>
  )
}

export default Footer