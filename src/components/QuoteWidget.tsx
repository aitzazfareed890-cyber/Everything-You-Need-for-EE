import { useState } from 'react';
import { QUOTES } from '../data/courses';

export default function QuoteWidget() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const currentQuote = QUOTES[quoteIndex % QUOTES.length];

  const handleNextQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
  };

  return (
    <aside
      aria-label="Quote of the Day widget"
      className="fixed bottom-4 right-4 z-40 flex flex-col items-end pointer-events-auto"
    >
      {isOpen ? (
        <div
          id="quote-widget"
          className="max-w-sm rounded-xl bg-[#070e1b]/95 border border-cyan-500/30 backdrop-blur-md p-4 shadow-2xl text-xs text-slate-300 flex flex-col gap-2.5 transition-all duration-200 animate-in fade-in slide-in-from-bottom-2"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[10px] uppercase tracking-wider">
              <span className="material-symbols-outlined text-[15px]">format_quote</span>
              <span>Quote of the Day</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-0.5 rounded hover:bg-white/10 transition-colors cursor-pointer"
              title="Close quote"
              aria-label="Close quote"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>

          <p className="italic leading-relaxed font-serif text-slate-100 text-[13px] pt-0.5" id="quote-text">
            "{currentQuote.text}"
          </p>

          <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/5">
            <span className="text-slate-400 font-mono" id="quote-author">
              — {currentQuote.author}
            </span>
            <button
              type="button"
              onClick={handleNextQuote}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-medium cursor-pointer transition-colors"
              title="View another quote"
            >
              <span className="text-[13px]">↻</span>
              <span>Another</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-3 py-2 rounded-full bg-[#070e1b]/80 hover:bg-[#070e1b] border border-white/10 hover:border-cyan-400/50 text-slate-400 hover:text-cyan-300 backdrop-blur-md shadow-xl text-xs transition-all hover:scale-105 cursor-pointer font-mono"
          title="Click to view inspirational quote"
          aria-label="Open Quote of the Day"
        >
          <span className="material-symbols-outlined text-[16px] text-cyan-400 group-hover:rotate-12 transition-transform">
            format_quote
          </span>
          <span className="text-[11px] hidden sm:inline text-slate-300 group-hover:text-white">
            Daily Quote
          </span>
        </button>
      )}
    </aside>
  );
}
