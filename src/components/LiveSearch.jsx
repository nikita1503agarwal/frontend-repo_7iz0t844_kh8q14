import React, { useMemo, useState } from 'react'
import { CheckCircle2, AlertOctagon, Search } from 'lucide-react'

const mockLookup = (id) => {
  if (!id) return null
  const risk = id.length % 2 === 0 ? 'CLEAN' : 'FLAGGED'
  const score = id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 100
  return {
    status: risk,
    score,
    notes: risk === 'FLAGGED' ? 'Mehrere Reports in den letzten 30 Tagen' : 'Keine Einträge gefunden',
  }
}

const StatusBadge = ({ status }) => {
  const isClean = status === 'CLEAN'
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
      isClean
        ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30'
        : 'bg-red-500/15 text-red-400 ring-1 ring-red-500/30'
    }`}
    >
      {isClean ? <CheckCircle2 className="h-4 w-4" /> : <AlertOctagon className="h-4 w-4" />}
      Status: {status}
    </div>
  )
}

const LiveSearch = () => {
  const [query, setQuery] = useState('')
  const result = useMemo(() => mockLookup(query.trim()), [query])

  return (
    <section id="search" className="relative bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Live-Search Simulation</h2>
          <p className="mt-2 text-white/60">Gib eine Steam-ID oder Discord-ID ein...</p>
        </div>

        <div className="rounded-2xl border border-red-500/20 bg-black/40 p-6 shadow-[0_0_40px_rgba(220,38,38,0.15)] backdrop-blur">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Gib eine Steam-ID oder Discord-ID ein..."
              className="w-full rounded-xl border border-red-500/30 bg-black/60 px-4 py-4 pr-12 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-red-500/60"
            />
            <Search className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 rounded-xl border border-red-500/20 bg-black/50 p-4">
              <div className="flex items-center justify-between">
                <span className="text-white/60">Analyse</span>
                {result?.status && <StatusBadge status={result.status} />}
              </div>
              <div className="mt-4 text-sm text-white/70">
                {result ? result.notes : 'Warte auf Eingabe...'}
              </div>
            </div>
            <div className="rounded-xl border border-red-500/20 bg-black/50 p-4">
              <div className="text-white/60">Risikofaktor</div>
              <div className="mt-2 text-4xl font-extrabold text-primary drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">{result ? result.score : '--'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveSearch
