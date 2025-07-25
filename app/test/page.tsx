import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
          Color Theme Test Page
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-primary-500 mb-4">Primary Colors</h2>
            <div className="space-y-4">
              <Button variant="primary" className="w-full">
                Primary Button
              </Button>
              <Button variant="outline" className="w-full">
                Outline Button
              </Button>
              <div className="h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg shadow-glow"></div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-accent-500 mb-4">Accent Colors</h2>
            <div className="space-y-4">
              <Button className="w-full bg-gradient-to-r from-accent-500 to-accent-600">
                Accent Button
              </Button>
              <Button variant="ghost" className="w-full">
                Ghost Button
              </Button>
              <div className="h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg shadow-accent-glow"></div>
            </div>
          </Card>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-600">
            If you can see this page with proper colors and no JavaScript errors, the theme update was successful!
          </p>
        </div>
      </div>
    </div>
  )
}