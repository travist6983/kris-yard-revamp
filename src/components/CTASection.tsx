
const CTASection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="centered-container px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to transform your yard?</h2>
            <p className="text-white text-opacity-90">Contact us today for a free, no-obligation quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-white text-primary hover:bg-gray-100 transition-colors duration-300 py-3 px-8 rounded-md font-semibold text-center">
              Request a Quote
            </a>
            <a href="tel:5551234567" className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-300 py-3 px-8 rounded-md font-semibold text-center">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
