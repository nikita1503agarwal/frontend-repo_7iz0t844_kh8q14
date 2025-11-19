import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0a0a]">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlay for contrast + red vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_40%,rgba(220,38,38,0.15),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]">
            Lass keine Cheater auf deinen Server.
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/80">
            Cheaterstats ist kein Anti-Cheat – wir sind dein Informations-Netzwerk. Überprüfe jeden Spieler in Sekunden, bevor er Schaden anrichten kann. Nutze unsere globale Datenbank für den ultimativen Background-Check.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#search"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(220,38,38,0.6)] ring-1 ring-red-500/40 transition hover:brightness-110"
            >
              Spieler jetzt prüfen
            </a>
            <a
              href="https://discord.gg/cheaterstats"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-red-500/70 bg-transparent px-6 py-3 font-semibold text-red-400 hover:text-white hover:border-red-400 transition"
            >
              Discord beitreten
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
