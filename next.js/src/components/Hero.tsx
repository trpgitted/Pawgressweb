'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Baloo_2 } from 'next/font/google';
import logoImage from '../../images/logo.png.png';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function Hero() {
  return (
    <div className="bg-[#E3F2FD] min-h-screen">
      {/* Navigation Header */}
      <div className="w-full bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Image 
                src={logoImage}
                alt="Pawgress Logo"
                width={60}
                height={60}
                priority
                className="w-16 h-16 object-contain"
              />
              <span className={`text-4xl font-extrabold text-[#1976D2] ${baloo.className}`}>
                Pawgress
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`text-center md:text-left max-w-2xl mx-auto md:mx-0 ${baloo.className}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#1976D2] leading-tight">
              Breeders share, buyers trust,{' '}
              <span className="text-[#0056CC] font-extrabold">owners remember</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 font-light tracking-wide">
              Pawgress is the complete pet journey.
            </p>
            <div className="space-y-4 md:space-y-6">
              <Link 
                href="/get-started" 
                className={`bg-[#1976D2] hover:bg-[#0056CC] text-white font-extrabold py-4 px-10 rounded-full text-xl md:text-2xl w-full md:w-auto inline-flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${baloo.className}`}
              >
                ✨ Get Started For Free
              </Link>
              <Link 
                href="/login" 
                className={`bg-white hover:bg-[#E3F2FD] text-[#1976D2] font-bold py-4 px-10 rounded-full text-xl md:text-2xl w-full md:w-auto inline-flex items-center justify-center transition-all duration-300 border-2 border-[#1976D2] hover:border-[#0056CC] transform hover:-translate-y-0.5 ${baloo.className}`}
              >
                I Already Have An Account
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[600px]">
              <div className="absolute inset-0 bg-white/90 rounded-3xl overflow-hidden shadow-xl">
                <div className="p-8">
                  <h3 className={`text-2xl font-bold text-[#1976D2] mb-4 ${baloo.className}`}>
                    Visual Timeline
                  </h3>
                  <div className="bg-[#E3F2FD] rounded-2xl p-4 w-full h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">App Screenshot</p>
                  </div>
                  <p className="mt-4 text-gray-600 text-center max-w-md mx-auto">
                    Track your pet's growth with a beautiful visual timeline. Add photos, videos, and milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
