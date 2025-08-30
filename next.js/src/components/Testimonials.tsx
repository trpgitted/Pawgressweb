export default function Testimonials() {
  const testimonials = [
    {
      quote: "Pawgress makes it so fun to document my puppy's growth. I'm addicted to maintaining my streak!",
      author: "Sarah Johnson",
      role: "Professional Dog Breeder",
      streak: "365 day streak 🔥",
      image: "🐕"
    },
    {
      quote: "The weekly photo challenges make capturing memories with my kitten exciting and rewarding.",
      author: "Michael Chen",
      role: "Pet Owner",
      streak: "180 day streak 🔥",
      image: "🐱"
    },
    {
      quote: "I've never been so organized with my pets' records. The achievements keep me motivated!",
      author: "Emily Rodriguez",
      role: "Multi-pet Owner",
      streak: "90 day streak 🔥",
      image: "🐾"
    }
  ];

  return (
    <div className="bg-[#E3F2FD] py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[2.75rem] font-bold mb-6 text-[#1976D2] leading-tight">
            Join our community of passionate pet parents
          </h2>
          <p className="text-xl text-gray-600">
            Over 50 million memories captured and counting!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 transform hover:-translate-y-1 transition-transform duration-300 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-[#1976D2] rounded-xl flex items-center justify-center text-3xl border-b-4 border-[#0056CC]">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-[#58CC02] font-medium">{testimonial.streak}</p>
                </div>
              </div>
              <p className="text-lg mb-4 text-gray-700">"{testimonial.quote}"</p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {"⭐️⭐️⭐️⭐️⭐️"}
                </div>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
