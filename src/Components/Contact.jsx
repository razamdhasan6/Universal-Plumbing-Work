

const ContactForm = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 custom-shadow mt-5 max-w-[1400px] p-[2rem] mx-auto">
          <form className='md:max-w-[100%] custom-shadow rounded-2xl p-5'>
              <h1 className='text-[2.5rem] font-bold text-center text-orange-400'>Contact Us</h1>

              <div className=''>
              <label className='block text-[1.2rem] font-semibold p-2' htmlFor="Name">Full Name:</label>
              <input className='block w-full custom-shadow p-[1rem] text-[1rem] rounded-xl' type="text" id='Name' placeholder='Enter your Name' />
              </div>

              <div className=''>
              <label className='block text-[1.2rem] font-semibold p-2' htmlFor="email">Your Email:</label>
              <input className='block w-full custom-shadow p-[1rem] text-[1rem] rounded-xl' type="email" id='email' placeholder='Enter your Email' />
              </div>

              <div className=''>
              <label className='block text-[1.2rem] font-semibold p-2' htmlFor="message">Type Your Message:</label>
              <input className='block w-full custom-shadow p-[1rem] text-[1rem] rounded-xl' type="text" id='message' placeholder='Type your message' />
              </div>

              <div className="flex items-center justify-center mt-5">
                  <button className={`flex items-center justify-center text-[1.3rem] text-center text-[1.5rem] mt-5 w-[7rem] p-[.8rem] sm:mt-0 gap-2 bg-orange-400 rounded-[1.5rem] hover:bg-blue-400 hover:text-white `}>Submit</button>
              </div>
          </form>
          <div className="md:max-w-[100%]">
          <iframe className="w-full h-full min-h-[300px] custom-shadow rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4695.595986802076!2d80.41510230943304!3d16.337028965417534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727017181101!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
    </div>
  )
}

export default ContactForm