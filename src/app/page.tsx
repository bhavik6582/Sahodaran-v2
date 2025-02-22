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
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="var(--accent)" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            {/* Content Side */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-[var(--accent)]">Empowering</span> the LGBTQ+<br />
                  Community Since 1996
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0">
                  Chennai's pioneering MSM-focused organization providing healthcare, support, and advocacy for a more inclusive society.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#services" 
                   className="px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-full font-semibold 
                            hover:bg-[var(--accent-hover)] transform hover:scale-105 transition-all duration-300
                            flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent)]/20">
                  Explore Our Services
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                  </svg>
                </a>
                <a href="#contact" 
                   className="px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] rounded-full font-semibold 
                            hover:bg-[var(--accent)] hover:text-[var(--background)] transform hover:scale-105 
                            transition-all duration-300 flex items-center justify-center gap-2">
                  Get Involved
                </a>
              </div>

              {/* Impact Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[var(--accent)]">25+</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Years of Service</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[var(--accent)]">10K+</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Lives Impacted</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[var(--accent)]">50+</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Active Programs</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--background-secondary)] shadow-lg transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[var(--accent)]">100+</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Team Members</p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative hidden lg:block" onMouseMove={(e) => {
              const face = document.getElementById('interactive-face');
              if (!face) return;
              
              const rect = face.getBoundingClientRect();
              const x = (e.clientX - rect.left) / rect.width;
              const y = (e.clientY - rect.top) / rect.height;
              
              // Update eyes position and expression
              const leftEye = document.getElementById('left-eye');
              const rightEye = document.getElementById('right-eye');
              const smile = document.getElementById('smile');
              const leftEyebrow = document.getElementById('left-eyebrow');
              const rightEyebrow = document.getElementById('right-eyebrow');
              
              if (leftEye && rightEye && smile && leftEyebrow && rightEyebrow) {
                // Eye movement
                const eyeMovementX = (x - 0.5) * 15;
                const eyeMovementY = (y - 0.5) * 15;
                
                leftEye.setAttribute('cx', `${200 + eyeMovementX}`);
                leftEye.setAttribute('cy', `${225 + eyeMovementY}`);
                rightEye.setAttribute('cx', `${300 + eyeMovementX}`);
                rightEye.setAttribute('cy', `${225 + eyeMovementY}`);
                
                // Dynamic expression based on cursor position
                const centerX = 250;
                const centerY = 250;
                const distance = Math.sqrt(
                  Math.pow((x * 500 - centerX), 2) + 
                  Math.pow((y * 500 - centerY), 2)
                );
                
                // Smile adjustment
                const smileHeight = Math.max(280, Math.min(300, 280 + (distance / 10)));
                const smileCurve = Math.max(30, Math.min(50, 40 - (distance / 20)));
                smile.setAttribute('d', `M175 ${smileHeight}C200 ${smileHeight + smileCurve} 300 ${smileHeight + smileCurve} 325 ${smileHeight}`);
                
                // Eyebrow movement
                const eyebrowLift = Math.min(15, distance / 20);
                leftEyebrow.setAttribute('d', `M170 ${190 - eyebrowLift} Q200 ${180 - eyebrowLift} 230 ${190 - eyebrowLift}`);
                rightEyebrow.setAttribute('d', `M270 ${190 - eyebrowLift} Q300 ${180 - eyebrowLift} 330 ${190 - eyebrowLift}`);
              }
            }}>
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--accent-hover)] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="relative z-10">
                <svg id="interactive-face" className="w-full h-auto" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <circle cx="250" cy="250" r="200" fill="url(#gradient)" opacity="0.9"/>
                    <path id="smile" d="M175 280C200 320 300 320 325 280" stroke="var(--background)" strokeWidth="8" strokeLinecap="round"/>
                    <circle id="left-eye" cx="200" cy="225" r="20" fill="var(--background)"/>
                    <circle id="right-eye" cx="300" cy="225" r="20" fill="var(--background)"/>
                    <path id="left-eyebrow" d="M170 190 Q200 180 230 190" stroke="var(--background)" strokeWidth="8" strokeLinecap="round"/>
                    <path id="right-eyebrow" d="M270 190 Q300 180 330 190" stroke="var(--background)" strokeWidth="8" strokeLinecap="round"/>
                  </g>
                  <defs>
                    <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) rotate(90) scale(200)">
                      <stop stopColor="var(--accent)"/>
                      <stop offset="1" stopColor="var(--accent-hover)"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />
    </div>
  )
}