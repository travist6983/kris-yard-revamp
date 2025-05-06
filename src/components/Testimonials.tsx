
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Local Resident",
      text: "Kris Lawn Care has been maintaining our property for over 3 years now. Their attention to detail and consistency is impressive. Our lawn has never looked better!",
      rating: 5
    },
    {
      name: "Robert T.",
      location: "Homeowner",
      text: "The landscaping team transformed our backyard completely. They were professional, on time, and stayed within our budget. Highly recommend their services!",
      rating: 5
    },
    {
      name: "Sarah L.",
      location: "Business Owner",
      text: "As a business owner, I need reliable lawn care for my storefront. Kris Lawn Care has been dependable through all seasons, especially with snow removal in winter.",
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i}
          size={18}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="centered-container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our satisfied customers have to say about our services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg testimonial-card">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
