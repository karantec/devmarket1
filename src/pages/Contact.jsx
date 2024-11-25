import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg md:text-xl">
            Have questions or want to collaborate? Reach out to us today!
          </p>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Contact Information
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Email Us</h3>
              <p className="mt-4 text-gray-600">support@devmarket.com</p>
            </div>
            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Call Us</h3>
              <p className="mt-4 text-gray-600">+1 (123) 456-7890</p>
            </div>
            {/* Location */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">Visit Us</h3>
              <p className="mt-4 text-gray-600">1234 Market St, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-100 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Send Us a Message
          </h2>
          <form className="bg-white rounded-lg shadow-lg p-6 md:p-12 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  placeholder="Your Email Address"
                  required
                />
              </div>
            </div>
            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Subject"
                required
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Find Us
          </h2>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2310834695586!2d-122.41941568468191!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c2f71a27%3A0x4d122b77e94b738f!2s1234%20Market%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632965015946!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
