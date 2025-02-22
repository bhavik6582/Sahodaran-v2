'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const timeline = [
    { year: '1996', event: 'Foundation of Sahodaran by Mr. Sunil Menon' },
    { year: '1998', event: 'Official registration as a Community Based Organization' },
    { year: '2010', event: 'Expanded services to support transgender community' },
    { year: '2020', event: 'Reached milestone of supporting 10,000+ community members' },
  ];

  const testimonials = [
    {
      quote: "Sahodaran gave me the courage to embrace my identity and live authentically.",
      author: "Anonymous Community Member"
    },
    {
      quote: "The support and resources provided by Sahodaran changed my life completely.",
      author: "Program Participant"
    }
  ];

  return (
    <section id="about" className="about-section py-16 lg:py-24 bg-[var(--background-secondary)]">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="about-text space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent)]">
              About Sahodaran
            </h2>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Sahodaran, established in 1996 and registered in 1998 by Mr. Sunil Menon, is Chennai's first Community Based Organization dedicated to the MSM community. We combine HIV/AIDS prevention and care services with comprehensive social support, counseling, and crisis intervention.
              </p>
              <p>
                Our mission extends beyond healthcare to empowering MSM/TG community members as leaders, fostering greater social recognition for sexual minorities nationwide. Since 2010, we've expanded our reach to serve the transgender community and act as a vital resource hub for the broader LGBTQIA+ community.
              </p>
              <p>
                We envision a world where sexual minorities have equal access to healthcare, legal support, and social entitlements, free from discrimination and stigma.
              </p>
            </div>
          </motion.div>

          {/* Founder Profile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="founder-profile bg-[var(--background)] p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <div className="founder-image mb-6">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-[var(--accent)]">
                <Image 
                  src="/images/sunil-menon.jpg" 
                  alt="Sunil Menon - Founder of Sahodaran" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-[var(--accent)]">Mr. Sunil Menon</h3>
              <p className="text-[var(--text-secondary)]">Founder & Director</p>
              <p className="text-[var(--text-secondary)] italic">
                "Dedicated to creating a more inclusive and accepting society for all."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-[var(--accent)] text-center mb-8">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative p-6 bg-[var(--background)] rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-[var(--accent)] font-bold text-xl mb-2">{item.year}</div>
                <p className="text-[var(--text-secondary)]">{item.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[var(--background)] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <p className="text-[var(--text-secondary)] italic mb-4">"{testimonial.quote}"</p>
              <p className="text-[var(--accent)] font-semibold">- {testimonial.author}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
