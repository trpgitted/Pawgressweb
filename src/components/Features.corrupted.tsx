'use client';    {
      icon: '📱',
      title: 'Pawgress Timeline',
      description: 'Automatically build chronological galleries of growth with media and age stamps. Every update creates lasting memories.',
      color: 'from-purple-100 to-violet-100',
      iconBg: 'bg-purple-500',
    },ort Link from 'next/link';

export default function Features() {
  const features = [
    {
      icon: '📋',
      title: 'Rich Pet Profiles',
      description: 'Create detailed profiles with photos, breed info, DOB, markings, microchip ID, and reservation status. Track complete lineage and parentage.',
      color: 'from-blue-100 to-indigo-100',
      iconBg: 'bg-blue-500',
    },
    {
      icon: '�',
      title: 'Pawgress Timeline',
      description: 'Automatically build chronological galleries of growth with media and age stamps. Every update creates lasting memories.',
      color: 'from-purple-100 to-violet-100',
      iconBg: 'bg-purple-500',
    },
    {
      icon: '🔗',
      title: 'Invite Links & Access',
      description: 'Share unique links for each pet. Buyers join instantly to see their pet\'s timeline and dedicated chat conversations.',
      color: 'from-green-100 to-emerald-100',
      iconBg: 'bg-green-500',
    },
    {
      icon: '🏥',
      title: 'Health Records & Tracking',
      description: 'Organize medical entries, vaccinations, vet visits, medications, and test results. Track weight trends over time.',
      color: 'from-red-100 to-pink-100',
      iconBg: 'bg-red-500',
    },
    {
      icon: '�',
      title: 'Focused Communication',
      description: 'One-to-one organized chats per pet keep conversations focused and buyers engaged throughout the journey.',
      color: 'from-orange-100 to-amber-100',
      iconBg: 'bg-orange-500',
    },
    {
      icon: '�',
      title: 'AI Assistant (Astro)',
      description: 'Ask general pet care questions or get pet-specific guidance with contextual information when available.',
      color: 'from-teal-100 to-cyan-100',
      iconBg: 'bg-teal-500',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-white" id="features">
      <div className="container-responsive">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 sm:px-6 rounded-full text-sm font-semibold tracking-wide mb-6">
            ✨ Why Choose Pawgress
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-baloo">
            Everything You Need for{' '}
            <span className="text-blue-600 relative">
              Transparent Collaboration
              <svg 
                className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" 
                viewBox="0 0 400 12" 
                fill="currentColor"
              >
                <path d="M0,6 Q200,0 400,6 L400,12 L0,12 Z" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform connects ethical breeders and devoted pet owners through professional 
            tools for growth tracking, health organization, and meaningful communication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 ${feature.iconBg} rounded-2xl mb-4 sm:mb-6 text-white text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                Get Started Today
              </button>
              
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