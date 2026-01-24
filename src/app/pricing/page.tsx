import { Baloo_2 } from 'next/font/google';
import SharedNav from '@/components/SharedNav';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function PricingPage() {
  return (
    <main className={`min-h-screen ${baloo.className}`}>
      <SharedNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Bouncing balls */}
        <div className="absolute left-[10%] top-24 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-40 animate-bounce z-0" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute right-[15%] top-32 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-40 animate-bounce z-0" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute left-[20%] bottom-20 w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-40 animate-bounce z-0" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
        <div className="absolute right-[25%] bottom-32 w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-40 animate-bounce z-0" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }}></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-200/50 shadow-lg">
                  <span>💎</span>
                  <span>Transparent Pricing</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Pricing
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                  Pawgress is designed to support breeder–buyer communication without interfering with how breeders run their businesses. Pricing is structured as a subscription for the services Pawgress provides, while buyers always have free access to their pet's information.
                </p>
              </div>
              
              {/* Image */}
              <div className="lg:w-1/2 relative">
                {/* Decorative Paw */}
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 512 512" className="w-full h-full">
                    <defs>
                      <linearGradient id="pawGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#pawGradientHero)" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                  </svg>
                </div>
                <img
                  src="/Bear dog.png"
                  alt="Bear dog"
                  className="w-full h-auto max-w-lg mx-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Pet Buyers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">For Pet</span>{' '}
              <span className="text-gray-900">Buyers</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-10 shadow-xl border border-green-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full text-xl font-bold shadow-lg transform hover:scale-110 transition-all duration-300">
                      ✨ Always Free ✨
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 text-center mb-8 font-semibold">
                    Buyers never pay to use Pawgress.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-gray-700">Discover available pets from ethical breeders</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-gray-700">Follow your pet's timeline before pickup</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-gray-700">Chat directly with your breeder</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-gray-700">Access health records, milestones, and updates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg text-gray-700">Continue tracking your pet's information for life</span>
                    </div>
                  </div>
                  
                  <p className="text-center text-gray-600 text-lg font-medium mt-8">
                    There are no hidden fees and no paywalls for buyers.
                  </p>
                </div>
              </div>
              
              {/* Image */}
              <div className="lg:w-1/2 relative">
                {/* Decorative paw behind image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] opacity-15 z-0">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="pawGradientBuyers" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'rgb(16, 185, 129)', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(34, 211, 238)', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#pawGradientBuyers)" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                  </svg>
                </div>
                <div className="rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 max-w-md mx-auto relative z-10">
                  <img
                    src="/Black Dog2.png"
                    alt="Black Dog"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-white">
        <div className="flex items-center gap-4 w-full max-w-2xl px-6">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-blue-300 flex-1"></div>
          <div className="text-2xl">🐾</div>
          <div className="h-0.5 bg-gradient-to-r from-blue-300 via-blue-400 to-transparent flex-1"></div>
        </div>
      </div>

      {/* For Breeders Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">For</span>{' '}
              <span className="text-gray-900">Breeders</span>
            </h2>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              {/* Content */}
              <div className="lg:w-1/2 space-y-4 w-full">
                {/* Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Early Access / Beta
                  </h3>
                  <p className="text-xl text-gray-600">
                    Join us in shaping the future of ethical breeding
                  </p>
                </div>
                
                {/* Content Box */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-200 space-y-6">
                  {/* Free During Beta */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Free During Beta</h4>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      During beta, breeders have full access to Pawgress at no cost while we continue building and refining the platform with early users.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200"></div>
                  
                  {/* No Commissions */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">No Commissions. No Sales Cuts.</h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      Pawgress does not take a percentage of your pet sales. Breeders maintain full control over how they conduct business with buyers, including pricing, deposits, contracts, and payments.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Pawgress operates on a subscription model, not by taking a cut of your sales.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200"></div>
                  
                  {/* Planned Subscription */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-2xl font-bold text-gray-900">Planned Subscription Pricing</h4>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      After beta, Pawgress will offer three subscription tiers, each granting different levels of access to features and services. While final details are still being shaped, plans are expected to:
                    </p>
                    <ul className="space-y-2 text-lg text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Scale based on the size of your breeding operation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Offer increasing levels of access to tools like pet profiles, public listings, bulk updates, health tracking, and AI features</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>Avoid per-sale, per-message, or per-buyer fees</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-700 leading-relaxed mt-4 italic">
                      Early users will receive advance notice and preferred access before any pricing changes take effect.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image */}
              <div className="lg:w-1/2 relative">
                {/* Decorative paw behind image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] opacity-15 z-0">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="pawGradientBreeders" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: 'rgb(219, 39, 119)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(236, 72, 153)', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#pawGradientBreeders)" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                  </svg>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 max-w-md mx-auto relative z-10">
                  <img
                    src="https://pyv.hmu.temporary.site/wp-content/uploads/2026/01/young-lightskinned-brunette-woman-kisses-her-beloved-dog-tightly-while-holding-arms-pink-background-love-pets-joy-tenderness-1-832x1024.png"
                    alt="Woman with her dog"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="flex items-center gap-4 w-full max-w-2xl px-6">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-purple-300 flex-1"></div>
          <div className="text-2xl">💜</div>
          <div className="h-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-transparent flex-1"></div>
        </div>
      </div>

      {/* Why This Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Why This</span>{' '}
              <span className="text-gray-900">Model</span>
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                Pawgress is built to support ethical breeders and responsible ownership without inserting itself into private transactions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                That means:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4 mx-auto shadow-md">
                    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 text-center leading-relaxed font-semibold">You stay in control of your business</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-pink-100">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full mb-4 mx-auto shadow-md">
                    <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 text-center leading-relaxed font-semibold">Buyers keep lifelong access to their pet's records</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-green-100">
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-teal-100 rounded-full mb-4 mx-auto shadow-md">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 text-center leading-relaxed font-semibold">Pawgress focuses on improving communication, organization, and transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Wave at top */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-12 sm:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Questions About</span>{' '}
              <span className="text-gray-900">Pricing</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              If you have questions or want to discuss which future plan might fit your operation best, contact us at{' '}
              <a href="mailto:dev@pawgressapp.com" className="text-blue-600 hover:text-blue-700 underline font-semibold">
                dev@pawgressapp.com
              </a>
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
