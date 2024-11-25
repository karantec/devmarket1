import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Dev Market?',
      answer: 'Dev Market is a marketplace where you can find and purchase high-quality landing pages tailored for your business needs. Our landing pages are crafted by professionals to help you maximize conversions and user engagement.',
    },
    {
      question: 'How do I purchase a landing page?',
      answer: 'To purchase a landing page, simply browse our collection, select the page that best fits your needs, and proceed through the checkout process. You will receive access to your landing page files immediately after purchase.',
    },
    {
      question: 'Are the landing pages customizable?',
      answer: 'Yes, our landing pages are fully customizable. We provide well-documented source code that you can modify to suit your branding and functionality requirements.',
    },
    {
      question: 'What format do the landing pages come in?',
      answer: 'Our landing pages are built using the latest web technologies, including HTML, CSS, JavaScript, and React. You will receive all the source files you need to deploy and customize the page.',
    },
    {
      question: 'Do you provide support after purchase?',
      answer: 'Yes, we provide support for all our landing pages. If you encounter any issues or have questions, our support team is here to assist you via email or live chat.',
    },
    {
      question: 'Can I use the landing page for multiple projects?',
      answer: 'Our landing pages come with a single-use license by default. If you wish to use a landing page for multiple projects, please contact us for extended licensing options.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Frequently Asked Questions
      </h1>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{faq.question}</h2>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Have more questions?</h3>
        <p className="text-gray-600 mb-6">
          If you have any more questions or need further assistance, feel free to reach out to our support team.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQ;
