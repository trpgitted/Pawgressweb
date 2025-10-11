'use client';

import { Baloo_2 } from 'next/font/google';
import logo from '../../images/logo.png';
import pawgressMovie from '../../images/pawgress movie.gif';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function Hero() {
  return (
    <main className={`relative min-h-screen bg-gradient-to-b from-blue-50 to-white ${baloo.className}`}>
      <nav className="absolute top-0 left-0 right-0 p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src={logo.src}
              alt="Pawgress Logo"
              style={{ width: '40px', height: '40px' }}
            />
            <span className="text-2xl font-bold text-blue-600">Pawgress</span>
          </div>
          <div className="hidden md:flex gap-8 text-gray-600 ml-auto mr-8">
            <a href="#home" className="hover:text-blue-600 transition-colors font-bold">Home</a>
            <a href="#buyers" className="hover:text-blue-600 transition-colors font-bold">For Buyers</a>
            <a href="#breeders" className="hover:text-blue-600 transition-colors font-bold">For Breeders</a>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            Sign Up
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-screen">
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
              Find your perfect companion from trusted, ethical breeders.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img 
            src={pawgressMovie.src}
            alt="Pawgress Animation"
            className="w-full max-w-lg rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </main>
  );
}
