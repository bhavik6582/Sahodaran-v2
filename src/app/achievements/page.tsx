'use client';

import { motion } from 'framer-motion';
import { RiAwardLine, RiTrophyLine, RiHeartLine, RiStarLine, RiGroupLine, RiBarChartLine, RiGlobalLine, RiHandHeartLine, RiCommunityLine, RiGovernmentLine, RiBookOpenLine, RiBuildingLine } from 'react-icons/ri';

const achievements = [
  {
    icon: RiAwardLine,
    title: 'UNAIDS Civil Society Award (2006)',
    description: 'Recognized for outstanding commitment to HIV/AIDS prevention and support at the national level.'
  },
  {
    icon: RiTrophyLine,
    title: 'Best Grassroots Organization',
    description: 'Awarded by the Family Planning Association of India for impactful work with marginalized communities.'
  },
  {
    icon: RiHeartLine,
    title: 'NACO Red Ribbon Express Award (2009-2010)',
    description: 'Honored for extraordinary contribution to the Red Ribbon Express HIV/AIDS awareness initiative.'
  },
  {
    icon: RiStarLine,
    title: 'TANSACS World AIDS Day Award (2018)',
    description: 'Presented by Health Minister Vijaya Baskar & Health Secretary Radhakrishnan for best outreach work.'
  },
  {
    icon: RiGroupLine,
    title: 'First MSM CBO in South India',
    description: 'Pioneering LGBTQ+ community support and advocacy since 1998.'
  },
  {
    icon: RiBarChartLine,
    title: 'DAPCU Award (2015)',
    description: 'Recognized by the Chennai Collector for excellence in Monitoring & Evaluation work.'
  },
  {
    icon: RiGlobalLine,
    title: 'HIV/AIDS India Alliance Award (2019)',
    description: 'Acknowledged for contributions to HIV/AIDS awareness and community support.'
  },
  {
    icon: RiHandHeartLine,
    title: 'GFATM-SIAAP Solidarity Award (2011)',
    description: 'Honored for strengthening HIV/AIDS interventions within the LGBTQ+ community.'
  },
  {
    icon: RiCommunityLine,
    title: 'Lions Club Humanitarian Award (2018)',
    description: 'Awarded for exceptional service to marginalized communities.'
  },
  {
    icon: RiGovernmentLine,
    title: 'USA IVLP Visitor Program',
    description: "Sahodaran's GM was selected by the US Government to visit LGBTQ+ organizations in the USA."
  },
  {
    icon: RiBookOpenLine,
    title: 'UNESCO Study Partner',
    description: 'Partnered with UNESCO to research bullying faced by LGBTQ+ students in schools.'
  },
  {
    icon: RiBuildingLine,
    title: 'CBO Development',
    description: 'Helped establish sister organizations like Thozhi, Snegithi, and others for community support.'
  }
];

export default function Achievements() {
  return (
    <main className="min-h-screen py-24 bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--background-secondary)] py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--accent)" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--accent)] mb-6">
              Our Achievements
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              A timeline of milestones and accomplishments in our journey of supporting and empowering the LGBTQ+ community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[var(--accent)]/20"></div>

            {/* Achievement Items */}
            <div className="space-y-16">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={`${achievement.title}-${index}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'}`}
                >
                  {/* Year Marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-lg shadow-[var(--accent)]/20">
                    <achievement.icon className="text-[var(--background)] text-xl" />
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                    <div className="bg-[var(--background-secondary)] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                      {/* Removed year display since it's not defined in achievements array */}
                      <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{achievement.title}</h3>
                      <p className="text-[var(--text-secondary)]">{achievement.description}</p>
                    </div>
                  </div>

                  {/* Empty Column for Layout */}
                  <div className="hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}