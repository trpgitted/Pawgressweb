import { Baloo_2 } from 'next/font/google';
import SharedNav from '@/components/SharedNav';

const baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  adjustFontFallback: true,
});

export default function ForBreedersPage() {
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
              <div className="lg:w-1/2 text-center lg:text-left">
                {/* Small badge */}
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  <span>🐾</span>
                  <span>For Breeders</span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Run Your Breeding Program
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Without the Inbox Chaos
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mx-auto lg:mx-0 max-w-4xl">
                  Pawgress is built for ethical breeders who are tired of juggling social media messages, resending the same updates, and losing important records. It gives you one organized place to manage updates, buyers, and documents, all tied to each individual pet.
                </p>
              </div>

              {/* Hero image */}
              <div className="lg:w-1/2 relative">
                <img
                  src="/puppies_full_no_bg_refined (1).png"
                  alt="Puppies"
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
            
            {/* Pet Profile Management */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pet Profile</span>{' '}
                    <span className="text-gray-900">Management</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Create complete pet profiles with photos, breed, gender, reservation status, and parent lineage.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Group pets into litters and keep all foundational information organized from the start.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/New pet profile.jpeg"
                    alt="Pet profile management"
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

            {/* Public Pet Profiles */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Public Pet</span>{' '}
                    <span className="text-gray-900">Profiles</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Available pets appear on your public breeder profile, allowing buyers to discover them and express interest without cluttered messages.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Once a pet is linked to a buyer, it's removed from public view and all communication continues in that pet's private timeline and chat.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/New breeder profile.jpeg"
                    alt="Public pet profiles"
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

            {/* Bulk Updates & Invite Links */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Bulk Updates</span>{' '}
                    <span className="text-gray-900">& Invite Links</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Post one update – text, photos, or video – to a single pet or an entire litter with a click.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Connect buyers to their pet through unique links that create a dedicated chat and give them access to their full profile.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/newer add page.jpeg"
                    alt="Bulk updates"
                    className="w-full h-auto"
                  />
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

            {/* Secure Chat Per Pet */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Secure Chat</span>{' '}
                    <span className="text-gray-900">Per Pet</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Each pet has its own timeline and chat, keeping updates, media, and conversations clearly organized.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Buyers chat with you directly inside the pet's page, so discussions stay focused and easy to manage.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/Breeder Chat page.jpeg"
                    alt="Secure chat"
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

            {/* Health Records & Weight Tracking */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-2xl p-8 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">Health Records</span>{' '}
                    <span className="text-gray-900">& Weight Tracking</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Log vaccinations, vet visits, medications, tests, and weight trends directly on each pet's timeline.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Buyers can view health history at any time without needing to ask.
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
                <div className="h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-rose-300 flex-1"></div>
                <div className="text-2xl">🏥</div>
                <div className="h-0.5 bg-gradient-to-r from-rose-300 via-rose-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* Media Timeline Auto-Build */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-cyan-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Media Timeline</span>{' '}
                    <span className="text-gray-900">Auto-Build</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Every update you post automatically builds a chronological timeline with media and age stamps.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    No more re-sending photos or videos across different platforms.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl max-w-sm mx-auto">
                  <img
                    src="/New timeline.jpeg"
                    alt="Media timeline"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center gap-4 w-full max-w-2xl">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-cyan-300 flex-1"></div>
                <div className="text-2xl">📸</div>
                <div className="h-0.5 bg-gradient-to-r from-cyan-300 via-cyan-400 to-transparent flex-1"></div>
              </div>
            </div>

            {/* AI Assistant (Astro) */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-violet-100 hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AI Assistant</span>{' '}
                    <span className="text-gray-900">(Astro)</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Astro is Pawgress's built-in AI that understands a pet's full profile, including health records, weight trends, breed details, and timeline updates, so buyers can ask questions and get clear, contextual answers using your pet's real data, mitigating repeat questions.
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
            <span>Professional Breeding Management</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">One Platform.</span>{' '}
            <span className="text-gray-900">Complete Control.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of ethical breeders who are already using Pawgress to organize their operations and build stronger relationships with buyers.
          </p>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/ChatGPT Image Jan 23, 2026, 05_52_00 PM.png"
                alt="Happy pets"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
