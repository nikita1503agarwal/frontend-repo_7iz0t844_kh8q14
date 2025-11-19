import React from 'react'
import { Disc, Keyboard, FileSearch, Gavel } from 'lucide-react'

const Step = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-red-500/20 bg-black/40 p-6 shadow-[0_0_30px_rgba(220,38,38,0.12)]">
    <div className="mb-4 inline-flex rounded-lg bg-red-500/10 p-3 ring-1 ring-red-500/20 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
)

const HowItWorks = () => {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white">So funktioniert's</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Step icon={Disc} title="Discord beitreten / Bot holen" desc="Verbinde Cheaterstats nahtlos mit deinem Server." />
          <Step icon={Keyboard} title="ID des Spielers eingeben" desc="Steam-ID oder Discord-ID – beides wird unterstützt." />
          <Step icon={FileSearch} title="Sofortigen Report erhalten" desc="Vorstrafen, Bans auf anderen Servern, Risikofaktor." />
          <Step icon={Gavel} title="Entscheidung treffen" desc="Whitelist oder Ban – du hast die Kontrolle." />
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
