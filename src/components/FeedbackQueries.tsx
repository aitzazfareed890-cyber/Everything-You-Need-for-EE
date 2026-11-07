import { useEffect, useState } from 'react';
import { CONTACT_EMAIL, WHATSAPP_CHAT_URL } from '../data/courses';

export const OPEN_FEEDBACK_EVENT = 'open-feedback-options';

export default function FeedbackQueries() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openOptions = () => setIsOpen(true);
    window.addEventListener(OPEN_FEEDBACK_EVENT, openOptions);
    return () => window.removeEventListener(OPEN_FEEDBACK_EVENT, openOptions);
  }, []);

  return (
    <section id="feedback" className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 scroll-mt-24">
      <div className="relative rounded-2xl overflow-hidden p-8 sm:p-10 border border-white/10 bg-[#060c17]/90 shadow-2xl backdrop-blur-md">
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 mb-2 block">
            Reach the curator
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
            Feedback &amp; Queries
          </h2>
          <p className="text-sm text-slate-300 max-w-lg leading-relaxed mb-8">
            Send feedback, report a missing resource, or ask about semester notes, past papers, and lab files.
          </p>

          {!isOpen ? (
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold text-white backdrop-blur-md transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              <span className="material-symbols-outlined text-cyan-400 text-[18px]">forum</span>
              <span>Feedback</span>
            </button>
          ) : (
            <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex flex-col items-center justify-center gap-1 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all group"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-400 text-[22px]">mail</span>
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300">Email</span>
                </span>
                <span className="text-[11px] text-slate-400 break-all">{CONTACT_EMAIL}</span>
              </a>

              <a
                href={WHATSAPP_CHAT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 transition-all group"
                title="Open WhatsApp chat"
              >
                <span className="material-symbols-outlined text-emerald-400 text-[22px]">chat</span>
                <span className="text-sm font-semibold text-white group-hover:text-emerald-300 inline-flex items-center gap-1">
                  WhatsApp
                  <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
