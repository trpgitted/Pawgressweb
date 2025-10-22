'use client';

import Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: '\u{1F4CB}',
      title: 'Pet Profile Management',
      description: 'Create rich profiles with photos, breed, DOB, sex, and reservation status. Group pets into litters, assign parents, display verified lineage, plus weight tracking and medical record storage.',
      color: 'from-blue-100 to-indigo-100',
      iconBg: 'bg-blue-500',
      image: '/Pet-Profile.jpeg',
    },
    {
      icon: '\u{1F4F1}',
      title: 'Media Timeline Auto-Build',
      description: 'Every update you send automatically appears in the pet\'s Pawgress timeline. Build chronological galleries with media and age stamps for memory preservation.',
      color: 'from-purple-100 to-violet-100',
      iconBg: 'bg-purple-500',
      image: '/Pet-Timeline.jpeg',
    },
    {
      icon: '\u{1F517}',
      title: 'Invite Links & Bulk Updates',
      description: 'Share unique invite links for each pet—buyers join instantly. Send one update (text, photos, videos) to multiple pets or entire litters at once.',
      color: 'from-green-100 to-emerald-100',
      iconBg: 'bg-green-500',
      image: '/Pet-Profiles-Page.jpeg',
    },
    {
      icon: '\u{1F3E5}',
      title: 'Health Records & Weight Tracking',
      description: 'Add medical entries including vaccinations, vet visits, medications, and test results. Track weight trends over time for wellness monitoring.',
      color: 'from-red-100 to-pink-100',
      iconBg: 'bg-red-500',
      image: '/Medical-Records.jpeg',
    },
    {
      icon: '\u{1F4AC}',
      title: 'Secure Chat Per Pet',
      description: 'One-to-one organized chats per pet keep conversations focused. Breeders and buyers communicate directly in dedicated, clean conversations tied to a single animal.',
      color: 'from-orange-100 to-amber-100',
      iconBg: 'bg-orange-500',
      image: '/Chat-Screen.jpeg',
    },
    {
      icon: '\u{1F916}',
      title: 'AI Assistant (Astro)',
      description: 'Ask general pet care or pet-specific questions with context. Get instant guidance on training, health, nutrition, and behavior—powered by AI.',
      color: 'from-teal-100 to-cyan-100',
      iconBg: 'bg-teal-500',
      image: '/Astro.jpeg',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white" id="features">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 sm:px-6 rounded-full text-sm font-semibold tracking-wide mb-6">
            <span>✨</span> Why Choose Pawgress
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-baloo">
            Everything You Need for{' '}
            <span className="text-blue-600 relative inline-block">
              Professional Pet Care
              <svg 
                className="absolute -bottom-1 left-0 w-full h-2 text-blue-200" 
                viewBox="0 0 400 8" 
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0,4 Q200,0 400,4 L400,8 L0,8 Z" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform connects ethical breeders and devoted pet owners through professional 
            tools for growth tracking, health organization, and meaningful communication.
          </p>
        </div>

        {/* Features Showcase - Alternating Layout */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-32 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 xl:gap-16 items-center border-2 border-gray-200 lg:border-0 rounded-3xl p-6 sm:p-8 lg:p-0 bg-gradient-to-br ${feature.color} lg:bg-none`}
            >
              {/* Feature Screenshot */}
              <div className="w-full lg:w-1/2">
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 hover:border-blue-200 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                  {/* Decorative gradient blob */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-white">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Icon Badge */}
                <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-2xl shadow-xl`}>
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${feature.iconBg} rounded-xl flex items-center justify-center text-white text-2xl sm:text-3xl`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-baloo">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature Highlights */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} rounded-full text-sm font-medium text-gray-700`}>
                    Easy to Use
                  </span>
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} rounded-full text-sm font-medium text-gray-700`}>
                    Real-time
                  </span>
                  <span className={`px-4 py-2 bg-gradient-to-r ${feature.color} rounded-full text-sm font-medium text-gray-700`}>
                    Secure
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-100">
          <div className="max-w-3xl mx-auto">
            {/* Main Image */}
            <div className="mb-8 sm:mb-12 relative">
              <div className="relative inline-block">
                <img
                  src="/dog fam1.jpg"
                  alt="Happy family with their adopted pet"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-300 rounded-full opacity-80 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-300 rounded-full opacity-80 animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 font-baloo">
              Ready to Start Collaborating?
            </h3>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
              Join ethical breeders and devoted pet owners who trust Pawgress to document, organize, and celebrate 
              every pet's journey with transparency and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto text-center">
                Get Started Today
              </a>
              
              <Link 
                href="/mission" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg inline-block w-full sm:w-auto text-center"
              >
                Learn Our Mission
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 font-baloo">500+</div>
                <div className="text-gray-600 font-medium">Ethical Breeders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 font-baloo">10K+</div>
                <div className="text-gray-600 font-medium">Pet Journeys Documented</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 font-baloo">98%</div>
                <div className="text-gray-600 font-medium">Trust & Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
