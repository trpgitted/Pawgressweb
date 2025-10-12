'use client';

import { Baloo_2 } from 'next/font/google';

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
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
      </div>
    </nav>
  );
}