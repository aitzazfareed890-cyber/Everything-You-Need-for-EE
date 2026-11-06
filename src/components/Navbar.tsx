interface NavbarProps {
  onOpenSearch: () => void;
  onOpenMenu: () => void;
  onOpenDrivesManager: () => void;
}

export default function Navbar({ onOpenSearch, onOpenMenu, onOpenDrivesManager }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#03060a]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo with Electric Bolt */}
        <a
          href="#"
          className="flex items-center gap-2 group select-none"
          aria-label="Everything You Need For EE Home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-black font-bold font-display shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-105 transition-transform shrink-0">
            ⚡
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors font-display leading-tight">
              Everything You Need <span className="text-cyan-400">For EE</span>
            </span>
          </div>
        </a>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenDrivesManager}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-cyan-400 transition-all hover:border-cyan-500/40"
            title="Manage and configure Google Drive links"
          >
            <span className="material-symbols-outlined text-[16px] text-cyan-400">folder_shared</span>
            <span>Drive Vaults</span>
          </button>

          <button
            type="button"
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-slate-200 transition-all hover:border-cyan-500/40 cursor-pointer"
            aria-label="Search resources"
          >
            <span className="material-symbols-outlined text-[18px] text-cyan-400">search</span>
            <span>Search</span>
            <span className="text-[10px] hidden sm:inline ml-1 px-1.5 py-0.5 rounded bg-white/10 text-slate-400 font-mono">
              Ctrl+K
            </span>
          </button>

          <button
            type="button"
            onClick={onOpenMenu}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-slate-200 transition-all hover:border-cyan-500/40 cursor-pointer"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[18px]">menu</span>
            <span className="hidden xs:inline">Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
