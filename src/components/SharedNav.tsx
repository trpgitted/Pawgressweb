'use client';

import { Baloo_2 } from 'next/font/google';
import { useState } from 'react';
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
  
  return (
    <nav className={`absolute top-0 left-0 right-0 p-6 z-50 ${baloo.className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Pawgress Logo"
              style={{ width: '40px', height: '40px' }}
            />
          </Link>
          <Link href="/" className="text-2xl font-bold text-blue-600">Pawgress</Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-gray-600 ml-auto mr-8">
          <Link href="/" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/' ? 'text-blue-600' : ''}`}>
            Home
          </Link>
          <Link href="/#buyers" className="hover:text-blue-600 transition-colors font-bold">
            For Buyers
          </Link>
          <Link href="/#breeders" className="hover:text-blue-600 transition-colors font-bold">
            For Breeders
          </Link>
          <Link href="/about" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/about' ? 'text-blue-600' : ''}`}>
            About Us
          </Link>
          <Link href="/mission" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/mission' ? 'text-blue-600' : ''}`}>
            Our Mission
          </Link>
        </div>
        
        {/* Right side - Sign Up Button and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Sign Up
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl p-6 mt-2">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${pathname === '/' ? 'text-blue-600' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/#buyers" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Buyers
            </Link>
            <Link 
              href="/#breeders" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              For Breeders
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${pathname === '/about' ? 'text-blue-600' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/mission" 
              className={`text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 ${pathname === '/mission' ? 'text-blue-600' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Mission
            </Link>
            <a href="https://pawgress.ai" target="_blank" rel="noopener noreferrer" className="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium text-center block">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}