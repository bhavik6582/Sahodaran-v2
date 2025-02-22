'use client';

import { useState } from 'react';
import { RiHandHeartLine, RiSyringeLine, RiShieldCheckLine } from 'react-icons/ri';

const services = [
  {
    icon: RiHandHeartLine,
    title: 'Community Outreach',
    description: 'Identifying and reaching out to the community through dedicated support programs and initiatives.',
    details: [
      'Targeted support programs',
      'Community engagement initiatives',
      'Grassroots level interventions',
      'Building community resilience'
    ]
  },
  {
    icon: RiSyringeLine,
    title: 'Safe Sex Education',
    description: 'Distributing condoms, lube, and educating about safer sex practices for community well-being.',
    details: [
      'Comprehensive sexual health education',
      'Free condom and lube distribution',
      'HIV/AIDS prevention workshops',
      'Reproductive health awareness'
    ]
  },
  {
    icon: RiShieldCheckLine,
    title: 'Confidential Testing',
    description: 'Access to confidential STD testing and diagnoses in a safe, judgment-free environment.',
    details: [
      'Confidential STD screening',
      'HIV testing services',
      'Non-judgmental counseling',
      'Referral to specialized care'
    ]
  }
];

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="services-section py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="services-content">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--accent)]">Our Services</h2>
          <div className="service-grid grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <div 
                  key={index} 
                  className={`
                    service-card 
                    relative
                    bg-gradient-to-br from-[var(--background)] to-[var(--background-secondary)]
                    p-8
                    rounded-2xl
                    shadow-lg
                    overflow-hidden
                    transform
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                    hover:shadow-xl
                    hover:shadow-[var(--accent)]/20
                    border border-[var(--accent)]/5
                  `}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-5 transition-opacity duration-500 hover:opacity-10">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--accent)" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                    </svg>
                  </div>
                
                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Title Section */}
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className={`
                          icon-wrapper 
                          p-4
                          rounded-2xl
                          bg-gradient-to-br 
                          from-[var(--accent)]/15 
                          to-[var(--accent)]/5
                          transform
                          transition-all
                          duration-500
                          ${hoveredCard === index ? 'scale-110 rotate-6' : ''}
                        `}>
                          <ServiceIcon 
                            className="text-4xl text-[var(--accent)]" 
                          />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--accent)] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  
                    {/* Description */}
                    <p className="text-[var(--text-secondary)] text-base mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  
                    {/* Service Details */}
                    <div className="mt-auto">
                      <ul className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <li 
                            key={idx} 
                            className={`
                              flex items-center space-x-3 p-2.5 rounded-xl
                              transition-all duration-300
                              ${hoveredCard === index ? 'bg-[var(--accent)]/5' : ''}
                            `}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`
                                h-5 w-5 text-[var(--accent)]
                                transition-transform duration-500
                                ${hoveredCard === index ? 'scale-110 rotate-12' : ''}
                              `} 
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path 
                                fillRule="evenodd" 
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                                clipRule="evenodd" 
                              />
                            </svg>
                            <span className="text-[var(--text-secondary)] text-sm font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
