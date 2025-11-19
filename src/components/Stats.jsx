import React from 'react'

const Stat = ({ value, label }) => (
  <div className="rounded-2xl border border-red-500/20 bg-black/40 p-6 text-center shadow-[0_0_35px_rgba(220,38,38,0.15)]">
    <div className="text-4xl font-extrabold text-primary drop-shadow-[0_0_18px_rgba(220,38,38,0.6)]">{value}</div>
    <div className="mt-2 text-sm text-white/70">{label}</div>
  </div>
)

const Stats = () => {
  return (
    <section className="bg-[#0a0a0a] py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="150.000+" label="registrierte Spieler" />
          <Stat value="5.000+" label="bestätigte Cheater" />
          <Stat value="200+" label="geschützte Partner-Server" />
        </div>
      </div>
    </section>
  )
}

export default Stats
