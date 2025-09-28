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
      title: "Swipe & Match",
      description: "Browse through verified puppies and find your perfect match with Tinder-style swiping.",
      icon: "🐕",
      color: "bg-blue-50",
      accent: "text-blue-600"
    },
    {
      title: "Smart Filters",
      description: "Use free filters like distance and price, or unlock premium filters for detailed matching.",
      icon: "🎯",
      color: "bg-purple-50",
      accent: "text-purple-600"
    },
    {
      title: "Connect Safely",
      description: "Chat directly with verified breeders and get real-time updates about your future puppy.",
      icon: "💬",
      color: "bg-green-50",
      accent: "text-green-600"
    },
    {
      title: "Track Growth",
      description: "Follow your puppy's journey with photos, videos, and detailed health records.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buyerSteps.map((step, index) => (
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
