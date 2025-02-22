'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiFacebookBoxFill, RiTwitterFill, RiInstagramLine, RiLinkedinBoxFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-[var(--background-secondary)] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/logo.png" 
                alt="Sahodaran Logo" 
                width={40} 
                height={40} 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold text-[var(--text-primary)]">Sahodaran</span>
            </Link>
            <p className="text-[var(--text-secondary)] text-sm">
              Chennai's pioneering MSM-focused organization providing healthcare, support, and advocacy for a more inclusive society since 1996.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)] mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/achievements', label: 'Achievements' },
                { href: '/blog', label: 'Blog' },
                { href: '/#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)] mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <RiMapPinLine className="text-[var(--accent)] text-xl flex-shrink-0 mt-1" />
                <span className="text-[var(--text-secondary)] text-sm">
                  No. 27, New no.75, 3rd St Extn,<br />
                  Railway colony, Aminjikarai,<br />
                  Chennai-600029
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <RiPhoneLine className="text-[var(--accent)] text-xl flex-shrink-0" />
                <span className="text-[var(--text-secondary)] text-sm">
                  044-23740486, +91 9841865423
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <RiMailLine className="text-[var(--accent)] text-xl flex-shrink-0" />
                <a 
                  href="mailto:sahodaranchennai@gmail.com" 
                  className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 text-sm"
                >
                  sahodaranchennai@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--accent)] mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: RiFacebookBoxFill, href: '#', label: 'Facebook' },
                { icon: RiTwitterFill, href: '#', label: 'Twitter' },
                { icon: RiInstagramLine, href: '#', label: 'Instagram' },
                { icon: RiLinkedinBoxFill, href: '#', label: 'LinkedIn' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[var(--background)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--text-secondary)]/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--text-secondary)] text-sm">
              © {new Date().getFullYear()} Sahodaran. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy-policy" 
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}