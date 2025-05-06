
import { useState } from 'react';
import { Image } from 'lucide-react';

const Gallery = () => {
  const galleryItems = [
    {
      before: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Backyard Transformation"
    },
    {
      before: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Garden Cleanup"
    },
    {
      before: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      after: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Lawn Restoration"
    },
  ];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="gallery" className="section-padding">
      <div className="centered-container px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">See the difference our services can make with these before and after transformations.</p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('landscaping')} 
              className={`px-4 py-2 rounded-md ${activeTab === 'landscaping' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              Landscaping
            </button>
            <button 
              onClick={() => setActiveTab('lawn')} 
              className={`px-4 py-2 rounded-md ${activeTab === 'lawn' ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              Lawn Care
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <div className="flex">
                  <div className="w-1/2 relative">
                    <img 
                      src={item.before} 
                      alt={`Before - ${item.title}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">Before</div>
                  </div>
                  <div className="w-1/2 relative">
                    <img 
                      src={item.after} 
                      alt={`After - ${item.title}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-primary text-white text-xs py-1 px-2 rounded">After</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md">
                  <Image size={20} className="text-primary" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">Professional transformation by our expert team.</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#contact" className="btn-primary inline-block">
            Schedule Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
