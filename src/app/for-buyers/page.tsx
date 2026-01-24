import { Baloo_2 } from 'next/font/google';
import SharedNav from '@/components/SharedNav';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function ForBuyersPage() {
  return (
    <main className={`min-h-screen ${baloo.className}`}>
      <SharedNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-blue-100 relative overflow-hidden">
        {/* Subtle decorative wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{transform: 'rotate(180deg)'}}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Text content */}
              <div className="lg:w-1/2 text-center">
                {/* Small badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <span>🐾</span>
                  <span>For Pet Buyers</span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Find, Follow, and Care
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    All in One Place
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mx-auto max-w-lg">
                  Discover pets, follow their journey before pickup, and manage everything about their health and growth long after they come home.
                </p>
              </div>

              {/* Hero image */}
              <div className="lg:w-1/2 relative">
                {/* Decorative paw print behind image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] opacity-20 z-0">
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <defs>
                      <linearGradient id="pawGradientBuyers" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: 'rgb(37, 99, 235)', stopOpacity: 1 }} />
                        <stop offset="50%" style={{ stopColor: 'rgb(79, 70, 229)', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'rgb(147, 51, 234)', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    <path fill="url(#pawGradientBuyers)" d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                  </svg>
                </div>
                <img
                  src="/dogs.webp"
                  alt="Happy dogs"
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            
            {/* Discover Pets Easily */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Discover Pets</span>{' '}
                    <span className="text-gray-900">Easily</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Pawgress serves as a pet discovery platform where you can browse available pets from ethical breeders through an interactive, swipe-style experience. You can quickly view individual pets, learn about breeders, and express interest, all without digging through social media posts or scattered listings.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    This makes it easy to focus on pets that fit what you're looking for, while keeping discovery simple and organized.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/New Swipe.jpeg"
                    alt="Swipe through pets"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-4 w-full max-w-2xl">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-blue-300 flex-1"></div>
                <div className="text-2xl">🐾</div>
                <div className="h-0.5 bg-gradient-to-r from-blue-300 via-blue-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* Follow Your Pet's Journey Before Pickup */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Follow Your Pet's Journey</span>{' '}
                    <span className="text-gray-900">Before Pickup</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Once a breeder sends you an invite link or connects you to a pet, you gain access to that pet's private timeline. From that point on, you can follow your pet's journey leading up to pickup day.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    You'll see updates, photos, videos, and milestones as they're shared. Communication with the breeder happens directly on your pet's page, so every message and update stays tied to your pet.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/New timeline.jpeg"
                    alt="Pet timeline"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-4 w-full max-w-2xl">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-purple-300 flex-1"></div>
                <div className="text-2xl">💜</div>
                <div className="h-0.5 bg-gradient-to-r from-purple-300 via-purple-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* Health Records & Milestones */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Health Records</span>{' '}
                    <span className="text-gray-900">& Milestones</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Your pet's timeline includes medical records, health notes, and growth tracking. Vaccinations, vet visits, weight updates, and milestones are logged in one place, giving you a clear and reliable health history from day one.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                {/* Overlapping card effect - using padding to reserve space */}
                <div className="relative w-full pt-8 pb-12 px-4 sm:px-8">
                  {/* Back card - health records */}
                  <div className="relative ml-0 mt-6 w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <img
                      src="/New health page in profile.jpeg"
                      alt="Health records"
                      className="w-full h-auto"
                    />
                  </div>
                  {/* Front card - weight profile */}
                  <div className="relative -mt-48 sm:-mt-56 ml-auto mr-0 w-full max-w-xs rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 z-10 cursor-pointer">
                    <img
                      src="/New wieght profile.jpeg"
                      alt="Weight tracking"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-4 w-full max-w-2xl">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-green-400 to-green-300 flex-1"></div>
                <div className="text-2xl">❤️</div>
                <div className="h-0.5 bg-gradient-to-r from-green-300 via-green-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* Astro AI assistant */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Astro AI</span>{' '}
                    <span className="text-gray-900">assistant</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Astro is Pawgress's built-in AI that understands your pet's full profile, including health records, weight trends, breed details, and timeline updates, so you can ask questions and get clear, contextual answers using your pet's real data.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/Astro new.jpeg"
                    alt="Astro AI assistant"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-4 w-full max-w-2xl">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-amber-300 flex-1"></div>
                <div className="text-2xl">✨</div>
                <div className="h-0.5 bg-gradient-to-r from-amber-300 via-amber-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* A Lifelong Home for Your Pet's Information */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">A Lifelong Home</span>{' '}
                    <span className="text-gray-900">for Your Pet's Information</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    After pickup, the timeline stays with you. Pawgress becomes a one-stop home for your pet's health records, milestones, and memories. You can continue logging medical updates, tracking growth, and adding photos throughout your pet's life. Whether you're visiting the vet or looking back on memories, everything about your pet lives in one organized place.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/New pet profile.jpeg"
                    alt="Pet profile"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Wave at top */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>

        {/* Bouncing balls */}
        <div className="absolute left-[15%] top-32 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}></div>
        <div className="absolute right-[20%] top-40 w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        <div className="absolute left-[25%] bottom-32 w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}></div>
        <div className="absolute right-[15%] bottom-40 w-9 h-9 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-50 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '0.3s' }}></div>

        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 text-center relative pt-8">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-indigo-600 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-indigo-200/50">
            <span>✨</span>
            <span>Complete Pet Care Solution</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">One Place.</span>{' '}
            <span className="text-gray-900">Every Stage.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From discovery to pickup and beyond, Pawgress keeps all your pet's information clear, organized, and easy to access.
          </p>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://pyv.hmu.temporary.site/wp-content/uploads/2026/01/charming-pampered-pets-play-side-by-side-looking-alert-generated-by-ai-1-1024x585.png"
                alt="Pets playing together"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
