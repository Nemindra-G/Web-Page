'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, Container } from '@/components/layout'
import { Card } from '@/components/ui'
import { Icons, Lightbox } from '@/components/ui'
import { PROJECTS_DATA as projects } from '@/data'
import { cn } from '@/lib/utils'

interface ProjectActionButtonsProps {
  project: typeof projects[0]
  onLightboxOpen: () => void
}

const ProjectActionButtons: React.FC<ProjectActionButtonsProps> = ({ project, onLightboxOpen }) => {
  return (
    <div className="absolute bottom-6 left-6 right-6 flex gap-3">
      <Link
        href={`/portfolio/${project.slug}`}
        className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-electric-blue to-primary-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-electric-blue/25 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn"
      >
        <span>View Project</span>
        <Icons.Arrow size="sm" className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
      </Link>
      <button
        onClick={(e) => {
          e.preventDefault()
          onLightboxOpen()
        }}
        className="px-4 py-3 bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50 text-slate-300 hover:text-white font-semibold rounded-xl backdrop-blur-sm transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        aria-label="View gallery"
      >
        <Icons.Quote size="sm" />
      </button>
    </div>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  onLightboxOpen: () => void
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onLightboxOpen }) => {
  return (
    <motion.div
      className="group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card variant="dark-glass" hover className="overflow-hidden relative w-full h-full">
        {/* Ambient glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-radial from-electric-blue/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 w-full h-full grid grid-rows-[300px_1fr]">
          <div 
            className="relative overflow-hidden cursor-pointer rounded-t-lg"
            onClick={onLightboxOpen}
          >
            <Image
              src={project.images.hero}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={project.featured}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent group-hover:from-slate-900/60 transition-all duration-300" />
            
            {/* Enhanced Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-4 py-2 bg-gradient-to-r from-electric-blue to-primary-500 text-white text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm border border-white/10">
                {project.category}
              </span>
            </div>

            {/* View Gallery Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <Icons.Quote size="sm" className="text-white" />
              </div>
            </div>
          </div>

          <div className="relative p-6 pb-20 h-full">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-slate-300 line-clamp-2 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-slate-400 flex items-center gap-2">
                <Icons.Calendar size="xs" className="text-electric-blue" />
                {new Date(project.completionDate).toLocaleDateString('en-US', {
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          {/* Absolutely positioned action buttons */}
          <ProjectActionButtons project={project} onLightboxOpen={onLightboxOpen} />
        </div>
      </Card>
    </motion.div>
  )
}



interface ProjectsGalleryProps {
  showAll?: boolean
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ showAll = false }) => {
  const [filter, setFilter] = useState<string>('all')
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

  const categories = ['all', 'residential', 'commercial', 'industrial']
  
  const filteredProjects = filter === 'all' 
    ? (showAll ? projects : projects.filter(p => p.featured))
    : (showAll ? projects.filter(p => p.category === filter) : projects.filter(p => p.featured && p.category === filter))

  const openLightbox = (project: typeof projects[0]) => {
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
        description: project.longDescription || project.description,
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
      
      // Only add caption if it exists
      if (index === 0 && project.description) {
        imageData.caption = project.description
      }
      
      return imageData
    })
    
    setLightboxImages(lightboxData)
    setLightboxIndex(0)
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

  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter) return
    setFilter(newFilter)
  }

  return (
    <>
      <Section size="lg" background="muted">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {showAll ? 'Our Projects' : 'Featured Projects'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of exceptional aluminum fabrication projects, showcasing precision craftsmanship and innovative solutions across diverse industries.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const categoryCount = category === 'all' 
                  ? (showAll ? projects.length : projects.filter(p => p.featured).length)
                  : (showAll ? projects.filter(p => p.category === category).length : projects.filter(p => p.featured && p.category === category).length)
                
                return (
                  <motion.button
                    key={category}
                    onClick={() => handleFilterChange(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'px-6 py-2 rounded-full font-medium transition-all duration-300 relative',
                      filter === category
                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                        : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    )}
                  >
                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    <span className={cn(
                      'ml-2 px-2 py-0.5 text-xs rounded-full',
                      filter === category
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                    )}>
                      {categoryCount}
                    </span>
                  </motion.button>
                )
              })}
            </div>
            
            {/* Results Count */}
            <motion.p 
              key={filteredProjects.length}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-slate-600 dark:text-slate-400"
            >
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {filter !== 'all' && ` in ${filter}`}
            </motion.p>
          </div>

          {/* Projects Grid with Uniform Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              gridAutoRows: '620px'
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    layout: { duration: 0.3 }
                  }}
                  className=""
                >
                  <ProjectCard
                    project={project}
                    onLightboxOpen={() => openLightbox(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {!showAll && (
            <div className="text-center mt-16">
              <Link
                href="/portfolio"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-electric-blue to-primary-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-electric-blue/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              >
                <span>View All Projects</span>
                <span className="ml-3 transform group-hover:translate-x-1 transition-transform text-xl">→</span>
              </Link>
            </div>
          )}
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
