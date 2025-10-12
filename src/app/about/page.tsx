'use client';

import Image from 'next/image';
import SharedNav from '@/components/SharedNav';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-blue-50 to-white pt-24">
      <SharedNav />
      
      <div className="w-full">
        {/* Hero Section */}
        <div className="min-h-[80vh] flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] overflow-hidden group">
            <div className="absolute inset-4 md:inset-6 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer">
              <Image
                src="/dog fam1.jpg"
                alt="Happy family with their pet"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 md:hidden" />
            </div>
          </div>

          {/* Right side - Headline */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-center justify-center px-8 md:px-16">
            <div className="w-full max-w-lg">
              <h1 className={`tracking-tight ${playfair.className}`}>
                <span className="block text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-600 mb-4">
                  About Us
                </span>
                <span className="block text-3xl md:text-5xl lg:text-6xl leading-tight text-gray-800 font-bold">
                  Building bridges between 
                  <span className="text-blue-600"> ethical breeders</span> and 
                  <span className="text-blue-600"> devoted pet owners</span>
                </span>
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full bg-white min-h-screen relative">
          <div className="max-w-[90rem] mx-auto px-6 py-20">
            
            {/* Our Story */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                🐾 Our Story
              </div>
              <h2 className={`${playfair.className} text-gray-800 text-3xl md:text-4xl leading-relaxed font-semibold mb-8`}>
                We believe that communication is the key to ensuring your pet is taken care of before adoption.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Pawgress, we dedicate ourselves to improving the buyer-breeder relationship through smooth, 
                  user-friendly interfaces that streamline connection between breeders and multiple buyers. 
                  We understand that bringing a new pet into your family is one of life's most meaningful decisions, 
                  and transparency should never be an afterthought.
                </p>
                <p>
                  That's why we've built a platform that makes communication effortless, documentation automatic, 
                  and trust-building natural. Every feature we design starts with a simple question: "Does this 
                  strengthen the relationship between breeders and pet owners?"
                </p>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="text-5xl mb-6">💬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe open, organized communication builds trust. Our secure chat system ensures 
                  every conversation is connected to the right pet, making questions easy to ask and 
                  answers easy to find.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">User-Friendly Design</h3>
                <p className="text-gray-600 leading-relaxed">
                  Technology should simplify, not complicate. We've designed smooth, intuitive interfaces 
                  that work for everyone—from tech-savvy breeders managing dozens of pets to first-time 
                  buyers checking in on their future companion.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="text-5xl mb-6">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Relationship Focused</h3>
                <p className="text-gray-600 leading-relaxed">
                  The breeder-buyer connection doesn't end at adoption—it evolves. Our platform grows 
                  with your relationship, keeping lines of communication open and memories preserved for 
                  the lifetime of your pet.
                </p>
              </div>
            </div>

            {/* How We Help */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white mb-20">
              <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold mb-8 text-center`}>
                How We Improve the Buyer-Breeder Relationship
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">For Breeders</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-200 mr-3 text-xl">✓</span>
                      <span>Streamline communication with multiple buyers through organized, per-pet chats</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-200 mr-3 text-xl">✓</span>
                      <span>Send bulk updates to entire litters, saving time while keeping everyone informed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-200 mr-3 text-xl">✓</span>
                      <span>Present your program professionally with detailed profiles and verified lineage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-200 mr-3 text-xl">✓</span>
                      <span>Reduce repetitive questions with accessible health records and updates</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold">For Pet Owners</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-200 mr-3 text-xl">✓</span>
                      <span>Stay connected with real-time updates on your pet's growth and development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-200 mr-3 text-xl">✓</span>
                      <span>Access complete health records and weight tracking before and after adoption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-200 mr-3 text-xl">✓</span>
                      <span>Communicate directly with your breeder through organized, focused conversations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-200 mr-3 text-xl">✓</span>
                      <span>Preserve precious early memories in a living archive you can treasure forever</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Communication Matters */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                💡 Our Philosophy
              </div>
              <h2 className={`${playfair.className} text-gray-800 text-3xl md:text-4xl leading-relaxed font-semibold mb-8`}>
                Communication is the foundation of responsible pet ownership
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Before a pet comes home, there are crucial weeks where health, socialization, and development 
                lay the groundwork for a lifetime. During this critical period, clear communication ensures:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Informed Decisions</h4>
                  <p className="text-gray-600">Pet owners can make confident choices with complete visibility into their pet's early life.</p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Trust & Transparency</h4>
                  <p className="text-gray-600">Open communication builds lasting relationships based on honesty and mutual respect.</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Better Care</h4>
                  <p className="text-gray-600">Breeders can share critical health information, ensuring seamless transitions and ongoing wellness.</p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <h4 className="font-bold text-gray-900 mb-2">✓ Lasting Connections</h4>
                  <p className="text-gray-600">Strong breeder-owner relationships continue long after adoption, supporting pets throughout their lives.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-gray-900 mb-6`}>
              Join Us in Building Better Relationships
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're an ethical breeder looking to streamline your operations or a pet owner 
              wanting to stay connected, Pawgress is here to make communication effortless and 
              relationships stronger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started Today
              </Link>
              <Link href="/mission" className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors font-semibold text-lg border-2 border-blue-600">
                Learn More About Our Mission
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-black text-white py-20">
          <div className="max-w-[90rem] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Logo and social section */}
              <div className="md:col-span-4 -ml-3">
                <div className="w-48 h-16 relative mt-1">
                  <Image
                    src="/lightmode logo.jpg"
                    alt="Pawgress Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="opacity-100 invert" />
                </div>
                <p className="ml-9 mt-4 text-white/60">
                  Empowering ethical breeders and devoted pet owners through transparent collaboration.
                </p>
              </div>

              {/* Quick Links */}
              <div className="md:col-span-2">
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-white/60">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link href="/mission" className="hover:text-white transition-colors">Our Mission</Link></li>
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="md:col-span-3">
                <h3 className="font-bold mb-4">Get in Touch</h3>
                <p className="text-white/60">
                  Questions? We'd love to hear from you.
                </p>
              </div>

              {/* Newsletter */}
              <div className="md:col-span-3">
                <h3 className="font-bold mb-4">Stay Updated</h3>
                <p className="text-white/60 mb-4">Join our waitlist for early access</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors w-full">
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
              <p>&copy; 2025 Pawgress. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
