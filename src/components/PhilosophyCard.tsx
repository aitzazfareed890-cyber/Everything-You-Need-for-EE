import archiveImg from '../assets/images/archive_genesis_1793999030047.jpg';

export default function PhilosophyCard() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="relative rounded-2xl bg-[#080d17]/90 border border-cyan-500/20 backdrop-blur-md overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.6)] group">
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

          {/* Contextual Image */}
          <div className="relative md:col-span-5 h-56 md:h-full min-h-[220px] overflow-hidden">
            <img
              src={archiveImg}
              alt="Electrical engineering schematics, oscilloscope, and laboratory desk"
              className="w-full h-full object-cover filter brightness-[0.75] contrast-105 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#080d17] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
