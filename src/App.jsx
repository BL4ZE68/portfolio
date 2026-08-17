import React from 'react'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'FriendsChat',
    desc: 'Plateforme de chat moderne en temps réel — React, TypeScript, Tailwind, Framer Motion. UI animée et intégration Supabase optionnelle.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    url: 'https://github.com/BL4ZE68/FriendsChat'
  },
  {
    title: 'Romance-app',
    desc: "Expérience interactive progressive pour la Saint-Valentin : quiz, galerie, animations, persistance localStorage.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/BL4ZE68/Romance-app'
  },
  {
    title: 'memory-game',
    desc: 'Jeu de memory simple et responsive avec animations et score — HTML/CSS/JS.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/BL4ZE68/memory-game'
  }
]

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b1020] text-white p-6">
      <header className="max-w-5xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">BL4ZE68 — Portfolio ultramoderne</h1>
        <p className="mt-2 text-lg text-gray-300">Sélection de projets — React + Tailwind, prêt pour GitHub Pages.</p>
      </header>

      <main className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </main>

      <footer className="max-w-5xl mx-auto mt-12 text-center text-gray-400">
        <p>© {new Date().getFullYear()} BL4ZE68 · <a className="text-accent" href="https://github.com/BL4ZE68">GitHub</a></p>
      </footer>
    </div>
  )
}
