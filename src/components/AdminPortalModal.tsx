import { useState } from 'react';
import {
  isAdminAuthenticated,
  loginAdmin,
  logoutAdmin,
  setCustomAdminPasscode,
} from '../utils/adminAuth';
import {
  COURSES,
  SEMESTERS,
  getEffectiveDriveUrl,
  saveCustomDriveOverride,
  getCustomDriveOverrides,
} from '../data/courses';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
  onAdminStateChange?: () => void;
}

export default function AdminPortalModal({
  isOpen,
  onClose,
  onShowToast,
  onAdminStateChange,
}: AdminPortalModalProps) {
  const [passcodeInput, setPasscodeInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeSemFilter, setActiveSemFilter] = useState(1);
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null);
  const [urlDraft, setUrlDraft] = useState('');
  const [isChangingPasscode, setIsChangingPasscode] = useState(false);
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [passSuccess, setPassSuccess] = useState('');
  const [refreshTick, setRefreshTick] = useState(0);

  if (!isOpen) return null;

  const isAuth = isAdminAuthenticated();
  const coursesInSem = COURSES.filter((c) => c.semester === activeSemFilter);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const success = loginAdmin(passcodeInput);
    if (success) {
      onShowToast('⚡ Welcome, Mr.! Admin Mode is now active.');
      setPasscodeInput('');
      setRefreshTick((t) => t + 1);
      onAdminStateChange?.();
    } else {
      setErrorMsg('Invalid admin passcode. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    onShowToast('🔒 Admin Mode locked. Site returned to public read-only mode.');
    setRefreshTick((t) => t + 1);
    onAdminStateChange?.();
  };

  const startEditUrl = (id: string, currentUrl: string) => {
    setEditingCourseId(id);
    setUrlDraft(currentUrl);
  };

  const handleSaveUrl = (courseId: string, courseName: string) => {
    if (urlDraft.trim()) {
      saveCustomDriveOverride(courseId, urlDraft.trim());
      onShowToast(`Updated Google Drive link for ${courseName}!`);
      setRefreshTick((t) => t + 1);
      onAdminStateChange?.();
    }
    setEditingCourseId(null);
  };

  const handleExportJson = async () => {
    const exportData: Record<string, string | undefined> = {};
    for (const c of COURSES) {
      const url = getEffectiveDriveUrl(c);
      if (url) {
        exportData[`${c.shortName}_Sem${c.semester}`] = url;
      }
    }
    const jsonStr = JSON.stringify(exportData, null, 2);
    try {
      await navigator.clipboard.writeText(jsonStr);
      onShowToast('📋 Exported all active Drive links to clipboard as JSON!');
    } catch {
      onShowToast('Failed to copy to clipboard.');
    }
  };

  const handleChangePasscode = (e: React.FormEvent) => {
    e.preventDefault();
    setPassSuccess('');
    setErrorMsg('');
    const ok = setCustomAdminPasscode(currentPass, newPass);
    if (ok) {
      setPassSuccess('Passcode successfully updated!');
      setCurrentPass('');
      setNewPass('');
      setTimeout(() => setIsChangingPasscode(false), 1500);
    } else {
      setErrorMsg('Failed to update passcode. Ensure current passcode is correct and new is >= 4 chars.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Creator and Admin Portal"
    >
      <div
        className="w-full max-w-2xl rounded-2xl bg-[#090f19] border border-cyan-500/40 p-5 sm:p-6 shadow-2xl flex flex-col gap-4 my-auto relative animate-in fade-in duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400 text-black flex items-center justify-center font-bold text-lg shadow-lg">
              🛡️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30">
                  Creator Access
                </span>
                {isAuth && (
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Unlocked
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                Admin &amp; Drive Vault Manager
              </h3>
            </div>
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

        {/* Not Authenticated: Login View */}
        {!isAuth ? (
          <form onSubmit={handleLogin} className="flex flex-col gap-4 py-2">
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed">
              <p className="font-semibold text-white mb-1">
                🔒 Protected Creator Area
              </p>
              <p>
                Link editing is restricted so normal students and mobile visitors cannot tamper with or insert unauthorized links.
                Enter your admin master passkey to unlock editing on this device.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="admin-passcode" className="text-xs font-mono text-slate-300">
                Admin Master Passcode
              </label>
              <input
                id="admin-passcode"
                type="password"
                value={passcodeInput}
                onChange={(e) => {
                  setPasscodeInput(e.target.value);
                  setErrorMsg('');
                }}
                placeholder="Enter admin passcode (e.g., aitzaz2026)"
                className="w-full bg-black/60 border border-white/10 focus:border-cyan-400 rounded-lg px-3 py-2 text-sm text-white focus:outline-none font-mono"
                autoFocus
              />
              {errorMsg && (
                <p className="text-rose-400 text-xs font-mono mt-1">⚠️ {errorMsg}</p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="text-[11px] text-slate-500 font-mono">
                Creator: Mr. (Aitzaz Fareed)
              </div>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs transition-all shadow-md cursor-pointer"
              >
                Unlock Admin Mode
              </button>
            </div>
          </form>
        ) : (
          /* Authenticated: Admin Control Panel */
          <div className="flex flex-col gap-4">
            {/* Status bar */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  Admin Mode Active — Mr. (Aitzaz Fareed)
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Only you have permission to edit or insert subject Google Drive links. Public visitors see clean read-only vaults.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleExportJson}
                  className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors flex items-center gap-1 cursor-pointer"
                  title="Export all links as JSON"
                >
                  <span className="material-symbols-outlined text-[14px]">file_download</span>
                  <span>Export</span>
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-md bg-rose-950/70 hover:bg-rose-900 border border-rose-500/30 text-rose-300 text-xs font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  <span>Lock &amp; Exit</span>
                </button>
              </div>
            </div>

            {/* Semester selector for quick editing */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-slate-400">
                  Select Semester to Manage Drives:
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  {coursesInSem.length} Subjects in Sem {activeSemFilter}
                </span>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {SEMESTERS.map((s) => (
                  <button
                    key={s.number}
                    type="button"
                    onClick={() => {
                      setActiveSemFilter(s.number);
                      setEditingCourseId(null);
                    }}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all shrink-0 cursor-pointer ${
                      s.number === activeSemFilter
                        ? 'bg-cyan-400 text-black font-bold shadow-sm'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    Sem {s.number}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses in selected semester with edit inputs */}
            <div className="flex flex-col gap-2.5 max-h-[38vh] overflow-y-auto pr-1">
              {coursesInSem.map((course) => {
                const driveUrl = getEffectiveDriveUrl(course);
                const isEditing = editingCourseId === course.id;

                return (
                  <div
                    key={course.id}
                    className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 font-mono text-[10px] font-semibold border border-cyan-500/30">
                          {course.shortName}
                        </span>
                        <span className="text-xs font-semibold text-white">
                          {course.name}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          ({course.code})
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        {driveUrl && (
                          <a
                            href={driveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 hover:bg-cyan-400 hover:text-black text-[11px] font-mono transition-colors"
                          >
                            Test Link ↗
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => startEditUrl(course.id, driveUrl || '')}
                          className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[11px] font-mono border border-white/10 cursor-pointer"
                        >
                          {driveUrl ? 'Edit Link' : '+ Add Link'}
                        </button>
                      </div>
                    </div>

                    {driveUrl && !isEditing && (
                      <p className="text-[11px] text-slate-400 font-mono truncate select-all bg-black/30 px-2 py-1 rounded">
                        {driveUrl}
                      </p>
                    )}

                    {!driveUrl && !isEditing && (
                      <p className="text-[11px] text-amber-400/80 font-mono italic">
                        No Drive URL set yet. Click "+ Add Link" to paste folder URL.
                      </p>
                    )}

                    {isEditing && (
                      <div className="flex flex-col sm:flex-row items-center gap-2 mt-1 p-2 bg-[#060c17] rounded-lg border border-cyan-500/30">
                        <input
                          type="url"
                          value={urlDraft}
                          onChange={(e) => setUrlDraft(e.target.value)}
                          placeholder="Paste Google Drive folder URL here..."
                          className="w-full bg-black/60 border border-white/10 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                          autoFocus
                        />
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleSaveUrl(course.id, course.name)}
                            className="px-3 py-1 rounded bg-cyan-400 text-black font-semibold text-xs hover:bg-cyan-300 cursor-pointer"
                          >
                            Save
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
                  </div>
                );
              })}
            </div>

            {/* Change Passcode Section Toggle */}
            <div className="pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setIsChangingPasscode(!isChangingPasscode)}
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">key</span>
                <span>{isChangingPasscode ? 'Hide Passcode Settings' : 'Change Master Admin Passcode'}</span>
              </button>

              {isChangingPasscode && (
                <form onSubmit={handleChangePasscode} className="mt-3 p-3 rounded-xl bg-black/40 border border-white/10 flex flex-col gap-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-0.5">
                        Current Passcode
                      </label>
                      <input
                        type="password"
                        value={currentPass}
                        onChange={(e) => setCurrentPass(e.target.value)}
                        placeholder="Current code"
                        className="w-full bg-black/60 border border-white/10 rounded px-2.5 py-1 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-slate-400 block mb-0.5">
                        New Passcode
                      </label>
                      <input
                        type="password"
                        value={newPass}
                        onChange={(e) => setNewPass(e.target.value)}
                        placeholder="New code (min 4 chars)"
                        className="w-full bg-black/60 border border-white/10 rounded px-2.5 py-1 text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                  {passSuccess && (
                    <p className="text-emerald-400 text-xs font-mono">{passSuccess}</p>
                  )}
                  {errorMsg && (
                    <p className="text-rose-400 text-xs font-mono">{errorMsg}</p>
                  )}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-3 py-1 rounded bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold cursor-pointer"
                    >
                      Update Passcode
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
          <span className="text-slate-500 font-mono text-[11px]">
            {isAuth
              ? '⚡ Changes saved to device cache and persistent overrides'
              : 'Strictly for Mr. (Aitzaz Fareed)'}
          </span>
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
