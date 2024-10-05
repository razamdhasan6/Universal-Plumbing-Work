import { IoMdHome } from "react-icons/io";
import { VscTools  } from "react-icons/vsc";
import { MdOutlineHomeWork  } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { IoLogInOutline  } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState,useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Header() {
    const navLinks = [
        {title:"Home",icon:<IoMdHome />, path:"home" },
        {title:"Service's",icon:<VscTools/>, path:"services"},
        {title:"Our Clints",icon:<MdOutlineHomeWork/>, path:"clients"},
        {title:"Contact-Us",icon:<MdPermContactCalendar  />, path:"contact"},
        { title: "Book Now", icon: <IoLogInOutline />, isButton: true },
        
    ]
    let [isOpen, setIsOpen] = useState(false)
    
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [isOpen]);
    return (
        <>
            {/* {Header Section start here } */}
            
                {/* {Logo Section start here } */}
            <div className=" whitespace-nowrap fixed top-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 w-full z-10 bg-white max-w-[1400px] custom-shadow h-[100px] flex justify-between items-center mx-auto px-[3rem] py-[.5rem] font-semibold ">
                <div className="max-w-[160px] ml-[-1.5rem] sm:ml-0 text-[1rem] md:max-w-[300px] md:text-[1.3rem] flex flex-col items-center  p-[1.2rem] shadow-md rounded-[3rem]">
                    <p className="text-blue-300 mt-[-1.2rem]  text-[2rem] p-0 m-0">A1</p>
                    <p className="mt-[-.5rem]">Plumbing <span className="text-red-500">Work</span> </p> 
                </div>
                {/* {Logo Section end here } */}
                <div>
                    {/* {Nav Section Start here } */}

                    <nav className={`sm:flex sm:static sm:bg-white sm:text-[.67rem] sm:pl-[1rem] md:text-[.9rem] lg:text-[1.1rem] sm:gap-3 lg:gap-5 absolute left-0 text-center sm:mt-[0%] mt-[14%]  bg-gray-500 text-white sm:text-black w-full sm:h-auto h-[100svh]  transition-all ${isOpen ? 'pl-[0]':'left-[-100%]'}`}>
                            {navLinks.map((nav,index) => (
                                <ul key={index} className="flex items-center cursor-pointer hover:text-red-500 ">
                                    {!nav.isButton ? (
                                        <>
                                            <li className={` border w-full sm:border-none flex items-center gap-2 h-14 hover:border-b-[2px] hover:border-orange-400 ${isOpen ? 'pl-[40%]' : 'pl-0'}`}>
                                                <Link className="flex items-center gap-2" to={nav.path} smooth={true} offset={-115} duration={400}onClick={() => setIsOpen(false)}>
                                                <span>{nav.icon}</span>
                                                <span>{nav.title}</span>
                                                </Link>
                                            </li>
                                        </> 
                                    ) :
                                        (
                                            <button className={`flex items-center mt-5 w-full p-[1rem] sm:mt-0 gap-2 bg-orange-400 sm:rounded-[1.5rem] sm:p-[.7rem] hover:bg-blue-400 hover:text-white ${isOpen ? 'pl-[40%]':'pl-0'}`}>
                                                <span>{nav.icon}</span>
                                                <span>{nav.title}</span>
                                            </button>
                                        )}
                                </ul>
                            ))}
                    </nav> 
                </div>
                {/* {Nav Section End here } */}
                <div onClick={() => setIsOpen(!isOpen)} className="sm:hidden flex items-center text-[2rem]">
                    {
                        isOpen?<IoMdClose />:<IoMdMenu />
                    }
                </div>
                
            </div>
            {/* {Header Section end here } */}
            

            
      </>
  )
}

export default Header