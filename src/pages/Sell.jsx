import React from "react";

const Sell = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Collaborate and Sell with Us</h1>
          <p className="text-lg md:text-xl">
            Partner with us to bring your digital creations to a global audience.
          </p>
        </div>
      </header>

      {/* Collaboration Benefits Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Why Partner with Us?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Expand Your Reach
              </h3>
              <p className="mt-4 text-gray-600">
                Gain access to our extensive customer base and increase your brand visibility across multiple markets.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Seamless Integration
              </h3>
              <p className="mt-4 text-gray-600">
                Let us handle the technical and marketing aspects while you focus on creating amazing digital products.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Earn More Revenue
              </h3>
              <p className="mt-4 text-gray-600">
                Maximize your income potential with competitive revenue sharing and promotional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-gray-100 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Step 1: Contact Us
              </h3>
              <p className="mt-4 text-gray-600">
                Reach out via email or our contact form. Share your portfolio and ideas for collaboration.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Step 2: Review and Approval
              </h3>
              <p className="mt-4 text-gray-600">
                Our team will evaluate your submission and guide you through the onboarding process.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-blue-600">
                Step 3: Start Selling
              </h3>
              <p className="mt-4 text-gray-600">
                Once onboarded, your products will be listed, and we’ll start promoting them to our audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">
            What Our Partners Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="italic text-gray-600">
                "This platform gave us unparalleled exposure and boosted our sales significantly!"
              </p>
              <h3 className="text-lg font-semibold text-blue-600 mt-4">- Alex Smith</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="italic text-gray-600">
                "The collaboration process was seamless, and the team was incredibly supportive."
              </p>
              <h3 className="text-lg font-semibold text-blue-600 mt-4">- Maria Johnson</h3>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="italic text-gray-600">
                "Thanks to their platform, we reached new customers across the globe."
              </p>
              <h3 className="text-lg font-semibold text-blue-600 mt-4">- Rahul Patel</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-600 text-white px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Collaborate?</h2>
          <p className="mt-4 text-lg">
            Take the first step towards success by joining our growing network of partners.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sell;
