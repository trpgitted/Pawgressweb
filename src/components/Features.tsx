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
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-600 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide mb-6 sm:mb-8 shadow-lg shadow-blue-500/10 border border-blue-100">
            <span className="text-lg sm:text-xl">✨</span>
            <span>Why Choose Pawgress</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 font-baloo leading-tight">
            Everything You Need for{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Professional Pet Care
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive platform connects ethical breeders and devoted pet owners through professional 
            tools for growth tracking, health organization, and meaningful communication.
          </p>
        </div>

        {/* Features Showcase - Alternating Layout */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-24 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Mobile separator between features */}
              {index > 0 && (
                <div className="lg:hidden mb-8 sm:mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t-2 border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-gradient-to-b from-white to-gray-50 px-4 text-sm text-gray-400 font-semibold">✦</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center p-4 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none bg-white/50 lg:bg-transparent border-2 lg:border-0 border-gray-100`}>
                {/* Feature Screenshot */}
                <div className="w-full lg:w-1/2">
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-gray-900/10 border border-gray-100/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                    
                    <div className="relative p-2 sm:p-4 md:p-6 lg:p-8">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="w-full h-auto rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg transition-all duration-500 transform group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-24 h-24 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 ${index % 2 === 0 ? 'rounded-bl-[3rem]' : 'rounded-br-[3rem]'} transition-opacity duration-500 pointer-events-none`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
                  {/* Icon Badge */}
                  <div className="inline-flex items-center justify-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.iconBg.replace('bg-', 'from-')} ${feature.iconBg.replace('bg-', 'to-')} rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl shadow-xl shadow-${feature.iconBg.split('-')[1]}-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-baloo leading-tight group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                    <span className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r ${feature.color} rounded-full text-xs sm:text-sm md:text-base font-semibold text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5`}>
                      Easy to Use
                    </span>
                    <span className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r ${feature.color} rounded-full text-xs sm:text-sm md:text-base font-semibold text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5`}>
                      Real-time
                    </span>
                    <span className={`px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 bg-gradient-to-r ${feature.color} rounded-full text-xs sm:text-sm md:text-base font-semibold text-gray-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5`}>
                      Secure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 backdrop-blur-sm border border-blue-100/50 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Main Image */}
            <div className="mb-10 sm:mb-12 lg:mb-16 relative">
              <div className="relative inline-block">
                <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20 transform hover:scale-105 transition-all duration-500">
                  <img
                    src="/dog fam1.jpg"
                    alt="Happy family with their adopted pet"
                    className="w-full max-w-lg mx-auto"
                  />
                </div>
                {/* Decorative animated elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-90 animate-bounce shadow-lg" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-90 animate-bounce shadow-lg" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-80 animate-pulse" style={{animationDelay: '0.7s'}}></div>
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 font-baloo leading-tight">
              Ready to Start
              <br className="sm:hidden" />
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Collaborating?
              </span>
            </h3>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 lg:mb-14 leading-relaxed max-w-3xl mx-auto">
              Join ethical breeders and devoted pet owners who trust Pawgress to document, organize, and celebrate 
              every pet's journey with transparency and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20">
              <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center overflow-hidden">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <Link 
                href="/mission" 
                className="group relative border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg sm:text-xl inline-block w-full sm:w-auto text-center overflow-hidden"
              >
                <span className="relative z-10">Learn Our Mission</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-baloo mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-base sm:text-lg text-gray-600 font-semibold">Ethical Breeders</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-baloo mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-base sm:text-lg text-gray-600 font-semibold">Pet Journeys Documented</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-baloo mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-base sm:text-lg text-gray-600 font-semibold">Trust & Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
