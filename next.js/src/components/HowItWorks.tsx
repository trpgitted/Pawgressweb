'use client';

import { Baloo_2 } from 'next/font/google';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function HowItWorks() {
  const buyerSteps = [
    {
      title: "Medical History Made Easy",
      description: "Access comprehensive health records, vaccination schedules, and vet visits all in one place. Stay informed about your pet's well-being from day one with organized, easy-to-understand medical documentation.",
      icon: "🏥",
      color: "bg-red-50",
      accent: "text-red-600"
    },
    {
      title: "Pawgress Match",
      description: "Use our Pawgress Match feature to intuitively swipe through available pets. Express interest instantly or bookmark your favorite furballs — your perfect companion might be just one swipe away.",
      icon: "🐕",
      color: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      title: "Smart Filters",
      description: "Find the perfect match by filtering through our network of verified breeders, shelters, and breeds based on your specific preferences and requirements.",
      icon: "🎯",
      color: "bg-purple-50",
      accent: "text-purple-600"
    },
    {
      title: "Stay Connected",
      description: "Follow your favorite breeders, shelters, and organizations to receive instant updates about new litters and heartwarming pupdates from their communities.",
      icon: "💬",
      color: "bg-green-50",
      accent: "text-green-600"
    },
    {
      title: "Real Pawgress",
      description: "Experience every moment of your pet's journey, from initial connection to adoption day. Receive scheduled milestone updates, track growth metrics, and celebrate each step of your companion's Pawgress story.",
      icon: "📈",
      color: "bg-orange-50",
      accent: "text-orange-600"
    }
  ];

  const breederSteps = [
    {
      title: "Get Verified",
      description: "Join our network of ethical breeders and showcase your commitment to responsible breeding.",
      icon: "✅",
      color: "bg-green-50",
      accent: "text-green-600"
    },
    {
      title: "Match with Buyers",
      description: "Connect with serious buyers who match your requirements and values.",
      icon: "🤝",
      color: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      title: "Manage Easily",
      description: "Track puppy placements, share updates, and handle communications all in one place.",
      icon: "⚡",
      color: "bg-purple-50",
      accent: "text-purple-600"
    }
  ];

  return (
    <div className={`py-24 bg-white ${baloo.className}`}>
      <div className="container mx-auto px-4">
        {/* For Buyers */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Works for Buyers</h2>
            <p className="text-xl text-gray-600">
              Finding your perfect puppy should be exciting, not stressful. 
              We make it easy, safe, and transparent.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Top row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {buyerSteps.slice(0, 3).map((step, index) => (
                <div key={index} className="group">
                  <div className={`${step.color} rounded-2xl p-8 h-full transition-transform duration-200 group-hover:-translate-y-2`}>
                    <div className="text-4xl mb-6">{step.icon}</div>
                    <h3 className={`text-xl font-bold mb-4 ${step.accent}`}>{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom row - 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
              {buyerSteps.slice(3).map((step, index) => (
                <div key={index} className="group">
                  <div className={`${step.color} rounded-2xl p-8 h-full transition-transform duration-200 group-hover:-translate-y-2`}>
                    <div className="text-4xl mb-6">{step.icon}</div>
                    <h3 className={`text-xl font-bold mb-4 ${step.accent}`}>{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Breeders */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">For Ethical Breeders</h2>
            <p className="text-xl text-gray-600">
              Focus on what matters most – raising healthy, happy puppies. 
              We handle the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {breederSteps.map((step, index) => (
              <div key={index} className="group">
                <div className={`${step.color} rounded-2xl p-8 h-full transition-transform duration-200 group-hover:-translate-y-2`}>
                  <div className="text-4xl mb-6">{step.icon}</div>
                  <h3 className={`text-xl font-bold mb-4 ${step.accent}`}>{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
