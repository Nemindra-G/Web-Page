'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Card, Icons, Lightbox } from '@/components/ui'
import { BeforeAfterSlider } from '@/components/ui/before-after-slider'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<Array<{
    src: string
    alt: string
    caption?: string
    title?: string
    description?: string
    metadata?: {
      category?: string
      date?: string
      client?: string
      location?: string
    }
  }>>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (imageIndex: number = 0) => {
    const lightboxData = project.images.gallery.map((imageSrc, index) => {
      const imageData: {
        src: string
        alt: string
        caption?: string
        title?: string
        description?: string
        metadata?: {
          category?: string
          date?: string
          client?: string
          location?: string
        }
      } = {
        src: imageSrc,
        alt: `${project.title} - Image ${index + 1}`,
        title: project.title,
        description: project.longDescription,
        metadata: {
          category: project.category,
          date: new Date(project.completionDate).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          }),
          ...(project.client.name && { client: project.client.name }),
          ...(project.specifications.dimensions && { location: project.specifications.dimensions })
        }
      }
      
      if (index === 0) {
        imageData.caption = project.description
      }
      
      return imageData
    })
    
    setLightboxImages(lightboxData)
    setLightboxIndex(imageIndex)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
  }

  const jumpToImage = (index: number) => {
    setLightboxIndex(index)
  }

  return (
    <>
      {/* Hero Section */}
      <Section size="xs" className="relative">
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src={project.images.hero}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white pb-16"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-sm opacity-80">
                    {new Date(project.completionDate).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  {project.title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
                  {project.description}
                </p>
              </motion.div>
            </Container>
          </div>
        </div>
      </Section>

      {/* Project Overview */}
      <Section size="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                  Project Overview
                </h2>
                <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-400">
                  <p className="text-lg leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Before/After Slider */}
              {project.images.beforeAfter && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                    Before & After
                  </h3>
                  <BeforeAfterSlider
                    beforeImage={project.images.beforeAfter.before}
                    afterImage={project.images.beforeAfter.after}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                </motion.div>
              )}

              {/* Project Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.images.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Gallery ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <Icons.Arrow 
                          size="lg" 
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Specifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    Project Specifications
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                        Materials
                      </h4>
                      <ul className="space-y-1">
                        {project.specifications.materials.map((material, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Icons.Check size="xs" className="text-primary" />
                            {material}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.specifications.dimensions && (
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                          Dimensions
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.specifications.dimensions}
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                        Timeline
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <Icons.Clock size="xs" className="text-primary" />
                        {project.specifications.timeline}
                      </p>
                    </div>
                    
                    {project.specifications.budget && (
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                          Budget Range
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {project.specifications.budget}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>

              {/* Client Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                    Client Information
                  </h3>
                  <div className="space-y-4">
                    {project.client.name && (
                      <div>
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                          Client
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <Icons.Building size="xs" className="text-primary" />
                          {project.client.name}
                        </p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                        Project Type
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 capitalize">
                        {project.client.type}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-2">
                        Completion Date
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                        <Icons.Calendar size="xs" className="text-primary" />
                        {new Date(project.completionDate).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Client Testimonial */}
              {project.client.testimonial && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass" className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Icons.Quote size="lg" className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                          Client Testimonial
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed">
                          &ldquo;{project.client.testimonial}&rdquo;
                        </p>
                        {project.client.name && (
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">
                            — {project.client.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
                    Interested in Similar Work?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    Get in touch to discuss your aluminum fabrication project.
                  </p>
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-300"
                    >
                      <span>Get Free Quote</span>
                      <Icons.Arrow size="sm" className="ml-2" />
                    </Link>
                    <Link
                      href="/portfolio"
                      className="w-full inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                    >
                      View More Projects
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
        onJumpTo={jumpToImage}
      />
    </>
  )
}