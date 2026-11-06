import { useState, useEffect, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhilosophyCard from './components/PhilosophyCard';
import CoreVaults from './components/CoreVaults';
import HotlineBanner from './components/HotlineBanner';
import Footer from './components/Footer';
import QuoteWidget from './components/QuoteWidget';
import SemesterModal from './components/SemesterModal';
import SearchModal from './components/SearchModal';
import MenuDrawer from './components/MenuDrawer';
import DriveManagerModal from './components/DriveManagerModal';
import AboutModal from './components/AboutModal';

export default function App() {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrivesManagerOpen, setIsDrivesManagerOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 3400);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSelectedSemester(null);
        setIsMenuOpen(false);
        setIsDrivesManagerOpen(false);
        setIsAboutOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectSemester = (sem: number) => {
    setSelectedSemester(sem);
  };

  const handleSelectCategory = (category: 'Lecture Notes' | 'Past Papers' | 'Lab Manuals') => {
    showToast(`Filtering verified ${category} across all semesters.`);
    setSearchInitialQuery(category);
    setIsSearchOpen(true);
  };

  return (
    <div className="bg-[#03060a] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Top Navigation */}
      <Navbar
        onOpenSearch={() => {
          setSearchInitialQuery('');
          setIsSearchOpen(true);
        }}
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenDrivesManager={() => setIsDrivesManagerOpen(true)}
      />

      {/* Main Content */}
      <main className="w-full relative z-10">
        <Hero
          onSelectSemester={handleSelectSemester}
          onSelectCategory={handleSelectCategory}
          onOpenDrivesManager={() => setIsDrivesManagerOpen(true)}
        />

        <PhilosophyCard />

        <CoreVaults
          onOpenCategory={handleSelectCategory}
          onSelectSemester={handleSelectSemester}
          onShowToast={showToast}
        />

        <HotlineBanner />
      </main>

      {/* Footer */}
      <Footer onOpenAbout={() => setIsAboutOpen(true)} />

      {/* Floating Persistent Quote Widget */}
      <QuoteWidget />

      {/* Interactive Modals */}
      <SemesterModal
        semesterNumber={selectedSemester}
        onClose={() => setSelectedSemester(null)}
        onSelectSemester={handleSelectSemester}
        onShowToast={showToast}
      />

      <SearchModal
        isOpen={isSearchOpen}
        initialQuery={searchInitialQuery}
        onClose={() => setIsSearchOpen(false)}
        onSelectSemester={handleSelectSemester}
        onShowToast={showToast}
      />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectSemester={handleSelectSemester}
        onSelectCategory={handleSelectCategory}
        onOpenDrivesManager={() => setIsDrivesManagerOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onShowToast={showToast}
      />

      <DriveManagerModal
        isOpen={isDrivesManagerOpen}
        onClose={() => setIsDrivesManagerOpen(false)}
        onShowToast={showToast}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Toast Notification Floating Pill */}
      {toastMessage && (
        <div
          className="fixed top-20 right-4 z-50 max-w-sm px-4 py-3 rounded-xl bg-[#0c1524]/95 border border-cyan-500/50 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(34,211,238,0.3)] backdrop-blur-md flex items-center gap-3 animate-in slide-in-from-top-4 duration-200"
          role="status"
        >
          <span className="material-symbols-outlined text-cyan-400 text-[20px] shrink-0">
            info
          </span>
          <p className="text-xs leading-relaxed text-slate-100 font-medium">
            {toastMessage}
          </p>
        </div>
      )}

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
