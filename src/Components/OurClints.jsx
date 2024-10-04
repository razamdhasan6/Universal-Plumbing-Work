
const OurClints = () => {
  return (
      <div className="max-w-[1400px] mx-auto custom-shadow ">
          <h1 className="text-center text-[2rem] font-semibold py-3 underline">Our Clint's</h1>
          <div className=" gap-3 items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5">
              
              <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
              <img className="rounded-t-xl w-full object-cover h-[200px]" src="/my-home.jpg" alt="" />
              <h1 className="ml-5 mt-2 font-semibold text-[1.5rem]">My Home Tarkashya</h1>
                  <p className="ml-5 my-2">Kokapet,Hyderabad</p>
                  <button className="ml-5 mb-5 text-white p-2 bg-blue-400 rounded-xl">Visit Location</button>
              </div>

              <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
              <img className="rounded-t-xl w-full object-cover h-[200px]" src="/phoenix-multiplex.jpg" alt="" />
              <h1 className="ml-5 mt-2 font-semibold text-[1.5rem]">Phonex Multiplex</h1>
                  <p className="ml-5 my-2">Guntur,Andhra Pardesh</p>
                  <button className="ml-5 mb-5 text-white p-2 bg-blue-400 rounded-xl">Visit Location</button>
              </div>

              <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
              <img className="rounded-t-xl w-full object-cover h-[200px]" src="/dps.avif" alt="" />
              <h1 className="ml-5 mt-2 font-semibold text-[1.5rem]">Delhi Public School Guntur</h1>
                  <p className="ml-5 my-2">Lam, Guntur, Andhra Pardesh</p>
                  <button className="ml-5 mb-5 text-white p-2 bg-blue-400 rounded-xl">Visit Location</button>
              </div>

              <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
              <img className="rounded-t-xl w-full object-cover h-[200px]" src="/bashyam-titanic.avif" alt="" />
              <h1 className="ml-5 mt-2 font-semibold text-[1.5rem]">Bashyam Titanic Campus</h1>
                  <p className="ml-5 my-2">Gorentla, Guntur, Andhra Pradesh </p>
                  <button className="ml-5 mb-5 text-white p-2 bg-blue-400 rounded-xl">Visit Location</button>
              </div>

              <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-300 custom-shadow">
              <img className="rounded-t-xl w-full object-cover h-[200px]" src="/villas.jpg" alt="" />
              <h1 className="ml-5 mt-2 font-semibold text-[1.5rem]">Alince Project Villas</h1>
                  <p className="ml-5 my-2">Gujjangulla, Guntur, Andhra Pradesh</p>
                  <button className="ml-5 mb-5 text-white p-2 bg-blue-400 rounded-xl">Visit Location</button>
              </div>

              <div className="mb-5 rounded-2xl gap-5 hover:scale-105 duration-50 custom-shadow">
              <img className="rounded-t-xl w-full object-cover h-[200px]" src="/matrivanam.jpg" alt="" />
              <h1 className="ml-5 mt-2 font-semibold text-[1.5rem]">Bashyam Matrivanam Guntur</h1>
                  <p className="ml-5 my-2">Guntur, Andhra Pradesh</p>
                  <button className="ml-5 mb-5 text-white p-2 bg-blue-400 rounded-xl">Visit Location</button>
              </div>

          </div>
          
    </div>
  )
}

export default OurClints