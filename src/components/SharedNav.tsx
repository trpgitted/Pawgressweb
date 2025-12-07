'use client';

import { Baloo_2 } from 'next/font/google';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function SharedNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 ${baloo.className} ${
      isScrolled ? 'px-4 py-3 sm:px-6 sm:py-4' : 'px-4 py-6 sm:px-6 sm:py-8 lg:px-8'
    }`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/">
            <img
              src="/pawgress-logo.png"
              alt="Pawgress Logo"
              className={`transition-all duration-300 ${
                isScrolled ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
              }`}
            />
          </Link>
          <Link href="/" className={`font-bold text-blue-600 transition-all duration-300 ${
            isScrolled ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl'
          }`}>Pawgress</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center gap-8 text-gray-700 transition-all duration-300 ${
          isScrolled ? 'text-base' : 'text-lg'
        }`}>
          <Link href="/" className={`hover:text-blue-600 transition-colors font-medium ${pathname === '/' ? 'text-blue-600' : ''}`}>
            Home
          </Link>
          <Link href="/#buyers" className="hover:text-blue-600 transition-colors font-medium">
            For Buyers
          </Link>
          <Link href="/#breeders" className="hover:text-blue-600 transition-colors font-medium">
            For Breeders
          </Link>
          <Link href="/about" className={`hover:text-blue-600 transition-colors font-medium ${pathname === '/about' ? 'text-blue-600' : ''}`}>
            About
          </Link>
          <Link href="/mission" className={`hover:text-blue-600 transition-colors font-medium ${pathname === '/mission' ? 'text-blue-600' : ''}`}>
            Mission
          </Link>
        </div>
        
        {/* Right side - Sign Up Button and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className={`hidden sm:block bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 font-medium ${
            isScrolled ? 'px-5 py-2 sm:px-6 sm:py-2.5 text-base' : 'px-6 py-3 sm:px-8 sm:py-3 text-lg'
          }`}>
            Sign Up
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40">
          <div className="px-4 py-6 space-y-4">
            <Link 
              href="/" 
              className={`block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${pathname === '/' ? 'text-blue-600' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#buyers" 
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Buyers
            </Link>
            <Link 
              href="/#breeders" 
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Breeders
            </Link>
            <Link 
              href="/about" 
              className={`block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${pathname === '/about' ? 'text-blue-600' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/mission" 
              className={`block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${pathname === '/mission' ? 'text-blue-600' : ''}`}
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
  );
}