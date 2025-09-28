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
        <div className="md:w-1/2 max-w-2xl pt-20 md:pt-0">
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
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg shadow-blue-500/20">
                Sign Up Early
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 border-2 border-blue-600">
                See How It Works
              </button>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          {/* Expanded outer glow effects */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-radial from-blue-600/10 via-blue-400/5 to-transparent blur-3xl"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-radial from-blue-500/15 via-blue-300/10 to-transparent blur-2xl"></div>
          
          <div className="relative w-[800px] h-[440px] overflow-visible">
            {/* Outer glow/blur effect */}
            <div className="absolute inset-[-60px] bg-gradient-radial from-blue-600/25 via-blue-400/15 to-transparent blur-2xl"></div>
            <div className="absolute inset-[-40px] bg-gradient-radial from-blue-500/20 via-blue-200/20 to-transparent blur-xl"></div>
            <div className="absolute inset-[-20px] bg-gradient-radial from-blue-400/15 via-blue-100/20 to-transparent blur-lg"></div>
            
            {/* Main container */}
            <div className="relative w-full h-full rounded-[100px] bg-gradient-to-b from-blue-600/20 via-blue-100/90 to-white/95 backdrop-blur-md shadow-[0_8px_32px_rgba(37,99,235,0.4),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <div className="absolute inset-[-2px] rounded-[102px] bg-gradient-to-b from-blue-400/30 via-blue-200/20 to-white/30 blur-sm"></div>
              <div className="absolute inset-0 rounded-[100px] overflow-hidden flex items-center justify-center">
                <div className="absolute w-[200%] h-full flex items-center animate-pan bg-gradient-radial from-blue-500/20 via-blue-200/20 to-transparent">
                  <div className="absolute inset-0 bg-gradient-radial from-blue-600/15 via-blue-300/15 to-transparent"></div>
                  <img 
                    src={pawgressMovie.src}
                    alt="Pawgress Animation"
                    className="w-full h-[120%] object-contain z-10 transition-opacity duration-300 drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                    style={{ 
                      objectPosition: 'center 65%',
                      transform: 'scale(1.05) translateY(-2%)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
