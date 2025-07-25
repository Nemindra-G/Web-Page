'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './button'
import { Card } from './card'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

interface CalculatorData {
  projectType: 'windows' | 'doors' | 'facade' | 'railing' | 'custom' | ''
  dimensions: {
    width: number
    height: number
    quantity: number
  }
  material: 'standard' | 'premium' | 'custom' | ''
  finish: 'anodized' | 'powder-coated' | 'mill-finish' | ''
  installation: boolean
  timeline: 'standard' | 'rush' | ''
  location: string
}

interface ProjectCalculatorProps {
  className?: string
  onComplete?: (data: CalculatorData & { estimatedCost: number }) => void
}

const STEP_TITLES = [
  'Project Type',
  'Dimensions',
  'Materials & Finish',
  'Installation & Timeline',
  'Your Estimate'
]

const PROJECT_TYPES = [
  { id: 'windows', name: 'Windows', icon: '🪟', basePrice: 500 },
  { id: 'doors', name: 'Doors', icon: '🚪', basePrice: 800 },
  { id: 'facade', name: 'Facade/Curtain Wall', icon: '🏢', basePrice: 1200 },
  { id: 'railing', name: 'Railings', icon: '🛡️', basePrice: 300 },
  { id: 'custom', name: 'Custom Fabrication', icon: '⚙️', basePrice: 600 }
]

const MATERIALS = [
  { id: 'standard', name: 'Standard Aluminum', multiplier: 1.0, description: 'Quality aluminum for most applications' },
  { id: 'premium', name: 'Premium Aluminum', multiplier: 1.4, description: 'High-grade aluminum with enhanced properties' },
  { id: 'custom', name: 'Custom Alloy', multiplier: 1.8, description: 'Specialized aluminum alloys for specific requirements' }
]

const FINISHES = [
  { id: 'mill-finish', name: 'Mill Finish', multiplier: 1.0, description: 'Natural aluminum finish' },
  { id: 'anodized', name: 'Anodized', multiplier: 1.2, description: 'Durable, corrosion-resistant finish' },
  { id: 'powder-coated', name: 'Powder Coated', multiplier: 1.3, description: 'Custom colors with excellent durability' }
]

export function ProjectCalculator({ className, onComplete }: ProjectCalculatorProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<CalculatorData>({
    projectType: '',
    dimensions: { width: 0, height: 0, quantity: 1 },
    material: '',
    finish: '',
    installation: false,
    timeline: '',
    location: ''
  })
  const [estimatedCost, setEstimatedCost] = useState(0)

  // Calculate estimated cost
  useEffect(() => {
    if (data.projectType && data.material && data.finish) {
      const projectType = PROJECT_TYPES.find(p => p.id === data.projectType)
      const material = MATERIALS.find(m => m.id === data.material)
      const finish = FINISHES.find(f => f.id === data.finish)
      
      if (projectType && material && finish) {
        let cost = projectType.basePrice
        cost *= (data.dimensions.width || 1) * (data.dimensions.height || 1) * (data.dimensions.quantity || 1)
        cost *= material.multiplier
        cost *= finish.multiplier
        
        if (data.installation) cost *= 1.3 // Installation adds 30%
        if (data.timeline === 'rush') cost *= 1.2 // Rush timeline adds 20%
        
        setEstimatedCost(Math.round(cost))
      }
    }
  }, [data])

  const nextStep = () => {
    if (currentStep < STEP_TITLES.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return data.projectType !== ''
      case 1: return data.dimensions.width > 0 && data.dimensions.height > 0
      case 2: return data.material !== '' && data.finish !== ''
      case 3: return data.timeline !== ''
      default: return true
    }
  }

  const handleComplete = () => {
    if (onComplete) {
      onComplete({ ...data, estimatedCost })
    }
  }

  return (
    <div className={cn("max-w-2xl mx-auto", className)}>
      <Card className="p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {STEP_TITLES.map((title, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium",
                  index <= currentStep
                    ? "bg-electric-blue text-white"
                    : "bg-slate-200 text-slate-500"
                )}
              >
                {index + 1}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-electric-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / STEP_TITLES.length) * 100}%` }}
            />
          </div>
          <p className="text-center mt-2 text-slate-600 font-medium">
            {STEP_TITLES[currentStep]}
          </p>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[300px]"
          >
            {/* Step 0: Project Type */}
            {currentStep === 0 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  What type of project do you need?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setData({ ...data, projectType: type.id as any })}
                      className={cn(
                        "p-4 rounded-lg border-2 text-left transition-all hover:shadow-md",
                        data.projectType === type.id
                          ? "border-electric-blue bg-electric-blue/5"
                          : "border-slate-200 hover:border-slate-300"
                      )}
                    >
                      <div className="text-2xl mb-2">{type.icon}</div>
                      <div className="font-semibold text-slate-900">{type.name}</div>
                      <div className="text-sm text-slate-600">Starting from ${type.basePrice}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Dimensions */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  What are the dimensions of your project?
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Width (feet)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={data.dimensions.width || ''}
                        onChange={(e) => setData({
                          ...data,
                          dimensions: { ...data.dimensions, width: Number(e.target.value) }
                        })}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Height (feet)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={data.dimensions.height || ''}
                        onChange={(e) => setData({
                          ...data,
                          dimensions: { ...data.dimensions, height: Number(e.target.value) }
                        })}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={data.dimensions.quantity || ''}
                      onChange={(e) => setData({
                        ...data,
                        dimensions: { ...data.dimensions, quantity: Number(e.target.value) }
                      })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      placeholder="1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Materials & Finish */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Choose your materials and finish
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Material Type</h4>
                    <div className="space-y-2">
                      {MATERIALS.map((material) => (
                        <button
                          key={material.id}
                          onClick={() => setData({ ...data, material: material.id as any })}
                          className={cn(
                            "w-full p-3 rounded-lg border text-left transition-all",
                            data.material === material.id
                              ? "border-electric-blue bg-electric-blue/5"
                              : "border-slate-200 hover:border-slate-300"
                          )}
                        >
                          <div className="font-medium text-slate-900">{material.name}</div>
                          <div className="text-sm text-slate-600">{material.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Finish Type</h4>
                    <div className="space-y-2">
                      {FINISHES.map((finish) => (
                        <button
                          key={finish.id}
                          onClick={() => setData({ ...data, finish: finish.id as any })}
                          className={cn(
                            "w-full p-3 rounded-lg border text-left transition-all",
                            data.finish === finish.id
                              ? "border-electric-blue bg-electric-blue/5"
                              : "border-slate-200 hover:border-slate-300"
                          )}
                        >
                          <div className="font-medium text-slate-900">{finish.name}</div>
                          <div className="text-sm text-slate-600">{finish.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Installation & Timeline */}
            {currentStep === 3 && (
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Installation and timeline preferences
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Installation</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setData({ ...data, installation: false })}
                        className={cn(
                          "w-full p-3 rounded-lg border text-left transition-all",
                          !data.installation
                            ? "border-electric-blue bg-electric-blue/5"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div className="font-medium text-slate-900">Self Installation</div>
                        <div className="text-sm text-slate-600">You handle the installation</div>
                      </button>
                      <button
                        onClick={() => setData({ ...data, installation: true })}
                        className={cn(
                          "w-full p-3 rounded-lg border text-left transition-all",
                          data.installation
                            ? "border-electric-blue bg-electric-blue/5"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div className="font-medium text-slate-900">Professional Installation</div>
                        <div className="text-sm text-slate-600">We handle the installation (+30%)</div>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Timeline</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setData({ ...data, timeline: 'standard' })}
                        className={cn(
                          "w-full p-3 rounded-lg border text-left transition-all",
                          data.timeline === 'standard'
                            ? "border-electric-blue bg-electric-blue/5"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div className="font-medium text-slate-900">Standard Timeline</div>
                        <div className="text-sm text-slate-600">4-6 weeks delivery</div>
                      </button>
                      <button
                        onClick={() => setData({ ...data, timeline: 'rush' })}
                        className={cn(
                          "w-full p-3 rounded-lg border text-left transition-all",
                          data.timeline === 'rush'
                            ? "border-electric-blue bg-electric-blue/5"
                            : "border-slate-200 hover:border-slate-300"
                        )}
                      >
                        <div className="font-medium text-slate-900">Rush Order</div>
                        <div className="text-sm text-slate-600">2-3 weeks delivery (+20%)</div>
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Location (City, State)
                    </label>
                    <input
                      type="text"
                      value={data.location}
                      onChange={(e) => setData({ ...data, location: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      placeholder="e.g., Los Angeles, CA"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Your Project Estimate
                </h3>
                <div className="bg-gradient-to-r from-electric-blue to-electric-blue-dark text-white rounded-xl p-6 mb-6">
                  <div className="text-4xl font-bold mb-2">
                    ${estimatedCost.toLocaleString()}
                  </div>
                  <div className="text-electric-blue-light">
                    Estimated project cost
                  </div>
                </div>
                
                <div className="text-left space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Project Type:</span>
                    <span className="font-medium">{PROJECT_TYPES.find(p => p.id === data.projectType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Dimensions:</span>
                    <span className="font-medium">{data.dimensions.width}' × {data.dimensions.height}' × {data.dimensions.quantity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Material:</span>
                    <span className="font-medium">{MATERIALS.find(m => m.id === data.material)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Finish:</span>
                    <span className="font-medium">{FINISHES.find(f => f.id === data.finish)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Installation:</span>
                    <span className="font-medium">{data.installation ? 'Professional' : 'Self'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Timeline:</span>
                    <span className="font-medium">{data.timeline === 'rush' ? 'Rush (2-3 weeks)' : 'Standard (4-6 weeks)'}</span>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-600">
                    <strong>Note:</strong> This is an estimated cost based on the information provided. 
                    Final pricing may vary based on specific requirements, site conditions, and current material costs. 
                    Contact us for a detailed quote.
                  </p>
                </div>
                
                <Button onClick={handleComplete} size="lg" className="w-full">
                  Get Detailed Quote
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
            >
              {currentStep === 3 ? 'Calculate' : 'Next'}
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}