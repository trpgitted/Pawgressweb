'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ComingSoonPopup from './ComingSoonPopup';

export default function HowItWorks() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedBuyerSteps, setExpandedBuyerSteps] = useState<Set<number>>(new Set());
  const [expandedBreederSteps, setExpandedBreederSteps] = useState<Set<number>>(new Set());
  const [expandedBuyerFeatures, setExpandedBuyerFeatures] = useState<Set<number>>(new Set());
  const [expandedBreederFeatures, setExpandedBreederFeatures] = useState<Set<number>>(new Set());

  const toggleBuyerStep = (index: number) => {
    const newSet = new Set(expandedBuyerSteps);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedBuyerSteps(newSet);
  };

  const toggleBreederStep = (index: number) => {
    const newSet = new Set(expandedBreederSteps);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedBreederSteps(newSet);
  };

  const toggleBuyerFeature = (index: number) => {
    const newSet = new Set(expandedBuyerFeatures);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedBuyerFeatures(newSet);
  };

  const toggleBreederFeature = (index: number) => {
    const newSet = new Set(expandedBreederFeatures);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setExpandedBreederFeatures(newSet);
  };

  useEffect(() => {
    if (!isDragging) {
      let lastTime = performance.now();
      const speed = 60; // pixels per second
      
      const animate = (currentTime: number) => {
        const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
        lastTime = currentTime;
        
        setTranslateX(prev => {
          const newVal = prev - (speed * deltaTime);
          // Reset position when scrolled through half the duplicates (3 sets)
          // This keeps the animation going infinitely
          const resetPoint = -3000; // Approximate width to trigger reset
          if (newVal < resetPoint) {
            return newVal + 1500; // Jump back by half, creating seamless loop
          }
          return newVal;
        });
        
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [isDragging]);

  const features = [
    { icon: '🎯', text: 'Track Milestones', color: 'bg-green-400' },
    { icon: '🏥', text: 'Track Medical Records', color: 'bg-blue-400' },
    { icon: '💬', text: 'Organize Pet Messages', color: 'bg-purple-400' },
    { icon: '📈', text: 'Share Growth Updates', color: 'bg-pink-400' },
    { icon: '📸', text: 'Store Photos & Videos', color: 'bg-yellow-400' },
    { icon: '🔔', text: 'Get Reminders', color: 'bg-red-400' },
    { icon: '👨‍⚕️', text: 'Connect with Vets', color: 'bg-indigo-400' },
    { icon: '🎓', text: 'Training Tips', color: 'bg-teal-400' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [features.length]);
  const buyerSteps = [
    {
      number: '01',
      title: 'Connect to your specific pet',
      description: 'Get a unique invite link from your breeder to access your pet\'s dedicated profile and timeline.',
      icon: '\u{1F517}',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      number: '02',
      title: 'View your pet\'s timeline, medical records, and photos',
      description: 'Access your pet\'s complete timeline with updates, health records, weight trends, and memories.',
      icon: '\u{1F4F1}',
      color: 'from-purple-500 to-pink-600',
    },
    {
      number: '03',
      title: 'Chat with the breeder from day one through pickup',
      description: 'Message your breeder directly with organized one-to-one chat.',
      icon: '\u{1F4AC}',
      color: 'from-green-500 to-teal-600',
    },
    {
      number: '04',
      title: 'After transfer, the timeline stays with you',
      description: 'Track health records, milestones, and memories for life – your pet\'s complete history stays with you.',
      icon: '\u{1F4CB}',
      color: 'from-emerald-500 to-green-600',
    },
  ];

  const breederSteps = [
    {
      number: '01',
      title: 'Create your pets profiles',
      description: 'Set up comprehensive profiles for each pet with all the essential information.',
      icon: '\u{1F4CB}',
      color: 'from-emerald-500 to-green-600',
    },
    {
      number: '02',
      title: 'Post updates, photos, and videos as you go',
      description: 'Share moments and milestones that automatically build each pet\'s timeline.',
      icon: '\u{1F4E4}',
      color: 'from-orange-500 to-red-600',
    },
    {
      number: '03',
      title: 'Invite buyers to connect to their specific pet',
      description: 'Share unique invite links with buyers for seamless access to their pet.',
      icon: '\u{1F91D}',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      number: '04',
      title: 'All updates, records, and messages stay tied to that pet',
      description: 'Keep everything organized in one place for clear, focused communication.',
      icon: '\u{1F4AC}',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-16 sm:pb-20 lg:pb-32 bg-white" id="how-it-works">
      {/* Wide Animated Feature Carousel */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <div className="rounded-3xl transition-transform duration-300 hover:scale-105 overflow-hidden">
          {/* Carousel Container - Continuous infinite scroll */}
          <div
            className="relative h-24 sm:h-32 lg:h-36 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing py-4"
            onMouseDown={(e) => {
              setIsDragging(true);
              setStartX(e.clientX);
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              e.preventDefault();
              const diff = e.clientX - startX;
              setTranslateX(prev => prev + diff);
              setStartX(e.clientX);
            }}
            onMouseUp={() => {
              setIsDragging(false);
            }}
            onMouseLeave={() => {
              if (isDragging) {
                setIsDragging(false);
              }
            }}
          >
            <div
              ref={scrollRef}
              className="absolute flex items-center gap-16 sm:gap-20 lg:gap-32 select-none"
              style={{
                transform: `translateX(${translateX}px)`,
                transition: 'none'
              }}
            >
              {/* Render features many times for seamless infinite loop */}
              {[...features, ...features, ...features, ...features, ...features, ...features].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 flex-shrink-0"
                >
                  <span className="text-xl sm:text-3xl lg:text-5xl font-bold drop-shadow-lg whitespace-nowrap">
                    <span>{feature.icon}</span>{' '}
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {feature.text}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicator dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-2 sm:mt-3 lg:mt-4 pb-4 sm:pb-5 lg:pb-6">
            {features.map((_, index) => (
              <div
                key={index}
                className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${index === currentFeatureIndex
                    ? 'w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl'
                    : 'w-2 sm:w-3 bg-blue-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1800px] mx-auto">
        
        {/* What Pawgress Does Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 backdrop-blur-sm border border-blue-100/50 overflow-hidden shadow-xl shadow-blue-900/5">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
            
            {/* Animated bouncing balls */}
            <div className="absolute top-8 right-12 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-70 animate-bounce shadow-lg" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-16 left-16 w-5 h-5 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-70 animate-bounce shadow-lg" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute bottom-20 right-20 w-7 h-7 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce shadow-lg" style={{animationDelay: '0.4s'}}></div>
            
            {/* Floating emojis */}
            <div className="absolute top-12 left-8 text-3xl opacity-40 animate-pulse">🐾</div>
            <div className="absolute bottom-12 right-8 text-2xl opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}>💙</div>
            
            <div className="relative text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-baloo">
                What Pawgress Does
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Pawgress organizes the communication between breeder and buyer. Breeders post updates to one or multiple pets, and those updates automatically appear in their chat and timeline. Buyers connect to their specific pet and chat directly with the breeder on that pet's page, keeping conversations clear, organized, and easy to find.
              </p>
            </div>
            
            <img
              src="https://pyv.hmu.temporary.site/wp-content/uploads/2026/01/cute-pet-collage-isolated-2-980x389.png"
              alt="Cute pets collage"
              className="relative w-3/4 mx-auto rounded-2xl mt-32 sm:mt-40 lg:mt-48 shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* What Pawgress Is Section - Full Width */}
      <div className="mb-20 sm:mb-24 lg:mb-32 bg-blue-100 py-16 sm:py-20 lg:py-24 px-8 sm:px-12 lg:px-16 relative overflow-hidden">
        {/* Wave at top */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>

        {/* Decorative animated bouncing balls */}
        <div className="absolute top-24 left-1/4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60 animate-bounce shadow-lg" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-28 right-1/4 w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-60 animate-bounce shadow-lg" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-28 left-1/3 w-7 h-7 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-50 animate-bounce shadow-lg" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-50 animate-bounce shadow-lg" style={{animationDelay: '0.9s'}}></div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-baloo text-center relative z-10">
          What Pawgress Is?
        </h2>
        <div className="max-w-4xl mx-auto space-y-6 text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
          <p>
            Most breeders communicate with buyers through social media or messaging apps. Over time, this creates clutter: new inquiries push active conversations out of view, important messages get buried, and buyers repeatedly ask for the same updates.
          </p>
          <p>
            When a single video includes multiple pets, breeders often have to resend it over and over, answering the same questions and sharing the same content again and again.
          </p>
          <p className="font-semibold text-blue-600">
            Pawgress was built to fix this.
          </p>
        </div>
        
        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ transform: 'rotate(180deg)' }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-[1800px] mx-auto">
        {/* How It Works Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center bg-indigo-50 text-indigo-600 px-4 py-2 sm:px-6 rounded-full text-sm font-semibold tracking-wide mb-6">
            <span>🚀</span> How It Works
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-baloo mb-6">
            How It Works
          </h2>
        </div>

        {/* For Buyers Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20" id="buyers">
          <div className="bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-blue-100/50">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-baloo mb-4 leading-tight">
                For Buyers
              </h3>
            </div>

            {/* Buyer Steps */}
            <div className="mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {buyerSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div className="relative bg-white rounded-xl shadow-md shadow-gray-900/5 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100/50 overflow-hidden h-full">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      {/* Clickable header */}
                      <button
                        onClick={() => toggleBuyerStep(index)}
                        className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                      >
                        {/* Icon in colored box */}
                        <div className="relative flex justify-between items-start mb-3 sm:mb-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-blue-500/20`}>
                            {step.icon}
                          </div>
                          <div className={`transition-transform duration-300 text-gray-400 ${expandedBuyerSteps.has(index) ? 'rotate-180' : ''}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="relative text-base sm:text-lg font-bold text-gray-900 leading-snug">
                          {step.title}
                        </h4>
                      </button>
                      
                      {/* Expandable description */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedBuyerSteps.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="relative text-gray-600 leading-relaxed text-sm sm:text-base px-4 sm:px-6 pb-4 sm:pb-6">
                          {step.description}
                        </p>
                      </div>

                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search & Swipe Features */}
            <div className="relative mt-6 sm:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Search Feature */}
                <div className="group relative bg-white rounded-xl shadow-md shadow-gray-900/5 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  <button
                    onClick={() => toggleBuyerFeature(0)}
                    className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
                  >
                    <div className="relative flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-blue-500/20">
                          🔍
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900">
                          Smart Search
                        </h5>
                      </div>
                      <div className={`transition-transform duration-300 text-gray-400 ${expandedBuyerFeatures.has(0) ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedBuyerFeatures.has(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-6 pb-4 sm:pb-6">
                      Browse available pets with powerful filters by breed, location, age, and more. 
                      Find exactly what you're looking for with our advanced search functionality that 
                      connects you directly with ethical breeders.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Swipe Feature */}
                <div className="group relative bg-white rounded-xl shadow-md shadow-gray-900/5 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  <button
                    onClick={() => toggleBuyerFeature(1)}
                    className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-pink-500/50 rounded-xl"
                  >
                    <div className="relative flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-pink-500/20">
                          💕
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900">
                          Swipe to Match
                        </h5>
                      </div>
                      <div className={`transition-transform duration-300 text-gray-400 ${expandedBuyerFeatures.has(1) ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedBuyerFeatures.has(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-6 pb-4 sm:pb-6">
                      Swipe through adorable pet profiles in an intuitive, fun way. 
                      Like what you see? Save favorites and connect with breeders instantly. 
                      It's the modern way to find your new family member.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link href="/for-buyers">
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
                  See the full workflow
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* For Breeders Section */}
        <div className="mb-12 sm:mb-16 lg:mb-20" id="breeders">
          <div className="bg-gradient-to-br from-emerald-500/5 via-orange-500/5 to-cyan-500/5 rounded-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-sm border border-emerald-100/50">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-baloo mb-4 leading-tight">
                For Breeders
              </h3>
            </div>

            {/* Breeder Steps */}
            <div className="mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {breederSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div className="relative bg-white rounded-xl shadow-md shadow-gray-900/5 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-100/50 overflow-hidden h-full">
                      {/* Gradient overlay on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      
                      {/* Clickable header */}
                      <button
                        onClick={() => toggleBreederStep(index)}
                        className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 rounded-xl"
                      >
                        {/* Icon in colored box */}
                        <div className="relative flex justify-between items-start mb-3 sm:mb-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-emerald-500/20`}>
                            {step.icon}
                          </div>
                          <div className={`transition-transform duration-300 text-gray-400 ${expandedBreederSteps.has(index) ? 'rotate-180' : ''}`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>

                        {/* Content */}
                        <h4 className="relative text-base sm:text-lg font-bold text-gray-900 leading-snug">
                          {step.title}
                        </h4>
                      </button>
                      
                      {/* Expandable description */}
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedBreederSteps.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="relative text-gray-600 leading-relaxed text-sm sm:text-base px-4 sm:px-6 pb-4 sm:pb-6">
                          {step.description}
                        </p>
                      </div>

                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing Features */}
            <div className="relative mt-6 sm:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Profile Marketing */}
                <div className="group relative bg-white rounded-xl shadow-md shadow-gray-900/5 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  <button
                    onClick={() => toggleBreederFeature(0)}
                    className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-xl"
                  >
                    <div className="relative flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-orange-500/20">
                          👤
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900">
                          Profile Showcase
                        </h5>
                      </div>
                      <div className={`transition-transform duration-300 text-gray-400 ${expandedBreederFeatures.has(0) ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedBreederFeatures.has(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-6 pb-4 sm:pb-6">
                      Display your available pets directly on your breeder profile. Potential buyers can 
                      browse your entire catalog, view detailed information, and reach out instantly. 
                      Your professional storefront is always open.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>

                {/* Swipe Page Marketing */}
                <div className="group relative bg-white rounded-xl shadow-md shadow-gray-900/5 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 border border-gray-100/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  
                  <button
                    onClick={() => toggleBreederFeature(1)}
                    className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-pink-500/50 rounded-xl"
                  >
                    <div className="relative flex items-center justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-pink-500/20">
                          ✨
                        </div>
                        <h5 className="text-base sm:text-lg font-bold text-gray-900">
                          Swipe Discovery
                        </h5>
                      </div>
                      <div className={`transition-transform duration-300 text-gray-400 ${expandedBreederFeatures.has(1) ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedBreederFeatures.has(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="relative text-sm sm:text-base text-gray-600 leading-relaxed px-4 sm:px-6 pb-4 sm:pb-6">
                      Get featured on our swipe page where thousands of potential buyers discover their 
                      perfect pet daily. Increase visibility, generate more interest, and connect with 
                      qualified buyers who are actively searching.
                    </p>
                  </div>
                  
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-500/5 to-transparent rounded-tl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <Link href="/for-breeders">
                <button className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
                  See the full workflow
                </button>
              </Link>
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

        {/* Built On Transparency Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <div>
              <img
                src="https://pyv.hmu.temporary.site/wp-content/uploads/2026/01/african-american-woman-wearing-pink-sweater-holding-puppies-1-1-980x653.png"
                alt="Woman with puppies"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Right Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-baloo">
                Built On Transparency
              </h2>
              <div className="space-y-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
                <p>
                  Pawgress is designed to support responsible breeding and long-term pet care. We prioritize clear documentation, honest communication, and organized records, and we do not support puppy mills or non-transparent practices.
                </p>
                <p className="font-semibold text-blue-600">
                  Every pet's timeline is private, secure, and only accessible to the people invited.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
