import { useState, useEffect } from 'react';
import {
  COURSES,
  USER_DRIVE_LINKS,
  getCustomDriveOverrides,
  saveCustomDriveOverride,
  getEffectiveDriveUrl,
} from '../data/courses';
import { isAdminAuthenticated, ADMIN_AUTH_EVENT } from '../utils/adminAuth';

interface DriveManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
  onOpenAdminPortal?: () => void;
}

export default function DriveManagerModal({
  isOpen,
  onClose,
  onShowToast,
  onOpenAdminPortal,
}: DriveManagerModalProps) {
  const [filterQuery, setFilterQuery] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempUrl, setTempUrl] = useState('');
  const [, setRefreshTick] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(isAdminAuthenticated());
    const handleAuthChange = () => setIsAdmin(isAdminAuthenticated());
    window.addEventListener(ADMIN_AUTH_EVENT, handleAuthChange);
    return () => window.removeEventListener(ADMIN_AUTH_EVENT, handleAuthChange);
  }, []);

  if (!isOpen) return null;

  const overrides = getCustomDriveOverrides();

  const handleOpen = (url: string, title: string) => {
    onShowToast(`📂 Opening ${title}...`);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = async (url: string, title: string) => {
    try {
      await navigator.clipboard.writeText(url);
      onShowToast(`📋 Copied link for ${title}!`);
    } catch {
      onShowToast(`Link: ${url}`);
    }
  };

  const startEdit = (id: string, currentUrl: string) => {
    if (!isAdmin) {
      onShowToast('🔒 Editing links is restricted to Mr. (Admin).');
      return;
    }
    setEditingId(id);
    setTempUrl(currentUrl);
  };

  const handleSave = (id: string, name: string) => {
    if (!isAdmin) return;
    if (tempUrl.trim()) {
      saveCustomDriveOverride(id, tempUrl.trim());
      onShowToast(`Updated link for ${name}!`);
      setRefreshTick((t) => t + 1);
    }
    setEditingId(null);
  };

  const handleReset = (id: string, name: string) => {
    if (!isAdmin) return;
    const cur = getCustomDriveOverrides();
    delete cur[id];
    localStorage.setItem('everything_you_need_for_ee_drives', JSON.stringify(cur));
    onShowToast(`Reset ${name} to default drive link.`);
    setRefreshTick((t) => t + 1);
  };

  const filteredCourses = COURSES.filter((c) =>
    `${c.name} ${c.shortName} ${c.code} sem ${c.semester}`
      .toLowerCase()
      .includes(filterQuery.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Google Drive Vaults Manager"
    >
      <div
        className="w-full max-w-3xl rounded-2xl bg-[#090f19] border border-cyan-500/30 p-5 sm:p-6 shadow-2xl flex flex-col gap-4 my-auto relative animate-in fade-in duration-200 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                Direct Cloud Vaults
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                Separate Subject Drives
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Google Drive Resource Directory
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Direct access to Google Drive folders for every subject. You can customize or add new folder links.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Search filter input */}
        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/50 border border-white/10">
          <span className="material-symbols-outlined text-cyan-400 text-[18px]">search</span>
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Filter subject drive folders by course name, short code, or semester..."
            className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
          />
          {filterQuery && (
            <button
              type="button"
              onClick={() => setFilterQuery('')}
              className="text-[11px] text-slate-500 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick Launch Cards for Key Subject Folders */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { name: 'Applied Physics (AP)', url: USER_DRIVE_LINKS.AP },
            { name: 'Calculus (C & AG)', url: USER_DRIVE_LINKS.CALCULUS },
            { name: 'ICT', url: USER_DRIVE_LINKS.ICT },
            { name: 'Computer Prog (CP)', url: USER_DRIVE_LINKS.CP },
          ].map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleOpen(item.url, item.name)}
              className="p-2.5 rounded-xl bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/30 text-left transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-cyan-400">Drive</span>
                <span className="material-symbols-outlined text-[13px] text-slate-400 group-hover:text-cyan-300">
                  open_in_new
                </span>
              </div>
              <p className="text-xs font-semibold text-white truncate">{item.name}</p>
            </button>
          ))}
        </div>

        {/* Full Subjects List */}
        <div className="flex flex-col gap-2.5 overflow-y-auto max-h-[46vh] pr-1">
          {filteredCourses.map((c) => {
            const effectiveUrl = getEffectiveDriveUrl(c);
            const isCustom = Boolean(overrides[c.id]);
            const isEditing = editingId === c.id;

            return (
              <div
                key={c.id}
                className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 flex flex-col gap-2 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-1.5 py-0.5 rounded bg-cyan-950/70 text-cyan-300 font-mono text-[10px] font-bold border border-cyan-500/30">
                      {c.shortName}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {c.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-white/5">
                      Sem {c.semester}
                    </span>
                    {isCustom && (
                      <span className="text-[9px] font-mono text-emerald-400 border border-emerald-500/40 px-1.5 py-0.5 rounded bg-emerald-950/40">
                        Custom Link Active
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 self-end sm:self-auto">
                    {effectiveUrl ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleOpen(effectiveUrl, c.name)}
                          className="px-2.5 py-1 rounded bg-cyan-950/70 hover:bg-cyan-400 hover:text-black text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-[13px]">folder</span>
                          <span>Open Drive</span>
                          <span className="material-symbols-outlined text-[12px]">arrow_outward</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCopy(effectiveUrl, c.name)}
                          className="p-1 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
                          title="Copy drive URL"
                        >
                          <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        </button>
                      </>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5">
                        No Drive Set
                      </span>
                    )}

                    {/* Admin Only Actions: Edit and Reset */}
                    {isAdmin && (
                      <>
                        <button
                          type="button"
                          onClick={() => startEdit(c.id, effectiveUrl || '')}
                          className="p-1 rounded bg-cyan-950/60 hover:bg-cyan-900 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors cursor-pointer"
                          title="Admin: Edit Drive URL"
                        >
                          <span className="material-symbols-outlined text-[14px]">edit</span>
                        </button>
                        {isCustom && (
                          <button
                            type="button"
                            onClick={() => handleReset(c.id, c.name)}
                            className="p-1 rounded bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 transition-colors cursor-pointer"
                            title="Reset to default URL"
                          >
                            <span className="material-symbols-outlined text-[14px]">restart_alt</span>
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {effectiveUrl && (
                  <div className="text-[11px] text-slate-400 font-mono truncate select-all bg-black/40 px-2 py-1 rounded border border-white/5">
                    {effectiveUrl}
                  </div>
                )}

                {/* Edit input block - STRICTLY ADMIN ONLY */}
                {isAdmin && isEditing && (
                  <div className="p-2 rounded-lg bg-[#070e1b] border border-cyan-500/40 flex flex-col sm:flex-row items-center gap-2">
                    <input
                      type="url"
                      value={tempUrl}
                      onChange={(e) => setTempUrl(e.target.value)}
                      placeholder="Paste Google Drive folder URL for this subject..."
                      className="w-full bg-black/60 border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                    />
                    <div className="flex items-center gap-1 shrink-0 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        onClick={() => handleSave(c.id, c.name)}
                        className="px-2.5 py-1 rounded bg-cyan-400 text-black font-semibold text-xs hover:bg-cyan-300 cursor-pointer"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="px-2 py-1 rounded bg-white/10 text-slate-300 hover:bg-white/20 text-xs cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <span className="text-emerald-400 font-mono text-[11px] flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Admin Mode Active (Mr.)
              </span>
            ) : (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenAdminPortal?.();
                }}
                className="text-slate-500 hover:text-cyan-400 font-mono text-[10px] transition-colors flex items-center gap-1 cursor-pointer"
                title="Creator login to manage drive links"
              >
                <span>Creator Access</span>
                <span className="material-symbols-outlined text-[12px]">lock</span>
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
