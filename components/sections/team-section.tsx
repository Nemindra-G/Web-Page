'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { TEAM_DATA as sampleTeamMembers } from '@/data';
import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
  isInView: boolean;
}

const TeamCard = ({ member, index, isInView }: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Contact Info Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4 text-white"
          >
            {member.contact && (
              <div className="space-y-2">
                <a
                  href={`mailto:${member.contact.email}`}
                  className="block text-sm hover:text-electric-blue transition-colors"
                >
                  {member.contact.email}
                </a>
                {member.contact.phone && (
                  <a
                    href={`tel:${member.contact.phone}`}
                    className="block text-sm hover:text-electric-blue transition-colors"
                  >
                    {member.contact.phone}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            {member.name}
          </h3>
          <p className="text-electric-blue font-medium mb-3">
            {member.position}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {member.bio}
          </p>

          {/* Experience */}
          <div className="flex items-center mb-4">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Experience
            </span>
            <span className="ml-2 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
              {member.experience}
            </span>
          </div>

          {/* Specializations */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-2">
              Specializations
            </span>
            <div className="flex flex-wrap gap-1">
              {member.specializations.map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-electric-blue/10 text-electric-blue text-xs rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {member.certifications.length > 0 && (
            <div>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide block mb-2">
                Certifications
              </span>
              <div className="flex flex-wrap gap-1">
                {member.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 border-2 border-electric-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
            Meet Our Team
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced professionals bring decades of expertise and passion to every project. 
            Get to know the people behind our success.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {sampleTeamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-slate-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for excellence 
              and innovation in aluminum fabrication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-electric-blue text-white font-semibold rounded-lg hover:bg-electric-blue-dark transition-colors duration-200"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@apexaluminum.com"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-electric-blue text-electric-blue font-semibold rounded-lg hover:bg-electric-blue hover:text-white transition-colors duration-200"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}