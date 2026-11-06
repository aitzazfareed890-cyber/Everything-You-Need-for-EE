export default function PhilosophyCard() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="p-6 md:p-8 rounded-2xl bg-[#080d17]/85 border border-cyan-500/20 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="shrink-0">
          <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
            Archive Genesis
          </span>
          <h3 className="text-2xl font-bold text-white font-display mt-0.5">
            Built semester by semester.
          </h3>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full mt-2.5" />
        </div>
        <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
          Everything You Need For EE started as an open academic repository for UET Taxila Electrical Engineering students. It's grown with every batch since, with notes, past papers, and lab manuals updated as the department's OBE course curriculum evolves.
        </p>
      </div>
    </section>
  );
}
