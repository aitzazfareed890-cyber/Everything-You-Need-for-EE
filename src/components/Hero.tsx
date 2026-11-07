import ParticleCanvas from './ParticleCanvas';
import { CREATOR_INSTAGRAM_URL } from '../data/courses';

interface HeroProps {
  onSelectSemester: (semNumber: number) => void;
  onSelectCategory: (category: 'Lecture Notes' | 'Past Papers' | 'Lab Manuals') => void;
  onOpenDrivesManager: () => void;
}

export default function Hero({ onSelectSemester, onSelectCategory, onOpenDrivesManager }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* 4K Academic Library Background with slow breathing effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmKR74Uu6k5qwySGhQznbw4rucJ4d1uaPenGJSJ3XBKMqzAs24wLxQOUScI3iTehpWMXqMmX3Vq2yWMcGc_RYz9enDo5GPAKaL1VFJNjvnwuqCRXD3W28hH-Dv7Cu1cPO_MOItqdj_-WLK2q3x7OTM4Wzpq03VoWS6ixTBAycdzVVa7wLv2QRXIBiEGvCIuNjpq1hNgc2P5bTOWbUpuQMXnxMjAWFDiA53qo3rPaZNgnqghSYSZUyCyONXxwJ4uLJQsw"
          alt="Analytical engineering textbook desk"
          className="w-full h-full object-cover filter contrast-105 animate-slow-breathe"
          style={{ objectPosition: 'center 35%' }}
        />
        {/* Vignettes & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060a] via-[#03060a]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#03060a_92%)]" />
      </div>

      {/* Floating dust/light particles */}
      <ParticleCanvas />

      {/* Transparent Center Hero Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center text-center p-4 sm:p-8 bg-transparent">
        {/* Center branding badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(34,211,238,0.25)] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          UET TAXILA • ELECTRICAL ENGINEERING
        </div>

        {/* Hero Main Title - strictly two lines on EVERY device */}
        <h1 className="w-full max-w-full font-extrabold tracking-tight text-white mb-4 font-display drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] flex flex-col items-center">
          <span className="hero-title-line-1 block text-center">
            Everything You Need
          </span>
          <span className="hero-title-line-2 block text-cyan-400 drop-shadow-[0_0_28px_rgba(34,211,238,0.65)] text-center mt-1">
            For EE
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
          The academic upper hand for Electrical Engineering.
        </p>

        {/* Creator badge - "Created by Mr." where clicking Mr. goes to creator Instagram */}
        <div className="text-xs sm:text-sm text-slate-300 mb-5">
          Created by{' '}
          <a
            href={CREATOR_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 font-semibold underline underline-offset-4 hover:text-white transition-colors decoration-cyan-400"
            title="Visit creator's Instagram profile"
          >
            Mr.
          </a>
        </div>

        {/* Social Action Button: Pill-shaped Instagram */}
        <a
          href={CREATOR_INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all shadow-md hover:scale-105 mb-8 group"
        >
          <svg className="w-4 h-4 text-cyan-400 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>For DMs</span>
        </a>

        {/* Section: JUMP TO YOUR SEMESTER */}
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-4">
            JUMP TO YOUR SEMESTER
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-5 max-w-2xl">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                type="button"
                onClick={() => onSelectSemester(sem)}
                className="px-5 py-2 rounded-full border border-white/10 hover:border-cyan-400/60 bg-white/5 hover:bg-cyan-500/10 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer backdrop-blur-sm shadow-sm hover:scale-105 active:scale-95"
              >
                Sem {sem}
              </button>
            ))}
          </div>

          {/* Sub-links */}
          <div className="flex items-center justify-center gap-3 text-xs text-slate-400 flex-wrap">
            <button
              type="button"
              onClick={() => onSelectCategory('Lecture Notes')}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors font-medium cursor-pointer"
            >
              Notes
            </button>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={() => onSelectCategory('Past Papers')}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors font-medium cursor-pointer"
            >
              Past Papers
            </button>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={() => onSelectCategory('Lab Manuals')}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors font-medium cursor-pointer"
            >
              Lab Manuals
            </button>
            <span className="text-slate-600">•</span>
            <button
              type="button"
              onClick={onOpenDrivesManager}
              className="hover:text-cyan-400 underline underline-offset-4 transition-colors font-medium cursor-pointer text-cyan-300"
            >
              Drive Vaults
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
