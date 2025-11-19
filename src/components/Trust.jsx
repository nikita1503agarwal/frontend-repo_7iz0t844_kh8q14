import React from 'react'

const Trust = () => {
  return (
    <section className="bg-[#0a0a0a] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Vertraut von den größten deutschen RP-Projekten.</h2>
          <div className="mt-8 grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-4">
            <div className="h-12 rounded-xl border border-red-500/20 bg-black/30" />
            <div className="h-12 rounded-xl border border-red-500/20 bg-black/30" />
            <div className="h-12 rounded-xl border border-red-500/20 bg-black/30" />
            <div className="h-12 rounded-xl border border-red-500/20 bg-black/30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
