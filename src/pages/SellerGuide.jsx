import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const SellerGuide = () => {
  // Create a reference to the main content that will be converted to PDF
  const contentRef = useRef();

  // Function to handle PDF download
  const handleDownloadPdf = () => {
    const element = contentRef.current;
    const options = {
      margin: 0.5,
      filename: 'SellerGuide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content Reference */}
      <div ref={contentRef}>
        {/* Header Section */}
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h1 className="text-5xl font-bold mb-4">Seller's Guide</h1>
            <p className="text-lg md:text-xl">
              Your ultimate guide to becoming a successful seller on Dev Market.
            </p>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Get Started on Your Selling Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Follow our step-by-step guide to start selling and maximize your potential. We are here to help you grow and succeed.
            </p>
          </div>
        </section>

        {/* Step-by-Step Guide Section */}
        <section className="py-12 bg-gray-100 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Step-by-Step Guide
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-purple-600">
                  Step 1: Create a Seller Account
                </h3>
                <p className="mt-4 text-gray-600">
                  Sign up for a seller account to get started. Fill in your basic information and complete your profile to make your store attractive to buyers.
                </p>
              </div>
              {/* Step 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-purple-600">
                  Step 2: Set Up Your Store
                </h3>
                <p className="mt-4 text-gray-600">
                  Customize your store with a professional logo, banner, and compelling description. Showcase your brand in the best way possible.
                </p>
              </div>
              {/* Step 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-purple-600">
                  Step 3: Add Your Products
                </h3>
                <p className="mt-4 text-gray-600">
                  Upload your digital products with detailed descriptions, features, and high-quality images to attract potential customers.
                </p>
              </div>
              {/* Step 4 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-purple-600">
                  Step 4: Set Pricing and Offers
                </h3>
                <p className="mt-4 text-gray-600">
                  Set competitive pricing and offer discounts to attract more buyers. Consider launching time-limited promotions for added visibility.
                </p>
              </div>
              {/* Step 5 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-purple-600">
                  Step 5: Market Your Products
                </h3>
                <p className="mt-4 text-gray-600">
                  Share your products on social media and leverage our promotional tools to increase visibility and reach a wider audience.
                </p>
              </div>
              {/* Step 6 */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-purple-600">
                  Step 6: Track Your Sales
                </h3>
                <p className="mt-4 text-gray-600">
                  Use our analytics tools to track your sales, customer insights, and adjust your strategy accordingly for higher conversions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Success Section */}
        <section className="py-12 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Tips for Success
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Tip 1 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  Be Responsive
                </h3>
                <p className="mt-4 text-gray-600">
                  Respond to customer inquiries promptly. Building trust with buyers is key to increasing sales and getting positive reviews.
                </p>
              </div>
              {/* Tip 2 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  Provide Value
                </h3>
                <p className="mt-4 text-gray-600">
                  Ensure your products are of high quality and provide real value to customers. High-quality content leads to better reviews and repeat customers.
                </p>
              </div>
              {/* Tip 3 */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-purple-600">
                  Keep Learning
                </h3>
                <p className="mt-4 text-gray-600">
                  Stay updated on market trends and continuously improve your products. Take advantage of our seller resources to grow your skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources Section */}
        <section className="py-12 bg-gray-100 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">
              Additional Resources
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Browse our resources to learn more about how to maximize your selling potential on Dev Market.
            </p>
            <a
              href="/resources"
              className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
            >
              Explore Resources
            </a>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="py-12 bg-purple-600 text-white px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Ready to Start Selling?</h2>
          <p className="mt-4 text-lg">
            Join our growing community of successful sellers and start making an impact today.
          </p>
          <a
            href="/signup"
            className="mt-6 inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
          >
            Sign Up Now
          </a>
        </div>
      </section>

      {/* Download PDF Button */}
      <div className="py-6 text-center">
        <button
          onClick={handleDownloadPdf}
          className="bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          Download Seller Guide as PDF
        </button>
      </div>
    </div>
  );
};

export default SellerGuide;
