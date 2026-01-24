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

export default function Navigation() {
  const pathname = usePathname();
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  
  return (
    <nav className={`absolute top-0 left-0 right-0 p-6 ${baloo.className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/pawgress-logo.png"
            alt="Pawgress Logo"
            style={{ width: '40px', height: '40px' }}
          />
          <span className="text-2xl font-bold text-blue-600">Pawgress</span>
        </div>
        <div className="hidden md:flex gap-8 text-gray-600 ml-auto mr-8 items-center">
          <Link href="/" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/' ? 'text-blue-600' : ''}`}>
            Home
          </Link>
          <Link href="/for-buyers" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/for-buyers' ? 'text-blue-600' : ''}`}>
            For Buyers
          </Link>
          <Link href="/for-breeders" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/for-breeders' ? 'text-blue-600' : ''}`}>
            For Breeders
          </Link>
          <Link href="/pricing" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/pricing' ? 'text-blue-600' : ''}`}>
            Pricing
          </Link>
          
          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className={`hover:text-blue-600 transition-colors font-bold flex items-center gap-1 ${pathname === '/about' || pathname === '/terms' || pathname === '/privacy' || pathname === '/faq' ? 'text-blue-600' : ''}`}>
              About
              <svg className={`w-4 h-4 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 pt-2 transition-all duration-200 origin-top ${aboutDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
              <div className="w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                <Link href="/about" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                  About Us
                </Link>
                <Link href="/faq" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                  FAQ
                </Link>
                <Link href="/terms" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}