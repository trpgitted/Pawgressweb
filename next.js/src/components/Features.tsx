export default function Features() {
  const features = [
    {
      title: "Visual Timeline",
      description: "Document every milestone with photos, videos, and age stamps in a beautiful chronological feed.",
      icon: "📸",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]"
    },
    {
      title: "Medical Tracking",
      description: "Keep all vaccinations, medications, and vet visits organized in one place.",
      icon: "🏥",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]"
    },
    {
      title: "Breeder Connect",
      description: "Stay connected with breeders and receive real-time updates about your future pet.",
      icon: "💌",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]"
    },
    {
      title: "Smart Records",
      description: "AI-powered tools to help summarize medical records and enhance pet photos.",
      icon: "🤖",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-[2.75rem] font-bold mb-6 leading-tight">
            The most fun way to manage your pet&apos;s life
          </h2>
          <p className="text-xl text-gray-600">
            Join over 1 million pet owners who make pet care more engaging and organized with Pawgress
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.color} rounded-2xl p-1 transform hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="bg-white p-6 rounded-2xl h-full">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 border-b-4 ${feature.borderColor}`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
