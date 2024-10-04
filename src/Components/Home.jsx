import { IoLogInOutline  } from "react-icons/io5";

function Home() {
  return (
      <>
              {/* homePage start here */}
          <div className="sm:mt-[115px] grid custom-shadow sm:grid-cols-3 bg-blue-100 mx-auto h-auto py-5 max-w-[1400px] sm:h-[65vh] mt-4">
              <div className="h-[50vh] w-full sm:h-auto col-span-2 flex flex-col items-center md:h-[100%] py-[2rem] justify-center px-[2rem]">
                  <h1 className="text-[1.5rem] sm:text-[2rem] font-bold mx-auto text-center sm:mt-[-3rem] md:mt-0">Facing Plumbing Issues?<br /> Our Solutions Are Guaranteed!
                  </h1>
                  <p className="text-[.7rem] sm:text-[1rem] px-[1rem] xl:px-[5rem] font-semibold pt-5 sm:mb-5">"Facing any type of plumbing challenge? We provide 100% reliable solutions, whether you need repairs, new installations, or work done on commercial buildings, flats, or personal homes. Our expert team has handled projects of all sizes, ensuring top quality within your budget. See the list of services we offer below."
                  </p>
                  <button className={`flex items-cente text-center text-[1.5rem] mt-5 w-auto p-[.5rem] sm:mt-0 gap-2 bg-orange-400 rounded-[1.5rem] sm:p-[.7rem] hover:bg-blue-400 hover:text-white `}>
                      <span className="mt-2"><IoLogInOutline /></span><a href="https://wa.link/5o628x" target="_blank" rel="noopener noreferrer">Book Now</a></button>
              </div>
              <div className="w-full mx-auto sm:h-auto flex items-center justify-start px-10 sm:justify-center" >
                  <img className="h-[150px] sm:h-[200px] md:h-[300px]" src="/public/Plumber-avtar.webp" alt="" />

                  <img className="h-[150px] sm:hidden" src="/public/avtar1.png" alt="" />
              </div>
          </div>
              {/* homePage end here */}

      
      </>
  )
}

export default Home