'use client';

import { motion } from 'framer-motion';
import { RiCalendarLine, RiTimeLine, RiUser3Line, RiArrowRightLine } from 'react-icons/ri';

// Sample blog data (to be replaced with actual data/CMS integration)
const blogPosts = [
  {
    id: 1,
    title: 'Supporting LGBTQ+ Youth Mental Health',
    excerpt: 'Understanding the unique challenges faced by LGBTQ+ youth and providing essential mental health resources.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    author: 'Team Sahodaran',
    category: 'Mental Health',
    image: '/images/blog/mental-health.jpg'
  },
  {
    id: 2,
    title: 'HIV Prevention and Care: Latest Updates',
    excerpt: 'Stay informed about the latest developments in HIV prevention, treatment, and support services.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    author: 'Healthcare Team',
    category: 'Healthcare',
    image: '/images/blog/healthcare.jpg'
  },
  {
    id: 3,
    title: 'Legal Rights Workshop Highlights',
    excerpt: 'Key takeaways from our recent workshop on legal rights and protections for the LGBTQ+ community.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    author: 'Legal Team',
    category: 'Legal Rights',
    image: '/images/blog/legal-rights.jpg'
  },
  {
    id: 4,
    title: 'Community Success Stories',
    excerpt: 'Inspiring stories of resilience and triumph from members of our community.',
    date: 'March 1, 2024',
    readTime: '8 min read',
    author: 'Community Team',
    category: 'Stories',
    image: '/images/blog/success-stories.jpg'
  },
  {
    id: 5,
    title: 'Upcoming Events and Programs',
    excerpt: 'Stay updated with our upcoming events, workshops, and community programs.',
    date: 'February 28, 2024',
    readTime: '4 min read',
    author: 'Events Team',
    category: 'Events',
    image: '/images/blog/events.jpg'
  },
  {
    id: 6,
    title: 'Advocacy Updates: Policy Changes',
    excerpt: 'Recent policy developments and their impact on the LGBTQ+ community in India.',
    date: 'February 25, 2024',
    readTime: '6 min read',
    author: 'Advocacy Team',
    category: 'Advocacy',
    image: '/images/blog/advocacy.jpg'
  }
];

export default function Blog() {
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
              Our Blog
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              Stay updated with the latest news, stories, and insights from Sahodaran's community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[var(--background-secondary)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--background)] text-6xl opacity-30">
                    <RiUser3Line />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-[var(--accent)] bg-[var(--accent)]/10 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[var(--text-secondary)] mb-4">
                    {post.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center text-sm text-[var(--text-secondary)] space-x-4">
                    <div className="flex items-center">
                      <RiCalendarLine className="mr-2" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <RiTimeLine className="mr-2" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-6 flex items-center text-[var(--accent)] font-medium group-hover:text-[var(--accent-hover)] transition-colors duration-300">
                    Read More
                    <RiArrowRightLine className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}