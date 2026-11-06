interface FooterProps {
  onOpenAbout: () => void;
  onOpenAdminPortal?: () => void;
}

export default function Footer({ onOpenAbout, onOpenAdminPortal }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/5 bg-[#020408]/90 backdrop-blur-md py-12 text-center text-xs text-slate-400 relative z-20">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center mb-1">
          <button
            type="button"
            onClick={onOpenAbout}
            className="text-slate-200 hover:text-cyan-400 font-medium transition-colors text-sm cursor-pointer"
          >
            About Everything You Need For EE
          </button>
          <span className="text-slate-700">•</span>
          <button
            type="button"
            onClick={onOpenAdminPortal}
            className="text-slate-500 hover:text-cyan-400 transition-colors text-xs flex items-center gap-1 cursor-pointer font-mono"
            title="Creator Admin Portal"
          >
            <span>Creator Portal</span>
            <span className="material-symbols-outlined text-[13px]">lock</span>
          </button>
        </div>
        <p className="text-slate-400">
          Built for UET Taxila Electrical Engineering students.
        </p>
        <p className="text-slate-500 font-mono text-[11px]">
          © 2024–2026 EVERYTHING YOU NEED FOR EE • UET Taxila. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
