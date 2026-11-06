import { useState, useEffect } from 'react';
import {
  COURSES,
  SEMESTERS,
  CourseResource,
  getEffectiveDriveUrl,
  saveCustomDriveOverride,
} from '../data/courses';
import { isAdminAuthenticated, ADMIN_AUTH_EVENT } from '../utils/adminAuth';

interface SemesterModalProps {
  semesterNumber: number | null;
  onClose: () => void;
  onSelectSemester: (sem: number) => void;
  onShowToast: (msg: string) => void;
  onOpenAdminPortal?: () => void;
}

export default function SemesterModal({
  semesterNumber,
  onClose,
  onSelectSemester,
  onShowToast,
  onOpenAdminPortal,
}: SemesterModalProps) {
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [customUrlInput, setCustomUrlInput] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminAuthenticated());
    const handleAuthChange = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener(ADMIN_AUTH_EVENT, handleAuthChange);
    return () => window.removeEventListener(ADMIN_AUTH_EVENT, handleAuthChange);
  }, []);

  if (semesterNumber === null) return null;

  const currentSem =
    SEMESTERS.find((s) => s.number === semesterNumber) || SEMESTERS[0];
  const courses = COURSES.filter((c) => c.semester === semesterNumber);

  const handleOpenDrive = (url: string, name: string) => {
    onShowToast(`📂 Opening ${name} Google Drive...`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async (url: string, name: string) => {
    try {
      await navigator.clipboard.writeText(url);
      onShowToast(`📋 Copied Drive link for ${name}!`);
    } catch {
      onShowToast(`Drive link: ${url}`);
    }
  };

  const startEditUrl = (course: CourseResource) => {
    if (!isAdmin) {
      onShowToast('🔒 Link editing is restricted to Mr. (Admin). Please unlock in Admin Portal.');
      return;
    }
    setEditingCourseId(course.id);
    setCustomUrlInput(getEffectiveDriveUrl(course) || '');
  };

  const handleSaveCustomUrl = (course: CourseResource) => {
    if (!isAdmin) return;
    if (customUrlInput.trim()) {
      saveCustomDriveOverride(course.id, customUrlInput.trim());
      onShowToast(`Updated Google Drive link for ${course.name}!`);
    }
    setEditingCourseId(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${currentSem.title} Vault`}
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#090f19] border border-cyan-500/30 p-5 sm:p-6 shadow-2xl flex flex-col gap-4 my-auto relative animate-in fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                {currentSem.tag}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                {courses.length} Department Courses
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              {currentSem.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {currentSem.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Semester Navigator Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-white/5">
          <span className="text-[10px] font-mono uppercase text-slate-500 mr-1 shrink-0">
            Semesters:
          </span>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSelectSemester(s)}
              className={`px-3 py-1 rounded-md text-xs font-mono transition-all shrink-0 cursor-pointer ${
                s === currentSem.number
                  ? 'bg-cyan-400 text-black font-bold shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              Sem {s}
            </button>
          ))}
        </div>

        {/* Course Cards List */}
        <div className="flex flex-col gap-3 max-h-[55vh] overflow-y-auto pr-1">
          {courses.map((course) => {
            const driveUrl = getEffectiveDriveUrl(course);
            const isEditing = editingCourseId === course.id;

            return (
              <div
                key={course.id}
                className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 flex flex-col gap-2 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 font-mono text-[10px] font-semibold border border-cyan-500/30">
                        {course.shortName}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono text-[10px]">
                        {course.code}
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-white/5 text-slate-400 font-mono text-[10px]">
                        {course.creditHours} CH
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {course.name}
                    </h4>
                    {course.courseTeacher && (
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        <span className="text-slate-500 font-mono">Teacher:</span> {course.courseTeacher}
                      </p>
                    )}
                    {course.labTeacher && (
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        <span className="text-slate-500 font-mono">Lab:</span> {course.labTeacher}
                      </p>
                    )}
                  </div>

                  {/* Actions for this subject */}
                  <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto mt-1 sm:mt-0">
                    {driveUrl ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleOpenDrive(driveUrl, course.name)}
                          className="px-3 py-1.5 rounded-md bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                        >
                          <span className="material-symbols-outlined text-[14px]">folder</span>
                          <span>Open Drive</span>
                          <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCopyLink(driveUrl, course.name)}
                          className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                          title="Copy subject drive link"
                        >
                          <span className="material-symbols-outlined text-[15px]">content_copy</span>
                        </button>
                      </>
                    ) : (
                      /* When no drive URL is available */
                      isAdmin ? (
                        <button
                          type="button"
                          onClick={() => startEditUrl(course)}
                          className="px-2.5 py-1 rounded-md bg-cyan-950/70 hover:bg-cyan-400 hover:text-black text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[14px]">add_link</span>
                          <span>+ Add Drive Link</span>
                        </button>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-500 font-mono text-[11px] border border-white/5 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[13px] text-slate-500">pending</span>
                          <span>Drive in Queue</span>
                        </span>
                      )
                    )}

                    {/* Admin-only edit button */}
                    {isAdmin && (
                      <button
                        type="button"
                        onClick={() => startEditUrl(course)}
                        className="p-1.5 rounded-md bg-cyan-950/50 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors cursor-pointer"
                        title="Admin: Edit Drive link"
                      >
                        <span className="material-symbols-outlined text-[15px]">edit</span>
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {course.description}
                </p>

                {/* Inline Edit Drive URL Field - STRICTLY ADMIN ONLY */}
                {isAdmin && isEditing && (
                  <div className="p-2.5 rounded-lg bg-[#070e1b] border border-cyan-500/40 flex flex-col sm:flex-row items-center gap-2 mt-1">
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={(e) => setCustomUrlInput(e.target.value)}
                      placeholder="Paste Google Drive folder URL for this subject..."
                      className="w-full bg-black/60 border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <div className="flex items-center gap-1 shrink-0 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        onClick={() => handleSaveCustomUrl(course)}
                        className="px-2.5 py-1 rounded bg-cyan-400 text-black font-semibold text-xs hover:bg-cyan-300 cursor-pointer"
                      >
                        Save Link
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingCourseId(null)}
                        className="px-2 py-1 rounded bg-white/10 text-slate-300 hover:bg-white/20 text-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}

                {/* Resource breakdown tags */}
                <div className="flex items-center gap-2 pt-1 text-[11px] flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/40 text-cyan-400 font-mono">
                    {course.notesCount}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 font-mono">
                    {course.papersCount}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-sky-950/40 text-sky-400 font-mono">
                    {course.labsCount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-mono text-[11px]">
              UET Taxila EE Curriculum • Separate Subject Drives
            </span>
            {isAdmin ? (
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Admin Active (Mr.)
              </span>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAdminPortal?.();
                }}
                className="text-slate-500 hover:text-cyan-400 font-mono text-[10px] transition-colors flex items-center gap-1 cursor-pointer"
                title="Creator login to edit drive links"
              >
                <span>Admin Login</span>
                <span className="material-symbols-outlined text-[12px]">lock</span>
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
