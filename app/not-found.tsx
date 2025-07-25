import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 text-lg rounded-lg bg-gradient-to-r from-electric-blue to-electric-blue-dark text-white hover:from-electric-blue-dark hover:to-electric-blue shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}