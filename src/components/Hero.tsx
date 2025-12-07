'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const animationRef = useRef<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      const animate = () => {
        setTranslateX(prev => {
          const newVal = prev - 0.5;
          // Calculate approximate width of one set of features (8 features)
          // Assuming average feature width of ~400px + gap of ~128px (lg:gap-32)
          const oneSetWidth = (400 + 128) * 8; // ~4224px per set
          
          // When we've scrolled through one complete set, jump back by one set width
          if (newVal <= -oneSetWidth) {
            return newVal + oneSetWidth;
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
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-baloo overflow-hidden">
      {/* Decorative paw prints throughout the page */}
      <div className="absolute top-52 left-2 sm:left-10 w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-paw-fade z-10" style={{animationDelay: '0s', transform: 'rotate(-15deg)'}}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#9333EA" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
      <div className="absolute top-10 right-1/4 w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 animate-paw-fade z-10" style={{animationDelay: '0.5s', transform: 'rotate(25deg)'}}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EC4899" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-10 h-10 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 animate-paw-fade z-10" style={{animationDelay: '1s', transform: 'rotate(-30deg)'}}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FCD34D" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-40 left-4 sm:left-12 md:left-20 w-14 h-14 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 animate-paw-fade z-10" style={{animationDelay: '1.5s', transform: 'rotate(45deg)'}}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#34D399" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-72 left-1/2 w-12 h-12 sm:w-18 sm:h-18 md:w-28 md:h-28 lg:w-36 lg:h-36 animate-paw-fade z-10" style={{animationDelay: '2s', transform: 'rotate(10deg)'}}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#818CF8" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
      <div className="absolute bottom-1/3 right-2 sm:right-6 md:right-10 w-14 h-14 sm:w-22 sm:h-22 md:w-32 md:h-32 lg:w-44 lg:h-44 animate-paw-fade z-10" style={{animationDelay: '2.5s', transform: 'rotate(-40deg)'}}>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path fill="#2DD4BF" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
        </svg>
      </div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ${
        isScrolled ? 'px-4 py-3 sm:px-6 sm:py-4' : 'px-4 py-6 sm:px-6 sm:py-8 lg:px-8'
      }`}>
        <div className="container-responsive flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/pawgress-logo.png"
              alt="Pawgress Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-14 sm:h-14'
              }`}
            />
            <span className={`font-bold text-blue-600 font-baloo transition-all duration-300 ${
              isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
            }`}>
              Pawgress
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden lg:flex items-center gap-8 text-gray-700 transition-all duration-300 ${
            isScrolled ? 'text-base' : 'text-lg'
          }`}>
            <Link href="/" className="hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="#buyers" className="hover:text-blue-600 transition-colors font-medium">
              For Buyers
            </Link>
            <Link href="#breeders" className="hover:text-blue-600 transition-colors font-medium">
              For Breeders
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/mission" className="hover:text-blue-600 transition-colors font-medium">
              Mission
            </Link>
          </div>

          {/* Desktop CTA */}
          <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className={`hidden sm:block relative bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium overflow-hidden group hover:scale-105 hover:shadow-lg ${
            isScrolled ? 'px-5 py-2 sm:px-6 sm:py-2.5 text-base' : 'px-6 py-3 sm:px-8 sm:py-3 text-lg'
          }`}>
            <span className="relative z-10">Sign Up</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                href="/about" 
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
              <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className="block w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-center sm:hidden">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 px-6 sm:px-8 lg:px-12 xl:px-20 2xl:px-24 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[80vh] lg:min-h-[70vh] max-w-[1800px] mx-auto">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-left max-w-4xl lg:col-span-2">
            {/* Badge */}
            <div className="inline-flex items-center backdrop-blur-sm bg-white/80 border border-white/50 px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide mb-3 sm:mb-4 md:mb-6 lg:mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{'\u{1F43E}'} Professional • Transparent • Collaborative</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 font-baloo">
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">Empowering </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ethical Breeders
              </span>
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent"> and </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Pet Owners
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-relaxed">
              Collaborate transparently through growth tracking, health organization, and meaningful updates—so every pet's journey is documented, understood, and celebrated.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-start">
              <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className="relative bg-blue-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 text-center overflow-hidden group animate-button-pulse">
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
              <a href="#features" className="border-2 border-blue-600 text-blue-600 px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center">
                Learn More
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6 lg:gap-8 justify-start">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  Trusted by <span className="font-bold text-gray-900">500+</span> breeders and shelters
                </p>
                <div className="flex items-center gap-1 justify-start mt-1">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                  <span className="ml-1 text-xs sm:text-sm text-gray-600">4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Animation */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:col-span-3">
            <div className="relative w-full">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-200 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 rounded-2xl group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300"></div>
                <img 
                  src="/pawgress.gif"
                  alt="Pawgress Platform Preview"
                  className="w-full h-auto rounded-xl relative z-10 shadow-lg group-hover:shadow-2xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wide Animated Feature Carousel - Spans full width below grid */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-3xl transition-transform duration-300 hover:scale-105 overflow-hidden">
            {/* Carousel Container - Continuous infinite scroll */}
            <div 
              className="relative h-32 sm:h-40 lg:h-48 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing px-4 sm:px-8 lg:px-12 pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-14 lg:pb-16"
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
                {/* Render features twice for seamless loop */}
                {[...features, ...features, ...features].map((feature, index) => (
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
            <div className="flex justify-center gap-2 sm:gap-3 -mt-8 sm:-mt-10 lg:-mt-12 pb-4 sm:pb-5 lg:pb-6">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                    index === currentFeatureIndex 
                      ? 'w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl' 
                      : 'w-2 sm:w-3 bg-blue-300'
                  }`}
                />
              ))}
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