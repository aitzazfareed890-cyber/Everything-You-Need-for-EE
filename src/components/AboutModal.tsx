import { CREATOR_INSTAGRAM_URL, WEBSITE_INSTAGRAM_URL, WHATSAPP_CHANNEL_URL } from '../data/courses';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="About Everything You Need For EE"
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#090f19] border border-cyan-500/30 p-6 shadow-2xl flex flex-col gap-4 my-auto relative animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-black font-bold font-display text-sm">
              ⚡
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                Department of Electrical Engineering
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                About Everything You Need For EE
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10 cursor-pointer"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="text-xs text-slate-300 leading-relaxed flex flex-col gap-3 py-1">
          <p>
            <strong className="text-white font-semibold">Everything You Need For EE</strong> is a dedicated academic resource hub engineered specifically for Electrical Engineering students at <strong className="text-white font-semibold">University of Engineering and Technology (UET) Taxila</strong>.
          </p>
          <p>
            It provides direct, organized access to semester lecture notes, verified past examination papers, simulation files, workshop manuals, and lab codes aligned with the department's OBE course curriculum and semester timetables.
          </p>
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">
              Curator &amp; Maintainer
            </span>
            <p className="text-xs font-semibold text-white">
              Created by{' '}
              <a
                href={CREATOR_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline underline-offset-2 hover:text-white transition-colors"
              >
                Mr
              </a>
            </p>
            <p className="text-[11px] text-slate-400">
              Electrical Engineering Department • UET Taxila
            </p>
            <p className="text-[11px] text-slate-400 font-mono pt-1">
              For further announcements &amp; academic updates, join our{' '}
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 font-semibold inline-flex items-center gap-0.5"
                title="Join official WhatsApp Channel"
              >
                <span>WhatsApp Channel</span>
                <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <a
              href={WEBSITE_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-center text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>DM on Instagram</span>
              <span className="material-symbols-outlined text-[15px]">arrow_outward</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
