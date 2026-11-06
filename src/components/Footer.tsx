interface FooterProps {
  onOpenAbout: () => void;
}

export default function Footer({ onOpenAbout }: FooterProps) {
  return (
    <footer className="w-full border-t border-white/5 bg-[#020408]/90 backdrop-blur-md py-12 text-center text-xs text-slate-400 relative z-20">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={onOpenAbout}
          className="text-slate-200 hover:text-cyan-400 font-medium transition-colors mb-1 text-sm cursor-pointer"
        >
          About Everything You Need For EE
        </button>
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
