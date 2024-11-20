const ContactForm = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 custom-shadow mt-5 max-w-[1400px] p-5 mx-auto">
      {/* Contact Form */}
      <form className="bg-white custom-shadow rounded-2xl p-6">
        <h1 className="md:text-[2.5rem] text-[1.5rem] font-bold text-center text-orange-400 mb-6">
          Contact Us
        </h1>

        {/* Name Input */}
        <div className="mb-4">
          <label
            className="block md:text-[1.2rem] text-[0.9rem] font-semibold mb-2"
            htmlFor="Name"
          >
            Full Name:
          </label>
          <input
            className="block w-full custom-shadow p-[1rem] md:text-[1rem] text-[0.9rem] rounded-xl"
            type="text"
            id="Name"
            placeholder="Enter your Name"
            aria-label="Full Name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block md:text-[1.2rem] text-[0.9rem] font-semibold mb-2"
            htmlFor="email"
          >
            Your Email:
          </label>
          <input
            className="block w-full custom-shadow p-[1rem] md:text-[1rem] text-[0.9rem] rounded-xl"
            type="email"
            id="email"
            placeholder="Enter your Email"
            aria-label="Email Address"
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label
            className="block md:text-[1.2rem] text-[0.9rem] font-semibold mb-2"
            htmlFor="message"
          >
            Type Your Message:
          </label>
          <textarea
            className="block w-full custom-shadow p-[1rem] md:text-[1rem] text-[0.9rem] rounded-xl h-[100px]"
            id="message"
            placeholder="Type your message"
            aria-label="Message"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-5">
          <button
            type="submit"
            className="flex items-center justify-center md:text-[1.3rem] text-center w-[7rem] p-[0.8rem] bg-blue-400 text-white rounded-[1.5rem] hover:bg-orange-400 hover:text-black transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Map Section */}
      <div className="md:max-w-[100%]">
        <iframe
          className="w-full h-full min-h-[300px] custom-shadow rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61263.779322122704!2d80.39331871563617!3d16.323648977595994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7999dd90f1e694!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1732024500675!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Guntur Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
