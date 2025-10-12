'use       number: '01',
      title: 'Receive Invite Link',
      description: 'Get a unique link from your breeder for your specific pet. Join instantly to access your pet\'s dedicated timeline and chat.',
      icon: '🔗',
      color: 'from-blue-500 to-indigo-600',t';

export default function HowItWorks() {
  const buyerSteps = [
    {
      number: '01',
      title: 'Receive Invite Link',
      description: 'Get a unique link from your breeder for your specific pet. Join instantly to access your pet\'s dedicated timeline and chat.',
      icon: '�',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      number: '02',
      title: 'View Pawgress Timeline',
      description: 'Access a chronological gallery of your pet\'s growth with photos, videos, and age-stamped updates from early weeks onward.',
      icon: '�',
      color: 'from-purple-500 to-pink-600',
    },
    {
      number: '03',
      title: 'Stay Connected & Informed',
      description: 'Message your breeder directly, view health records, track weight trends, and preserve every milestone in your pet\'s journey.',
      icon: '💬',
      color: 'from-green-500 to-teal-600',
    },
  ];

  const breederSteps = [
    {
      number: '01',
      title: 'Create Pet Profiles',
      description: 'Build rich profiles with photos, breed info, DOB, markings, microchip ID, and parentage. Group pets into litters for easy management.',
      icon: '📋',
      color: 'from-emerald-500 to-green-600',
    },
    {
      number: '02',
      title: 'Send Bulk Updates',
      description: 'Share one update (text, photos, videos) with multiple pets or entire litters. Updates automatically build each pet\'s Pawgress timeline.',
      icon: '�',
      color: 'from-orange-500 to-red-600',
    },
    {
      number: '03',
      title: 'Engage & Communicate',
      description: 'Share unique invite links with buyers, manage organized chats per pet, and maintain health records for transparent collaboration.',
      icon: '🤝',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
      <div className="container-responsive">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center bg-indigo-50 text-indigo-600 px-4 py-2 sm:px-6 rounded-full text-sm font-semibold tracking-wide mb-6">
            🚀 How It Works
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-baloo">
            Simple Steps to{' '}
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
            Whether you're a pet owner receiving updates or an ethical breeder managing your program, 
            our streamlined process makes collaboration simple, professional, and meaningful.
          </p>
        </div>

        {/* For Buyers Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32" id="buyers">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-baloo">
              For Pet Owners
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected and informed with your pet's complete journey from early weeks to home
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <svg className="w-full h-4" viewBox="0 0 800 40" fill="none">
                <path 
                  d="M50 20 Q200 10 400 20 T750 20" 
                  stroke="url(#buyer-gradient)" 
                  strokeWidth="3" 
                  strokeDasharray="8,4"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="buyer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {buyerSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group text-center lg:text-left"
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200">
                    
                    {/* Step Number */}
                    <div className="flex justify-center lg:justify-start mb-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {step.description}
                    </p>

                    {/* Arrow for mobile */}
                    {index < buyerSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8 mb-4">
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Breeders Section */}
        <div className="mb-16 sm:mb-20" id="breeders">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-baloo">
              For Ethical Breeders
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Save time and present professionally while keeping buyers engaged with organized updates
            </p>
          </div>

          <div className="relative">
            {/* Connection Line - Desktop */}
            <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
              <svg className="w-full h-4" viewBox="0 0 800 40" fill="none">
                <path 
                  d="M50 20 Q200 10 400 20 T750 20" 
                  stroke="url(#breeder-gradient)" 
                  strokeWidth="3" 
                  strokeDasharray="8,4"
                  className="animate-pulse"
                />
                <defs>
                  <linearGradient id="breeder-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="50%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {breederSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group text-center lg:text-left"
                >
                  <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-green-200">
                    
                    {/* Step Number */}
                    <div className="flex justify-center lg:justify-start mb-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl sm:text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-green-600 transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {step.description}
                    </p>

                    {/* Arrow for mobile */}
                    {index < breederSteps.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-8 mb-4">
                        <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-baloo">
              Ready to Get Started?
            </h3>
            
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90 leading-relaxed">
              Join ethical breeders and devoted pet owners who trust Pawgress to document, celebrate, 
              and preserve every pet's journey with transparency and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto">
                Sign Up Free
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}