
import React from 'react';
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
            <span className="text-2xl font-black tracking-tighter text-slate-900">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
