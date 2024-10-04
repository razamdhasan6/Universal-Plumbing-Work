
function OurServices() {
  return (
      <>
            {/* services start here */}
      <div className="max-w-[1400px] mx-auto mt-4 custom-shadow ">
          <div>
              <h1 className="pt-3 flex justify-center text-[2rem] font-semibold underline">Our Service's</h1>
            <div className="grid sm:grid-cols-2 
            md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[1rem] p-5 m-5">
            
            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="h-[200px] w-full cover" src="/cpvc-service.png" alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="text-[2rem] font-semibold text-center">CPVC</h1>
              <p className="mx-auto">We install and repair CPVC pipes for reliable hot and cold water systems.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="h-[200px] w-full cover" src="/pvc-service.avif" alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="text-[2rem] font-semibold text-center">PVC</h1>
              <p className="mx-auto">Our team handles PVC pipe installations and repairs for cold water, drainage, and irrigation.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="h-[200px] w-full cover" src="/upvc-service.png" alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="text-[2rem] font-semibold text-center">UPVC</h1>
              <p className="mx-auto">We specialize in UPVC pipe services for water supply and ventilation systems.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="h-[200px] w-full cover" src="/gi-service.png" alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="text-[2rem] font-semibold text-center">GI</h1>
              <p className="mx-auto">We provide strong GI pipe installations and repairs for high-pressure and outdoor systems.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="h-[200px] w-full cover" src="/ppr-service.avif" alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="text-[2rem] font-semibold text-center">PPR</h1>
              <p className="mx-auto">Our PPR pipe services ensure secure, heat-resistant plumbing connections.</p>
              </div>
            </div>

            <div className="custom-shadow bg-white rounded-xl hover:scale-105 duration-200">
              <div>
                <img className="h-[200px] w-full cover" src="/composite-service.jpg" alt="CPVC-Service" />
              </div>
              <div className="p-5">
                <h1 className="text-[2rem] font-semibold text-center">COMPOSITE</h1>
              <p className="mx-auto">We offer versatile composite pipe installations and repairs for various applications.</p>
              </div>
            </div>


              </div>
          </div>
              
      </div>
            {/* services end here */}
          
      </>
  )
}

export default OurServices