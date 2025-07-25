import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectDetail } from '@/components/sections/project-detail'
import { PROJECTS_DATA as sampleProjects } from '@/data'

// Generate static pages at build time for better performance
export async function generateStaticParams() {
  return sampleProjects.map((project) => ({
    slug: project.slug,
  }))
}

// Dynamic metadata generation based on the project
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const project = sampleProjects.find(p => p.slug === slug)
  
  if (!project) {
    return {
      title: 'Project Not Found - Apex Aluminum Works'
    }
  }

  return {
    title: `${project.seo.title} - Apex Aluminum Works`,
    description: project.seo.description,
    keywords: project.seo.keywords,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [project.images.hero],
      type: 'article',
    },
  }
}

// The main page component that receives the slug parameter
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  // Find the project based on the URL slug
  const project = sampleProjects.find(p => p.slug === slug)
  
  // If project doesn't exist, show 404
  if (!project) {
    notFound()
  }

  return <ProjectDetail project={project} />
}