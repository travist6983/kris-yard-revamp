
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-[80vh] flex items-center"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" 
      }}
    >
      <div className="centered-container px-4 md:px-8 text-white">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Keeping Your Yard Beautiful Year-Round</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">Professional lawn care and landscaping services you can trust. Family owned and operated in your local area.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-cta inline-block text-center">
              Request a Free Quote
            </a>
            <a href="#services" className="btn-secondary inline-block text-center">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
