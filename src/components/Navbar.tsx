'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion as m } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const raysVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rayVariant = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        pathLength: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 }
      }
    },
  };

  const shineVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDasharray: '20, 1000',
      strokeDashoffset: 0,
      filter: 'blur(0px)',
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashoffset: [0, -50, -100],
      filter: ['blur(2px)', 'blur(2px)', 'blur(0px)'],
      transition: {
        duration: 0.75,
        ease: 'linear'
      },
    },
  };

  const sunPath = 'M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C60 29 69.5 38 70 49.5Z';
  const moonPath = 'M70 49.5C70 60.8218 60.8218 70 49.5 70C38.1782 70 29 60.8218 29 49.5C29 38.1782 38.1782 29 49.5 29C39 45 49.5 59.5 70 49.5Z';

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-[var(--background-secondary)] shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="logo flex items-center text-[var(--text-primary)] font-bold text-2xl">
          <Image 
            src="/images/logo.png" 
            alt="Sahodaran LGBTQ+ Support Organization Logo" 
            width={40} 
            height={40} 
            className="h-10 w-10 object-contain mr-3"
          />
          <span>Sahodaran</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div 
          className="md:hidden cursor-pointer flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <div className={`
          fixed inset-0 bg-[var(--background)] transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:relative md:translate-x-0 md:bg-transparent
          transition-transform duration-300 ease-in-out
          flex flex-col md:flex-row items-center justify-center md:justify-between
          md:space-x-6 lg:space-x-10
        `}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-10">
            {[
              { href: '/', label: 'Home', active: false },
              { href: '/services', label: 'Services', active: false },
              { href: '/achievements', label: 'Achievements', active: false },
              { href: '/blog', label: 'Blog', active: false },
              { href: '/#contact', label: 'Contact', active: false }
            ].map((link) => (
              <li key={link.href} className={link.active ? 'active' : ''}>
                <Link 
                  href={link.href} 
                  className={`
                    text-[var(--text-secondary)] hover:text-[var(--accent)]
                    transition-colors duration-300
                    ${link.active ? 'text-[var(--accent)] font-medium' : ''}
                    px-3 py-2 rounded-md
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle and Support Button */}
          <div className="flex items-center mt-6 md:mt-0 md:ml-auto space-x-4">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative p-2 rounded-lg hover:bg-[var(--background)] transition-colors duration-300"
            >
              <m.svg
                strokeWidth="4"
                strokeLinecap="round"
                width={40}
                height={40}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className='relative'
              >
                <m.path 
                  variants={shineVariant} 
                  d={moonPath} 
                  className='absolute top-0 left-0 stroke-[#6B8CFF] dark:stroke-[#4A6FFF]' 
                  initial="hidden" 
                  animate={theme === 'dark' ? 'visible' : "hidden"} 
                />

                <m.g 
                  variants={raysVariants} 
                  initial='hidden' 
                  animate={theme === "light" ? "visible" : "hidden"} 
                  className="stroke-[#FFB800] dark:stroke-[#FFD700]" 
                  style={{ strokeLinecap: 'round' }}
                >
                  <m.path className="origin-center" variants={rayVariant} d="M50 2V11" />
                  <m.path variants={rayVariant} d="M85 15L78 22" />
                  <m.path variants={rayVariant} d="M98 50H89" />
                  <m.path variants={rayVariant} d="M85 85L78 78" />
                  <m.path variants={rayVariant} d="M50 98V89" />
                  <m.path variants={rayVariant} d="M23 78L16 84" />
                  <m.path variants={rayVariant} d="M11 50H2" />
                  <m.path variants={rayVariant} d="M23 23L16 16" />
                </m.g>

                <m.path
                  d={sunPath}
                  fill="transparent"
                  transition={{ duration: 1, type: "spring" }}
                  initial={{ fillOpacity: 0, strokeOpacity: 0 }}
                  animate={
                    theme === "dark"
                      ? {
                        d: moonPath,
                        rotate: -360,
                        scale: 2,
                        stroke: "#6B8CFF",
                        fill: "#6B8CFF",
                        fillOpacity: 0.35,
                        strokeOpacity: 1,
                        transition: { delay: 0.1 },
                      }
                      : {
                        d: sunPath,
                        rotate: 0,
                        stroke: "#FFB800",
                        fill: "#FFB800",
                        fillOpacity: 0.35,
                        strokeOpacity: 1,
                      }
                  }
                />
              </m.svg>
            </button>

            {/* Support Button */}
            <Link 
              href="#" 
              className="
                bg-[var(--accent)] text-[var(--background)] 
                px-4 py-2 rounded-full 
                flex items-center space-x-2 
                hover:bg-[var(--accent-hover)] 
                transition-colors duration-300
              "
            >
              <span>Support Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
