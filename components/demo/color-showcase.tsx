'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ColorShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      {/* Hero Section with New Colors */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 bg-clip-text text-transparent mb-6">
            Apex Aluminum Works
          </h1>
          <p className="text-2xl text-slate-300 mb-8">
            Precision Crafted. Built to Last.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-600 hover:to-primary-500 shadow-glow hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white shadow-accent-glow hover:shadow-accent-glow-lg transition-all duration-300"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Color Palette Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Primary Colors */}
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-primary-500/20 shadow-glow">
            <h3 className="text-xl font-bold text-primary-400 mb-4">Primary - Vibrant Cyan</h3>
            <div className="space-y-2">
              <div className="h-12 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg shadow-neon"></div>
              <div className="h-8 bg-primary-500 rounded-lg"></div>
              <div className="h-6 bg-primary-600 rounded-lg"></div>
            </div>
            <p className="text-slate-300 mt-4 text-sm">Modern, tech-forward, trustworthy</p>
          </Card>

          {/* Accent Colors */}
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-accent-500/20 shadow-accent-glow">
            <h3 className="text-xl font-bold text-accent-400 mb-4">Accent - Premium Gold</h3>
            <div className="space-y-2">
              <div className="h-12 bg-gradient-to-r from-accent-400 to-accent-600 rounded-lg shadow-accent-glow-lg"></div>
              <div className="h-8 bg-accent-500 rounded-lg"></div>
              <div className="h-6 bg-accent-600 rounded-lg"></div>
            </div>
            <p className="text-slate-300 mt-4 text-sm">Premium, luxury, excellence</p>
          </Card>

          {/* Combined Effects */}
          <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-primary-500/20 shadow-cyber">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              Combined Effects
            </h3>
            <div className="space-y-2">
              <div className="h-12 bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 rounded-lg shadow-cyber"></div>
              <div className="h-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-lg"></div>
              <div className="h-6 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg"></div>
            </div>
            <p className="text-slate-300 mt-4 text-sm">Dynamic, innovative, powerful</p>
          </Card>
        </div>

        {/* Interactive Elements Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons Showcase */}
          <Card className="p-8 bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Interactive Elements</h3>
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-400 hover:shadow-glow-xl transition-all duration-300">
                Primary Action
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white hover:shadow-accent-glow-lg transition-all duration-300"
              >
                Secondary Action
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-accent-500 to-accent-400 hover:shadow-accent-glow-xl transition-all duration-300"
              >
                Premium Action
              </Button>
            </div>
          </Card>

          {/* Cards Showcase */}
          <Card className="p-8 bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Card Variations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary-500/10 to-primary-400/10 border border-primary-500/30 rounded-lg">
                <p className="text-primary-300">Primary themed card</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-accent-500/10 to-accent-400/10 border border-accent-500/30 rounded-lg">
                <p className="text-accent-300">Accent themed card</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-primary-500/10 via-slate-800/50 to-accent-500/10 border border-primary-500/20 rounded-lg shadow-cyber">
                <p className="text-slate-300">Premium combined card</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Typography Showcase */}
        <div className="mt-16 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent mb-4">
            Typography with New Colors
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            The new color scheme creates stunning visual hierarchy and impact
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30">
              Modern
            </span>
            <span className="px-4 py-2 bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30">
              Premium
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-slate-300 rounded-full border border-primary-500/20">
              Sophisticated
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}