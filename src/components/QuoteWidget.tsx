import { useState } from 'react';
import { QUOTES } from '../data/courses';

export default function QuoteWidget() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <button
        type="button"
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-30 p-2.5 rounded-full bg-[#070e1b]/90 border border-cyan-500/30 text-cyan-400 hover:text-white backdrop-blur-md shadow-xl text-xs flex items-center gap-1 transition-all hover:scale-105"
        title="Show Quote of the Day"
      >
        <span className="material-symbols-outlined text-[18px]">format_quote</span>
      </button>
    );
  }

  const currentQuote = QUOTES[quoteIndex % QUOTES.length];

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
  };

  return (
    <div
      id="quote-widget"
      className="fixed bottom-4 right-4 z-40 max-w-sm rounded-xl bg-[#070e1b]/95 border border-cyan-500/20 backdrop-blur-md p-3.5 shadow-2xl text-xs text-slate-300 flex flex-col gap-2 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-2">
        <p className="italic leading-relaxed font-serif text-slate-200 text-[13px]" id="quote-text">
          "{currentQuote.text}"
        </p>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="text-slate-500 hover:text-white p-0.5 transition-colors cursor-pointer"
          title="Dismiss"
          aria-label="Dismiss quote"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/5">
        <span className="text-cyan-400/80 uppercase tracking-widest font-mono text-[9px]">
          QUOTE OF THE DAY
        </span>
        <div className="flex items-center gap-2">
          <span className="text-slate-400" id="quote-author">
            - {currentQuote.author}
          </span>
          <button
            type="button"
            onClick={handleNextQuote}
            className="text-cyan-400 hover:text-cyan-300 flex items-center gap-0.5 font-medium ml-2 cursor-pointer transition-colors"
          >
            <span>↻</span> Another
          </button>
        </div>
      </div>
    </div>
  );
}
