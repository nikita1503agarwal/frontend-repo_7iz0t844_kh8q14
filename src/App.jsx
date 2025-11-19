import React from 'react'
import Hero from './components/Hero'
import LiveSearch from './components/LiveSearch'
import Features from './components/Features'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Trust from './components/Trust'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans">
      {/* Carbon background grid + subtle red lines */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,#ef4444_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Page content */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.6)]" />
          <span className="text-sm font-semibold tracking-widest text-white/70">CHEATERSTATS.CC</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/60">
          <a href="#search" className="hover:text-white">Suche</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#how" className="hover:text-white">Ablauf</a>
          <a href="https://discord.gg/cheaterstats" target="_blank" rel="noreferrer" className="rounded-lg border border-red-500/60 px-3 py-1 text-sm text-red-300 hover:text-white">Discord</a>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <div id="features"><Features /></div>
        <Stats />
        <div id="how"><HowItWorks /></div>
        <Trust />
        <LiveSearch />
        <CTA />
      </main>

      <footer className="relative z-10 border-t border-red-500/20 py-6 text-center text-white/50">
        © {new Date().getFullYear()} Cheaterstats.cc • All Rights Reserved
      </footer>
    </div>
  )
}

export default App
