
import React, { useState } from 'react';
import Logo from './Logo.tsx';

interface NavbarProps {
  onLoginClick: () => void;
  onBrandClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onPackagesClick: () => void;
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  onLoginClick,
  onBrandClick,
  onAboutClick,
  onContactClick,
  onPackagesClick,
  isLoggedIn = false
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div
            className="flex items-center gap-4 cursor-pointer group"
            onClick={onBrandClick}
          >
            <div className="w-14 h-14 flex items-center justify-center drop-shadow-sm transition-transform group-hover:scale-110 duration-300">
              <Logo />
            </div>
            <span className="text-base sm:text-lg md:text-2xl font-black tracking-tighter text-slate-900">
              Økonomiakademiet <span className="text-logo-blue">UB</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wider">
            {!isLoggedIn && (
              <button
                onClick={onPackagesClick}
                className="text-slate-600 hover:text-logo-blue transition-colors uppercase"
              >
                Læringspakker
              </button>
            )}
            {isLoggedIn && (
              <button
                onClick={onBrandClick}
                className="text-slate-600 hover:text-logo-blue transition-colors uppercase"
              >
                Min Meny
              </button>
            )}
            <button
              onClick={onAboutClick}
              className="text-slate-600 hover:text-logo-blue transition-colors uppercase"
            >
              Om oss
            </button>
            <button
              onClick={onContactClick}
              className="text-slate-600 hover:text-logo-blue transition-colors uppercase"
            >
              Kontakt oss
            </button>
            <button
              onClick={onLoginClick}
              className={`${isLoggedIn ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-logo-blue text-white hover:bg-logo-blue-dark'} px-6 py-2.5 rounded-xl transition-all shadow-lg active:scale-95`}
            >
              {isLoggedIn ? 'Logg ut' : 'Logg inn'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onLoginClick}
              className={`${isLoggedIn ? 'bg-slate-100 text-slate-600' : 'bg-logo-blue text-white'} px-4 py-2 rounded-xl text-sm font-bold transition-all shadow-lg active:scale-95`}
            >
              {isLoggedIn ? 'Logg ut' : 'Logg inn'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {!isLoggedIn && (
              <button
                onClick={() => { onPackagesClick(); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-4 text-base font-bold text-slate-600 hover:text-logo-blue hover:bg-slate-50 rounded-xl transition-colors uppercase tracking-wider"
              >
                Læringspakker
              </button>
            )}
            {isLoggedIn && (
              <button
                onClick={() => { onBrandClick(); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-4 text-base font-bold text-slate-600 hover:text-logo-blue hover:bg-slate-50 rounded-xl transition-colors uppercase tracking-wider"
              >
                Min Meny
              </button>
            )}
            <button
              onClick={() => { onAboutClick(); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-4 text-base font-bold text-slate-600 hover:text-logo-blue hover:bg-slate-50 rounded-xl transition-colors uppercase tracking-wider"
            >
              Om oss
            </button>
            <button
              onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-4 text-base font-bold text-slate-600 hover:text-logo-blue hover:bg-slate-50 rounded-xl transition-colors uppercase tracking-wider"
            >
              Kontakt oss
            </button>
            <div className="pt-4">
              <button
                onClick={() => { onLoginClick(); setIsMobileMenuOpen(false); }}
                className={`w-full ${isLoggedIn ? 'bg-slate-100 text-slate-600' : 'bg-logo-blue text-white'} px-3 py-4 rounded-xl text-center font-bold uppercase tracking-wider shadow-lg`}
              >
                {isLoggedIn ? 'Logg ut' : 'Logg inn'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
