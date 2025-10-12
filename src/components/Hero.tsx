'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-baloo overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="container-responsive flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="Pawgress Logo"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-xl sm:text-2xl font-bold text-blue-600 font-baloo">
              Pawgress
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 text-gray-700">
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#buyers" className="hover:text-blue-600 transition-colors font-medium">
              For Buyers
            </Link>
            <Link href="#breeders" className="hover:text-blue-600 transition-colors font-medium">
              For Breeders
            </Link>
            <Link href="#about" className="hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/mission" className="hover:text-blue-600 transition-colors font-medium">
              Mission
            </Link>
          </div>

          {/* Desktop CTA */}
          <button className="hidden sm:block bg-blue-600 text-white px-4 py-2 sm:px-6 rounded-full hover:bg-blue-700 transition-colors font-medium">
            Sign Up
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#buyers" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Buyers
              </Link>
              <Link 
                href="#breeders" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Breeders
              </Link>
              <Link 
                href="#about" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/mission" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </Link>
              <button className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="container-responsive pt-8 pb-16 sm:pt-16 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh] lg:min-h-[70vh]">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 sm:px-6 rounded-full text-sm font-semibold tracking-wide mb-6 sm:mb-8">
              🚀 Join the Waitlist • Limited Spots Available
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-baloo">
              Connecting{' '}
              <span className="text-blue-600 relative">
                Ethical Breeders
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" 
                  viewBox="0 0 300 12" 
                  fill="currentColor"
                >
                  <path d="M0,6 Q150,0 300,6 L300,12 L0,12 Z" />
                </svg>
              </span>
              {' '}and{' '}
              <span className="text-blue-600 relative">
                Trusted Shelters
                <svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-blue-200" 
                  viewBox="0 0 300 12" 
                  fill="currentColor"
                >
                  <path d="M0,6 Q150,0 300,6 L300,12 L0,12 Z" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The premier platform connecting responsible pet buyers with ethical breeders and trusted animal shelters. 
              Find your perfect companion with complete health records and transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Free
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-600 font-medium">
                  Trusted by <span className="font-bold text-gray-900">500+</span> breeders and shelters
                </p>
                <div className="flex items-center gap-1 justify-center sm:justify-start mt-1">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Animation */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-2xl"></div>
                <img 
                  src="/pawgress movie.gif"
                  alt="Pawgress Platform Preview"
                  className="w-full h-auto rounded-xl relative z-10 shadow-lg"
                />
              </div>

              {/* Floating notification elements - positioned in four corners */}
              {/* Top Left Corner */}
              <div className="absolute top-4 -left-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block animate-bounce z-20" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Track Milestones</span>
                </div>
              </div>

              {/* Top Right Corner */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block animate-bounce z-20" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Track Medical Records</span>
                </div>
              </div>

              {/* Bottom Left Corner */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block animate-bounce z-20" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Organize Pet Messages</span>
                </div>
              </div>

              {/* Bottom Right Corner */}
              <div className="absolute bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block animate-bounce z-20" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Share Growth Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}