// NewsletterSignup.jsx
export const NewsletterSignup = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add newsletter signup logic here
    };
  
    return (
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8">Get the latest updates about new products, features, and special offers</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg text-gray-900 w-full md:w-96"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };

  export default NewsletterSignup;