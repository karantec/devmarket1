// CallToAction.jsx
export const CallToAction = () => {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Development Process?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Join thousands of developers and businesses saving time and resources with Dev Market
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Selling
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Browse Products
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default CallToAction;