import React from 'react'

export default function ProjectCard({ project }){
  return (
    <article className="bg-white/5 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/6 hover:scale-[1.02] transition-transform">
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-gray-300 text-sm">{project.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span key={t} className="text-xs bg-white/6 px-2 py-1 rounded-full text-gray-200">{t}</span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <a className="text-sm font-medium text-primary hover:underline" href={project.url} target="_blank" rel="noreferrer">Voir sur GitHub</a>
        <a className="text-sm text-gray-400">En vedette</a>
      </div>
    </article>
  )
}
