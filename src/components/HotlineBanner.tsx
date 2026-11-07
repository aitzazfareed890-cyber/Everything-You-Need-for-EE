import { WEBSITE_INSTAGRAM_URL, WHATSAPP_CHANNEL_URL } from '../data/courses';

export default function HotlineBanner() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
      <div className="relative rounded-2xl overflow-hidden p-8 sm:p-10 border border-white/10 text-center flex flex-col items-center justify-center bg-[#060c17]/90 shadow-2xl backdrop-blur-md">
        <div className="relative z-10 max-w-lg">
          <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 mb-2 block">
            Direct Academic Hotline
          </span>
          <h4 className="text-sm sm:text-base font-medium text-slate-200 mb-6 leading-relaxed">
            For suggestions to improve the website or request specific semester content, past papers, or solutions.
          </h4>
          <a
            href={WEBSITE_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all shadow-lg hover:scale-105 group"
          >
            <svg
              className="w-4 h-4 text-cyan-400 fill-current group-hover:rotate-12 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>DM on Instagram</span>
          </a>
          <p className="text-[11px] text-slate-400 font-mono mt-4">
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
      </div>
    </section>
  );
}
