'use client'

import { useState, useEffect } from 'react'

interface LinkedInProfile {
  name: string
  url: string
  handle: string
}

const profiles: LinkedInProfile[] = [
  {
    name: 'Zanir Habib',
    handle: 'zanirhabib',
    url: 'https://www.linkedin.com/in/zanirhabib',
  },
  {
    name: 'Farez V',
    handle: 'farezv',
    url: 'https://www.linkedin.com/in/farezv/',
  },
  {
    name: 'Azhar Masani',
    handle: 'azhar-masani',
    url: 'https://www.linkedin.com/in/azhar-masani/',
  },
  {
    name: 'Samir Rayani',
    handle: 'samirrayani',
    url: 'https://www.linkedin.com/in/samirrayani?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAC5TVYBi810HhD-ZAe0jKlukytvYNiYJzQ&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BwLNfUy0NQ4%2BAimcZ4nT8og%3D%3D',
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 py-12">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display">
            <span className="gradient-text">Summit 100x</span>
          </h1>
          <p className="text-lg text-gray-400 font-light tracking-wide">Connect with our team</p>
        </div>

        {/* LinkedIn Cards */}
        <div className="space-y-4 md:space-y-6">
          {profiles.map((profile, index) => (
            <div
              key={profile.handle}
              className={`transition-all duration-1000 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: mounted ? `${(index + 1) * 100}ms` : '0ms',
              }}
            >
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group block"
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 md:p-8 hover:border-blue-500/50">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 font-display">
                        {profile.name}
                      </h2>
                      <p className="text-sm text-gray-400 font-mono group-hover:text-gray-300 transition-colors duration-300">
                        @{profile.handle}
                      </p>
                    </div>

                    {/* LinkedIn Icon */}
                    <div className="flex-shrink-0 ml-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg
                          className="w-6 h-6 md:w-7 md:h-7 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`mt-16 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            transitionDelay: mounted ? `${(profiles.length + 1) * 100}ms` : '0ms',
          }}
        >
          <p className="text-sm text-gray-500 font-light">
            Connect with us on LinkedIn to stay updated
          </p>
        </div>
      </div>
    </main>
  )
}
