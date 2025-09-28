'use client';

import { Baloo_2 } from 'next/font/google';
import Image from 'next/image';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function Hero() {
  return (
    <div className={`relative min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center ${baloo.className}`}>
      <nav className="absolute top-0 left-0 right-0 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Pawgress</div>
          <div className="hidden md:flex gap-8 text-gray-600">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#buyers" className="hover:text-blue-600 transition-colors">For Buyers</a>
            <a href="#breeders" className="hover:text-blue-600 transition-colors">For Breeders</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 max-w-2xl">
          <div className="flex flex-col items-start gap-6">
            <div className="bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
              Join the Waitlist • Limited Spots Available
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Connecting{' '}
              <span className="text-blue-600">Ethical Breeders</span>
              {' '}with{' '}
              <span className="text-blue-600">Loving Families</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Pawgress helps you find the perfect puppy with verified breeders, 
              safe communication, and real-time updates. Say goodbye to scams 
              and hello to transparency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg shadow-blue-500/20">
                Sign Up Early
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 border-2 border-blue-600">
                See How It Works
              </button>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-100"></div>
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-200"></div>
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-300"></div>
              </div>
              <p className="text-gray-600">
                Join <span className="font-semibold">2,500+</span> early adopters
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 relative mt-12 md:mt-0">
          <div className="w-full aspect-square relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-full animate-pulse"></div>
            {/* Placeholder for illustration - you can add your image here */}
            <div className="absolute inset-10 bg-blue-600/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
