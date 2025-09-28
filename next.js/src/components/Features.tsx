'use client';

import CharlieAnimation from './CharlieAnimation';

export default function Features() {
  const features = [
    {
      title: "Visual Timeline",
      description: "From ethical breeders to loving homes—the journey starts here. At Pawgress, we believe every adoption should be built on trust, transparency, and care, ensuring pets are placed in families who will cherish them for life.",
      icon: "📸",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    },
    {
      title: "Medical Tracking",
      description: "Keep all vaccinations, medications, and vet visits organized in one place.",
      icon: "🏥",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    },
    {
      title: "Breeder Connect",
      description: "Stay connected with breeders and receive real-time updates about your future pet.",
      icon: "💌",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    },
    {
      title: "Smart Records",
      description: "AI-powered tools to help summarize medical records and enhance pet photos.",
      icon: "🤖",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    }
  ];

  return (
    <div className="py-24 bg-white flex justify-center">
      <div className="max-w-6xl w-full px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[2.75rem] font-bold mb-6 leading-tight">
            Breeders share, buyers trust, owners remember
          </h2>
          <p className="text-xl text-gray-600">
            Pawgress is the complete pet journey.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-2xl"
            >
              <div className="w-full flex justify-center">
                <div className={`flex gap-16 items-center justify-center max-w-4xl ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className="flex gap-4 w-[400px]">
                    <div className="flex-shrink-0">
                      <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center text-2xl border-b-4 ${feature.borderColor}`}>
                        {feature.icon}
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed tracking-wide">{feature.description}</p>
                    </div>
                  </div>
                  
                  {/* Mobile Screenshot Slider */}
                  <div className="flex-shrink-0 relative w-[280px] h-[560px]">
                    {/* Charlie Animation - Only shown for first feature */}
                    {index === 0 && <CharlieAnimation />}
                    <div className="w-full h-full bg-gray-100 rounded-3xl overflow-hidden shadow-lg border-8 border-gray-800">
                      {feature.images && feature.images.length > 0 ? (
                        <div className="relative w-full h-full">
                          {/* Placeholder for future images */}
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            Mobile Screenshot {index + 1}
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                          Mobile Screenshot {index + 1}<br/>Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
