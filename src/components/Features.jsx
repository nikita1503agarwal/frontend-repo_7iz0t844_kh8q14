import React from 'react'
import { Globe2, ShieldCheck, Users, Bot } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-red-500/20 bg-black/40 p-6 shadow-[0_0_30px_rgba(220,38,38,0.12)] transition hover:shadow-[0_0_45px_rgba(220,38,38,0.25)]">
    <div className="mb-4 inline-flex rounded-lg bg-red-500/10 p-3 ring-1 ring-red-500/20 text-primary">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </div>
)

const Features = () => {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white">Warum Cheaterstats?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Globe2} title="Global Database" desc="Zugriff auf tausende Einträge von bekannten Cheatern und Trollen." />
          <Feature icon={ShieldCheck} title="Pre-Join Check" desc="Wisse schon beim Whitelisting, wen du vor dir hast." />
          <Feature icon={Users} title="Community Reports" desc="Ein Netzwerk aus Server-Ownern teilt Beweise und Bans." />
          <Feature icon={Bot} title="Discord Integration" desc="Überprüfe User direkt über unseren Bot in deinem Discord." />
        </div>
      </div>
    </section>
  )
}

export default Features
