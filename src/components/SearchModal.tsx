import { useState, useEffect, useRef } from 'react';
import { COURSES, filterCourses, getEffectiveDriveUrl } from '../data/courses';

interface SearchModalProps {
  isOpen: boolean;
  initialQuery?: string;
  onClose: () => void;
  onSelectSemester: (sem: number) => void;
  onShowToast: (msg: string) => void;
}

export default function SearchModal({
  isOpen,
  initialQuery = '',
  onClose,
  onSelectSemester,
  onShowToast,
}: SearchModalProps) {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 60);
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  const matchedCourses = filterCourses(query);

  const handleOpenCourseDrive = (courseId: string, courseName: string) => {
    const course = COURSES.find((c) => c.id === courseId);
    if (!course) return;
    const url = getEffectiveDriveUrl(course);
    if (url) {
      onShowToast(`📂 Opening ${courseName} Google Drive...`);
      window.open(url, '_blank', 'noopener,noreferrer');
      onClose();
    } else {
      onSelectSemester(course.semester);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search Vault"
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#090f1a] border border-cyan-500/30 shadow-2xl overflow-hidden flex flex-col my-auto sm:my-0 animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <span className="material-symbols-outlined text-cyan-400 text-[22px]">search</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, teachers, codes (e.g. AP, BME, ICT, Calculus, ENA, EDC)..."
            className="w-full bg-transparent text-sm md:text-base text-white placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-slate-500 hover:text-white p-1 text-xs"
            >
              Clear
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/10"
            aria-label="Close search"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Quick Filter Tags */}
        <div className="p-2.5 bg-black/40 border-b border-white/5 flex items-center gap-2 text-xs flex-wrap px-4">
          <span className="text-slate-500 uppercase tracking-wider text-[10px] font-mono">
            Filter:
          </span>
          <button
            type="button"
            onClick={() => setQuery('AP')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            Applied Physics (AP)
          </button>
          <button
            type="button"
            onClick={() => setQuery('Calculus')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            Calculus
          </button>
          <button
            type="button"
            onClick={() => setQuery('BME')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            Basic Mechanical (BME)
          </button>
          <button
            type="button"
            onClick={() => setQuery('ICT')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            ICT
          </button>
          <button
            type="button"
            onClick={() => setQuery('ENA')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            Network Analysis (ENA)
          </button>
          <button
            type="button"
            onClick={() => setQuery('EDC')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            EDC
          </button>
          <button
            type="button"
            onClick={() => setQuery('8086')}
            className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 hover:bg-cyan-500/20 text-xs transition-colors cursor-pointer"
          >
            Microprocessors (M&amp;I)
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-80 overflow-y-auto p-3 flex flex-col gap-2">
          {matchedCourses.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-400">
              <span className="material-symbols-outlined text-slate-600 text-3xl mb-2 block">
                search_off
              </span>
              No subject or topic matched "{query}". Try searching "AP", "Calculus", "BME", "ICT", or "ENA".
            </div>
          ) : (
            matchedCourses.map((course) => {
              const driveUrl = getEffectiveDriveUrl(course);

              return (
                <div
                  key={course.id}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors group border border-white/5 hover:border-cyan-500/30"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="px-1.5 py-0.2 rounded bg-cyan-950/70 text-cyan-400 text-[10px] font-mono border border-cyan-500/30">
                        {course.shortName}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {course.code}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {course.name}
                      </p>
                    </div>
                    {course.courseTeacher && (
                      <p className="text-[11px] text-slate-400 mb-1">
                        Teacher: {course.courseTeacher}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono flex-wrap">
                      <span className="text-cyan-400 font-medium">Semester {course.semester}</span>
                      <span>•</span>
                      <span>{course.notesCount}</span>
                      <span>•</span>
                      <span>{course.papersCount}</span>
                      <span>•</span>
                      <span>{course.labsCount}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 self-end sm:self-auto shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        onSelectSemester(course.semester);
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded bg-white/5 hover:bg-white/15 text-slate-300 text-xs transition-colors cursor-pointer"
                    >
                      View Sem {course.semester}
                    </button>

                    {driveUrl ? (
                      <button
                        type="button"
                        onClick={() => handleOpenCourseDrive(course.id, course.name)}
                        className="px-3 py-1 rounded bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-[14px]">folder</span>
                        <span>Open Drive</span>
                        <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          onSelectSemester(course.semester);
                          onClose();
                        }}
                        className="px-2.5 py-1 rounded bg-white/5 text-slate-400 text-xs transition-colors cursor-pointer"
                      >
                        Open Course
                      </button>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="p-3 bg-black/50 border-t border-white/5 text-[11px] text-slate-500 flex justify-between items-center px-4">
          <span>
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">ESC</kbd> to exit
          </span>
          <span className="text-cyan-400 font-mono text-[10px]">
            EVERYTHING YOU NEED FOR EE • UET TAXILA
          </span>
        </div>
      </div>
    </div>
  );
}
