'use client';

import { 
  RiHandHeartLine, 
  RiSyringeLine, 
  RiShieldCheckLine, 
  RiBookOpenLine, 
  RiHeartPulseLine, 
  RiGroupLine
} from 'react-icons/ri';

export default function Services() {
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
    },
    {
      icon: RiBookOpenLine,
      title: 'Legal Support',
      description: 'Providing legal guidance and support for LGBTQIA+ individuals facing discrimination or legal challenges.',
      details: [
        'Legal counseling',
        'Anti-discrimination support',
        'Rights awareness',
        'Legal aid referrals'
      ]
    },
    {
      icon: RiHeartPulseLine,
      title: 'Counseling Services',
      description: 'Offering confidential, compassionate counseling to support mental health and personal growth.',
      details: [
        'Individual counseling',
        'Group therapy sessions',
        'Mental health support',
        'Personal development workshops'
      ]
    },
    {
      icon: RiGroupLine,
      title: 'Community Support Groups',
      description: 'Creating safe, supportive spaces for community members to connect, share, and grow together.',
      details: [
        'Safe discussion platforms',
        'Peer support networks',
        'Empowerment programs',
        'Community building activities'
      ]
    }
  ];

  return (
    <section className="min-h-screen py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent)] mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)]">
            Comprehensive support and services empowering the LGBTQIA+ community through healthcare, education, and advocacy.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <div 
                key={index}
                className="group relative bg-[var(--background-secondary)] rounded-2xl p-8 overflow-hidden
                         transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
                         border-2 border-transparent hover:border-[var(--accent)]"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 transition-opacity duration-300 group-hover:opacity-10">
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
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <div className="p-4 rounded-full bg-[var(--accent)]/10 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <ServiceIcon className="text-4xl text-[var(--accent)]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--text-secondary)] mb-6">
                    {service.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center space-x-3 p-2 rounded-lg
                                 transition-all duration-300 group-hover:bg-[var(--accent)]/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                        <span className="text-[var(--text-secondary)]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
