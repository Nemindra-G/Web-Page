'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Certification {
  id: string;
  name: string;
  organization: string;
  year: string;
  description: string;
  logo?: string;
  type: 'certification' | 'award' | 'membership';
}

interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'AAMA Certified',
    organization: 'American Architectural Manufacturers Association',
    year: '2018',
    description: 'Certified for excellence in architectural aluminum manufacturing and installation.',
    type: 'certification',
  },
  {
    id: '2',
    name: 'LEED AP Certified',
    organization: 'U.S. Green Building Council',
    year: '2019',
    description: 'Leadership in Energy and Environmental Design Accredited Professional certification.',
    type: 'certification',
  },
  {
    id: '3',
    name: 'Excellence in Fabrication Award',
    organization: 'National Association of Architectural Metal Manufacturers',
    year: '2023',
    description: 'Recognized for outstanding quality and innovation in aluminum fabrication.',
    type: 'award',
  },
  {
    id: '4',
    name: 'Safety Excellence Award',
    organization: 'Construction Industry Safety Council',
    year: '2022',
    description: 'Awarded for maintaining exceptional safety standards across all projects.',
    type: 'award',
  },
  {
    id: '5',
    name: 'ISO 9001:2015 Certified',
    organization: 'International Organization for Standardization',
    year: '2020',
    description: 'Quality management system certification ensuring consistent quality delivery.',
    type: 'certification',
  },
  {
    id: '6',
    name: 'Better Business Bureau A+',
    organization: 'Better Business Bureau',
    year: '2021',
    description: 'Highest rating for business ethics and customer satisfaction.',
    type: 'membership',
  },
];

const companyValues: CompanyValue[] = [
  {
    icon: '🏆',
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in every aspect of our work, from initial design to final installation.',
  },
  {
    icon: '🔒',
    title: 'Safety First',
    description: 'Safety is our top priority, with comprehensive training and strict adherence to all safety protocols.',
  },
  {
    icon: '🌱',
    title: 'Environmental Responsibility',
    description: 'We are committed to sustainable practices and environmentally responsible manufacturing processes.',
  },
  {
    icon: '🤝',
    title: 'Customer Partnership',
    description: 'We build lasting relationships with our clients through transparency, communication, and reliability.',
  },
  {
    icon: '⚡',
    title: 'Innovation Drive',
    description: 'We continuously invest in new technologies and methods to deliver cutting-edge solutions.',
  },
  {
    icon: '📈',
    title: 'Continuous Improvement',
    description: 'We constantly evaluate and enhance our processes to deliver better results for our clients.',
  },
];

const CertificationCard = ({ cert, index, isInView }: { cert: Certification; index: number; isInView: boolean }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'certification':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'membership':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'award':
        return '🏆';
      case 'certification':
        return '📜';
      case 'membership':
        return '🤝';
      default:
        return '📋';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{getTypeIcon(cert.type)}</span>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              {cert.name}
            </h3>
            <p className="text-sm text-slate-600">
              {cert.organization}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getTypeColor(cert.type)}`}>
            {cert.type.charAt(0).toUpperCase() + cert.type.slice(1)}
          </span>
          <span className="text-sm text-slate-600 mt-1">{cert.year}</span>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        {cert.description}
      </p>
    </motion.div>
  );
};

const ValueCard = ({ value, index, isInView }: { value: CompanyValue; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{value.icon}</div>
      <h3 className="text-xl font-semibold text-slate-800 mb-3">
        {value.title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  );
};

export function CertificationsSection() {
  const ref = useRef(null);
  const valuesRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        {/* Certifications and Awards */}
        <div ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Certifications & Awards
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is recognized by industry leaders and certification bodies. 
              These credentials reflect our dedication to quality, safety, and innovation.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.id}
                cert={cert}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div ref={valuesRef}>
          {/* Values Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide our decisions, shape our culture, 
              and define how we serve our clients every day.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {companyValues.map((value, index) => (
              <ValueCard
                key={value.title}
                value={value}
                index={index}
                isInView={valuesInView}
              />
            ))}
          </div>
        </div>

        {/* Industry Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-6">
              Industry Partnerships
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              We maintain active memberships and partnerships with leading industry organizations 
              to stay current with best practices and emerging technologies.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {[
                'American Architectural Manufacturers Association',
                'National Association of Architectural Metal Manufacturers',
                'U.S. Green Building Council',
                'Construction Industry Safety Council',
              ].map((org, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-slate-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl text-slate-600">🏢</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    {org}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}