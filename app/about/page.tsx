import { Metadata } from 'next';
import { CompanyStory } from '@/components/sections/company-story';

export const metadata: Metadata = {
  title: 'About Us - Palitha Aluminium | Precision Crafted. Built to Last.',
  description: 'Learn about Palitha Aluminium - our story, team, and commitment to excellence in aluminum fabrication. Serving residential and commercial clients with precision craftsmanship.',
  keywords: ['about palitha aluminium', 'aluminum fabrication company', 'team', 'company history', 'certifications'],
  openGraph: {
    title: 'About Us - Palitha Aluminium',
    description: 'Learn about our story, team, and commitment to excellence in aluminum fabrication.',
    images: ['/images/about-hero.jpg'],
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Matching the Services page style */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/70" />
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary rotate-45" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-accent rotate-12" />
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-primary/20 rotate-45" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <span className="text-primary text-sm font-medium">Est. 2010 • 15+ Years of Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About Palitha Aluminium
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Precision Crafted. Built to Last.
            </p>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                For over two decades, we've been at the forefront of aluminum fabrication, 
                delivering exceptional quality and innovative solutions to residential and commercial clients.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1250+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">850+</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Quality Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </section>

      {/* Company Story Section */}
      <CompanyStory />

      {/* Values, Vision & Mission Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <span className="text-primary text-sm font-semibold">Our Foundation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8">
              Values, Vision &{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
              The principles that guide us, the future we envision, and the purpose that drives every project we undertake.
            </p>
          </div>

          {/* Values, Vision, Mission Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-3xl p-10 h-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-8 text-2xl font-bold shadow-lg shadow-primary/25">
                  🎯
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Mission
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  To deliver exceptional aluminum fabrication solutions that exceed expectations through precision engineering, innovative design, and unwavering commitment to quality craftsmanship.
                </p>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </div>

            {/* Vision */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-3xl p-10 h-full bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-white rounded-2xl mb-8 text-2xl font-bold shadow-lg shadow-accent/25">
                  🔮
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Vision
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  To be the leading aluminum fabrication company, recognized globally for innovation, sustainability, and architectural excellence that shapes the future of building design.
                </p>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </div>

            {/* Values */}
            <div className="group relative lg:col-span-1">
              <div className="relative overflow-hidden rounded-3xl p-10 h-full bg-gradient-to-br from-slate-100 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-slate-200 dark:border-slate-600 hover:border-primary/40 transition-all duration-500 hover:scale-105">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent text-white rounded-2xl mb-8 text-2xl font-bold shadow-lg">
                  ⭐
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  Our Values
                </h3>
                
                <div className="space-y-4">
                  {[
                    { icon: '🔧', title: 'Precision', desc: 'Meticulous attention to every detail' },
                    { icon: '🚀', title: 'Innovation', desc: 'Embracing cutting-edge technologies' },
                    { icon: '🤝', title: 'Integrity', desc: 'Honest, transparent relationships' },
                    { icon: '🌱', title: 'Sustainability', desc: 'Responsible environmental practices' },
                    { icon: '🏆', title: 'Excellence', desc: 'Continuous pursuit of perfection' }
                  ].map((value, index) => (
                    <div key={value.title} className="flex items-start space-x-3">
                      <span className="text-lg flex-shrink-0 mt-1">{value.icon}</span>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{value.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 overflow-hidden relative">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-32 translate-x-32 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-32 -translate-x-32 blur-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to bring your vision to life?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our expertise and values can transform your next aluminum fabrication project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105"
                  >
                    <span>Start Your Project</span>
                    <span className="ml-2 text-lg">→</span>
                  </a>
                  <a
                    href="/services"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    <span>Our Services</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
