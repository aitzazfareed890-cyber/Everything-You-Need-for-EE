const ARCHIVE_IMAGE_URL =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';

export default function PhilosophyCard() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="relative rounded-2xl bg-[#080d17]/95 border border-cyan-500/25 backdrop-blur-md overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.7)] group">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Text Content */}
          <div className="p-6 md:p-8 md:col-span-7 flex flex-col justify-center relative z-10">
            <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase mb-1">
              Archive Genesis
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Built semester by semester.
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full my-3" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Everything You Need For EE started as an open academic repository for UET Taxila Electrical Engineering students. It's grown with every batch since, with lecture notes, solved past papers, and lab manuals continually updated as the department's OBE course curriculum evolves.
            </p>
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                OBE Accreditated
              </span>
              <span>•</span>
              <span>UET Taxila EE Department</span>
            </div>
          </div>

          {/* Contextual Image with dark mood grading */}
          <div className="relative md:col-span-5 h-56 md:h-full min-h-[220px] overflow-hidden bg-[#040811]">
            <img
              src={ARCHIVE_IMAGE_URL}
              alt="Electrical engineering circuitry and hardware architecture"
              className="w-full h-full object-cover filter brightness-[0.20] contrast-125 saturate-[0.6] group-hover:scale-105 transition-transform duration-700 opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#080d17] via-[#080d17]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-cyan-950/30 mix-blend-color pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
