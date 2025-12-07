'use client';

export default function HowItWorks() {
  const buyerSteps = [
    {
      number: '01',
      title: 'Link With Breeder',
      description: 'Get a unique invite link from your breeder for your specific pet. Input the link in the app or visit the website to access your pet\'s dedicated profile and timeline.',
      icon: '\u{1F517}',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      number: '02',
      title: 'Keep track Of Pet Pawgress',
      description: 'View your pet\'s complete Pawgress timeline with photos, videos, and updates organized chronologically. Access health records, weight trends, and parent information.',
      icon: '\u{1F4F1}',
      color: 'from-purple-500 to-pink-600',
    },
    {
      number: '03',
      title: 'Direct Chat & Personal Profiles',
      description: 'Message your breeder with organized one-to-one chat, create your own personal pet profiles once home, and preserve every milestone in a living archive.',
      icon: '\u{1F4AC}',
      color: 'from-green-500 to-teal-600',
    },
  ];

  const breederSteps = [
    {
      number: '01',
      title: 'Pet Profile Management',
      description: 'Create comprehensive pet profiles with photos, breed, DOB, sex, markings, microchip ID, and reservation status. Link litters and track parents with verified lineage.',
      icon: '\u{1F4CB}',
      color: 'from-emerald-500 to-green-600',
    },
    {
      number: '02',
      title: 'Bulk Updates & Invite Links',
      description: 'Send one update to multiple pets or entire litters—every update automatically builds each pet\'s timeline. Share unique invite links with buyers for seamless onboarding.',
      icon: '\u{1F4E4}',
      color: 'from-orange-500 to-red-600',
    },
    {
      number: '03',
      title: 'Buyer Communication & Parent Engagement',
      description: 'Manage organized chats per pet, log health records (vaccinations, vet visits, weight), and keep buyers engaged with ongoing updates even after they bring their pet home.',
      icon: '\u{1F91D}',
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white" id="how-it-works">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 sm:mb-20 lg:mb-24 pb-16 sm:pb-20 lg:pb-24 border-b-2 border-gray-200">
          <div className="inline-flex items-center bg-indigo-50 text-indigo-600 px-4 py-2 sm:px-6 rounded-full text-sm font-semibold tracking-wide mb-6">
            <span>🚀</span> How It Works
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 xl:gap-24 items-start">
            {/* Title on the left */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 font-baloo">
                Simple Steps to{' '}
                <span className="text-blue-600">
                  Transparent Collaboration
                </span>
              </h2>
            </div>
            
            {/* Description on the right */}
            <div>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 leading-relaxed">
                Whether you're a pet owner receiving updates or an ethical breeder managing your program, 
                our streamlined process makes collaboration simple, professional, and meaningful.
              </p>
            </div>
          </div>
        </div>

        {/* For Buyers Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32" id="buyers">
          <div className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 backdrop-blur-sm border border-blue-100/50">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-600 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide mb-6 sm:mb-8 shadow-lg shadow-blue-500/10 border border-blue-100">
                <span className="text-lg sm:text-xl">🐾</span> 
                <span>For Pet Owners</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 font-baloo mb-4 sm:mb-6 leading-tight">
                Your Pet's Journey,
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Beautifully Documented
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Stay connected from early weeks to forever home
              </p>
            </div>

            {/* Buyer Steps */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {buyerSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden h-full">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Icon in colored box */}
                      <div className="relative flex justify-start mb-6 sm:mb-8">
                        <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${step.color} rounded-2xl lg:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="relative text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                        {step.title}
                      </h4>
                      
                      <p className="relative text-gray-600 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>

                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search & Swipe Features */}
            <div className="relative">
              {/* Decorative separator */}
              <div className="flex items-center justify-center mb-12 sm:mb-16 lg:mb-20">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
                <div className="px-6">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
              </div>

              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-indigo-600 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide mb-6 sm:mb-8 shadow-lg shadow-indigo-500/10 border border-indigo-100">
                  <span className="text-lg sm:text-xl">🔍</span>
                  <span>Find Your Perfect Pet</span>
                </div>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-baloo leading-tight">
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Discover & Connect
                  </span>
                  {' '}with Ease
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {/* Search Feature */}
                <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      🔍
                    </div>
                    <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      Smart Search
                    </h5>
                  </div>
                  <p className="relative text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Browse available pets with powerful filters by breed, location, age, and more. 
                    Find exactly what you're looking for with our advanced search functionality that 
                    connects you directly with ethical breeders.
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Swipe Feature */}
                <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl shadow-pink-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      💕
                    </div>
                    <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      Swipe to Match
                    </h5>
                  </div>
                  <p className="relative text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Swipe through adorable pet profiles in an intuitive, fun way. 
                    Like what you see? Save favorites and connect with breeders instantly. 
                    It's the modern way to find your new family member.
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Breeders Section */}
        <div className="mb-16 sm:mb-20" id="breeders">
          <div className="bg-gradient-to-br from-emerald-500/5 via-orange-500/5 to-cyan-500/5 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 backdrop-blur-sm border border-emerald-100/50">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-600 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide mb-6 sm:mb-8 shadow-lg shadow-emerald-500/10 border border-emerald-100">
                <span className="text-lg sm:text-xl">🏆</span> 
                <span>For Ethical Breeders</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 font-baloo mb-4 sm:mb-6 leading-tight">
                Professional Tools for{' '}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-emerald-500 via-orange-500 to-cyan-500 bg-clip-text text-transparent">
                  Modern Breeders
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Save time and present professionally while keeping buyers engaged
              </p>
            </div>

            {/* Breeder Steps */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {breederSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div className="relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden h-full">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Icon in colored box */}
                      <div className="relative flex justify-start mb-6 sm:mb-8">
                        <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${step.color} rounded-2xl lg:rounded-3xl flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl shadow-xl shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h4 className="relative text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-emerald-600 transition-colors duration-300 leading-snug">
                        {step.title}
                      </h4>
                      
                      <p className="relative text-gray-600 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>

                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Features */}
            <div className="relative">
              {/* Decorative separator */}
              <div className="flex items-center justify-center mb-12 sm:mb-16 lg:mb-20">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
                <div className="px-6">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
              </div>

              <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-orange-600 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide mb-6 sm:mb-8 shadow-lg shadow-orange-500/10 border border-orange-100">
                  <span className="text-lg sm:text-xl">📢</span>
                  <span>Market Your Pets</span>
                </div>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-baloo leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    Reach More Buyers
                  </span>
                  {' '}Effortlessly
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                {/* Profile Marketing */}
                <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      👤
                    </div>
                    <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      Profile Showcase
                    </h5>
                  </div>
                  <p className="relative text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Display your available pets directly on your breeder profile. Potential buyers can 
                    browse your entire catalog, view detailed information, and reach out instantly. 
                    Your professional storefront is always open.
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Swipe Page Marketing */}
                <div className="group relative bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl shadow-xl shadow-pink-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      ✨
                    </div>
                    <h5 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                      Swipe Discovery
                    </h5>
                  </div>
                  <p className="relative text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Get featured on our swipe page where thousands of potential buyers discover their 
                    perfect pet daily. Increase visibility, generate more interest, and connect with 
                    qualified buyers who are actively searching.
                  </p>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center my-16 sm:my-20 lg:my-24">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <div className="px-6">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Bottom CTA */}
        <div className="relative bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 xl:p-20 backdrop-blur-sm border border-blue-100/50 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            {/* Decorative animated paw prints */}
            <div className="absolute -top-8 -left-8 w-20 h-20 opacity-20 animate-bounce" style={{animationDelay: '0s'}}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#3B82F6" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
              </svg>
            </div>
            <div className="absolute -top-4 -right-12 w-16 h-16 opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}>
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#8B5CF6" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
              </svg>
            </div>
            
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-blue-600 px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide mb-6 sm:mb-8 shadow-lg shadow-blue-500/10 border border-blue-100">
              <span className="text-lg sm:text-xl">🚀</span>
              <span>Get Started</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 font-baloo leading-tight">
              Ready to
              <br className="sm:hidden" />
              {' '}<span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Transform
              </span>
              {' '}Your Journey?
            </h3>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 lg:mb-14 leading-relaxed max-w-3xl mx-auto">
              Join ethical breeders and devoted pet owners who trust Pawgress to document, celebrate, 
              and preserve every pet's journey with transparency and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
              <a 
                href="https://pawgress.ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-lg sm:text-xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center overflow-hidden"
              >
                <span className="relative z-10">Start Your Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group relative border-2 border-blue-600 text-blue-600 px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg sm:text-xl w-full sm:w-auto text-center"
              >
                <span className="relative z-10">Explore Features</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 pt-8 sm:pt-12 border-t border-gray-200">
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

      {/* Decorative Separator - After CTA */}
      <div className="relative py-8 sm:py-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse shadow-lg"></div>
        </div>
      </div>

    </section>
  );
}
