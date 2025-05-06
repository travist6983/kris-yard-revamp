
import { TreeDeciduous, Snow, Shovel, MapPin } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Lawn Mowing & Maintenance",
      description: "Regular mowing, edging, and trimming services to keep your lawn looking healthy and well-maintained throughout the growing season.",
      icon: <TreeDeciduous size={24} className="text-primary" />
    },
    {
      title: "Professional Landscaping",
      description: "Custom landscape design, installation, and maintenance services to enhance the beauty and value of your property.",
      icon: <MapPin size={24} className="text-primary" />
    },
    {
      title: "Snow Removal",
      description: "Reliable winter snow removal services for residential and commercial properties, including plowing, shoveling, and salting.",
      icon: <Snow size={24} className="text-primary" />
    },
    {
      title: "Seasonal Cleanups",
      description: "Thorough spring and fall cleanup services to prepare your yard for the changing seasons, including leaf removal and garden bed preparation.",
      icon: <Shovel size={24} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="centered-container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We provide comprehensive lawn care and landscaping services to keep your outdoor spaces looking their best all year long.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
