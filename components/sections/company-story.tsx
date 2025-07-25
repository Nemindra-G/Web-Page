'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container, Section } from '@/components/layout';

interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  achievement: string;
  icon: string;
  highlight?: boolean;
}

const storyMilestones: StoryMilestone[] = [
  {
    year: '2010',
    title: 'Humble Beginnings',
    description: 'Started as a small family business with a commitment to quality craftsmanship and reliable service for local contractors.',
    achievement: 'Established our first 2,500 sq ft workshop',
    icon: '🏠',
    highlight: true,
  },
  {
    year: '2013',
    title: 'First Major Project',
    description: 'Completed our first large commercial project - a 50-unit residential complex that established our reputation in the market.',
    achievement: 'Successfully delivered 200+ windows & doors',
    icon: '�️',
  },
  {
    year: '2016',
    title: 'Facility Expansion',
    description: 'Growing demand led us to expand our facility and invest in modern CNC equipment to improve precision and efficiency.',
    achievement: 'Doubled facility size to 5,000 sq ft',
    icon: '⚡',
    highlight: true,
  },
  {
    year: '2019',
    title: 'Quality Certification',
    description: 'Achieved ISO 9001 certification and began specializing in energy-efficient aluminum systems for green building projects.',
    achievement: 'ISO 9001:2015 certified operations',
    icon: '🌱',
  },
  {
    year: '2022',
    title: 'Team Growth',
    description: 'Expanded our team to 25+ skilled professionals and implemented digital project management for better client communication.',
    achievement: 'Team of 25+ certified technicians',
    icon: '🤝',
    highlight: true,
  },
  {
    year: '2024',
    title: 'Milestone Achievement',
    description: 'Proud to have completed over 1000 successful projects while maintaining strong relationships with clients and partners.',
    achievement: '1000+ projects completed successfully',
    icon: '🎯',
  },
];

const MilestoneCard = ({ milestone, index }: { milestone: StoryMilestone; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative group ${milestone.highlight ? 'md:col-span-2' : ''}`}
    >
      {/* Gradient Background Card */}
      <div className={`relative overflow-hidden rounded-2xl p-8 h-full transform hover:scale-105 transition-all duration-500 ${
        milestone.highlight 
          ? 'bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border-2 border-primary/20' 
          : 'bg-gradient-to-br from-slate-50 to-white border border-slate-200'
      } hover:shadow-2xl hover:shadow-primary/10`}>
        
        {/* Decorative Elements */}
        {milestone.highlight && (
          <>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/20 to-transparent rounded-full translate-y-12 -translate-x-12" />
          </>
        )}

        {/* Year Badge */}
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-6 ${
          milestone.highlight 
            ? 'bg-primary text-white shadow-lg shadow-primary/25' 
            : 'bg-slate-100 text-slate-700'
        }`}>
          <span className="text-xl mr-2">{milestone.icon}</span>
          {milestone.year}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className={`text-2xl font-bold mb-4 ${
            milestone.highlight ? 'text-slate-900' : 'text-slate-800'
          }`}>
            {milestone.title}
          </h3>
          
          <p className="text-slate-600 mb-6 leading-relaxed">
            {milestone.description}
          </p>

          {/* Achievement Banner */}
          <div className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold ${
            milestone.highlight 
              ? 'bg-gradient-to-r from-primary to-accent text-white' 
              : 'bg-slate-100 text-slate-700'
          }`}>
            <span className="mr-2">✨</span>
            {milestone.achievement}
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export function CompanyStory() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <Section size="xl" background="gradient" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <Container>
        <div ref={sectionRef}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-primary border border-primary rounded-full mb-8 shadow-lg shadow-primary/25">
              <span className="text-white text-sm font-semibold">Our Journey • Since 2000</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8">
              Crafting Excellence,{' '}
              <span className="text-white">
                One Project at a Time
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              From a small workshop to industry leadership, our story is one of relentless 
              innovation, unwavering quality, and the pursuit of architectural perfection.
            </p>
          </motion.div>

          {/* Interactive Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {storyMilestones.map((milestone, index) => (
              <MilestoneCard key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>

          {/* Company Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-32 -translate-x-32 blur-2xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                  <span className="text-white text-sm font-semibold">Our Philosophy</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  "Precision isn't just what we do—
                  <br />
                  <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    it's who we are."
                  </span>
                </h3>

                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Every project we undertake is a testament to our commitment to excellence. 
                  We don't just fabricate aluminum—we craft the future of architectural innovation.
                </p>

                {/* Key Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: '🎯', title: 'Precision Engineering', desc: 'Every millimeter matters' },
                    { icon: '🚀', title: 'Innovation First', desc: 'Leading industry standards' },
                    { icon: '🤝', title: 'Partnership', desc: 'Your vision, our expertise' }
                  ].map((principle, index) => (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl mb-4">{principle.icon}</div>
                      <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                      <p className="text-slate-400 text-sm">{principle.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
