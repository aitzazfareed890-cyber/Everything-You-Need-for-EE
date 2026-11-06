import { COURSES, USER_DRIVE_LINKS } from '../data/courses';

interface CoreVaultsProps {
  onOpenCategory: (category: 'Lecture Notes' | 'Past Papers' | 'Lab Manuals') => void;
  onSelectSemester: (sem: number) => void;
  onShowToast: (msg: string) => void;
}

export default function CoreVaults({ onOpenCategory, onSelectSemester, onShowToast }: CoreVaultsProps) {
  const handleOpenDrive = (url: string, title: string) => {
    onShowToast(`📂 Opening ${title} Google Drive...`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const sem1Courses = COURSES.filter((c) => c.semester === 1);
  const sem2Courses = COURSES.filter((c) => c.semester === 2);
  const sem3Courses = COURSES.filter((c) => c.semester === 3);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-display flex items-center justify-center gap-3">
          <span>📚</span>
          <span>Core Engineering Vaults</span>
          <span>📚</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 font-mono">
          UET Taxila EE Curriculum • OBE Aligned • Direct Subject Drives
        </p>
      </div>

      {/* 3 Main Vault Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Lecture Notes */}
        <div className="group card-vault relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end p-6 border border-white/10 hover:border-cyan-400/60 bg-[#080e18]">
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1VzJ-khBpQ6Dp4sJyLnZRySMBUmZ1cdJXyJPwMSf_5ITub_Nkak3FkOYYKNqVuDrISY330cNj2BXQ91bZ1GyY3l0-6CpczFkcZx2fN916OB0cEaTYq4exRT6htFthIRSAsBz9ZmdIb3SznYcli0Lid74PCc7BulRdW9HiEQWWDRMfHCGbyLeKOdQM1c_92D3mb57ifKYyo8QCh9eoqBS0H47EqgYQJ40PZoojTGI0vMz7l8o-qGUG1YVQ"
            alt="Lecture Notes textbook desk"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
          <div className="relative z-10 flex flex-col items-start">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 mb-2">
              Theoretical Foundations
            </span>
            <h3 className="text-xl font-bold text-white mb-1.5 font-display group-hover:text-cyan-300 transition-colors">
              Lecture Notes
            </h3>
            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              Derivations, circuit schematics, and semester lecture transcriptions organized by official UET Taxila EE curriculum.
            </p>
            <div className="flex items-center gap-2 w-full">
              <button
                type="button"
                onClick={() => onOpenCategory('Lecture Notes')}
                className="px-4 py-2 rounded-full border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Notes</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => handleOpenDrive(USER_DRIVE_LINKS.AP, 'Applied Physics')}
                className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
                title="Open Sample Subject Drive"
              >
                Drive 📁
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Past Papers & Solutions */}
        <div className="group card-vault relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end p-6 border border-white/10 hover:border-amber-400/60 bg-[#080e18]">
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1VB9qsN-77M8xUAM2PmsGiVArC5j71P33G907zU1GSc3qxFnC7uBsXTP12kkduS24lbXfWlyKoumCerhgw84Zbui7KJqijSg9RSh30ZdlGUIWnZV65ShXbmYq1YzOOeiq_ABAJ-bZlK-nQOJDSgT6z2RJjTsUHKJZ5b4642mdFb3P5eQwcwMM4UoLs1580pPBt9dWGKnXtGkADYoHvZ9vNL6meHGSU_Fp9v8ZETJ7-6ZHlQRvFOo8z7Sg"
            alt="Past papers and solutions desk"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
          <div className="relative z-10 flex flex-col items-start">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-amber-950/70 text-amber-300 border border-amber-500/30 mb-2">
              Verified Marking Schemes
            </span>
            <h3 className="text-xl font-bold text-white mb-1.5 font-display group-hover:text-amber-300 transition-colors">
              Past Papers &amp; Solutions
            </h3>
            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              Mid-Terms, Terminals &amp; Quizzes with step-by-step solved marking guides by top-performing students.
            </p>
            <div className="flex items-center gap-2 w-full">
              <button
                type="button"
                onClick={() => onOpenCategory('Past Papers')}
                className="px-4 py-2 rounded-full border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Papers</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => handleOpenDrive(USER_DRIVE_LINKS.CALCULUS, 'Calculus Past Papers')}
                className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
                title="Open Calculus Drive"
              >
                Drive 📁
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Lab Manuals & Code */}
        <div className="group card-vault relative rounded-2xl overflow-hidden min-h-[380px] flex flex-col justify-end p-6 border border-white/10 hover:border-sky-400/60 bg-[#080e18]">
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1XWweM8caGigdzQBLWjSJbpUP5sGXU1Ut2uBiOPWSTvFuDerV8zMnCDY7hCSc2qAzUycf9JxRCYhXnu_medzzNOWMmEE_NsrvveTs9DXc-j09mli4c-hFAZQKP3JPFaTA86T_UVYL6-h1xpwbtUaHtxLDC7PvVzJLXVbt3IGRCm3j1Y33LYwIbepSN7LrG-G5oGA3--DSDx0p4-_8bXk4tkvV3-SrX94-JgEXg8rRZV9CyGD8lJROu3phY"
            alt="Lab Manuals and library study"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.38] contrast-105 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent" />
          <div className="relative z-10 flex flex-col items-start">
            <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-sky-950/70 text-sky-300 border border-sky-500/30 mb-2">
              Simulation &amp; Experiments
            </span>
            <h3 className="text-xl font-bold text-white mb-1.5 font-display group-hover:text-sky-300 transition-colors">
              Lab Manuals &amp; Code
            </h3>
            <p className="text-xs text-slate-300 mb-5 leading-relaxed">
              Workshop practice, ICT simulation, C++ programming tasks, and Proteus/MATLAB models.
            </p>
            <div className="flex items-center gap-2 w-full">
              <button
                type="button"
                onClick={() => onOpenCategory('Lab Manuals')}
                className="px-4 py-2 rounded-full border border-sky-400 text-sky-300 hover:bg-sky-400 hover:text-black text-xs font-semibold tracking-wide transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Labs</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </button>
              <button
                type="button"
                onClick={() => handleOpenDrive(USER_DRIVE_LINKS.WPL, 'Workshop Practice Lab')}
                className="px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors cursor-pointer"
                title="Open Workshop Lab Drive"
              >
                Drive 📁
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Timetable Quick Launchers: Sem 1, Sem 2, Sem 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Semester 1 Vault Card */}
        <div className="rounded-2xl bg-[#060b14]/90 border border-cyan-500/30 p-5 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                1st Sem • 26-EE
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Fall 2026
              </span>
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5">
              Freshman Vault
            </h3>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Applied Physics, Calculus, ICT, CP, BME, Workshop Practice, OHS, and Holy Quran.
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {sem1Courses.map((c) => (
                <span
                  key={c.id}
                  className="px-1.5 py-0.5 rounded bg-black/50 border border-white/5 text-[10px] font-mono text-slate-300"
                >
                  {c.shortName}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectSemester(1)}
            className="w-full py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Open Semester 1</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>

        {/* Semester 2 Vault Card */}
        <div className="rounded-2xl bg-[#060b14]/90 border border-cyan-500/30 p-5 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                2nd Sem • 25-EE
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Spring 2026
              </span>
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5">
              Spring Core Vault
            </h3>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Linear Circuits (LCA), Digital Logic (DLD), Engineering Drawing (ED), CP, DE, and Pakistan Studies (ICP).
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {sem2Courses.map((c) => (
                <span
                  key={c.id}
                  className="px-1.5 py-0.5 rounded bg-black/50 border border-white/5 text-[10px] font-mono text-slate-300"
                >
                  {c.shortName}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectSemester(2)}
            className="w-full py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Open Semester 2</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>

        {/* Semester 3 Vault Card */}
        <div className="rounded-2xl bg-[#060b14]/90 border border-cyan-500/30 p-5 backdrop-blur-md flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                3rd Sem • 25-EE
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Fall 2026
              </span>
            </div>
            <h3 className="text-base font-bold text-white font-display mb-1.5">
              Sophomore Core Vault
            </h3>
            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
              Network Analysis (ENA), Electronic Devices (EDC), Microprocessors 8086 (M&amp;I), CVT, and Islamic Studies.
            </p>

            <div className="flex flex-wrap gap-1 mb-4">
              {sem3Courses.map((c) => (
                <span
                  key={c.id}
                  className="px-1.5 py-0.5 rounded bg-black/50 border border-white/5 text-[10px] font-mono text-slate-300"
                >
                  {c.shortName}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelectSemester(3)}
            className="w-full py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Open Semester 3</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
