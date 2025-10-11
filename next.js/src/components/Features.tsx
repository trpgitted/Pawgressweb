'use client';

import CharlieAnimation from './CharlieAnimation';

import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
  const features = [
    {
      title: "Swipe and Connect",
      description: "Discover and connect with your perfect companion through our intuitive matching experience. Simple, natural, and meant to be.",
      icon: "✨",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    },
    {
      title: "Medical Tracking",
      description: "Keep all vaccinations, medications, and vet visits organized in one place.",
      icon: "🏥",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    },
    {
      title: "Breeder Connect",
      description: "Stay connected with breeders and receive real-time updates about your future pet.",
      icon: "💌",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    },
    {
      title: "Smart Records",
      description: "AI-powered tools to help summarize medical records and enhance pet photos.",
      icon: "🤖",
      color: "bg-[#1976D2]",
      borderColor: "border-[#0056CC]",
      images: []
    }
  ];

  return (
    <div className="bg-white">
      <div className="w-full">
        <div className="relative w-full h-[600px]">
          {/* Full-width image */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/dog fam1.jpg"
              alt="Happy family with their dog"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
            {/* Dark overlay for text readability */}
            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          </div>
          
          {/* Top left text overlay */}
          <div className="relative z-10 h-full flex flex-col justify-center px-12 md:px-24">
            <div className="max-w-2xl">
              <h2 className="text-[3.5rem] font-bold mb-6 leading-tight text-white tracking-tight">
                Breeders share,<br/>
                buyers trust,<br/>
                owners remember
              </h2>
              <p className="text-2xl text-white/90 font-light tracking-wide">
                Pawgress is the complete pet journey.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
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
                <div className="flex gap-6 mt-8 ml-9">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><Link href="/mission" className="text-white/70 hover:text-white transition-colors">Our Mission</Link></li>
                  <li><Link href="#history" className="text-white/70 hover:text-white transition-colors">History</Link></li>
                  <li><Link href="#careers" className="text-white/70 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="#newsroom" className="text-white/70 hover:text-white transition-colors">Newsroom</Link></li>
                </ul>
              </div>

              {/* Resources Links */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#success" className="text-white/70 hover:text-white transition-colors">Success Stories</a></li>
                  <li><a href="#blog" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#guides" className="text-white/70 hover:text-white transition-colors">Adoption Guides</a></li>
                  <li><a href="#faq" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-3">
                  <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="#help" className="text-white/70 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</a></li>
                </ul>
              </div>

              {/* Download Section */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-4">Coming Soon</h3>
                <div className="space-y-4">
                  <button className="bg-white text-black px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors w-full justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.57 3.51 7.6 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <span>iOS App</span>
                  </button>
                  <button className="bg-white text-black px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-100 transition-colors w-full justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.324l2.358 2.357c.234.235.234.615 0 .85l-1.76 1.76c-.234.234-.615.234-.849 0l-2.358-2.358c-.234-.235-.234-.615 0-.85l1.76-1.76c.234-.233.615-.233.85 0zm-6.523-9.324c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/>
                    </svg>
                    <span>Android App</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-white/60 text-sm">© 2025 Pawgress. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                  <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
                  <a href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
                  <a href="#" className="text-white/60 hover:text-white text-sm">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
