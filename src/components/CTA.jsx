import React from 'react'

const CTA = () => {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-3xl border border-red-500/30 bg-gradient-to-br from-black via-black to-black p-8 text-center shadow-[0_0_60px_rgba(220,38,38,0.25)]">
          <h3 className="text-2xl font-bold text-white">Dein Server verdient Sicherheit. Schau nicht erst nach, wenn es zu spät ist.</h3>
          <a
            href="https://discord.gg/cheaterstats"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-[0_0_25px_rgba(220,38,38,0.6)] ring-1 ring-red-500/40 transition hover:brightness-110"
          >
            Schütze deine Community auf Discord
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
