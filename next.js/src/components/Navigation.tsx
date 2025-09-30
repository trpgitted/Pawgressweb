'use client';

import { Baloo_2 } from 'next/font/google';
import logo from '../../images/logo.png';
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
  
  return (
    <nav className={`absolute top-0 left-0 right-0 p-6 ${baloo.className}`}>
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
          <Link href="/" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/' ? 'text-blue-600' : ''}`}>
            Home
          </Link>
          <Link href="/mission" className={`hover:text-blue-600 transition-colors font-bold ${pathname === '/mission' ? 'text-blue-600' : ''}`}>
            Our Mission
          </Link>
          <a href="#buyers" className="hover:text-blue-600 transition-colors font-bold">For Buyers</a>
          <a href="#breeders" className="hover:text-blue-600 transition-colors font-bold">For Breeders</a>
          <a href="#about" className="hover:text-blue-600 transition-colors font-bold">About Us</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}