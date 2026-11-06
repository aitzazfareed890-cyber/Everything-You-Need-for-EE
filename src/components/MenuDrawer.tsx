import { CREATOR_INSTAGRAM_URL } from '../data/courses';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSemester: (sem: number) => void;
  onSelectCategory: (category: 'Lecture Notes' | 'Past Papers' | 'Lab Manuals') => void;
  onOpenDrivesManager: () => void;
  onOpenAbout: () => void;
  onOpenAdminPortal?: () => void;
  onShowToast: (msg: string) => void;
}

export default function MenuDrawer({
  isOpen,
  onClose,
  onSelectSemester,
  onSelectCategory,
  onOpenDrivesManager,
  onOpenAbout,
  onOpenAdminPortal,
}: MenuDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div
        className="w-full max-w-sm h-full bg-[#080e18] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-400 text-black flex items-center justify-center font-bold text-xs">
                ⚡
              </div>
              <span className="font-bold text-white font-display text-base">
                Everything You Need <span className="text-cyan-400">For EE</span>
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-slate-400 hover:text-white flex items-center gap-1 text-xs p-1 rounded hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
              <span>Close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-6 text-sm">
            {/* Direct Google Drive Vaults */}
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block font-display">
                Drive Directory
              </span>
              <div className="flex flex-col gap-1.5 pl-2 border-l border-cyan-500/30 text-slate-300 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    onSelectSemester(1);
                    onClose();
                  }}
                  className="text-left py-1 hover:text-cyan-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Semester 1 Drives (AP, Calculus, ICT, CP...)</span>
                  <span className="text-[10px] text-cyan-400 font-mono">📁 8 Drives</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectSemester(3);
                    onClose();
                  }}
                  className="text-left py-1 hover:text-cyan-400 transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span>Semester 3 Drives (ENA, EDC, M&amp;I...)</span>
                  <span className="text-[10px] text-cyan-400 font-mono">📁 5 Courses</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onOpenDrivesManager();
                    onClose();
                  }}
                  className="text-left py-1 text-cyan-300 hover:text-white transition-colors flex items-center gap-1 font-medium cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">folder_shared</span>
                  <span>View All Subject Drive Links</span>
                </button>
              </div>
            </div>

            {/* Lecture Notes Section */}
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block font-display">
                Curriculum by Semester
              </span>
              <div className="flex flex-col gap-1 pl-2 border-l border-white/10 text-slate-300 text-xs">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <button
                    key={sem}
                    type="button"
                    onClick={() => {
                      onSelectSemester(sem);
                      onClose();
                    }}
                    className="text-left py-1 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Semester {sem} Subjects Vault
                  </button>
                ))}
              </div>
            </div>

            {/* Solutions / Past Papers Links */}
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2 block font-display">
                Categories
              </span>
              <div className="flex flex-col gap-1 pl-2 border-l border-white/10 text-slate-300 text-xs">
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('Lecture Notes');
                    onClose();
                  }}
                  className="text-left py-1 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Lecture Notes &amp; Slides
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('Past Papers');
                    onClose();
                  }}
                  className="text-left py-1 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Past Papers &amp; Solutions
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onSelectCategory('Lab Manuals');
                    onClose();
                  }}
                  className="text-left py-1 hover:text-sky-400 transition-colors cursor-pointer"
                >
                  Lab Manuals &amp; Simulations
                </button>
              </div>
            </div>

            {/* About & Admin */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  onOpenAbout();
                  onClose();
                }}
                className="text-white hover:text-cyan-400 font-semibold block transition-colors text-left cursor-pointer"
              >
                About Everything You Need For EE
              </button>
              <button
                type="button"
                onClick={() => {
                  onOpenAdminPortal?.();
                  onClose();
                }}
                className="text-slate-400 hover:text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-colors text-left cursor-pointer pt-1 border-t border-white/5"
              >
                <span className="material-symbols-outlined text-[15px] text-cyan-400">admin_panel_settings</span>
                <span>Creator &amp; Admin Portal</span>
                <span className="text-[10px] text-slate-500 font-mono ml-auto">🔒 Restricted</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Footer in Drawer */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <a
            href={CREATOR_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-center text-xs tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-md"
          >
            <span>DM on Instagram</span>
            <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
          </a>
          <p className="text-[11px] text-slate-500 text-center font-mono">
            Dept of Electrical Engineering • UET Taxila
          </p>
        </div>
      </div>
    </div>
  );
}
