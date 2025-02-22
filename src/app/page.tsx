'use client';

import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="hero min-h-[90vh] relative overflow-hidden bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-20 w-full">
            {/* Content Side */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-[var(--accent)]">Empowering</span> the LGBTQ+<br className="hidden sm:block" />
                  Community Since 1996
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0">
                  Chennai's pioneering MSM-focused organization providing healthcare, support, and advocacy for a more inclusive society.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/services"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full font-semibold
                           transform hover:scale-105 transition-all duration-300
                           shadow-lg shadow-[var(--accent)]/20 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-[var(--background)]">
                    Explore Our Services
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)]"></div>
                </a>
                <a href="#contact" 
                   className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--accent)] text-[var(--accent)] rounded-full font-semibold 
                            hover:bg-[var(--accent)] hover:text-[var(--background)] transform hover:scale-105 
                            transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Get Involved
                </a>
              </div>

              {/* Impact Statistics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
                <div className="text-center p-3 sm:p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">25+</h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm">Years of Service</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">10K+</h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm">Lives Impacted</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">50+</h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm">Active Programs</p>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--accent)]">100+</h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm">Team Members</p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative hidden lg:block" onMouseMove={(e) => {
              const face = document.getElementById('interactive-face');
              if (!face) return;
              
              const rect = face.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              const angleX = (y - centerY) / 20;
              const angleY = (x - centerX) / 20;
              
              face.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
            }}>
            </div>
          </div>
        </div>
      </header>

      {/* Other Sections */}
      <Services />
      <About />
      <Contact />
    </div>
  );
}